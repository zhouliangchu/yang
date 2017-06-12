// 发表文章的模块
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// 引进配置数据库模块
const connection = require('../config/configSql.js')(mysql);

router.get('/addArticle', function(req, res) {
    // 渲染页面
    res.render('addArticle');

})

// 抛出对外接口
module.exports = router;