'use strict';

const ItemClass = require("../models").itemclass

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const itemclass = await Promise.all([
      ItemClass.upsert({
        id: 1,
        name: "Head"
      }),
      ItemClass.upsert({
        id: 2,
        name: "Neck"
      }),
      ItemClass.upsert({
        id: 3,
        name: "Shoulder"
      }),
      ItemClass.upsert({
        id: 3,
        name: "Back"
      }),
      ItemClass.upsert({
        id: 4,
        name: "Chest"
      }),
      ItemClass.upsert({
        id: 5,
        name: "Wrist"
      }),
      ItemClass.upsert({
        id: 6,
        name: "Hands"
      }),
      ItemClass.upsert({
        id: 7,
        name: "Waist"
      }),
      ItemClass.upsert({
        id: 8,
        name: "Legs"
      }),
      ItemClass.upsert({
        id: 9,
        name: "Feet"
      }),
      ItemClass.upsert({
        id: 10,
        name: "One-Hand"
      }),
      ItemClass.upsert({
        id: 11,
        name: "Off Hand"
      }),
      ItemClass.upsert({
        id: 12,
        name: "Two Hand"
      }),
      ItemClass.upsert({
        id: 13,
        name: "Trinket"
      }),
      ItemClass.upsert({
        id: 14,
        name: "Ranged"
      }),
      ItemClass.upsert({
        id: 15,
        name: "Finger"
      }),

    ])

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('itemclass', null, {});

  }
};
