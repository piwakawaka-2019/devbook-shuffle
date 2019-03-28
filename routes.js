const express = require('express')
const router = express.Router()
const people = require('./data').people
const randomizer = require('./randomizer')
const fs = require('fs')

let teams = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12][13, 14, 15, 16]];

router.get('/profiles', (req, res) => {
  const viewData = {
    people: people
  }
  res.render('ids/index', viewData)
})

router.get('/profiles/:id', (req, res) => {
  let id = req.params.id;
  let cohort = people.find(x => x.id == id)
  res.render('ids/detail', cohort)
})

router.get('/teams', (req, res) => {
  const viewData = { teams }

  res.render('ids/teams', viewData)
})

router.use('/', (req, res) => {
  res.send("hi there")
})

module.exports = router;



