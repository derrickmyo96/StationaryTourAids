var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/krislab', function(req, res, next) {
  res.render('krislab', { title: 'KrisLab' });
});

module.exports = router;
