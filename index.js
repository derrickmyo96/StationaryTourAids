var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/view/main.html'));
});
router.get('/welcome-page', function(req, res){
    res.sendFile(path.join(__dirname + '/view/selection.html'));
});
router.get('/ipad-registration', function(req, res){
    res.sendFile(path.join(__dirname + '/view/registration.html'));
});
router.get('/mobile-registration', function(req, res){
    res.sendFile(path.join(__dirname + '/view/qrcode.html'));
});

router.post('/welcome-page', function(req, res){
    res.sendFile(path.join(__dirname + '/view/scan.html'));
});
router.post('/ipad-registration', function(req, res){
    res.sendFile(path.join(__dirname + '/view/registration.html'));
});
router.post('/mobile-registration', function(req, res){
    res.sendFile(path.join(__dirname + '/view/qrcode.html'));
});

app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/public'));

app.use('/', router);
app.listen(3000);
console.log('Running at Port 3000');