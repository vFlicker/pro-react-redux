import { Todo } from '~/domain/todos';
import { useAppDispatch } from '~/store';
import {
  changeTodoColor,
  toggleTodoComplied,
  removeTodo,
} from '~/store/feature/todos/todosSlice';

import { RemoveButton } from '../Button';
import { Checkbox } from '../Checkbox';
import { ColorSelector } from '../ColorSelector';
import classes from './TodoItem.module.css';

type TodoItemProps = {
  todo: Todo;
};

/* TODO: props буде id, замість todo */
export function TodoItem({ todo }: TodoItemProps): JSX.Element {
  /* TODO: додати selectTodoById */
  const { color, isCompleted, title } = todo;

  const dispatch = useAppDispatch();

  /* TODO: винести handlers */

  return (
    <div className={classes.wrapper}>
      <Checkbox
        label={title}
        checked={isCompleted}
        onChange={() => {
          /* TODO: можна не передавати isCompleted */
          dispatch(toggleTodoComplied({ todo, isCompleted: !isCompleted }));
        }}
      />

      <div className={classes.actions}>
        <ColorSelector
          color={color}
          onChange={(color) => {
            dispatch(changeTodoColor({ todo, color }));
          }}
        />
        <RemoveButton
          onClick={() => {
            dispatch(removeTodo({ todo }));
          }}
        />
      </div>
    </div>
  );
}
