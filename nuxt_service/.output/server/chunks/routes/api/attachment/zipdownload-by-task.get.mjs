import { c as defineEventHandler, g as getQuery, e as createError } from '../../../_/nitro.mjs';
import { a as getAttachmentsByTaskId } from '../../../_/attachment.mjs';
import { g as getTaskById } from '../../../_/tasks.mjs';
import JSZip from 'jszip';
import fs from 'fs';
import blobToBuffer from 'blob-to-buffer';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const zipdownloadByTask_get = defineEventHandler(async (event) => {
  const { taskId } = getQuery(event);
  const attachments = await getAttachmentsByTaskId(taskId);
  if (attachments.length === 0) {
    throw createError({ statusCode: 404, statusMessage: "No attachments found" });
  }
  const task = await getTaskById(taskId);
  if (!task) {
    throw createError({ statusCode: 404, statusMessage: "No task found" });
  }
  const zipName = task ? task.title + ".zip" : "attachments.zip";
  const fileName = encodeURIComponent(zipName);
  console.log(zipName);
  const zip = new JSZip();
  for (const attachment of attachments) {
    const file = fs.readFileSync(attachment.fileUrl);
    zip.file(attachment.fileName, file);
  }
  const content = await zip.generateAsync({ type: "blob" });
  event.node.res.setHeader("Content-Type", "application/zip");
  event.node.res.setHeader("Content-Disposition", `attachment; filename=${fileName}.zip; filename*=UTF-8''${fileName}`);
  const buffer = blobToBuffer(content, (err, buff) => {
    return buff;
  });
  event.node.res.end(buffer);
});

export { zipdownloadByTask_get as default };
//# sourceMappingURL=zipdownload-by-task.get.mjs.map
