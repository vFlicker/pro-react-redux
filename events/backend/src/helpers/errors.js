import { StatusCode } from '../constants.js';

export class NotFoundError {
  constructor(message) {
    this.message = message;
    this.status = StatusCode.NOT_FOUND;
  }
}
