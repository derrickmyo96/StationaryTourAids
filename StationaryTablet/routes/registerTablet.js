var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/registerTablet', function(req, res, next) {
  res.render('registerTablet', { title: 'Register for iPad' });
});

router.post('/submit', function(req, res, next) {
  var name = req.body.borrowerFirstName + " " + req.body.borrowerLastName;
  console.log(name);
  res.redirect('/registerTablet');
})

module.exports = router;
