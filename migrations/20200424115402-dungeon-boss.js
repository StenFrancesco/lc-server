"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('bosses', 'dungeonId', {
      type: Sequelize.INTEGER,
      references: {
        model: "dungeons",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('bosses', 'dungeonId');
  },
};

