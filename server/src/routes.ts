import express from 'express';
import type { Request, Response } from 'express';
import ctrlAuth from './controllers/auth';
import ctrlProgram from './controllers/Program';
import ctrlPEO from './controllers/PEO';
import ctrlProgramOutcome from './controllers/ProgramOutcome';
import ctrlPeriod from './controllers/Period';
import ctrlAlignment from './controllers/PEO_PO_Alignment';
import ctrlUser from './controllers/User';
import { mwValidateAuth } from './middlewares/mwValidateAuth';

export const insecureRoutes = express.Router();
export const secureRoutes = express.Router();

insecureRoutes.use('/Auth', ctrlAuth);

secureRoutes.use(mwValidateAuth);

secureRoutes.use('/Program', ctrlProgram);
secureRoutes.use('/PEO', ctrlPEO);
secureRoutes.use('/ProgramOutcome', ctrlProgramOutcome);
secureRoutes.use('/Period', ctrlPeriod);
secureRoutes.use('/Alignment', ctrlAlignment);
secureRoutes.use('/User', ctrlUser);

secureRoutes.use('/PEO_PO_Alignment', (req: Request, res: Response) => {
  res.send('OK');
});
