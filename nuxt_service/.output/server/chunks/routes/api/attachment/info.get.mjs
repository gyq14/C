import { c as defineEventHandler, g as getQuery, e as createError } from '../../../_/nitro.mjs';
import { g as getAttachment } from '../../../_/attachment.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const info_get = defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const attachment = await getAttachment(id);
  if (!attachment) {
    throw createError({ statusCode: 404, statusMessage: "Attachment not found" });
  }
  return attachment;
});

export { info_get as default };
//# sourceMappingURL=info.get.mjs.map
