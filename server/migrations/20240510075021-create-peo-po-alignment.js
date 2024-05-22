'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PEO_PO_Alignment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      po_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ProgramOutcome',
          key: 'id'
        }
      },
      peo_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PEO',
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
    await queryInterface.dropTable('PEO_PO_Alignment');
  }
};