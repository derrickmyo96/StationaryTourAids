var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/scanQR', function(req, res, next) {
  res.render('scanQR', { title: 'Scan for mobile device' });
});

module.exports = router;
