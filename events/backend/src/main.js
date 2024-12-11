import express from 'express';

import { ExitCode, PORT } from './constants.js';
import { corsMiddleware, errorMiddleware } from './middlewares/index.js';
import { eventRouter } from './modules/event/index.js';
import { userRouter } from './modules/user/index.js';

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use('/user', userRouter);
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
