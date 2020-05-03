'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guild = sequelize.define('guild', {
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Guild.associate = function (models) {
    Guild.hasMany(models.character)
  };
  return Guild;
};