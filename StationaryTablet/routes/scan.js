var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/scan', function(req, res, next) {
  res.render('scan', { title: 'Scan for mobile device' });
});

module.exports = router;
