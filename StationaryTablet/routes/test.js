var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Testing purposes' });
});

router.post('/requestOTP', function(req, res) {
  var name = req.body.borrowerFirstName + " " + req.body.borrowerLastName;
  alert(name);
  res.redirect('/test');
})

module.exports = router;
