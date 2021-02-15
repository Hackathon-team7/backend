const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 3000

const app = express()

const {connect} = require('./data-access/connector')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('common'))

app.use('/event', require('./routes/event-router'))

app.listen(PORT, () => {
  connect().then(() => {
    require('./data-access/models/GroupType')
    require('./data-access/models/Event')

    console.log(`App is running on port: ${PORT}`)
  })
})

module.exports = app
