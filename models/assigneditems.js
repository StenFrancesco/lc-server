'use strict';
module.exports = (sequelize, DataTypes) => {
  const AssignedItems = sequelize.define('AssignedItems', {
    itemId: DataTypes.INTEGER,
    characterId: DataTypes.INTEGER
  }, {});
  AssignedItems.associate = function (models) {
    AssignedItems.hasOne(models.Character)
    AssignedItems.hasMany(models.Item)
  };
  return AssignedItems;
};