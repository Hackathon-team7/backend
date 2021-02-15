const {DataTypes, Model} = require('sequelize')

let {getConnection} = require('../connector')

class GroupType extends Model {}

GroupType.init({
    id: {
      type: DataTypes.INTEGER,
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
    parentId: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize: getConnection(),
    tableName: 'grouptype',
    timestamps: false
  })

module.exports = GroupType
