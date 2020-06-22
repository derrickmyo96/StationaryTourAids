var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registerTablet', { title: 'Register for iPad' });
});

router.post('/submit', function(req, res){

  global.name = req.body.lastName;
  global.email = req.body.email;
  global.contact = req.body.contactNumber;
  var emailContent =  'Welcome ' + name + ',\n' + 'Please use the following link to verify your email address that you used to register for an iPad.'

  const token = jwt.sign({name, email, contact}, process.env.JWT_TOKEN, {expiresIn: '5m'});
  // res.redirect('/verifyEmail');
  // res.redirect('/registerTablet');

  //  Transport service for nodemailer to send emails
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.KRISLABEMAIL,
      pass: process.env.KRISLABEMAILPASSWORD
    }
  });

  var emailOptions = {
    from: 'KrisLab <jiarapplication@gmail.com>',
    to: email,
    subject: 'Verify your email address to unlock your iPad at KrisLab',
    html:`
      <h2>Welcome to KrisLab.</h2>
      <a href=${process.env.CLIENT_URL}/verify?token=${token}>Click here to verify your email.</a>`
  };

  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err, 'Email is not sent.');
      res.redirect('/registerTablet');
    } 
    else {
      console.log('Email sent ' + info);
      res.redirect('/registerTablet');
    }
  });
});

module.exports = router;


