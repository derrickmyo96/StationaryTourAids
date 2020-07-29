const express = require('express');
const router = express.Router();
const axios = require('axios');

let leaderboardData;

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.get(process.env.GET_LEADERBOARD_URL)
    .then(function(response) {
      //  Handle success
      leaderboardData = Object.values(response.data)[1];
      res.render('leaderboard', { title: 'JiAR Leaderboard', leaderboardData: leaderboardData});
    })
    .catch(function (error) {
      //  Handle error
      console.log(error)
  });
});

module.exports = router;
