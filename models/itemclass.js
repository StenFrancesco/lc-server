'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemClass = sequelize.define('itemclass', {
    name: DataTypes.STRING
  }, {});
  ItemClass.associate = function (models) {
    ItemClass.hasMany(models.item)
  };
  return ItemClass;
};