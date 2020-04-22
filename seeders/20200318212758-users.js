"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

const User = require("../models").User;

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const users = await Promise.all([
      User.upsert({
        id: 1,
        name: "testuser",
        email: "test@test.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS)
      }),
      User.upsert({
        id: 2,
        name: "dummy",
        email: "dummy@dummy.com",
        password: bcrypt.hashSync("dummy1234", SALT_ROUNDS)
      }),
      User.upsert({
        id: 1,
        name: "razz",
        email: "razzion@live.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS)
      }),
      User.upsert({
        id: 1,
        name: "dysphora",
        email: "dys@dys.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS)
      }),
      User.upsert({
        id: 1,
        name: "fletch",
        email: "fletch@dynasty.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS)
      }),
    ]);

    // console.log(`SEEDED: ${users.length} users`);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  }
};
