const express = require('express')
const router = express.Router()
const cors = require('cors')
const checkAuth = require('../middleware/check-auth')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const { getImage } = require('../controllers/images')

router.route('/:id').all(cors(corsOptions), getImage)

module.exports = router
