import { c as defineEventHandler, r as readBody } from '../../../_/nitro.mjs';
import { c as createUser } from '../../../_/user.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const create_post = defineEventHandler(async (event) => {
  const body = readBody(event);
  const user = createUser(body);
  return {
    messageStatus: "user create successfull",
    data: user
  };
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
