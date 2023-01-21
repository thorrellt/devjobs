const express = require('express')
const router = express.Router()
const cors = require('cors')

const UserController = require('../controllers/user')
const checkAuth = require('../middleware/check-auth')

router.post('/signup', UserController.user_signup)

router.post('/login', UserController.user_login)

router.get('/activeAuth', checkAuth, UserController.user_activeAuth)

router.patch('/add_favorite/:jobId', checkAuth, UserController.addFavorite)

router.delete('/:userId', checkAuth, UserController.user_delete)

module.exports = router
