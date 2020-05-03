'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('event', {
    date: DataTypes.DATE,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Event.associate = function (models) {
    Event.belongsToMany(models.character, { through: "characterevent", foreignKey: "eventId" })
    Event.belongsToMany(models.dungeon, { through: "raid", foreignKey: "eventId" })
  };
  return Event;
};