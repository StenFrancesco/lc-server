'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemClass = sequelize.define('ItemClass', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  ItemClass.associate = function (models) {
    ItemClass.hasMany(models.Item)
  };
  return ItemClass;
};