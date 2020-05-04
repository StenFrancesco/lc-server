'use strict';

const Role = require("../models").role


module.exports = {
  up: async (queryInterface, Sequelize) => {

    const roles = await Promise.all([
      Role.upsert({
        id: 1,
        name: "Support"
      }),
      Role.upsert({
        id: 2,
        name: "Tank"
      }),
      Role.upsert({
        id: 3,
        name: "Physical DPS"
      }),
      Role.upsert({
        id: 4,
        name: "Magic DPS"
      })
    ])
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('roles', null, {})

  }
};
