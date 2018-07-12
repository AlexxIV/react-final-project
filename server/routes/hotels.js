const express = require('express')
const Hotel = require('../models/Hotel')
const router = new express.Router()
const authCheck = require('../middleware/auth-check')
const adminCheck = require('../middleware/admin-check')

router.get('/all', (req, res) => {
    Hotel.find({}).then((hotels) => {
        return res.status(200).json({
            hotels: hotels
        })
    })
        .catch(err => console.log(err))
})

router.get('/delete/:id', authCheck, adminCheck, (req, res) => {
    const id = req.params.id
    Hotel.deleteOne({ _id: id }, function (err) {
        if (err) {
            return console.log(err);
        }
        return res.status(200).json({
            message: 'Successfuly deleted',
            success: true
        })
    }).catch(err => console.log(err))
})
router.post('/edit/:id', authCheck, adminCheck, (req, res) => {
    const id = req.params.id

    console.log(req.body);

    Hotel.findById(id, (err, hotel) => {
        if (err) return console.log(err);

        hotel.name = req.body.name,
        hotel.description = req.body.description,
        hotel.imageUrl = req.body.imageUrl
        hotel.save((err, updatedHotel) => {
            if (err) return console.log(err);
            return res.status(200).json({
                success: true,
                updatedHotel: updatedHotel
            })
        })
    }).catch(err => console.log(err))
})
module.exports = router