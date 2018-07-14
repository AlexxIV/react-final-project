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
                    imageUrl: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F140106112658-winter-luxury-stein-erickson-lodge-park-city.jpg',
                    description: 'The title speaks for itself',
                    totalRating: 0,
                    ratingsCount: 0
                }, {
                    name: 'Average hotel',
                    imageUrl: 'http://images.hotels-world.com/2//org/193/hotelPhoto/7376_Belmont_Hotel.jpg',
                    description: 'The best bang for buck deal',
                    totalRating: 350,
                    ratingsCount: 100
                }, {
                    name: 'Crappy place1',
                    imageUrl: 'http://i.dailymail.co.uk/i/pix/2012/11/14/article-2232828-1604BDA5000005DC-157_634x476.jpg',
                    description: 'The title speaks for itself',
                    totalRating: 100,
                    ratingsCount: 100
                },, {
                    name: 'Crappy place2',
                    imageUrl: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F140106145617-winter-luxury-alpina-gstaad.jpg',
                    description: 'The title speaks for itself',
                    totalRating: 1000,
                    ratingsCount: 200
                },, {
                    name: 'Crappy place3',
                    imageUrl: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F140108115144-winter-luxury-bighorn.jpg',
                    description: 'The title speaks for itself',
                    totalRating: 500,
                    ratingsCount: 100
                },, {
                    name: 'Crappy place4',
                    imageUrl: 'https://hoeflehners.com/var/hoeflehner/storage/images/kontakt-infos/rund-um-das-hotel/fotogalerie2/keyvisual-winter-c-rene-strasser/307789-1-ger-DE/Keyvisual-Winter-C-Rene-Strasser_canvas2560full.jpg',
                    description: 'The title speaks for itself',
                    totalRating: 500,
                    ratingsCount: 100
                },, {
                    name: 'Crappy place5',
                    imageUrl: 'https://i.pinimg.com/originals/03/7c/2b/037c2b14b889879baf2debc1d039fb66.jpg',
                    description: 'The title speaks for itself',
                    totalRating: 600,
                    ratingsCount: 200
                },, {
                    name: 'Crappy place6',
                    imageUrl: 'http://i.dailymail.co.uk/i/pix/2012/11/14/article-2232828-1604BDA5000005DC-157_634x476.jpg',
                    description: 'The title speaks for itself',
                    totalRating: 100,
                    ratingsCount: 100
                },, {
                    name: 'Crappy place7',
                    imageUrl: 'http://i.dailymail.co.uk/i/pix/2012/11/14/article-2232828-1604BDA5000005DC-157_634x476.jpg',
                    description: 'The title speaks for itself',
                    totalRating: 100,
                    ratingsCount: 100
                },, {
                    name: 'Crappy place8',
                    imageUrl: 'http://i.dailymail.co.uk/i/pix/2012/11/14/article-2232828-1604BDA5000005DC-157_634x476.jpg',
                    description: 'The title speaks for itself',
                    totalRating: 100,
                    ratingsCount: 100
                },, {
                    name: 'Crappy place9',
                    imageUrl: 'http://i.dailymail.co.uk/i/pix/2012/11/14/article-2232828-1604BDA5000005DC-157_634x476.jpg',
                    description: 'The title speaks for itself',
                    totalRating: 100,
                    ratingsCount: 100
                },, {
                    name: 'Crappy place10',
                    imageUrl: 'http://i.dailymail.co.uk/i/pix/2012/11/14/article-2232828-1604BDA5000005DC-157_634x476.jpg',
                    description: 'The title speaks for itself',
                    totalRating: 100,
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