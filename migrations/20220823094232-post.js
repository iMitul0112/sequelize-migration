'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('posts', 'name', 'userName');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('posts', 'userName', 'name');

  }
};
