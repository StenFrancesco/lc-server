'use strict';
module.exports = (sequelize, DataTypes) => {
  const WishlistDetails = sequelize.define('WishlistDetails', {
    wishlistId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {});
  WishlistDetails.associate = function (models) {
    WishlistDetails.belongsTo(models.Wishlist, { foreignKey: "wishlistId" })
    WishlistDetails.belongsTo(models.Item, { foreignKey: "itemId" })
  };
  return WishlistDetails;
};