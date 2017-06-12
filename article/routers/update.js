const express = require('express'),
    router = express.Router(),
    mysql = require('mysql'),
    connection = require('../config/configSql')(mysql);

router.post('/update', function(req, res) {
    connection.query('update article set num="' + req.body.num + '" where id="' + req.body.id + '"', function(err, result) {
        if (err) {
            throw err;
        }

        res.send({ 'code': 0, 'msg': '修改成功' });
        // res.send({msg: result});
    })
})

module.exports = router;