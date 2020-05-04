'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('wishlist', {
    description: DataTypes.STRING
  }, {});
  Wishlist.associate = function (models) {
    Wishlist.hasOne(models.character)
    Wishlist.belongsToMany(models.item, { through: "wishlistdetails", foreignKey: "wishlistId" })

  };
  return Wishlist;
};