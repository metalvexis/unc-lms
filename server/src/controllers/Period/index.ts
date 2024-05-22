import express from 'express';
import { catchAsyncErrors } from '../../lib/catchAsyncErrors';
import { Period } from '../../models/Period.model';

export const route = express.Router();

route.get('/', async (req, res) => {
  const period = await Period.findAll();
  res.json({
    period,
  });
  return;
});

route.post(
  '/',
  catchAsyncErrors(async (req, res) => {
    const newPeriodBody = req.body;
    const newRow = await Period.create({
      school_yr: newPeriodBody.school_yr,
      sem: newPeriodBody.sem,
    });
    res.json(newRow);
  })
);

route.delete(
  '/',
  catchAsyncErrors(async (req, res) => {
    const periodId = req.query.id;
    const result = await Period.findOne({
      where: {
        id: periodId,
      },
    });
    await result?.destroy();

    res.sendStatus(200);
  })
);

export default route;
