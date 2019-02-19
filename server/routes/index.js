const express = require('express');
const router = express.Router();

const projectsRoute = require('./projects');

module.exports = () => {
  router.get('/', (req, res, next) => {
    return res.render('index');
  });

  router.use('/projects', projectsRoute());
  return router;
};
