const express = require('express')
const Hotel = require('../models/Hotel')
const router = new express.Router()

router.get('/all', (req, res) => {
    Hotel.find({}).then((hotels) => {
        return res.status(200).json({
            hotels: hotels
        })
    })
    .catch(err => console.log(err))
})

module.exports = router