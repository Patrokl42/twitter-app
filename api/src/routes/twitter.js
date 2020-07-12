const express = require('express')
const {
  getTweets,
  getTweet
} = require('../controllers/twitter')

const router = express.Router()

router
  .route('/')
  .get(getTweets)

router
  .route('/search')
  .get(getTweet)

module.exports = router