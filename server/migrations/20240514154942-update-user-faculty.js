'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER TABLE User
        ADD CONSTRAINT fk_User_Faculty FOREIGN KEY (username) REFERENCES Faculty(id);`
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER TABLE User
        DROP CONSTRAINT fk_User_Faculty;`
    )
  }
};
