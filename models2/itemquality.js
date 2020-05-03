'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemQuality = sequelize.define('itemquality', {
    quality: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  ItemQuality.associate = function (models) {
    ItemQuality.hasMany(models.item)
  };
  return ItemQuality;
};