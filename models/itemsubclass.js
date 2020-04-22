'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemSubClass = sequelize.define('ItemSubClass', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  ItemSubClass.associate = function (models) {
    ItemSubClass.hasMany(models.Item)
  };
  return ItemSubClass;
};