express-nodejs-mongo-webstock
----------------------
my study beginning<br>
from now on, i will rich this project ,and let it useful. we plan to make a web stock scanning app.


#the packages inculded in this project

{
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
}

#install this
npm install express-nodejs-webstock -g

#usage
1. list the stock of selected.
2. show stock statuc and check it at intervals, and this stock will be save to selected after you clicked the interested button.
3. query stock info by code or name
4. add stock to mongo then u can use list item to display it's status.
5. remove stock from mongo

#shortcut
coming