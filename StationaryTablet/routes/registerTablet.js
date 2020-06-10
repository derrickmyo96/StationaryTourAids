var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registerTablet', { title: 'Register for iPad' });
});


router.post('/submit', function(req, res){
  console.log(req.body);
  res.render('registerTablet',{ title: 'Register for iPad' } );
  // res.redirect('/registerTablet')
});

module.exports = router;
