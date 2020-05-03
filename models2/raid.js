'use strict';
module.exports = (sequelize, DataTypes) => {
  const Raid = sequelize.define('raid', {
    eventId: DataTypes.INTEGER,
    dungeonId: DataTypes.INTEGER
  }, {});
  Raid.associate = function (models) {
    Raid.belongsTo(models.dungeon, { foreignKey: "dungeonId" })
    Raid.belongsTo(models.event, { foreignKey: "eventId" })
  };
  return Raid;
};