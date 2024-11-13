import { c as defineEventHandler } from '../../../_/nitro.mjs';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs';
import { v4 } from 'uuid';
import { c as createAttachment } from '../../../_/attachment.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const uploadFile_post = defineEventHandler(async (event) => {
  let fileUrl = "";
  let oldPath = "";
  const form = formidable({ multiples: true });
  const data = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      const taskId = fields.taskId && fields.taskId[0] ? parseInt(fields.taskId[0]) : 0;
      const subTaskId = fields.subTaskId && fields.subTaskId[0] ? parseInt(fields.subTaskId[0]) : 0;
      if (taskId == 0 && subTaskId == 0) {
        reject("taskId or subTaskId is required");
      }
      let fName = files.file && files.file[0] ? files.file[0].originalFilename : "defaultFilename";
      const file = files.file && files.file[0] ? files.file[0] : null;
      oldPath = files.file && files.file[0] ? files.file[0].filepath : "defaultPath";
      const unicid = file ? file.newFilename : v4();
      fileUrl = `${path.join("public", "uploads", unicid)}`;
      fs.copyFileSync(oldPath, fileUrl);
      let attachFile = {};
      if (taskId && taskId != 0) {
        attachFile = {
          fileName: fName,
          uuid: unicid,
          fileSize: files.file && files.file[0] ? files.file[0].size : 0,
          fileUrl,
          version: "A1",
          taskId
        };
      }
      if (subTaskId && subTaskId != 0) {
        attachFile = {
          fileName: fName,
          uuid: unicid,
          fileSize: files.file && files.file[0] ? files.file[0].size : 0,
          fileUrl,
          version: "A1",
          subTaskId
        };
      }
      const attchament = createAttachment(attachFile);
      resolve({ fields, files, fileUrl, attchament });
    });
  });
  return data;
});

export { uploadFile_post as default };
//# sourceMappingURL=upload-file.post.mjs.map
