'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassRole = sequelize.define('ClassRole', {
    classId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
  }, {});
  ClassRole.associate = function (models) {
    ClassRole.belongsTo(models.CharacterClass, { foreignKey: "classId" })
    ClassRole.belongsTo(models.Role, { foreignKey: "roleId" })
  };
  return ClassRole;
};