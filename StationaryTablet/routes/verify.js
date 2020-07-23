const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
    const {token} = req.query;

    if (token) {
        jwt.verify(token, process.env.JWT_TOKEN, function(err, decodedToken) {
            if (err) {
                res.render('verifyFail', { title: 'Verification Fail' });
            }
            let {name, email, contact, amountOfTablet, agreeToMarketing, isEmployee, borrowID} = decodedToken;

            let data = {
                username: name,
                email: email,
                contact: contact,
                numberOfTablet:amountOfTablet,
                agreeToMarketing: (agreeToMarketing==="Yes") ? true : false,
                borrowId: borrowID,
                isEmployee: (isEmployee==="Yes") ? true : false
            }
            data = JSON.stringify(data);
            const url = process.env.POST_REQUEST_URL;

            const options = {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              data,
              url
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
