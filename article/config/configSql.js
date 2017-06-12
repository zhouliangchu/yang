// 配置数据库模块
// 创建数据库连接 mysql.createConnection({}) 五个参数
module.exports = function(mysql) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: 3306,
        database: 'yang'
    })

    // 连接到数据库
    connection.connect();
    return connection;
}