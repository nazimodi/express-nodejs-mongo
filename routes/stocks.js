var express = require('express');
var router = express.Router;
var config = require('../config/config.js')
var stocks = require('../config/stocks.js')
var request = require('request');
request = request.defaults({
    jar: true,
    headers: {
        Accept: '*/*',
        "User-Agent": 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36'
    }
});

router.get('/', function (req, res, next) {
    stocks.forEach(function (element) {
        request.get(config.stockApi.xueqiu.site, function () {
            request.get(config.stockApi.xueqiu.query.replace(/\{key\}/, element.name), function (error, res, body) {
                res.render('stocks', { stocksList: infos, stockTermMap: config.stockTermMap });
            });
        });
    }, this);
});
module.exports = router;