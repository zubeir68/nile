'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('channel', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      channelname: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      firstname: { type: Sequelize.STRING },
      lastname: { type: Sequelize.STRING },
      biography: { type: Sequelize.STRING(5000) },
      image_url: { type: Sequelize.STRING(1000) },
      created_at: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('channel');
  }
};