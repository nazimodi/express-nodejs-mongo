express-nodejs-mongo-webstock
----------------------
my study beginning<br>
from now on, i will enrich this project ,and let it useful. we plan to make a web stock scanning app.


#the packages inculded in this project

<pre>{
  "name": "express-nodejs-mongo-webstock",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0"
  }
}</pre>

#install
`npm install express-nodejs-webstock -g`

#usage

##show
  1. list the stock of selected.
  2. remove a stock which you are not interested.

##query
  1. show stock statuc and check it at intervals, and this stock will be save to selected after you clicked the interested button.
  2. query stock info by code or name
  3. add stock to mongo then u can use list item to display it's status.

tips: during the first stage ,we choose to save the stock info in file(stock.json), just for other can easily start the project.

#shortcut
coming

#multiple selected stock info source
we will display a target stock detail that from some big stock trade platform ,eg http://www.gw.com.cn/,http://xueqiu.com
