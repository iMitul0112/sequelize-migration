'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('posts', 'name', { type: Sequelize.STRING });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('posts', 'name');
  }
};
