'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boss = sequelize.define('boss', {
    name: DataTypes.STRING
  }, {});
  Boss.associate = function (models) {
    Boss.belongsTo(models.dungeon)
  };
  return Boss;
};