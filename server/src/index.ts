import express from 'express';
import { Request, Response, NextFunction } from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';

import SequelizeDb from './services/sequelizedb';
import { secureRoutes, insecureRoutes } from './routes';

import 'dotenv/config';

console.log('Running in', process.env.NODE_ENV);

const PORT = process.env.PORT;

const dbService = SequelizeDb.getDbInstance();

dbService.then(async (db) => {
  console.log('Loaded Models :', db.models);
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: ['http://localhost:5173'], // localhost dev react-vite
  })
);

app.use('/api', [insecureRoutes, secureRoutes]);

app.use(express.static(path.join(__dirname, 'static')));
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});

app.use(async (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  if (err) {
    console.error(err);
    return res.status(500).send(err.message ? err.message : err);
  }
});

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));

process.on(
  'uncaughtException',
  (err: Error, origin: NodeJS.UncaughtExceptionOrigin) => {
    console.error(err);
    console.log('Error origin', origin);
  }
);
