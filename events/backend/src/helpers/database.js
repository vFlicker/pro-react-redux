import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { getCurrentModuleDirectoryPath } from './fileSystem.js';

const modulePath = getCurrentModuleDirectoryPath();
const destination = resolve(modulePath, '../../data/database.json');

export const readData = async () => {
  const data = await readFile(destination, 'utf8');
  return JSON.parse(data);
};

export const writeData = async (data) => {
  await writeFile(destination, JSON.stringify(data));
};
