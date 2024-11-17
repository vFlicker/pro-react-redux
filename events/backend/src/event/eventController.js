import { StatusCode } from '../constants.js';
import { eventService } from './eventService.js';
import { createEventValidator } from './validators/createEventValidator.js';
import { updateEventValidator } from './validators/updateEventValidator.js';

const getAll = async (_req, res) => {
  const foundEvents = await eventService.getAll();
  res.json({ events: foundEvents });
};

const getById = async (req, res) => {
  const foundEvent = await eventService.get(req.params.id);
  res.status(StatusCode.OK).json({ event: foundEvent });
};

const create = async (req, res) => {
  const event = req.body;

  const errors = createEventValidator(event);
  if (Object.keys(errors).length > 0) {
    const message = 'Adding the event failed due to validation errors.';
    res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ message, errors });
    return;
  }

  await eventService.add(event);
  res.status(StatusCode.CREATED).json({ message: 'Event saved.', event });
};

const updateById = async (req, res) => {
  const event = req.body;

  const errors = updateEventValidator(event);
  if (Object.keys(errors).length > 0) {
    const message = 'Updating the event failed due to validation errors.';
    return res
      .status(StatusCode.UNPROCESSABLE_ENTITY)
      .json({ message, errors });
  }

  await eventService.replace(req.params.id, event);
  res.status(StatusCode.OK).json({ message: 'Event updated.', event });
};

const deleteById = async (req, res) => {
  await eventService.remove(req.params.id);
  res.status(StatusCode.OK).json({ message: 'Event deleted.' });
};

export const eventController = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
