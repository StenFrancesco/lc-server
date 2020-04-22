'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemQuality = sequelize.define('ItemQuality', {
    quality: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  ItemQuality.associate = function (models) {
    ItemQuality.hasMany(models.Item)
  };
  return ItemQuality;
};