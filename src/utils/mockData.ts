import { faker } from '@faker-js/faker/locale/en_US';
import { colors } from '~/domain/filter';

import { Todo } from '~/domain/todos';
import { Color } from '~/domain/filter';
import { pickRandomItem } from './pickRandomItem';

export const makeTodo = (): Todo => ({
  id: faker.database.mongodbObjectId(),
  title: faker.hacker.phrase(),
  color: pickRandomItem(colors) as Color,
  isCompleted: faker.datatype.boolean(),
});
