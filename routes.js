const cohort = require('./data').people
const randomizer = require('./randomizer')

const teams = for (var i = 0; i < cohort.length)

  router.get('/profiles/:id', (req, res) => {
    let id = req.params.id;
    let cohort = people.find(x => x.id == id)
    res.render('ids/detail', cohort)
  })

router.get('/profiles', (req, res) => {
  const viewData = {
    cohort: cohort
  }
  res.render('ids/index', viewData)
})

router.get('/teams', (req, res) => {
  const viewData = { teams }

  res.render('ids/teams', viewData)
})



let teams = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12][13, 14, 15, 16]];

for (var i = 0; i < teams.length; i++) {
  for (var j = 0; j < teams[i][j]; j++) {
    teams[i][j]
  }
}