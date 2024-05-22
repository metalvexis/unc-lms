'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // ADD ProgramHead -> Program relationship
    await queryInterface.sequelize.query(
      `ALTER TABLE ProgramHead
        ADD COLUMN program_id INT NOT NULL;`
    )
    await queryInterface.sequelize.query(
      `ALTER TABLE ProgramHead
        ADD CONSTRAINT fk_ProgramHead_Program FOREIGN KEY (program_id) REFERENCES Program(id);`
    )

    // ADD Program -> Department relationship
    await queryInterface.sequelize.query(
      `ALTER TABLE Program
        ADD COLUMN dept_id INT NOT NULL;`
    )
    await queryInterface.sequelize.query(
      `ALTER TABLE Program
        ADD CONSTRAINT fk_Program_Department FOREIGN KEY (dept_id) REFERENCES Department(id);`
    )

    // ADD ProgramOutcome -> Program relationship
    await queryInterface.sequelize.query(
      `ALTER TABLE ProgramOutcome
        ADD COLUMN program_id INT NOT NULL;`
    )
    await queryInterface.sequelize.query(
      `ALTER TABLE ProgramOutcome
        ADD CONSTRAINT fk_ProgramOutcome_Program FOREIGN KEY (program_id) REFERENCES Program(id);`
    )

    // ADD PEO -> Program relationship
    await queryInterface.sequelize.query(
      `ALTER TABLE PEO
        ADD COLUMN program_id INT NOT NULL;`
    )
    await queryInterface.sequelize.query(
      `ALTER TABLE PEO
        ADD CONSTRAINT fk_PEO_Program FOREIGN KEY (program_id) REFERENCES Program(id);`
    )
  },

  async down (queryInterface, Sequelize) {
    // DROP ProgramHead -> Program relationship
    await queryInterface.sequelize.query(
      `ALTER TABLE ProgramHead
        DROP FOREIGN KEY fk_ProgramHead_Program`
    )
    await queryInterface.sequelize.query(
      `ALTER TABLE ProgramHead 
        DROP COLUMN program_id`
    )

    // DROP Program -> Department relationship
    await queryInterface.sequelize.query(
      `ALTER TABLE Program 
        DROP FOREIGN KEY fk_Program_Department`
    )
    await queryInterface.sequelize.query(
      `ALTER TABLE Program 
        DROP COLUMN dept_id`
    )
    
    // DROP ProgramOutcome -> Program relationship
    await queryInterface.sequelize.query(
      `ALTER TABLE ProgramOutcome
        DROP FOREIGN KEY fk_ProgramOutcome_Program`
    )
    await queryInterface.sequelize.query(
      `ALTER TABLE ProgramOutcome 
        DROP COLUMN program_id`
    )

    // DROP PEO -> Program relationship
    await queryInterface.sequelize.query(
      `ALTER TABLE PEO
        DROP FOREIGN KEY fk_PEO_Program`
    )
    await queryInterface.sequelize.query(
      `ALTER TABLE PEO 
        DROP COLUMN program_id`
    )
  }
};
