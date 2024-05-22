import express from 'express';
import { Program } from '../../models/Program.model';
import { PEO } from '../../models/PEO.model';
import { catchAsyncErrors } from '../../lib/catchAsyncErrors';

export const route = express.Router();

route.get('/', async (req, res) => {
  const peo = await PEO.findAll({
    include: [Program],
  });
  res.json({
    peo,
  });
  return;
});

route.post(
  '/',
  catchAsyncErrors(async (req, res) => {
    const newPEOBody = req.body;
    const newRow = await PEO.create({
      peo_desc: newPEOBody.peo_desc,
      seq_no: newPEOBody.seq_no,
      program_code: newPEOBody.program_code,
      program_id: newPEOBody.program_id,
    });
    res.json(newRow);
  })
);

route.delete(
  '/',
  catchAsyncErrors(async (req, res) => {
    const peoId = req.query.id;
    const result = await PEO.findOne({
      where: {
        id: peoId,
      },
    });
    await result?.destroy();

    res.sendStatus(200);
  })
);

export default route;
