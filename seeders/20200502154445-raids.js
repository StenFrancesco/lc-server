'use strict';

const Raid = require("../models").raid

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const raids = await Promise.all([
      Raid.upsert({
        eventId: 1,
        dungeonId: 1
      })
    ])

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('raids', null, {});

  }
};
