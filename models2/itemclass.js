'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemClass = sequelize.define('itemclass', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  ItemClass.associate = function (models) {
    ItemClass.hasMany(models.item)
  };
  return ItemClass;
};