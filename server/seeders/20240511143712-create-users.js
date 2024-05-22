'use strict';
const { hashPassword } = require('../dist/lib/index.js');

const testFaculty = [
  {
    id: 735,
    lastname: 'REYES',
    middlename: 'TRILLANES',
    firstname: 'AGNES',
    educ_attainment: 'BSCS, MIS',
    mother_dept: 'CS',
    status: '1',
  },{
    id: 1034,
    lastname: 'DANILA',
    middlename: 'CORONEL',
    firstname: 'JUNE ARREB',
    educ_attainment: 'BSCS, MIT',
    mother_dept: 'CS',
    status: '1',
  },
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const pw = await hashPassword('password!');
    console.log('pw', pw)
    await queryInterface.bulkInsert('Faculty', testFaculty, {});
    await queryInterface.bulkInsert('User', testFaculty.map(
      (f) => {
        return {
          username: f.id,
          password: pw,
        }
      }
    ), {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
    await queryInterface.bulkDelete('Faculty', null, {});
  }
};
