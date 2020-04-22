'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    description: DataTypes.TEXT
  }, {});
  Wishlist.associate = function (models) {
    Wishlist.belongsTo(models.Character)
    Wishlist.belongsToMany(models.Item, { through: "WishlistDetails", foreignKey: "wishlistId" })
  };
  return Wishlist;
};