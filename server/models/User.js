const MONGOOSE = require('mongoose');
const ENCRYPTION = require('../utilities/encryption');
const STRING = MONGOOSE.Schema.Types.String;
const BOOLEAN = MONGOOSE.Schema.Types.Boolean;

const USER_SCHEMA = MONGOOSE.Schema({
    username: { type: STRING, required: true, unique: true},
    password: { type: STRING, require: true },
    salt: { type: STRING, required: true },
    isAdmin: { type: BOOLEAN, default: false}
});

const USER = MONGOOSE.model('User', USER_SCHEMA);

module.exports = USER;

// Seed admin
module.exports.seedAdmin = () => {
    USER.findOne({ isAdmin: true }).then((admin) => {
        if (admin) {
            return;
        } else {
            let salt = ENCRYPTION.generateSalt();
            let passwordHash = ENCRYPTION.generateHashedPassword(salt, 'admin');
            let adminUser = {
                username: 'admin',
                password: passwordHash,
                salt: salt,
                isAdmin: true
            };

            USER.create(adminUser).then((user) => {
                console.log(`${user.username} seeded!`);
            });
        }
    })
};
module.exports.seedUser = () => {
    USER.findOne({ isAdmin: false }).then((user) => {
        if (user) {
            return;
        } else {
            let salt = ENCRYPTION.generateSalt();
            let passwordHash = ENCRYPTION.generateHashedPassword(salt, 'test');
            let userData = {
                username: 'test',
                password: passwordHash,
                salt: salt,
            };

            USER.create(userData).then((user) => {
                console.log(`${user.username} seeded!`);
                
            })
        }
    })
};