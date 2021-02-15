const {Sequelize} = require('sequelize')
let db_conn

function connect () {
  db_conn = new Sequelize({
    dialect: 'mysql',
    host: 'team7-mysql-db.mysql.database.azure.com',
    database: 'coursist',
    username: 'team7@team7-mysql-db',
    password: 'Aa123456123456',
    ssl: true,
    dialectOptions: {
      'ssl': {
        'require': true
      }
    }
  })

  return db_conn.authenticate()
}

function getConnection () {
  return db_conn
}

module.exports = {
  connect, getConnection
}
