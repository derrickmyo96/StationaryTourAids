var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/verify', function(req, res, next) {
    console.log("token here:", req.body);
    const{token} = req.body;
    if (token) {
        jwt.verify(token, process.env.JWT_TOKEN, function(err, decodedToken) {
            if (err) {
                return res.status(400).json({error: 'Incorrect or Expired verification link.'});
            }
            var {name, email, contact} = decodedToken;
        })
    };
  res.render('verify', { title: 'Email verification' });
});



module.exports = router;
