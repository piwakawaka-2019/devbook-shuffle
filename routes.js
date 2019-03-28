const express = require('express')
const router = express.Router()
const data = require('./data')
const fs = require('fs')

router.get('/', (req,res) => {
    res.render('views/layouts/main', data);
})