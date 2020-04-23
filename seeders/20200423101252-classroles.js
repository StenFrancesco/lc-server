'use strict';

const ClassRole = require("../models").ClassRole

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const classrole = await Promise.all([
      ClassRole.upsert({
        classId: 1,
        roleId: 2
      }),
      ClassRole.upsert({
        classId: 1,
        roleId: 3
      }),
      ClassRole.upsert({
        classId: 2,
        roleId: 4
      }),
      ClassRole.upsert({
        classId: 3,
        roleId: 3
      }),
      ClassRole.upsert({
        classId: 4,
        roleId: 4
      }),
      ClassRole.upsert({
        classId: 5,
        roleId: 3
      }),
      ClassRole.upsert({
        classId: 6,
        roleId: 1
      }),
      ClassRole.upsert({
        classId: 6,
        roleId: 4
      }),
      ClassRole.upsert({
        classId: 7,
        roleId: 1
      }),
      ClassRole.upsert({
        classId: 7,
        roleId: 2
      }),
      ClassRole.upsert({
        classId: 7,
        roleId: 3
      }),
      ClassRole.upsert({
        classId: 8,
        roleId: 1
      }),
      ClassRole.upsert({
        classId: 8,
        roleId: 3
      }),
      ClassRole.upsert({
        classId: 8,
        roleId: 4
      }),
      ClassRole.upsert({
        classId: 9,
        roleId: 1
      }),
      ClassRole.upsert({
        classId: 9,
        roleId: 2
      }),
      ClassRole.upsert({
        classId: 9,
        roleId: 3
      }),
      ClassRole.upsert({
        classId: 9,
        roleId: 4
      }),
    ])

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('ClassRole', null, {});

  }
};
