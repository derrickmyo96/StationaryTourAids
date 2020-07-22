const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("token here:", req.query);
    const {token} = req.query;

    if (token) {
        jwt.verify(token, process.env.JWT_TOKEN, function(err, decodedToken) {
            if (err) {
                res.render('verifyFail', { title: 'Verification Fail' });
            }
            let {name, email, contact, amountOfTablet, agreeToMarketing, borrowID} = decodedToken;
            
            console.log("decodedToken", decodedToken);

            let data = {
                name: name,
                email: email,
                contact: contact,
                amountOfTablet:amountOfTablet,
                agreeToMarketing: agreeToMarketing,
                borrowID: borrowID
            }
            data = JSON.stringify(data);
            console.log("Writing to database: ", data);
            const url = process.env.POST_REQUEST_URL;

            const options = {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              data,
              url,
            };
            axios(options)
            .then((response) => {
              console.log(response);
            }).catch((error) => {
              console.log(error);
            });
            
            res.render('verifySuccess', { title: 'Verification Successful' });
        })
    };
});

module.exports = router;
