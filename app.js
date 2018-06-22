'use strict';

const express = require('express');
const app = express();

const PORT = 3001;

/** ROUTES **/

app.use('/static', express.static('static'));

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname});
});

/** END ROUTES **/

app.listen(PORT, function () { console.log('Listening on ' + PORT); });
