import { c as defineEventHandler, r as readBody } from '../../../_/nitro.mjs';
import { u as updateNotificationStatus } from '../../../_/notification.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const update_put = defineEventHandler(async (event) => {
  const { id, status } = await readBody(event);
  const res = await updateNotificationStatus(id, status);
  return res;
});

export { update_put as default };
//# sourceMappingURL=update.put.mjs.map
