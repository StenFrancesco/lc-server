'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('characters', 'characterclassId', {
      type: Sequelize.INTEGER,
      references: {
        model: "characterclasses",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('characters', 'characterclassId')

  }
};
