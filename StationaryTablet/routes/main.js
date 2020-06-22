var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hello');
  res.render('main', { title: 'Welcome to KrisLab' });
});

module.exports = router;
