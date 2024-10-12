export class Api {
  #apiBase = 'https://swapi.dev/api';
  #imageBase = 'https://starwars-visualguide.com/assets/img';

  getAllPeople = async () => {
    const res = await this.#getResource(`/people/`);
    return res.results.map(this.#transformPerson);
  };

  getAllPlanets = async () => {
    const res = await this.#getResource(`/planets/`);
    return res.results.map(this.#transformPlanet);
  };

  getAllStarships = async () => {
    const res = await this.#getResource(`/starships/`);
    return res.results.map(this.#transformStarship);
  };

  getPerson = async (id) => {
    const [person, imageUrl] = await Promise.all([
      this.#getResource(`/people/${id}/`),
      this.#getPersonImage(id),
    ]);

    person.imageUrl = imageUrl;
    return this.#transformPerson(person);
  };

  getPlanet = async (id) => {
    const [planet, imageUrl] = await Promise.all([
      this.#getResource(`/planets/${id}/`),
      this.#getPlanetImage(id),
    ]);

    planet.imageUrl = imageUrl;
    return this.#transformPlanet(planet);
  };

  getStarship = async (id) => {
    const [starship, imageUrl] = await Promise.all([
      this.#getResource(`/starships/${id}/`),
      this.#getStarshipImage(id),
    ]);

    starship.imageUrl = imageUrl;
    return this.#transformStarship(starship);
  };

  #getPersonImage = (id) => `${this.#imageBase}/characters/${id}.jpg`;

  #getPlanetImage = (id) => `${this.#imageBase}/planets/${id}.jpg`;

  #getStarshipImage = (id) => `${this.#imageBase}/starships/${id}.jpg`;

  #getResource = async (url) => {
    const res = await fetch(`${this.#apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };

  #extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  #transformPerson = (person) => ({
    id: this.#extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
    imageUrl: person.imageUrl,
  });

  #transformPlanet = (planet) => ({
    id: this.#extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
    imageUrl: planet.imageUrl,
  });

  #transformStarship = (starship) => ({
    id: this.#extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.cost_in_credits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargo_capacity,
    imageUrl: starship.imageUrl,
  });
}
