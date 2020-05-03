'use strict';

const Class = require("../models").characterclass

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const characterclass = await Promise.all([
      Class.upsert({
        id: 1,
        name: "Warrior"
      }),
      Class.upsert({
        id: 2,
        name: "Mage"
      }),
      Class.upsert({
        id: 3,
        name: "Hunter"
      }),
      Class.upsert({
        id: 4,
        name: "Warlock"
      }),
      Class.upsert({
        id: 5,
        name: "Rogue"
      }),
      Class.upsert({
        id: 6,
        name: "Priest"
      }),
      Class.upsert({
        id: 7,
        name: "Paladin"
      }),
      Class.upsert({
        id: 8,
        name: "Shaman"
      }),
      Class.upsert({
        id: 9,
        name: "Druid"
      }),

    ])

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('characterclass', null, {});

  }
};
