'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dungeon = sequelize.define('Dungeon', {
    name:
    {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Dungeon.associate = function (models) {
    Dungeon.hasMany(models.Boss)
    Dungeon.hasMany(models.Item)
  };
  return Dungeon;
};