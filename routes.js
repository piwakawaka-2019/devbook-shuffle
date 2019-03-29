const express = require('express')
const router = express.Router()
const people = require('./data').people
const randomizer = require('./randomizer')
const fs = require('fs')

const teams = randomizer.groups(randomizer.randomList(people), 4)

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

  res.render("layouts/home")

})

module.exports = router;



