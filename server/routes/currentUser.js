const express = require('express')

const router = new express.Router()

router.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'You have successfully logged in!',
        user: req.user
      })
  })
  
  module.exports = router