'use strict';

const AssignedItems = require("../models").AssignedItems

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const assigneditems = await Promise.all([
      AssignedItems.upsert({
        characterId: 1,
        itemId: 1
      })
    ])

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('AssignedItems', null, {});

  }
};
