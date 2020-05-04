'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassRole = sequelize.define('classrole', {
    classId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
  }, {});
  ClassRole.associate = function (models) {
    ClassRole.belongsTo(models.role, { through: "classroles", foreignKey: "roleId" })
    ClassRole.belongsTo(models.characterclass, { through: "classroles", foreignKey: "classId" })
  };
  return ClassRole;
};