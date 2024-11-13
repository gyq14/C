import { c as defineEventHandler, r as readBody, e as createError } from '../../../_/nitro.mjs';
import { l as login } from '../../../_/user.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const login_post = defineEventHandler(async (event) => {
  const { account, password, platform_type } = await readBody(event);
  if (!account || !password || !platform_type) {
    throw createError({ statusCode: 400, message: "\u8D26\u53F7\u3001\u5BC6\u7801\u548C\u5E73\u53F0\u4E0D\u80FD\u4E3A\u7A7A" });
  }
  const user = await login(account, password, platform_type);
  if (!user) {
    throw createError({ statusCode: 401, message: "\u8D26\u53F7\u6216\u5BC6\u7801\u9519\u8BEF" });
  }
  return {
    message: "\u767B\u5F55\u6210\u529F",
    data: {
      user: {
        id: user.id,
        name: user.name,
        account: user.account,
        role: user.role,
        platform_type: user.platformType,
        permissions: user.permissions
      }
    }
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
