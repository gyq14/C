import { c as defineEventHandler, r as readBody } from '../../../_/nitro.mjs';
import { b as getUsersByDepartment } from '../../../_/user.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const userDepartment_get = defineEventHandler(async (event) => {
  const { department } = await readBody(event);
  const users = await getUsersByDepartment(department);
  return users;
});

export { userDepartment_get as default };
//# sourceMappingURL=user-department.get.mjs.map
