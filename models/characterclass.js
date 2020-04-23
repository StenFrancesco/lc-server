'use strict';
module.exports = (sequelize, DataTypes) => {
  const CharacterClass = sequelize.define('CharacterClass', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  CharacterClass.associate = function (models) {
    CharacterClass.hasMany(models.Character)
    CharacterClass.belongsToMany(models.Role, { through: 'ClassRoles', foreignKey: 'classId' })
  };
  return CharacterClass;
};