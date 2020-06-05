var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/krislabLogin', function(req, res, next) {
  res.render('krislabLoginr', { title: 'KrisLab Employee Site' });
});

module.exports = router;
