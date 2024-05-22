import express from 'express';
import { Program } from '../../models/Program.model';
import { ProgramHead } from '../../models/ProgramHead.model';
import { Department } from '../../models/Department.model';
import { Faculty } from '../../models/Faculty.model';
import { Period } from '../../models/Period.model';
import { catchAsyncErrors } from '../../lib/catchAsyncErrors';
import { mwValidateRole } from '../../middlewares/mwValidateRole';
import { ROLE } from '../../types';

export const route = express.Router();

route.get(
  '/',
  mwValidateRole([ROLE.DEAN, ROLE.ASSTDEAN, ROLE.PROGRAMHEAD]),
  async (req, res) => {
    const program = await Program.findAll({
      include: [
        {
          model: Department,
        },
        {
          model: Faculty,
        },
        {
          model: Period,
        },
      ],
    });
    res.json({
      program,
    });
    return;
  }
);

route.put(
  '/',
  mwValidateRole([ROLE.DEAN]),
  catchAsyncErrors(async (req, res) => {
    const newProgramBody = req.body;
    const existingRow = await Program.findOrCreate({
      where: {
        program_code: newProgramBody.program_code,
        program_name: newProgramBody.program_name,
        dept_id: newProgramBody.dept_id,
      }
    });

    return res.json(existingRow);
  })
);

route.delete(
  '/',
  mwValidateRole([ROLE.DEAN]),
  catchAsyncErrors(async (req, res) => {
    const programId = req.query.id;
    const result = await Program.findOne({
      where: {
        id: programId,
      },
    });
    await result?.destroy();

    res.sendStatus(200);
  })
);

route.post(
  '/assignProgramHead',
  mwValidateRole([ROLE.DEAN]),
  catchAsyncErrors(async (req, res) => {
    const faculty = await Faculty.findOne({
      where: {
        id: req.body.faculty_id,
      },
    });

    const program = await Program.findOne({
      where: {
        id: req.body.program_id,
      },
      include: [Department],
    });

    if (!faculty || !program) {
      return res.sendStatus(400);
    }

    const oldProgramHead = await ProgramHead.findOne({
      where: {
        program_id: program.id,
        dept_id: program.department.id,
      },
    });

    if (oldProgramHead) await oldProgramHead.destroy();

    const newProgramHead = await ProgramHead.create({
      faculty_id: faculty.id,
      program_id: program.id,
      dept_id: program.department.id,
    });

    res.send(newProgramHead);
  })
);

export default route;
