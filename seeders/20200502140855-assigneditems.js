'use strict';

const AssignedItem = require("../models").assigneditem

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const assigneditems = await Promise.all([
      AssignedItem.upsert({
        characterId: 1,
        itemId: 1
      }),
      AssignedItem.upsert({
        characterId: 4,
        itemId: 2
      })
    ])

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('assigneditems', null, {});

  }
};
