'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guild = sequelize.define('guild', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: DataTypes.STRING
  }, {});
  Guild.associate = function (models) {
    Guild.hasMany(models.character)
  };
  return Guild;
};