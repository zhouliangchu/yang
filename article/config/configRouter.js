// 配置路由模块
const index = require('../routers/index');
const detail = require('../routers/detail');
const addArticle = require('../routers/addArticle');
const add = require('../routers/add')

module.exports = function(app) {
    // 配置路由
    app.get('/', index);
    app.get('/detail', detail);
    app.get('/addArticle', addArticle);
    app.post('/add', add);
}