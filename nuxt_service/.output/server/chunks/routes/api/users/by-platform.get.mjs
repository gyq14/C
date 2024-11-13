import { c as defineEventHandler, g as getQuery } from '../../../_/nitro.mjs';
import { a as getUsersByPlatformType } from '../../../_/user.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const byPlatform_get = defineEventHandler(async (event) => {
  const platformType = getQuery(event).platformType;
  return await getUsersByPlatformType(platformType);
});

export { byPlatform_get as default };
//# sourceMappingURL=by-platform.get.mjs.map
