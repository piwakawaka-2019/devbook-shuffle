const express = require('express')
const router = express.Router()
const data = require('./data')
const fs = require('fs')

router.use('/', (req, res) => {
  res.send("hi there")
})
module.exports = router;