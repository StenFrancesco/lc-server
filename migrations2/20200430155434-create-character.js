'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      guildId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "guilds",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      classId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "characterclasses",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      wishlistId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "wishlists",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isGuildMaster: {
        type: Sequelize.BOOLEAN
      },
      isClassLeader: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('characters');
  }
};