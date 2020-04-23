'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    bossId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemClassId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemSubClassId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemQualityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: DataTypes.STRING,
    link: DataTypes.STRING
  }, {});
  Item.associate = function (models) {
    Item.belongsTo(models.ItemClass)
    Item.belongsTo(models.ItemSubClass)
    Item.belongsTo(models.ItemQuality)
    Item.belongsTo(models.Boss)
    Item.belongsTo(models.AssignedItems)
    Item.belongsToMany(models.Wishlist, { through: "WishlistDetails", foreignKey: "itemId" })
  };
  return Item;
};