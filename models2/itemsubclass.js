'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemSubClass = sequelize.define('itemsubclass', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  ItemSubClass.associate = function (models) {
    ItemSubClass.hasMany(models.item)
  };
  return ItemSubClass;
};