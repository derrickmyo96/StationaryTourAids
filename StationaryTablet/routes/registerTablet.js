var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registerTablet', { title: 'Register for iPad' });
});

router.post('/submit', function(req, res){
  // console.log(req.body);
  // res.render('registerTablet',{ title: 'Register for iPad' } );
  // res.redirect('/registerTablet')
  var name = req.body.lastName;
  var email = req.body.email;
  var emailContent =  'Welcome ' + name + ',\n' + 'Please use the following OTP to unlock the iPad assigned to you.'
  res.redirect('/sendOTP');

  //  Transport service for nodemailer to send emails
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jiarapplication@gmail.com',
      pass: 'HkyJfq2649TD'
    }
  });

  var emailOptions = {
    from: 'KrisLab <jiarapplication@gmail.com>',
    to: email,
    subject: 'OTP Verification for borrowing of iPad',
    text: emailContent
  };

  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.redirect('/registerTablet');
    } 
    else {
      console.log('Email sent ' + info);
      res.redirect('/sendOTP');
    }
  });
});

module.exports = router;


