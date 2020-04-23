'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: "Users",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      guildId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: "Guilds",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      classId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: "CharacterClasses"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      wishlistId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: "Wishlists"
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
    return queryInterface.dropTable('Characters');
  }
};