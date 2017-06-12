// 渲染详情页
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../config/configSql.js')(mysql);

router.get('/detail', function(req, res) {
    connection.query('select * from article', function(err, result) {
        for (var i in result) {
            if (result[i].id == req.query.id) {
                res.render('detail', {
                    num: result[i].content
                })
            }
        }

    })
})

// 抛出对外接口
module.exports = router;