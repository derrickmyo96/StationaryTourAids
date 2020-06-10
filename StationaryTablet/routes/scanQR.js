var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('scanQR', { title: 'Scan for mobile device' });
});

module.exports = router;
