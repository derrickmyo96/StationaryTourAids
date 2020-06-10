var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('sendOTP', {title: 'Verify OTP'});
});

module.exports = router;