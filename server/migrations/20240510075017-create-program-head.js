'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProgramHead', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      faculty_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Faculty',
          key: 'id'
        }
      },
      dept_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Department',
          key: 'id'
        }
      },
      period_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Period',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProgramHead');
  }
};