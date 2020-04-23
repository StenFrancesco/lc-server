'use strict';
module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('Character', {
    userId: DataTypes.INTEGER,
    guildId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER,
    wishlistId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isGuildMaster: DataTypes.BOOLEAN,
    isClassLeader: DataTypes.BOOLEAN
  }, {});
  Character.associate = function (models) {
    Character.belongsToMany(models.Event, { through: "CharacterEvent", foreignKey: "characterId" })
    Character.belongsTo(models.User)
    Character.belongsTo(models.Guild)
    Character.hasOne(models.Wishlist)
    Character.hasOne(models.CharacterClass)
    Character.hasMany(models.AssignedItems)
  };
  return Character;
};
