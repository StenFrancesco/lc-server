'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('wishlist', {
    description: DataTypes.TEXT
  }, {});
  Wishlist.associate = function (models) {
    Wishlist.belongsTo(models.character)
    Wishlist.belongsToMany(models.item, { through: "wishlistdetails", foreignKey: "wishlistId" })
  };
  return Wishlist;
};