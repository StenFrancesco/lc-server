'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('event', {
    name: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Event.associate = function (models) {
    Event.belongsToMany(models.character, { through: "characterevent", foreignKey: "eventId" })
  };
  return Event;
};