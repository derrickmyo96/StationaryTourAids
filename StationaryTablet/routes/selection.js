var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/selection', function(req, res, next) {
  res.render('selection', { title: 'Select your device' });
});

module.exports = router;
