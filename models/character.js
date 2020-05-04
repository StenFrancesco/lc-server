'use strict';
module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('character', {
    name: DataTypes.STRING,
    isGuildMaster: DataTypes.BOOLEAN,
    isClassLeader: DataTypes.BOOLEAN
  }, {});
  Character.associate = function (models) {
    Character.belongsToMany(models.event, { through: "characterevent", foreignKey: "characterId" })
    Character.belongsTo(models.characterclass)
    Character.belongsTo(models.guild)
    Character.belongsTo(models.wishlist)
    Character.belongsTo(models.user)
    Character.belongsToMany(models.item, { through: "assigneditems", foreignKey: "itemId" })
  };
  return Character;
};