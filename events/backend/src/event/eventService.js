import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { v4 as generateId } from 'uuid';

import {
  getCurrentModuleDirectoryPath,
  NotFoundError,
} from '../helpers/index.js';

const modulePath = getCurrentModuleDirectoryPath();
const destination = resolve(modulePath, '../../data/events.json');

const readData = async () => {
  const data = await readFile(destination, 'utf8');
  return JSON.parse(data);
};

const writeData = async (data) => {
  await writeFile(destination, JSON.stringify(data));
};

const getAll = async () => {
  const { events: foundEvents } = await readData();
  if (!foundEvents) throw new NotFoundError('Could not find any events.');
  return foundEvents;
};

const get = async (id) => {
  const { events } = await readData();
  if (!events || events.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const foundEvent = events.find((event) => event.id === id);
  if (!foundEvent) throw new NotFoundError(`Could not find event for id ${id}`);

  return foundEvent;
};

const add = async (data) => {
  const storedData = await readData();
  storedData.events.unshift({ ...data, id: generateId() });
  await writeData(storedData);
};

const replace = async (id, data) => {
  const storedData = await readData();
  const { events: foundEvents } = storedData;

  if (!foundEvents || foundEvents.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = foundEvents.findIndex((event) => event.id === id);
  if (index < 0) throw new NotFoundError(`Could not find event for id ${id}`);

  foundEvents[index] = { ...data, id };

  await writeData(storedData);
};

const remove = async (id) => {
  const { events } = await readData();
  const updatedEvents = events.filter((event) => event.id !== id);
  await writeData({ events: updatedEvents });
};

export const eventService = { getAll, get, add, replace, remove };
