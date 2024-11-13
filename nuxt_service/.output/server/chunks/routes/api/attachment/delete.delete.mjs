import { c as defineEventHandler, g as getQuery, e as createError } from '../../../_/nitro.mjs';
import { d as deleteAttachment } from '../../../_/attachment.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const delete_delete = defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const result = await deleteAttachment(id);
  if (!result) {
    throw createError({ statusCode: 404, statusMessage: "Attachment not found" });
  }
  return result;
});

export { delete_delete as default };
//# sourceMappingURL=delete.delete.mjs.map
