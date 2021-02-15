const express = require('express')
const router = express.Router()
const {getConnection} = require('../data-access/connector')

router.get('/', (req, res) => {
  getConnection().models.Event.findAll({include: getConnection().models.GroupType})
    .then(data => {
      res.status(200).send(data)
    }).catch(err => {
    console.error(err)
    res.sendStatus(500)
  })
})

module.exports = router
