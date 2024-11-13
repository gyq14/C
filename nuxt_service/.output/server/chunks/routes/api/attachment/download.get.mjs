import { c as defineEventHandler, g as getQuery, e as createError } from '../../../_/nitro.mjs';
import { g as getAttachment } from '../../../_/attachment.mjs';
import fs from 'fs';
import path from 'path';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const download_get = defineEventHandler(async (event) => {
  const id = getQuery(event).id;
  const attachment = await getAttachment(id);
  if (!attachment) {
    throw createError({ statusCode: 404, statusMessage: "Attachment not found" });
  }
  const filePath = path.join("./public/uploads", attachment.uuid);
  if (!fs.existsSync(attachment.fileUrl)) {
    throw createError({ statusCode: 404, statusMessage: "File not found" });
  }
  event.node.res.setHeader("Content-Disposition", `attachment; filename="${attachment.fileName}"`);
  event.node.res.setHeader("Content-Type", "application/octet-stream");
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(event.node.res);
  return new Promise((resolve) => {
    fileStream.on("error", (err) => {
      throw createError({ statusCode: 500, statusMessage: "Error reading file" });
    });
    fileStream.on("end", () => {
      resolve(true);
    });
  });
});

export { download_get as default };
//# sourceMappingURL=download.get.mjs.map
