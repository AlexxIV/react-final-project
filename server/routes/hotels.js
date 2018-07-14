const express = require('express')
const Hotel = require('../models/Hotel')
const router = new express.Router()
const authCheck = require('../middleware/auth-check')
const adminCheck = require('../middleware/admin-check')

router.get('/all', (req, res) => {
    Hotel.find({})
        .then((hotels) => {
            return res.status(200).json({
                hotels: hotels
            })
        }).catch(err => console.log(err))
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
            if (err) {return res.status(200).json({
                success: false
            })
            }
            return res.status(200).json({
                success: true,
                updatedHotel: updatedHotel
            })
        })
    })
    .catch(err => {
        console.log(err)
        return res.status(200).json({
            success: false
        })
    })
})

router.post('/add', authCheck, (req, res) => {
    console.log(req.body);

    Hotel.create(req.body)
        .then(hotel => {
            console.log(`Created ${hotel.name} successfuly`)
            return res.status(200).json({
                success: true,
                newHotel: hotel
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(200).json({
                success: false
            })
        })
})

router.get('/latest', (req, res) => {
    Hotel.find({})
        .then((hotels) => {
            hotels
                .sort(function (a, b) {
                    if (a.ratingsCount < 1) {
                        return 1
                    } else if (b.ratingsCount < 1) {
                        return -1
                    } else {
                        var ratingA = a.totalRating / a.ratingsCount
                        var ratingB = b.totalRating / b.ratingsCount
                        if (ratingA > ratingB) {
                            return -1;
                        }
                        if (ratingA < ratingB) {
                            return 1;
                        }

                        // names must be equal
                        return 0;
                    }
                });
            return res.status(200).json({
                hotels: hotels.slice(0, 3)
            })
        }).catch(err => console.log(err))
})
module.exports = router