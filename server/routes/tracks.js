const express = require('express')
const Track = require('../models/Track')
const router = new express.Router()
const authCheck = require('../middleware/auth-check')
const adminCheck = require('../middleware/admin-check')

router.get('/all', (req, res) => {
    Track.find({}).then((tracks) => {
        return res.status(200).json({
            tracks: tracks
        })
    })
        .catch(err => console.log(err))
})

// router.get('/delete/:id', authCheck, adminCheck, (req, res) => {
//     const id = req.params.id
//     Track.deleteOne({ _id: id }, function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         return res.status(200).json({
//             message: 'Successfuly deleted',
//             success: true
//         })
//     }).catch(err => console.log(err))
// })
// router.post('/edit/:id', authCheck, adminCheck, (req, res) => {
//     const id = req.params.id

//     console.log(req.body);

//     Track.findById(id, (err, Track) => {
//         if (err) return console.log(err);

//         Track.name = req.body.name,
//         Track.description = req.body.description,
//         Track.imageUrl = req.body.imageUrl
//         Track.save((err, updatedTrack) => {
//             if (err) return console.log(err);
//             return res.status(200).json({
//                 success: true,
//                 updatedTrack: updatedTrack
//             })
//         })
//     }).catch(err => console.log(err))
// })
module.exports = router