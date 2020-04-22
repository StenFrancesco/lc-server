'use strict';

const Guild = require("../models").Guild

module.exports = {
  up: (queryInterface, Sequelize) => {

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

    return queryInterface.bulkDelete('Guild', null, {});

  }
};
