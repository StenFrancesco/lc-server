'use strict';

const AssignedItem = require("../models").assigneditem

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const assigneditems = await Promise.all([
      AssignedItem.upsert({
        characterId: 1,
        itemId: 1
      })
    ])

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('assigneditems', null, {});

  }
};
