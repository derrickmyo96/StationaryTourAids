const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const axios = require('axios');

//  Global variables
let name, email, contact, amountOfTablet, siaEmployee, agreeToMarketing, borrowID;
let availableTablet;

axios.get(process.env.GET_REQUEST_URL)
    .then(function(response) {
      //  Handle success
      availableTablet = response.data;
      availableTablet = Object.values(availableTablet)[0];
      console.log("Available Tablets: ", availableTablet);
    })
    .catch(function (error) {
      //  Handle error
      console.log(error)
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registerTablet', { title: 'Register for iPad', availableTablet: availableTablet });
});

router.post('/', function(req, res, next) {
  res.render('registerTablet', { title: 'Register for iPad' });
});

router.post('/submit', function(req, res){
  name = req.body.firstName + " " + req.body.lastName;
  email = req.body.email;
  contact = req.body.contactNumber;
  amountOfTablet = req.body.numberOfIpads;
  siaEmployee = req.body.siaEmployee;
  agreeToMarketing = req.body.agreeToMarketing;
  borrowID = Math.floor((Math.random() * 900000) + 99999);

  user ={
    name: name,
    email:email,
    contact:contact,
    amountOfTablet:amountOfTablet,
    siaEmployee: siaEmployee,
    agreeToMarketing: agreeToMarketing,
    borrowID: borrowID
  }

  //  Create a token
  //  Encrypted with JWT secret key that is created in .env file
  //  To encrypt: all information as received from the form input
  const token = jwt.sign({name, email, contact, amountOfTablet, agreeToMarketing, siaEmployee, borrowID}, process.env.JWT_TOKEN, {expiresIn: '5m'});

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
      <a href=http://localhost:3000/verify?token=${token}>Click here to verify your email.</a>`
  };

  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err, 'Email is not sent.');
      res.render('emailFail', {user:user});
    } 
    else {
      console.log('Email sent ' + JSON.stringify(info));
      console.log(user);
      res.render('emailSent', {user:user});
    }
  });
});

module.exports = router;


