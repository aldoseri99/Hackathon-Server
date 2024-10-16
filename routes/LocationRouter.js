const express = require('express')
const router = require('express').Router()
const controller = require('../controllers/LocationController')

router.get('/', controller.GetLocation)
router.post('/add', controller.CreateLocation)

module.exports = router
