'use strict';

const Dungeon = require("../models").dungeon

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const dungeons = await Promise.all([
      Dungeon.upsert({
        id: 1,
        name: "Molten Core"
      }),
      Dungeon.upsert({
        id: 2,
        name: "Blackwing Lair"
      }),
      Dungeon.upsert({
        id: 3,
        name: "Zul'Gurub"
      }),
      Dungeon.upsert({
        id: 4,
        name: "Ruins of Ahn'Qiraj"
      }),
      Dungeon.upsert({
        id: 5,
        name: "Temple of Ahn'Qiraj"
      }),
      Dungeon.upsert({
        id: 6,
        name: "Naxxramas"
      }),
      Dungeon.upsert({
        id: 7,
        name: "Onyxia's Lair"
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("dungeons", null, {});

  }
};
