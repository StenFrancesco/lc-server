'use strict';

const Character = require("../models").character

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const characters = await Promise.all([
      Character.upsert({
        id: 1,
        userId: 1,
        guildId: 1,
        classId: 1,
        wishlistId: 1,
        name: "Mahusivewarrior",
        isGuildMaster: true,
        isClassLeader: false
      }),
      Character.upsert({
        id: 2,
        userId: 1,
        guildId: 1,
        classId: 2,
        wishlistId: 2,
        name: "Frostyfrost",
        isGuildMaster: false,
        isClassLeader: false
      }),
      Character.upsert({
        id: 3,
        userId: 2,
        guildId: 1,
        classId: 3,
        wishlistId: 3,
        name: "Arrow",
        isGuildMaster: false,
        isClassLeader: false
      }),
      Character.upsert({
        id: 4,
        userId: 3,
        guildId: 2,
        classId: 4,
        wishlistId: 4,
        name: "Darky",
        isGuildMaster: true,
        isClassLeader: false
      }),
      Character.upsert({
        id: 5,
        userId: 4,
        guildId: 2,
        classId: 5,
        wishlistId: 5,
        name: "Sneakyboi",
        isGuildMaster: false,
        isClassLeader: true
      }),
    ])
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('characters', null, {});

  }
};
