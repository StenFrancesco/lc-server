'use strict';
module.exports = (sequelize, DataTypes) => {
  const CharacterClass = sequelize.define('characterclass', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  CharacterClass.associate = function (models) {
    CharacterClass.hasMany(models.character)
    CharacterClass.belongsToMany(models.role, { through: 'classrole', foreignKey: 'classId' })
  };
  return CharacterClass;
};