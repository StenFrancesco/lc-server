'use strict';
module.exports = (sequelize, DataTypes) => {
  const Raid = sequelize.define('Raid', {
    eventId: DataTypes.INTEGER,
    dungeonId: DataTypes.INTEGER
  }, {});
  Raid.associate = function (models) {
    Raid.belongsTo(models.Dungeon, { foreignKey: "dungeonId" })
    Raid.belongsTo(models.Event, { foreignKey: "eventId" })
  };
  return Raid;
};