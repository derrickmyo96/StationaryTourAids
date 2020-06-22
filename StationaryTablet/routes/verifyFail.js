var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.post('/register', function(req, res) {
    res.redirect('/registerTablet');
});

module.exports = router;
