'use strict';

const ItemSubClass = require("../models").ItemSubClass

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const itemsubclass = await Promise.all([
      ItemSubClass.upsert({
        id: 1,
        name: "Cloth"
      }),
      ItemSubClass.upsert({
        id: 2,
        name: "Leather"
      }),
      ItemSubClass.upsert({
        id: 3,
        name: "Mail"
      }),
      ItemSubClass.upsert({
        id: 4,
        name: "Plate"
      }),
      ItemSubClass.upsert({
        id: 5,
        name: "Dagger"
      }),
      ItemSubClass.upsert({
        id: 6,
        name: "Sword"
      }),
      ItemSubClass.upsert({
        id: 7,
        name: "Mace"
      }),
      ItemSubClass.upsert({
        id: 8,
        name: "Staff"
      }),
      ItemSubClass.upsert({
        id: 9,
        name: "Axe"
      }),
      ItemSubClass.upsert({
        id: 10,
        name: "Shield"
      }),
      ItemSubClass.upsert({
        id: 11,
        name: "Gun"
      }),
      ItemSubClass.upsert({
        id: 12,
        name: "Crossbow"
      }),
      ItemSubClass.upsert({
        id: 13,
        name: "Bow"
      }),
      ItemSubClass.upsert({
        id: 14,
        name: "Wand"
      }),

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
