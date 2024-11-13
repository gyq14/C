# 使用 MySQL 5.7 镜像作为基础镜像
FROM mysql:5.7

# 添加标签信息
LABEL OG=felord.cn

# 复制字符集配置文件到 MySQL 配置目录
COPY utf8mb4.cnf /etc/mysql/conf.d/utf8mb4.cnf

# 设置root密码
ENV MYSQL_ROOT_PASSWORD=123456

# 复制当前目录下的 sql 文件夹中的所有 .sql 文件到临时目录 /tmp/sql
COPY ./sql /tmp/sql

# 移动所有 SQL 文件到 MySQL 初始化目录
RUN mv /tmp/sql/*.sql /docker-entrypoint-initdb.d

# 删除临时 SQL 文件目录
RUN rm -rf /tmp/sql

