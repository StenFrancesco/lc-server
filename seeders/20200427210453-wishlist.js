'use strict';

const Wishlist = require("../models").wishlist

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const wishlists = await Promise.all([
      Wishlist.upsert({
        id: 1,
        description: "Mahusivewarrior wishlist"
      }),
      Wishlist.upsert({
        id: 2,
        description: "Frostyfrost wishlist"
      }),
      Wishlist.upsert({
        id: 3,
        description: "Arrow wishlist"
      }),
      Wishlist.upsert({
        id: 4,
        description: "Darky wishlist"
      }),
      Wishlist.upsert({
        id: 5,
        description: "Sneakyboi wishlist"
      })
    ])

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('wishlists', null, {});

  }
};
