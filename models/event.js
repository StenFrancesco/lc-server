'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    date: DataTypes.DATE,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Event.associate = function (models) {
    Event.belongsToMany(models.Character, { through: "CharacterEvent", foreignKey: "eventId" })
    Event.belongsToMany(models.Dungeon, { through: "Raid", foreignKey: "eventId" })
  };
  return Event;
};