var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/view/main.html'));
});

router.post('/welcome-page', function(req, res){
    res.sendFile(path.join(__dirname + '/view/scan.html'));
});

app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/public'));

app.use('/', router);
app.listen(3000);
console.log('Running at Port 3000');