const express = require('express'),
    router = express.Router(),
    mysql = require('mysql'),
    connection = require('../config/configSql')(mysql);

router.post('/add', function(req, res) {
    connection.query('insert into article(title, content) values("' + req.body.tit + '", "' + req.body.txt + '")', function(err, result) {
        res.send({ 'code': 0, 'msg': '添加成功' });
    })
});

module.exports = router;