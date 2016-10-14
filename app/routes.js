"use strict";
var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('index')
})

// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name': 'Foo' })
})

// Branching

router.get('/examples/over-18', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18

  if (over18 === 'false') {
    // redirect to the relevant page
    res.redirect('/examples/under-18')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18')
  }
})

// add your routes here

router.get('/filtered-guidance/result', function (req, res) {
    let viewData = {};

    console.log(JSON.stringify(req.query.guidance));

    if (Array.isArray(req.query.guidance)) {
        for (let g of req.query.guidance) {
            console.log("Showing guidance for " + g);
            viewData[`show${g}`] = true;
        }
    } else {
        viewData[`show${req.query.guidance}`] = true;
    }


  res.render('filtered-guidance/result', viewData);
})

module.exports = router
