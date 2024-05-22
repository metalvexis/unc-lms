import express from 'express';
import { Program } from '../../models/Program.model';
import { catchAsyncErrors } from '../../lib/catchAsyncErrors';
import { ProgramOutcome } from '../../models/ProgramOutcome.model';
import { PEO } from '../../models/PEO.model';

export const route = express.Router();

route.get('/', async (req, res) => {
  const programOutcome = await ProgramOutcome.findAll({
    include: [Program, PEO],
  });
  res.json({
    programOutcome,
  });
  return;
});

route.post(
  '/',
  catchAsyncErrors(async (req, res) => {
    const newProgramOutcomeBody = req.body;
    const newRow = await ProgramOutcome.create({
      po_desc: newProgramOutcomeBody.po_desc,
      seq_no: newProgramOutcomeBody.seq_no,
      program_code: newProgramOutcomeBody.program_code,
      program_id: newProgramOutcomeBody.program_id,
    });
    res.json(newRow);
  })
);

route.delete(
  '/',
  catchAsyncErrors(async (req, res) => {
    const programOutcomeId = req.query.id;
    const result = await ProgramOutcome.findOne({
      where: {
        id: programOutcomeId,
      },
    });
    await result?.destroy();

    res.sendStatus(200);
  })
);

export default route;
