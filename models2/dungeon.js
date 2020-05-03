'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dungeon = sequelize.define('dungeon', {
    name: DataTypes.STRING
  }, {});
  Dungeon.associate = function (models) {
    Dungeon.hasMany(models.boss)
  };
  return Dungeon;
};