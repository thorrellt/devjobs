const express = require('express')
const router = express.Router()
const cors = require('cors')

const UserController = require('../controllers/user')

router.post('/signup', UserController.user_signup)

router.post('/login', UserController.user_login)

router.get('/activeAuth', UserController.user_activeAuth)

router.delete('/:userId', checkAuth, UserController.user_delete)

module.exports = router
