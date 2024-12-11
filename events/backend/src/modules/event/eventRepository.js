import { v4 as generateId } from 'uuid';

import { readData, writeData } from '../../helpers/index.js';

const add = async (event) => {
  const createdEvent = { id: generateId(), ...event };

  const storedData = await readData();
  storedData.events.push(createdEvent);
  await writeData(storedData);

  return createdEvent;
};

const findAll = async () => {
  const { events } = await readData();
  return events;
};

const findById = async (id) => {
  const { events } = await readData();

  const foundEvent = events.find((event) => event.id === id);
  if (!foundEvent) return null;

  return foundEvent;
};

const update = async (id, event) => {
  const storedData = await readData();

  const index = storedData.events.findIndex((event) => event.id === id);
  const updatedEvent = { ...event, id };
  storedData.events[index] = updatedEvent;
  await writeData(storedData);

  return updatedEvent;
};

const remove = async (id) => {
  const storedData = await readData();
  const updatedEvents = storedData.events.filter((event) => event.id !== id);
  await writeData({ ...storedData, events: updatedEvents });
};

export const eventRepository = {
  findAll,
  findById,
  add,
  update,
  remove,
};
