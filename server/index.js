const express = require('express');
const app = express();

const routes = require('./routes');

app.listen(3001);

/** ROUTES **/

app.use('/static', express.static('static'));

app.use('/', routes());

module.export = app;
