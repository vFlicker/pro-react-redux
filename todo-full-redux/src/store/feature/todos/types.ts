import { EntityState } from '@reduxjs/toolkit';

import { Todo } from '~/domain/todos';

export type State = EntityState<Todo>;
