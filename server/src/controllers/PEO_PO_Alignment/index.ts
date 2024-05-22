import express from 'express';
import { catchAsyncErrors } from '../../lib/catchAsyncErrors';
import { ProgramOutcome } from '../../models/ProgramOutcome.model';
import { PEO } from '../../models/PEO.model';
import { PEO_PO_Alignment } from '../../models/PEO_PO_Alignment.model';

export const route = express.Router();

route.get('/', async (req, res) => {
  const alignment = await PEO_PO_Alignment.findAll({
    include: [ProgramOutcome, PEO],
  });
  res.json({
    alignment,
  });
  return;
});

route.post(
  '/',
  catchAsyncErrors(async (req, res) => {
    const peo = await PEO.findOne({
      where: {
        id: req.body.peo_id,
      },
    });

    const programOutcome = await ProgramOutcome.findOne({
      where: {
        id: req.body.po_id,
      },
    });

    if (!peo || !programOutcome) {
      return res.sendStatus(400);
    }

    const previousAlignment = await PEO_PO_Alignment.findOne({
      where: {
        peo_id: peo.id,
        po_id: programOutcome.id,
      },
    });

    if (previousAlignment) await previousAlignment.destroy();

    const newAlignment = await PEO_PO_Alignment.create({
      po_id: programOutcome.id,
      peo_id: peo.id,
    });

    res.send(newAlignment);
  })
);

route.delete(
  '/',
  catchAsyncErrors(async (req, res) => {
    const alignmentId = req.query.id;
    const result = await PEO_PO_Alignment.findOne({
      where: {
        id: alignmentId,
      },
    });
    await result?.destroy();

    res.sendStatus(200);
  })
);

export default route;
