'use strict';

const Guild = require("../models").guild

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const guilds = await Promise.all([
      Guild.upsert({
        id: 1,
        name: "Dynasty"
      }),
      Guild.upsert({
        id: 2,
        name: "Pandora"
      })
    ])
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('guilds', null, {});

  }
};
