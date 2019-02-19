const express = require('express');
const app = express();

const routes = require('./routes');

/** ROUTES **/

app.use(express.static('static'));

app.use('/', routes());

app.listen(3001);

module.export = app;
