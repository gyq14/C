import { c as defineEventHandler, g as getQuery } from '../../../_/nitro.mjs';
import { g as getTodosByApplicantId } from '../../../_/todos.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../../../_/prisma.mjs';
import '@prisma/client';

const byApplicant_get = defineEventHandler(async (event) => {
  const applicantId = getQuery(event).applicantId;
  const todos = await getTodosByApplicantId(applicantId);
  return todos;
});

export { byApplicant_get as default };
//# sourceMappingURL=by-applicant.get.mjs.map
