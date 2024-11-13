import { c as defineEventHandler, r as readBody } from '../../../_/nitro.mjs';
import { c as createNotification } from '../../../_/notification.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const create_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  const notification = await createNotification({
    ...body,
    expiry: body.expiry
  });
  return notification;
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
