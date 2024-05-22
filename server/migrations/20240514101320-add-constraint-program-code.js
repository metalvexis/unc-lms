'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.sequelize.query(`ALTER TABLE Program ADD CONSTRAINT unique_program_code UNIQUE (program_code)`)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`ALTER TABLE Program DROP CONSTRAINT unique_program_code`)
  }
};
