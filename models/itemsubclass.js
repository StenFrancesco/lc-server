'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemSubClass = sequelize.define('itemsubclass', {
    name: DataTypes.STRING
  }, {});
  ItemSubClass.associate = function (models) {
    ItemSubClass.hasMany(models.item)
  };
  return ItemSubClass;
};