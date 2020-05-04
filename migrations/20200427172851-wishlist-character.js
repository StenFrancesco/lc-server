'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('characters', 'wishlistId', {
      type: Sequelize.INTEGER,
      references: {
        model: "wishlists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('characters', 'wishlistId')
  }
};
