'use strict';

const ItemQuality = require("../models").ItemQuality

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const itemquality = await Promise.all([
      ItemQuality.upsert({
        id: 1,
        quality: "Rare",
        color: "#0070dd"
      }),
      ItemQuality.upsert({
        id: 2,
        quality: "Epic",
        color: "#a335ee"
      }),
      ItemQuality.upsert({
        id: 3,
        quality: "Legendary",
        color: "#ff8000"
      })
    ])

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('ItemQuality', null, {})

  }
};
