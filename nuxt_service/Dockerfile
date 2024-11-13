# 使用最小的 Node.js 运行时环境
FROM node:18-alpine

# 创建工作目录
WORKDIR /app

# 复制构建后的输出文件到工作目录
COPY ./.output ./

# 设置环境变量（根据需要配置）
ENV NITRO_PORT=3000
ENV PORT=3000

# 暴露应用端口
EXPOSE 3000

# 启动应用程序
CMD ["node", "./server/index.mjs"]

#nuxt_service



