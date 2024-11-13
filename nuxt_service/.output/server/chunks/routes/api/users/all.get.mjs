import { c as defineEventHandler } from '../../../_/nitro.mjs';
import { g as getAllUsers } from '../../../_/user.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const all_get = defineEventHandler(async (event) => {
  const users = getAllUsers();
  return users;
});

export { all_get as default };
//# sourceMappingURL=all.get.mjs.map
