"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

const User = require("../models").user;

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
        id: 3,
        name: "razz",
        email: "razzion@live.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS)
      }),
      User.upsert({
        id: 4,
        name: "dysphora",
        email: "dys@dys.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS)
      }),
      User.upsert({
        id: 5,
        name: "fletch",
        email: "fletch@dynasty.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS)
      }),
    ]);

    // console.log(`SEEDED: ${users.length} users`);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
