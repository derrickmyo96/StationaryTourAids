const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const axios = require('axios');

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
            let {name, email, contact, amountOfIpad, agreeToMarketing, borrowID} = decodedToken;
            console.log("decodedToken", decodedToken);

            axios.post(process.env.POST_REQUEST_URL, {
                name: name,
                email: email,
                contact: contact,
                amountOfIpad: amountOfIpad,
                agreeToMarketing: agreeToMarketing,
                borrowID: borrowID})
            .then(function(response) {
            //  Handle success
            console.log(response);
            })
            .catch(function (error) {
            //  Handle error
            console.log(error)
            })
            .finally(function() {
            //  Always executed
            });
            
            res.render('verifySuccess', { title: 'Verification Successful' });
        })
    };
});

module.exports = router;
