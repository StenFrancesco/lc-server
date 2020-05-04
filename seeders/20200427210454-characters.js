'use strict';

const Character = require("../models").character
// const Wishlist = require("../models").wishlist

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // const wishlist1 = await Wishlist.findOne({
    //   where: {
    //     description: "Mahusivewarrior wishlist"
    //   }
    // })

    // const wishlist2 = await Wishlist.findOne({
    //   where: {
    //     description: "Frostyfrost wishlist"
    //   }
    // })

    // const wishlist3 = await Wishlist.findOne({
    //   where: {
    //     description: "Arrow wishlist"
    //   }
    // })

    // const wishlist4 = await Wishlist.findOne({
    //   where: {
    //     description: "Darky wishlist"
    //   }
    // })

    // const wishlist5 = await Wishlist.findOne({
    //   where: {
    //     description: "Sneakyboi wishlist"
    //   }
    // })


    const characters = await Promise.all([
      Character.upsert({
        id: 1,
        userId: 1,
        guildId: 1,
        characterclassId: 1,
        wishlistId: 1,
        name: "Mahusivewarrior",
        isGuildMaster: true,
        isClassLeader: false
      }),
      Character.upsert({
        id: 2,
        userId: 1,
        guildId: 1,
        characterclassId: 2,
        wishlistId: 2,
        name: "Frostyfrost",
        isGuildMaster: false,
        isClassLeader: false
      }),
      Character.upsert({
        id: 3,
        userId: 2,
        guildId: 1,
        characterclassId: 3,
        wishlistId: 3,
        name: "Arrow",
        isGuildMaster: false,
        isClassLeader: false
      }),
      Character.upsert({
        id: 4,
        userId: 3,
        guildId: 2,
        characterclassId: 4,
        wishlistId: 4,
        name: "Darky",
        isGuildMaster: true,
        isClassLeader: false
      }),
      Character.upsert({
        id: 5,
        userId: 4,
        guildId: 2,
        characterclassId: 5,
        wishlistId: 5,
        name: "Sneakyboi",
        isGuildMaster: false,
        isClassLeader: true
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('characters', null, {});

  }
};
