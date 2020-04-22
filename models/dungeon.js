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
    // associations can be defined here
  };
  return Dungeon;
};