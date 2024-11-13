import { c as defineEventHandler, r as readBody } from '../../../_/nitro.mjs';
import { s as setTodoStatus } from '../../../_/todos.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const updateStatus_put = defineEventHandler(async (event) => {
  const { id, status } = await readBody(event);
  const todo = await setTodoStatus(id, status);
  return todo;
});

export { updateStatus_put as default };
//# sourceMappingURL=update-status.put.mjs.map
