'use strict';

const Dungeon = require("../models").Dungeon

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const dungeons = await Promise.all([
      Dungeon.upsert({
        name: "Molten Core"
      }),
      Dungeon.upsert({
        name: "Blackwing Lair"
      }),
      Dungeon.upsert({
        name: "Zul'Gurub"
      }),
      Dungeon.upsert({
        name: "Ruins of Ahn'Qiraj"
      }),
      Dungeon.upsert({
        name: "Temple of Ahn'Qiraj"
      }),
      Dungeon.upsert({
        name: "Naxxramas"
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
