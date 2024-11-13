# 使用最小的 Node.js 运行时环境
FROM node:18-alpine

# 创建工作目录
WORKDIR /app

# 复制构建后的输出文件到工作目录
COPY .output /app/.output

# 设置环境变量（根据需要配置）
ENV NITRO_PORT=3001  
ENV PORT=3001        

# 暴露应用端口
EXPOSE 3001

# 启动应用程序
CMD ["node", ".output/server/index.mjs"]

#nuxt_client