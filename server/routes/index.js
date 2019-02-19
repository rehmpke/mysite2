const express = require('express');
const router = express.Router();

const projectsRoute = require('./projects');

module.exports = () => {
  router.get('/', (req, res, next) => {
    return res.send('Index');
  });

  router.use('/projects', projectsRoute());
  return router;
};
