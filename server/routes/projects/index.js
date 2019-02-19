const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/', (req, res, next) => {
    return res.send('All Projects');
  });

  router.get('/:project', (req, res, next) => {
    return res.send(`Project detail page for ${req.params.project}`);
  });

  return router;
};
