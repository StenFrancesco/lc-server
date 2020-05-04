'use strict';

const CharacterEvent = require("../models").characterevent

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const characterevent = await Promise.all([
      CharacterEvent.upsert({
        characterId: 1,
        eventId: 1
      }),
      CharacterEvent.upsert({
        characterId: 2,
        eventId: 1
      })
    ])

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('characterevent', null, {});

  }
};
