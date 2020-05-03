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
      })
    ])

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('wishlists', null, {});

  }
};
