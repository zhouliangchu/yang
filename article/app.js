const mysql = require('mysql');
const express = require('express');
const ejs = require('ejs');
const app = express();
const bodyparser = require('body-parser');

// 挂载一个中间件
app.use(bodyparser.urlencoded({ extended: false }));

// 读取静态文件
app.use(express.static('./static'));

// 设置模板路径
app.set('views', __dirname + '/views');
// 设置模板类型
app.set('view engine', 'ejs');

// 调用配置路由的模块
require('./config/configRouter')(app);

// 监听端口
app.listen(3333);