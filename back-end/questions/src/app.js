import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';

import questionsRoutes from './routes/question';

import { mockup } from './models/mockups/question';

import { logger } from './utils/logger';

const isDev = process.env.NODE_ENV === 'dev';
const port = process.env.PORT || 8888;
const dbUser = process.env.USER;
const dbPassword = process.env.PASSWORD;

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(morgan('combined'));

app.set('trust proxy', 1);

questionsRoutes.setup(app, '/api/questions');

// eslint-disable-next-line no-multi-assign
exports = module.exports = app;

mongoose.Promise = global.Promise;

mongoose.connect(
  `mongodb://${dbUser}:${dbPassword}@ds349045.mlab.com:49045/mongo-find-your-way`,
  { useNewUrlParser: true },
  (error) => {
    if (error) {
      logger.error('Please make sure Mongodb is installed and running!');
      throw error;
    }
    if (isDev) {
      mongoose.connection.db.dropDatabase();
      mockup();
    }
  },
);

const db = mongoose.connection;

db.on('error', logger.error.bind(console, 'MongoDB connection error:'));

app.get('*', (req, res, next) => {
  next(new Error(JSON.stringify({ message: 'Unknown route', status: 404 })));
});

function errorHandler(err, req, res, next) {
  new Promise(() => {
    const error = JSON.parse(err.message);
    return res.status(error.status).json({ error: error.message });
  }).catch((error) => {
    logger.error(error);
    return res.status(500).json({ error: 'Unexpected error' });
  });
}

app.use(errorHandler); // NO MORE app.use AFTER THIS

app.listen(port, () => {
  logger.info(`🌎  Listening on port ${port} in ${process.env.NODE_ENV} mode on Node ${process.version}.`);
  if (isDev) {
    logger.info('Open http://localhost:8888');
  }
});
