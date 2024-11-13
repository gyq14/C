CREATE DATABASE IF NOT EXISTS nuxt_data;
ALTER DATABASE nuxt_data CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;
USE nuxt_data;
-- 创建用户表
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    account VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    contact VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    signature VARCHAR(255),
    department VARCHAR(255),
    role VARCHAR(255),
    platformType ENUM('Intranet', 'Supplier'),
    permissions VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 插入初始用户数据
INSERT INTO users (name, account, password, contact, email, department, role, platformType, permissions) VALUES
('董先明', 'nwadmin', '123456', '13800000001', 'zhangsan1@example.com', '管理员', '管理员', 'Intranet', 'admin'),
('朱小明', 'gysadmin', '123456', '13800001002', 'lisi1@example.com', '管理员', '管理员', 'Supplier', 'admin'),
('刘晴', 'nwuser', '123456', '13800000001', 'zhangsa2n@example.com', '研发部', '组员', 'Intranet', 'user'),
('谢丽', 'gysuser', '123456', '13800000002', 'lisi2@example.com', '市场部', '组员', 'Supplier', 'user'),
('靳春雷', 'nwleader', '123456', '13801000001', 'zhangsan3@example.com', '部长', '部长', 'Intranet', 'leader'),
('于雷', 'gysleader', '123456', '13820000002', 'lisi3@example.com', '部长', '部长', 'Supplier', 'leader'),
('谢经广', 'xiejingguang', 'password123', '13800000101', 'xiejingguang@example.com', '部长', '部长', 'Intranet', 'user'),
('汤丽娟', 'tanglijuan', 'password123', '13800000003', 'tanglijuan@example.com', '管理组', '组长', 'Intranet', 'user'),
('于义春', 'yuyichun', 'password123', '13800000004', 'yuyichun@example.com', '管理组', '组员', 'Intranet', 'user'),
('朱小波', 'zhuxiaobo', 'password123', '13800000005', 'zhuxiaobo@example.com', '仿真组', '组长', 'Intranet', 'user'),
('丁可', 'dingke', 'password123', '13800000006', 'dingke@example.com', '总体组', '组长', 'Intranet', 'user'),
('陈卫', 'chenwei', 'password123', '13800000007', 'chenwei@example.com', '电传动组', '组长', 'Intranet', 'user'),
('王宇', 'wangyu', 'password123', '13800000008', 'wangyu@example.com', '电传动组', '组员', 'Intranet', 'user'),
('许齐', 'xuqi', 'password123', '13800000009', 'xuqi@example.com', '车体组', '组长', 'Intranet', 'user'),
('嵇玉龙', 'jiyulong', 'password123', '13800000010', 'jiyulong@example.com', '系统组', '组长', 'Intranet', 'user'),
('张永庆', 'zhangyongqing', 'password123', '13800000011', 'zhangyongqing@example.com', '系统组', '组员', 'Intranet', 'user'),
('张洪磊', 'zhanghonglei', 'password123', '13800000012', 'zhanghonglei@example.com', '柴油机组', '组长', 'Intranet', 'user'),
('杨治宝', 'yangzhibao', 'password123', '13800000013', 'yangzhibao@example.com', '柴油机组', '组员', 'Intranet', 'user'),
('郑勇', 'zhengyong', 'password123', '13800000014', 'zhengyong@example.com', '制动组', '组长', 'Intranet', 'user'),
('朱斌', 'zhubin', 'password123', '13800000015', 'zhubin@example.com', '制动组', '组员', 'Intranet', 'user'),
('张晓峰', 'zhangxiaofeng', 'password123', '13800000016', 'zhangxiaofeng@example.com', '转向架组', '组长', 'Intranet', 'user'),
('杨治斌', 'yzb', 'password123', '138000000017', 'zhangs1a2n@example.com', '研发部', '组员', 'Supplier', 'user');
