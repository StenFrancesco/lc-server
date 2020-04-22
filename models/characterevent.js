'use strict';
module.exports = (sequelize, DataTypes) => {
  const CharacterEvent = sequelize.define('CharacterEvent', {
    characterId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  CharacterEvent.associate = function (models) {
    CharacterEvent.belongsTo(models.Character, { foreignKey: "characterId" })
    CharacterEvent.belongsTo(models.Event, { foreignKey: "eventId" })
  };
  return CharacterEvent;
};