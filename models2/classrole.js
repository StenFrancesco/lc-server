'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassRole = sequelize.define('classrole', {
    classId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
  }, {});
  ClassRole.associate = function (models) {
    ClassRole.belongsTo(models.characterclass, { foreignKey: "classId" })
    ClassRole.belongsTo(models.role, { foreignKey: "roleId" })
  };
  return ClassRole;
};