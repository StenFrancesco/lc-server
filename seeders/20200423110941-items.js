'use strict';

const Item = require("../models").Item

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const items = await Promise.all([
      Item.upsert({
        id: 1,
        bossId: ,
        itemClassId: ,
        itemSubClassId: ,
        itemQualityId: ,
        name: "Bonereaver's Edge",
        imageUrl: 
      })
    ])

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
