const express = require('express')
const router = express.Router()

const {getConnection} = require('../data-access/connector')

router.get('/', (req, res) => {
  getConnection().models.Event.findAll()
    .then(data => {
      res.status(200).send(data)
    }).catch(err => {
    res.sendStatus(500)
  })
})

module.exports = router
