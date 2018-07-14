const MONGOOSE = require('mongoose');
const STRING = MONGOOSE.Schema.Types.String;
const NUMBER = MONGOOSE.Schema.Types.Number;

const TRACK_SCHEMA = MONGOOSE.Schema({
    name: { type: STRING, required: true, unique: true},
    lenght: { type: STRING, require: true },
    description: { type: STRING, default: ''},
    difficulty: { type: STRING, default: 'Begginer'},
    coordinates: {
        lat: { type: NUMBER, default: 0 },
        lng: { type: NUMBER, default: 0}
      }
});

const TRACK = MONGOOSE.model('Track', TRACK_SCHEMA);

module.exports = TRACK;


module.exports.seedTracks = () => {
    TRACK.find({}).then((tracks) => {
        if (tracks.length > 0) {
            return
        } else {
            TRACK.create(
                [{
                    name: 'Easy Peasy',
                    lenght: '700 metres',
                    description: 'Begginers paradise',
                    coordinates: {
                        lat: 41.741527,
                        lng: 23.433743
                    }
                }, {
                    name: 'Average fun',
                    lenght: '2.5 kilometres',
                    description: 'Perfect for chill',
                    difficulty: 'Medium',
                    coordinates: {
                        lat: 41.796837,
                        lng: 23.445175
                    }
                }, {
                    name: 'HardRock',
                    lenght: '11 kilometres',
                    description: 'Try if you dare',
                    difficulty: 'Hell',
                    coordinates: {
                        lat: 41.699753,
                        lng: 23.463190
                    }
                }
             ])
              .then(tracks => {
                console.log(`${tracks.length} tracks created`);
              })
              .catch((err) => {
                console.log(err);
              })
        }
    })
};