'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guild = sequelize.define('Guild', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: DataTypes.STRING
  }, {});
  Guild.associate = function (models) {
    Guild.hasMany(models.Character)
  };
  return Guild;
};