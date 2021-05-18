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
        type: Sequelize.FLOAT
      },
      START_LONGITUDE: {
        type: Sequelize.FLOAT
      },
      END_LATITUDE: {
        type: Sequelize.FLOAT
      },
      END_LONGITUDE: {
        type: Sequelize.FLOAT
      },
      DISTANCE: {
        type: Sequelize.FLOAT
      },
      STATUS: {
        type: Sequelize.STRING
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