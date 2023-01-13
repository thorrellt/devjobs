const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// require('dotenv').config()

const User = require('../models/User')

exports.user_signup = (req, res, next) => {
  console.log('user sign up pinged')
  User.find({ name: req.body.name })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: 'User name exists',
        })
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            })
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              name: req.body.name,
              password: hash,
            })
            user
              .save()
              .then((result) => {
                console.log(result)
                res.status(201).json({
                  message: 'User created',
                })
              })
              .catch((err) => {
                console.log(err)
                res.status(500).json({
                  error: err,
                })
              })
          }
        })
      }
    })
}

exports.user_login = (req, res, next) => {
  console.log(`login rec'd for ${req.body.name}`)
  User.find({ name: req.body.name })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Auth failed',
        })
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth failed',
          })
        }
        if (result) {
          const token = jwt.sign(
            {
              name: user[0].name,
              userId: user[0]._id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: '1h',
            }
          )
          return res.status(200).json({
            message: 'Auth successful',
            token: token,
          })
        }
        res.status(401).json({
          message: 'Auth failed',
        })
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })
}

exports.user_delete = (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'User deleted',
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })
}
