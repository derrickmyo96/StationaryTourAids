var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("token here:", req.query);
    const{token} = req.query;
    if (token) {
        jwt.verify(token, process.env.JWT_TOKEN, function(err, decodedToken) {
            if (err) {
                return res.status(400).json({error: 'Incorrect or Expired verification link.'});
            }
            var {name, email, contact} = decodedToken;
            console.log("decodedToken", decodedToken);
            res.render('main1', { title: 'Register for an iPad' });
        })
    };
});

module.exports = router;
