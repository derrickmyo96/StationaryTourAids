var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/registerTablet', function(req, res, next) {
  res.render('registerTablet', { title: 'Register for iPad' });
});

module.exports = router;
