const User = require('../models/User')

module.exports = (req, res, next) => {
    if (req.user.isAdmin) {
        return next();
    } else {
        return res.status(401).end()
    }
}
