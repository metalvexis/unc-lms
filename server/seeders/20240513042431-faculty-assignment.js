'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const [ depts ] = await queryInterface.sequelize.query(
      `SELECT id FROM Department WHERE department_code = 'CS'`
    )
    if (!depts.length) return;

    const [ deans ] = await queryInterface.sequelize.query(
      `SELECT id FROM Faculty WHERE lastname = 'REYES'`
    )
    const [ asstDeans ] = await queryInterface.sequelize.query(
      `SELECT id from Faculty WHERE lastname = 'REYES'`
    )
    const [ programHeads ] = await queryInterface.sequelize.query(
      `SELECT id from Faculty WHERE lastname = 'DANILA'`
    )
    const [ programHeadPeriods ] = await queryInterface.sequelize.query(
      `SELECT id from Period WHERE school_yr = '2425'`
    )

    const [ programs ] = await queryInterface.sequelize.query(`SELECT id FROM Program LIMIT 1`);
    await queryInterface.bulkInsert('Dean', [{
      faculty_id: deans[0].id,
      dept_id: depts[0].id,
    }], {});
    await queryInterface.bulkInsert('AssistantDean', [{
      faculty_id: asstDeans[0].id,
      dept_id: depts[0].id,
    }], {});
    await queryInterface.bulkInsert('ProgramHead', [{
      faculty_id: programHeads[0].id,
      dept_id: depts[0].id,
      program_id: programs[0].id,
      period_id: programHeadPeriods[0].id
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dean', null, {});
    await queryInterface.bulkDelete('AssistantDean', null, {});
    await queryInterface.bulkDelete('ProgramHead', null, {});
  }
};
