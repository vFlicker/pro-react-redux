import { ApiRoute, BASE_URL, HttpMethod } from '../constants';

export class ApiService {
  async getEvent(eventId) {
    return this.#load({ url: `${ApiRoute.EVENTS}/${eventId}` });
  }

  async getEvents() {
    return this.#load({ url: ApiRoute.EVENTS });
  }

  async createEvent(data) {
    return this.#load({
      url: ApiRoute.EVENTS,
      method: HttpMethod.POST,
      body: JSON.stringify(data),
    });
  }

  async updateEvent(data, eventId) {
    return this.#load({
      url: `${ApiRoute.EVENTS}/${eventId}`,
      method: HttpMethod.PATCH,
      body: JSON.stringify(data),
    });
  }

  async deleteEvent(eventId) {
    return this.#load({
      url: `${ApiRoute.EVENTS}/${eventId}`,
      method: HttpMethod.DELETE,
    });
  }

  async #load({
    url,
    method = HttpMethod.GET,
    body = null,
    headers = new Headers(),
  }) {
    headers.append('Content-Type', 'application/json');

    return fetch(`${BASE_URL}${url}`, {
      method,
      body,
      headers,
    });
  }
}

export const apiService = new ApiService();
