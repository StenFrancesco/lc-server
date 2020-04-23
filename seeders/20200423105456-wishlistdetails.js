'use strict';

const WishlistDetails = require("../models").WishlistDetails

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const wishlistdetails = await Promise.all([
      WishlistDetails.upsert({
        wishlistId: 1,
        itemId: 1
      }),
      WishlistDetails.upsert({
        wishlistId: 2,
        itemId: 1
      })
    ])

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('WishlistDetails', null, {});

  }
};
