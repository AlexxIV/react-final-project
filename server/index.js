const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const config = require('./config/config');
const localSignupStrategy = require('./passport/local-signup')
const localLoginStrategy = require('./passport/local-login')
const authRoutes = require('./routes/auth')
const currentUser = require('./routes/currentUser')
const hotelRoutes = require('./routes/hotels')
const trackRoutes = require('./routes/tracks')
const authCheck = require('./middleware/auth-check')

const app = express()

const port = 5000
let env = 'development';

require('./config/database.config')(config[env]);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(cors())

passport.use('local-signup', localSignupStrategy)
passport.use('local-login', localLoginStrategy)

// routes
app.use('/auth', authRoutes)
app.use('/currentUser', authCheck, currentUser)

app.use('/hotels', hotelRoutes)

app.use('/tracks', trackRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}...`)
})
