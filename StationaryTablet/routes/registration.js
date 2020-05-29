var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'Register for iPad' });
});

module.exports = router;
