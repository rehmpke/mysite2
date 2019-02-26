const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/', (req, res, next) => {
    return res.render('projects');
  });

  router.get('/:project', (req, res, next) => {
    return res.render('projects/project');
  });

  return router;
};
