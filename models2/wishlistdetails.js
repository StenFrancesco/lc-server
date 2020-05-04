'use strict';
module.exports = (sequelize, DataTypes) => {
  const WishlistDetails = sequelize.define('wishlistdetails', {
    wishlistId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {});
  WishlistDetails.associate = function (models) {
    WishlistDetails.belongsTo(models.wishlist, { foreignKey: "wishlistId" })
    WishlistDetails.belongsTo(models.item, { foreignKey: "itemId" })
  };
  return wishlistdetails;
};