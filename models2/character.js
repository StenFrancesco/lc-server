'use strict';
module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('character', {
    // userId: DataTypes.INTEGER,
    // guildId: DataTypes.INTEGER,
    // classId: DataTypes.INTEGER,
    // wishlistId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isGuildMaster: DataTypes.BOOLEAN,
    isClassLeader: DataTypes.BOOLEAN
  }, {});
  Character.associate = function (models) {
    Character.belongsToMany(models.event, { through: "characterevent", foreignKey: "characterId" })
    Character.belongsTo(models.user)
    Character.belongsTo(models.guild)
    Character.hasOne(models.wishlist)
    Character.belongsTo(models.characterclass)
    Character.hasMany(models.assigneditem)
  };
  return Character;
};
