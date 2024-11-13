import { p as prisma } from './prisma.mjs';

async function createTodo(todo) {
  return await prisma.todo.create({
    data: {
      ...todo,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    }
  });
}
async function setTodoStatus(todoId, status) {
  return await prisma.todo.update({
    where: {
      id: parseInt(todoId)
    },
    data: {
      status,
      updatedAt: /* @__PURE__ */ new Date()
    }
  });
}
async function getTodosByReceiverId(receiverId) {
  return await prisma.todo.findMany({
    where: {
      receiverId: parseInt(receiverId)
    }
  });
}
async function getTodosByApplicantId(applicantId) {
  return await prisma.todo.findMany({
    where: {
      applicantId: parseInt(applicantId)
    }
  });
}

export { getTodosByReceiverId as a, createTodo as c, getTodosByApplicantId as g, setTodoStatus as s };
//# sourceMappingURL=todos.mjs.map
