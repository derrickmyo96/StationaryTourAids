const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

/* GET home page. */
router.post('/register', function(req, res) {
    res.redirect('/registerTablet');
});

module.exports = router;
