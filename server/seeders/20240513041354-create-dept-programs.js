'use strict';

const testDepartment = [
  {
    department_code: 'CS',
    department_name: 'COLLEGE OF COMPUTER STUDIES'
  }
]

const testPeriod = [
  {
    school_yr: '2425',
    sem: 1,
  }
]

const testProgram = [
  {
    program_code: 'BSCS',
    program_name: 'BS COMPUTER SCIENCE'
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Department', testDepartment, {});
    const [ depts ] = await queryInterface.sequelize.query(`SELECT id FROM Department LIMIT 1`);
    await queryInterface.bulkInsert('Period', testPeriod, {});
    await queryInterface.bulkInsert('Program', [{...testProgram[0], dept_id: depts[0].id}], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Program', null, {});
    await queryInterface.bulkDelete('Period', null, {});
    await queryInterface.bulkDelete('Department', null, {});    
  }
};
