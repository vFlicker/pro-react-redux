import { StatusCode } from '../../constants.js';
import { wait } from '../../helpers/index.js';
import { eventRepository } from './eventRepository.js';
import { createEventValidator } from './validators/createEventValidator.js';
import { updateEventValidator } from './validators/updateEventValidator.js';

const create = async (req, res) => {
  await wait(2000);
  const event = req.body;

  const errors = createEventValidator(event);
  if (Object.keys(errors).length > 0) {
    const message = 'Adding the event failed due to validation errors.';
    res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ message, errors });
    return;
  }

  const createdEvent = await eventRepository.add(event);
  res
    .status(StatusCode.CREATED)
    .json({ message: 'Event saved.', event: createdEvent });
};

const getAll = async (_req, res) => {
  await wait(2000);
  const foundEvents = await eventRepository.findAll();
  res.json(foundEvents);
};

const getById = async (req, res) => {
  await wait(2000);
  const foundEvent = await eventRepository.findById(req.params.id);
  res.status(StatusCode.OK).json(foundEvent);
};

const updateById = async (req, res) => {
  await wait(2000);
  const event = req.body;

  const errors = updateEventValidator(event);
  if (Object.keys(errors).length > 0) {
    const message = 'Updating the event failed due to validation errors.';
    return res
      .status(StatusCode.UNPROCESSABLE_ENTITY)
      .json({ message, errors });
  }

  const updatedEvent = await eventRepository.update(req.params.id, event);
  res
    .status(StatusCode.OK)
    .json({ message: 'Event updated.', event: updatedEvent });
};

const deleteById = async (req, res) => {
  await wait(2000);
  await eventRepository.remove(req.params.id);
  res.status(StatusCode.OK).json({ message: 'Event deleted.' });
};

export const eventController = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
