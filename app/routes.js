var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
// Branching

router.get('/releases/air/choose', function (req, res) {
  // get the answer from the query string (eg. ?release=false)
  var releaseair = req.query.releaseair

  if (releaseair === 'no') {
    // redirect to the relevant page
    res.redirect('/task-list')
  } else {
    // if releaseair is any other value (or is missing) render the page requested
    res.render('releases/air/choose-substance')
  }
})

module.exports = router
