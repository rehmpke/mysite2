const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
const routes = require('./routes');

/** ROUTES **/

app.use(express.static('static'));
app.get('/favicon.ico',(req, res, next) => {
  return res.sendStatus(204);
});
app.use('/', routes());

app.listen(3001);

module.export = app;
