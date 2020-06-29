const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("token here:", req.query);
    const{token} = req.query;
    if (token) {
        jwt.verify(token, process.env.JWT_TOKEN, function(err, decodedToken) {
            if (err) {
                res.render('verifyFail', { title: 'Verification Fail' });
                // return res.status(400).json({error: 'Incorrect or Expired verification link.'});
            }
            let {name, email, contact, amountOfIpad, agreeToMarketing} = decodedToken;
            console.log("decodedToken", decodedToken);
            res.render('verifySuccess', { title: 'Verification Successful' });
        })
    };
});

module.exports = router;
