import { c as defineEventHandler, g as getQuery } from '../../../_/nitro.mjs';
import { g as getNotificationsByReceiverId } from '../../../_/notification.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const byReceiver_get = defineEventHandler(async (event) => {
  let id = getQuery(event).id;
  if (Array.isArray(id)) {
    id = id[0];
  }
  if (id === void 0) {
    throw new Error("User ID is required");
  }
  return await getNotificationsByReceiverId(id);
});

export { byReceiver_get as default };
//# sourceMappingURL=by-receiver.get.mjs.map
