'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('role', {
    name: DataTypes.STRING
  }, {});
  Role.associate = function (models) {
    Role.belongsToMany(models.characterclass, { through: 'classroles', foreignKey: 'roleId' })
  };
  return Role;
};