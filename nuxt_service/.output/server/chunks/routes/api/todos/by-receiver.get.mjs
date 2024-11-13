import { c as defineEventHandler, g as getQuery } from '../../../_/nitro.mjs';
import { a as getTodosByReceiverId } from '../../../_/todos.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const byReceiver_get = defineEventHandler(async (event) => {
  const receiverId = getQuery(event).receiverId;
  const todos = await getTodosByReceiverId(receiverId);
  return todos;
});

export { byReceiver_get as default };
//# sourceMappingURL=by-receiver.get.mjs.map
