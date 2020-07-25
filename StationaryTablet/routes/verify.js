const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const axios = require('axios');
const { response } = require('express');

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
            let slotAssigned;

            const options = {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              data,
              url
            };
            axios(options)
            .then((response) => {
              console.log(response);
              slotAssigned = Object.values(response.data)[1];
              console.log("Type:", typeof(slotAssigned));
                res.render('verifySuccess', { title: 'Verification Successful', slotAssigned: slotAssigned });
            }).catch((error) => {
              console.log(error);
              res.render('verifyDuplicate', { title: 'Verified'});
            });
        })
    };
});

module.exports = router;
