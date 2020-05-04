'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('characters', 'guildId', {
      type: Sequelize.INTEGER,
      references: {
        model: "guilds",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('characters', 'guildId')
  }
};
