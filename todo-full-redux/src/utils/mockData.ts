import { faker } from '@faker-js/faker/locale/en_US';

import { Todo } from '~/domain/todos';
import { Color, colors } from '~/domain/filters';
import { pickRandomItem } from './pickRandomItem';

export const makeTodo = (): Todo => ({
  id: faker.database.mongodbObjectId(),
  title: faker.lorem.words(3),
  color: pickRandomItem(colors) as Color,
  isCompleted: faker.datatype.boolean(),
});
