'use strict';

const Class = require("../models").CharacterClass

module.exports = {
  up: (queryInterface, Sequelize) => {

    const characterclass = await Promise.all([
      Class.upsert({
        id: 1,
        name: "Warrior"
      })
    ])

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Class', null, {});

  }
};
