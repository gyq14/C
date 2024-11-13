import { p as prisma } from './prisma.mjs';

async function createNotification(data) {
  const { title, type, status, senderId, receiverId, expiry } = data;
  return await prisma.notification.create({
    data: {
      title,
      type,
      status,
      senderId,
      receiverId,
      expiry,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    }
  });
}
async function updateNotificationStatus(notificationId, status) {
  return await prisma.notification.update({
    where: { id: notificationId },
    data: {
      status,
      updatedAt: /* @__PURE__ */ new Date()
    }
  });
}
async function getNotificationsBySenderId(id) {
  let senderId = parseInt(id);
  return await prisma.notification.findMany({
    where: { senderId }
  });
}
async function getNotificationsByReceiverId(id) {
  let receiverId = parseInt(id);
  return await prisma.notification.findMany({
    where: { receiverId }
  });
}

export { getNotificationsBySenderId as a, createNotification as c, getNotificationsByReceiverId as g, updateNotificationStatus as u };
//# sourceMappingURL=notification.mjs.map
