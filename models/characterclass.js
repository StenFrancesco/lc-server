'use strict';
module.exports = (sequelize, DataTypes) => {
  const CharacterClass = sequelize.define('characterclass', {
    name: DataTypes.STRING
  }, {});
  CharacterClass.associate = function (models) {
    CharacterClass.hasMany(models.character)
    CharacterClass.belongsToMany(models.role, { through: 'classrole', foreignKey: 'classId' })
  };
  return CharacterClass;
};