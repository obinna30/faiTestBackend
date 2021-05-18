'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      START_LATITUDE: {
        type: Sequelize.STRING
      },
      START_LONGITUDE: {
        type: Sequelize.STRING
      },
      END_LATITUDE: {
        type: Sequelize.STRING
      },
      END_LONGITUDE: {
        type: Sequelize.STRING
      },
      DISTANCE: {
        type: Sequelize.STRING
      },
      STATUS: {
        type: Sequelize.STRING,
        defaultValue: "UNASSIGNED",
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Locations');
  }
};