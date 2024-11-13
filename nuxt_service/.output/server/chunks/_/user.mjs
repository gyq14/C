import { e as createError } from './nitro.mjs';
import { p as prisma } from './prisma.mjs';

const login = async (account, password, platform_type) => {
  const user = await prisma.user.findUnique({
    where: {
      account
    }
  });
  if (!account || !password || !platform_type) {
    throw createError({ statusCode: 400, message: "\u8D26\u53F7\u3001\u5BC6\u7801\u548C\u5E73\u53F0\u4E0D\u80FD\u4E3A\u7A7A" });
  }
  if (user && user.password === password) {
    return user;
  } else {
    return null;
  }
};
const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};
const getUsersByDepartment = async (department) => {
  const users = await prisma.user.findMany({
    where: {
      department
    }
  });
  return users;
};
const getUsersByPlatformType = async (platformType) => {
  const users = await prisma.user.findMany({
    where: {
      platformType
    }
  });
  return users;
};
const createUser = async (user) => {
  const createdUser = await prisma.user.create({
    data: {
      ...user,
      password: user.password
    }
  });
  return createdUser;
};
const getUserById = async (id) => {
  const uid = parseInt(id);
  const user = await prisma.user.findUnique({
    include: {
      acceptnotes: true,
      sendnotes: true,
      todos: true,
      apptodos: true,
      apptasks: true,
      subtasks: true,
      usertasks: true
    },
    where: {
      id: uid
    }
  });
  return user;
};

export { getUsersByPlatformType as a, getUsersByDepartment as b, createUser as c, getUserById as d, getAllUsers as g, login as l };
//# sourceMappingURL=user.mjs.map
