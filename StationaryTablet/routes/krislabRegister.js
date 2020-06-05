var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/krislabRegister', function(req, res, next) {
  res.render('krislabRegister', { title: 'Register for an account' });
});

module.exports = router;
