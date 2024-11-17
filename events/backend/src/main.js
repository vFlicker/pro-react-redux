import express from 'express';

import { ExitCode, PORT } from './constants.js';
import { eventRouter } from './event/index.js';
import { corsMiddleware, errorMiddleware } from './middlewares/index.js';

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use('/events', eventRouter);
app.use(errorMiddleware);

const onListeningHandler = () => {
  const url = `http://localhost:${PORT}`;
  const text = `Server is running on ${url}`;
  console.log(text);
};

const onErrorHandler = (err) => {
  console.error(`An error occurred: ${err.message}`);
  process.exit(ExitCode.ERROR);
};

app
  .listen(PORT)
  .on('listening', onListeningHandler)
  .on('error', onErrorHandler);
