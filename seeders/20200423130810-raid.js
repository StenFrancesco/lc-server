'use strict';

const Raid = require("../models").Raid

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const raids = await Promise.all([
      Raid.upsert({
        eventId: 1,
        dungeonId: 1
      })
    ])

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Raid', null, {});

  }
};
