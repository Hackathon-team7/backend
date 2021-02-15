const GroupType = require('./GroupType')
const Event = require('./Event')

GroupType.hasMany(Event, {
  foreignKey: 'id'
})
Event.belongsTo(GroupType, {
  foreignKey: 'groupId'
})

module.exports = {
  GroupType, Event
}
