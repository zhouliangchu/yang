// 配置将文章标题渲染到页面中的模块
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// 引进配置数据库模块
const connection = require('../config/configSql.js')(mysql);

router.get('/', function(req, res) {
    // 对数据库进行操作
    connection.query('select * from article', function(err, result) {
        // 渲染到页面
        res.render('index', {
            num: result
        })
    })
})

// 抛出对外接口
module.exports = router;