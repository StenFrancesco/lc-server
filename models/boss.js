'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boss = sequelize.define('Boss', {
    dungeonId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Boss.associate = function (models) {
    Boss.hasMany(models.Item)
    Boss.belongsTo(models.Dungeon)
  };
  return Boss;
};