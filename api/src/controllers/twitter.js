const Twit = require('twit')
const {
  consumer_key,
  consumer_secret,
  access_token,
  access_token_secret
} = require('../configuration');

const T = new Twit({
  consumer_key,
  consumer_secret,
  access_token,
  access_token_secret
});


// @desc      Get all Tweets
// @route     GET /api/tweets
// @access    Public
exports.getTweets = (req, res, next) => {
  T.get('statuses/user_timeline', { screen_name: '@Twitter', count: 20 }, function(err, data, response) {
    res.status(200).json({ success: true, msg: data })
  });
}

// @desc      Search tweets
// @route     GET /api/tweets/search
// @access    Public
exports.getTweet = (req, res, next) => {
  const searchString = req.query.query;
  T.get('search/tweets', { q: searchString, count: 20 }, function(err, data, response) {
    res.status(200).json({ success: true, msg: data })
  });
}