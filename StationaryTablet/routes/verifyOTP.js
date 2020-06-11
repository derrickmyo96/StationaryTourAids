var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('verifyOTP', {title: 'Verify OTP'});
});

module.exports = router;