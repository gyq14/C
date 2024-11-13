import { c as defineEventHandler, g as getQuery } from '../../../_/nitro.mjs';
import { d as getUserById } from '../../../_/user.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const userinfo_get = defineEventHandler(async (event) => {
  let id = getQuery(event).id;
  if (Array.isArray(id)) {
    id = id[0];
  }
  if (id === void 0) {
    throw new Error("User ID is required");
  }
  const user = await getUserById(id);
  return user;
});

export { userinfo_get as default };
//# sourceMappingURL=userinfo.get.mjs.map
