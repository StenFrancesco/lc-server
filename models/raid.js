'use strict';
module.exports = (sequelize, DataTypes) => {
  const raid = sequelize.define('raid', {
    eventId: DataTypes.INTEGER,
    dungeonId: DataTypes.INTEGER
  }, {});
  raid.associate = function(models) {
    // associations can be defined here
  };
  return raid;
};