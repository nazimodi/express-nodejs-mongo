var express = require('express');
var bluebird = require('bluebird');
var router = express.Router();
var path = require('path');
var config = require('../config/config.js');
var stocks = require('../config/stocks.json');
var request = require('request');
request = request.defaults({
    jar: true,
    headers: {
        Accept: '*/*',
        "User-Agent": 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36'
    }
});

router.get('/', function (req, res, next) {
    codes = Object.keys(stocks).map(function (item, index) {
        return [stocks[item].code];
    }).join(',');
    request.get(config.stockApi.xueqiu.site, function () {
        request.get(config.stockApi.xueqiu.info.replace(/\{code\}/, codes), function (error, response, body) {
            if (!error) {
                res.render('stocks', { title: 'xixi', stockInfos: JSON.parse(body), stockTermMap: config.stockTermMap });
            } else {
                res.render('stocks', {});
            }
        });
    });
});
module.exports = router;