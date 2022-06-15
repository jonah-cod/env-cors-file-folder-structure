const express = require('express')
const { gethome, login } = require('../controllers/controllers')
const router = express.Router()

router.get('/', gethome)

router.post('/', login)

module.exports = {router}