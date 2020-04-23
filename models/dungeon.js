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
    Dungeon.belongsToMany(models.Event, { through: "Raid", foreignKey: "dungeonId" })
  };
  return Dungeon;
};