'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Role.associate = function (models) {
    Role.belongsToMany(models.characterclass, { through: 'classroles', foreignKey: 'roleId' })
  };
  return Role;
};