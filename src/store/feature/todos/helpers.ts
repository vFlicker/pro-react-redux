import { createEntityAdapter } from '@reduxjs/toolkit';

import { Todo } from '~/domain/todos';

export const todosAdapter = createEntityAdapter<Todo>();
