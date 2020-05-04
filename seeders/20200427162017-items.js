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
      }),
      Item.upsert({
        id: 2,
        bossId: 18,
        itemclassId: 13,
        itemqualityId: 2,
        name: "Neltharion's Tear",
        imageUrl: "",
        link: "https://classic.wowhead.com/item=19379/neltharions-tear"
      })
    ])

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('items', null, {});

  }
};
