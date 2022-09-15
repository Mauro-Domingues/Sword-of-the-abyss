const express = require('express')
const router = express.Router()
const ticketController = require('../controllers/ticketController')

router.post('/', ticketController.post)

module.exports = router