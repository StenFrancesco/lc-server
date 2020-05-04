'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('item', {
    // bossId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // itemClassId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // itemSubClassId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true
    // },
    // itemQualityId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: DataTypes.STRING,
    link: DataTypes.STRING
  }, {});
  Item.associate = function (models) {
    Item.belongsTo(models.itemclass)
    Item.belongsTo(models.itemsubclass)
    Item.belongsTo(models.itemquality)
    Item.belongsTo(models.boss)
    Item.belongsTo(models.assigneditem)
    Item.belongsToMany(models.wishlist, { through: "wishlistdetails", foreignKey: "itemId" })
  };
  return Item;
};