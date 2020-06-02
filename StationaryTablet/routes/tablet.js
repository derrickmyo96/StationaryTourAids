var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tablet', function(req, res, next) {
  res.render('tablet', { title: 'Register for iPad' });
});

module.exports = router;
