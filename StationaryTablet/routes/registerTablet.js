const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

//  Global variables
let name, email, contact, amountOfTablet, agreeToMarketing, borrowID;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registerTablet', { title: 'Register for iPad' });
});

router.post('/', function(req, res, next) {
  res.render('registerTablet', { title: 'Register for iPad' });
});

router.post('/submit', function(req, res){
  name = req.body.firstName + " " + req.body.lastName;
  email = req.body.email;
  contact = req.body.contactNumber;
  amountOfTablet = req.body.numberOfIpads;
  agreeToMarketing = req.body.agreeToMarketing;
  borrowID = Math.floor((Math.random() * 900000) + 99999);

  user ={
    name: name,
    email:email,
    contact:contact,
    amountOfTablet:amountOfTablet,
    agreeToMarketing: agreeToMarketing,
    borrowID: borrowID
  }

  // const emailContent =  'Welcome ' + name + ',\n' + 'Please use the following link to verify your email address that you used to register for an iPad.'

  const token = jwt.sign({name, email, contact, amountOfTablet, agreeToMarketing, borrowID}, process.env.JWT_TOKEN, {expiresIn: '5m'});

  //  Transport service for nodemailer to send emails
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.KRISLABEMAIL,
      pass: process.env.KRISLABEMAILPASSWORD
    }
  });

  const emailOptions = {
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
      res.render('emailFail',{user:user});
    } 
    else {
      console.log('Email sent ' + info);
      res.render('emailSent',{user:user});
    }
  });
});

module.exports = router;


