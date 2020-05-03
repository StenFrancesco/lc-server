'use strict';

const Item = require("../models").item

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const items = await Promise.all([
      Item.upsert({
        id: 1,
        bossId: 10,
        itemclassId: 12,
        itemsubclassId: 6,
        itemqualityId: 2,
        name: "Bonereaver's Edge",
        imageUrl: "",
        link: "https://classic.wowhead.com/item=17076/bonereavers-edge"
      })
    ])

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('items', null, {});

  }
};
