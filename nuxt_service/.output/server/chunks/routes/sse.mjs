import { c as defineEventHandler, f as createEventStream, g as getQuery } from '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';

const sse = defineEventHandler(async (event) => {
  const eventStream = createEventStream(event);
  getQuery(event).id;
  const interval = setInterval(async () => {
    await eventStream.push(`Message @ ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`);
  }, 5e3);
  eventStream.onClosed(async () => {
    clearInterval(interval);
    await eventStream.close();
  });
  return eventStream.send();
});

export { sse as default };
//# sourceMappingURL=sse.mjs.map
