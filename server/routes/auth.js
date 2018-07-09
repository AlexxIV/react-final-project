const express = require('express')
const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')

const router = new express.Router()

function validateSignupForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length <8) {
    isFormValid = false
    errors.password = 'Password must have at least 8 characters.'
  }

  if (!payload || payload.password !== payload.repeatPassword) {
    isFormValid = false
    errors.password = 'Passwords should match.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message: 'The form is valid and no errors occured',
    errors
  }
}

function validateLoginForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false
    errors.password = 'Please provide your password.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message: 'The form is valid and no errors occured.',
    errors
  }
}

router.post('/signup', (req, res, next) => {
  console.log(req.body)
  const validationResult = validateSignupForm(req.body)

  console.log(validationResult);

  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }
  User.findOne({ username: req.body.username }).then((existingUser) => {
    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: 'Username already exists!'
      })
    }
    return passport.authenticate('local-signup', (err) => {
      console.log('vlizam v authenticate');
      if (err) {
        console.log(err);
        return res.status(200).json({
          success: false,
          message: err
        })
      }

      return res.status(200).json({
        success: true,
        message: 'You have successfully signed up! Now you should be able to log in.'
      })
    })(req, res, next)
  })
})

router.post('/login', (req, res, next) => {
  console.log(req.body)
  const validationResult = validateLoginForm(req.body)
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(200).json({
          success: false,
          message: err.message
        })
      }

      return res.status(200).json({
        success: false,
        message: 'Could not process the form.'
      })
    }

    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    })
  })(req, res, next)
})

module.exports = router
