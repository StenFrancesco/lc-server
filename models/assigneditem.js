'use strict';
module.exports = (sequelize, DataTypes) => {
  const AssignedItem = sequelize.define('assigneditem', {
    itemId: DataTypes.INTEGER,
    characterId: DataTypes.INTEGER
  }, {});
  AssignedItem.associate = function (models) {
    AssignedItem.belongsTo(models.character)
    AssignedItem.belongsTo(models.item)
  };
  return AssignedItem;
};