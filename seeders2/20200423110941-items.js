'use strict';

const Item = require("../models").item

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const items = await Promise.all([
      Item.upsert({
        id: 1,
        bossId: 10,
        itemClassId: 12,
        itemSubClassId: 6,
        itemQualityId: 2,
        name: "Bonereaver's Edge",
        imageUrl: "https://classic.wowhead.com/item=17076/bonereavers-edge"
      })
    ])

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('items', null, {});

  }
};
