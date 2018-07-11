const MONGOOSE = require('mongoose');
const STRING = MONGOOSE.Schema.Types.String;
const NUMBER = MONGOOSE.Schema.Types.Number;

const HOTEL_SCHEMA = MONGOOSE.Schema({
    name: { type: STRING, required: true, unique: true},
    imageUrl: { type: STRING, require: true },
    description: { type: STRING, default: ''},
    totalRating: { type: NUMBER, default: 0},
    ratingsCount: { type: NUMBER, default: 0}
});

const HOTEL = MONGOOSE.model('Hotel', HOTEL_SCHEMA);

module.exports = HOTEL;

// Seed admin
module.exports.seedHotels = () => {
    HOTEL.find({}).then((hotels) => {
        if (hotels.length > 0) {
            return
        } else {
            HOTEL.create(
                [{
                    name: 'Softuni Paradise',
                    imageUrl: 'https://www.bernerhotel.com/uploads/pics/hotel-zellamsee-winter-pool_01.jpg',
                    description: 'Simply the paradise',
                    totalRating: 500,
                    ratingsCount: 100
                }, {
                    name: 'Crappy place',
                    imageUrl: 'http://i.dailymail.co.uk/i/pix/2012/11/14/article-2232828-1604BDA5000005DC-157_634x476.jpg',
                    description: 'The title speaks for itself',
                    totalRating: 100,
                    ratingsCount: 100
                }, {
                    name: 'Average hotel',
                    imageUrl: 'http://images.hotels-world.com/2//org/193/hotelPhoto/7376_Belmont_Hotel.jpg',
                    description: 'The best bang for buck deal',
                    totalRating: 350,
                    ratingsCount: 100
                }
             ])
              .then(hotels => {
                console.log(`${hotels.length} hotels created`);
              })
              .catch((err) => {
                console.log(err);
              })
        }
    })
};