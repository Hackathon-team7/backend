const {DataTypes, Model} = require('sequelize')

let {getConnection} = require('../connector')

class Event extends Model {}

Event.init({
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      validate: {
        max: 45
      }
    },
    startDate: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(45),
      allowNull: false,
      validate: {
        max: 45
      }
    },
    groupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  },
  {
    sequelize: getConnection(),
    tableName: 'event',
    timestamps: false
  })

module.exports = Event
