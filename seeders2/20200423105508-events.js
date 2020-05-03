'use strict';

const Event = require("../models").event

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const events = await Promise.all([
      Event.upsert({
        id: 1,
        date: new Date(),
        name: "MC raid"
      })
    ])
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('events', null, {});

  }
};
