'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('item', {
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    link: DataTypes.STRING
  }, {});
  Item.associate = function (models) {
    Item.belongsTo(models.itemquality)
    Item.belongsTo(models.itemclass)
    Item.belongsTo(models.itemsubclass)
    Item.belongsTo(models.boss)
    Item.belongsToMany(models.wishlist, { through: "wishlistdetails", foreignKey: "itemId" })
    Item.belongsToMany(models.character, { through: "assigneditems", foreignKey: "characterId" })
  };
  return Item;
};