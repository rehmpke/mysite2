const express = require('express');
const app = express();

app.listen(3001);

/** ROUTES **/

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile('./grendle.html', {root: __dirname});
});

module.export = app;
