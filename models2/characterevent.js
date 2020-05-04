'use strict';
module.exports = (sequelize, DataTypes) => {
  const CharacterEvent = sequelize.define('characterevent', {
    characterId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  CharacterEvent.associate = function (models) {
    CharacterEvent.belongsTo(models.character, { foreignKey: "characterId" })
    CharacterEvent.belongsTo(models.event, { foreignKey: "eventId" })
  };
  return CharacterEvent;
};