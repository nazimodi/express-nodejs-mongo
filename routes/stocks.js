var express = require('express');
var router = express.Router();
var path = require('path');
var config = require('../config/config.js');
var stocks = path.join(__dirname + '../config/stocks.json');
var request = require('request');
request = request.defaults({
    jar: true,
    headers: {
        Accept: '*/*',
        "User-Agent": 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36'
    }
});

router.get('/', function (req, res, next) {
    element = { 'name': 'alibaba' };
    request.get(config.stockApi.xueqiu.site, function () {
        request.get(config.stockApi.xueqiu.query.replace(/\{key\}/, element.name), function (error, response, body) {
            if (!error) {
                res.render('stocks', { title: 'xixi', stocksList: JSON.parse(body).stocks, stockTermMap: config.stockTermMap });
            } else {
                res.render('stocks', {});
            }
        });
    });
});
module.exports = router;