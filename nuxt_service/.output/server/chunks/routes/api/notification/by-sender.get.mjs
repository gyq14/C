import { c as defineEventHandler, g as getQuery } from '../../../_/nitro.mjs';
import { a as getNotificationsBySenderId } from '../../../_/notification.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const bySender_get = defineEventHandler(async (event) => {
  const id = getQuery(event).id;
  const notifications = await getNotificationsBySenderId(id);
  return notifications;
});

export { bySender_get as default };
//# sourceMappingURL=by-sender.get.mjs.map
