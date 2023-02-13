import { Color } from '~/domain/filters';
import { Todo } from '~/domain/todos';
import { useAppDispatch } from '~/store';
import {
  todoColorChanged,
  todoCompliedToggled,
  todoDeleted,
} from '~/store/feature/todos/todosSlice';

import { RemoveButton } from '../Button';
import { Checkbox } from '../Checkbox';
import { ColorSelector } from '../ColorSelector';
import classes from './TodoItem.module.css';

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps): JSX.Element {
  const { color, isCompleted, title } = todo;

  const dispatch = useAppDispatch();

  const handleTodoToggleClick = () => {
    dispatch(todoCompliedToggled({ todo }));
  };

  const handleTodoColorChangeClick = (color: Color) => {
    dispatch(todoColorChanged({ todo, color }));
  };

  const handleTodoRemoveClick = () => dispatch(todoDeleted({ todo }));

  return (
    <div className={classes.wrapper}>
      <Checkbox
        label={title}
        checked={isCompleted}
        onChange={handleTodoToggleClick}
      />

      <div className={classes.actions}>
        <ColorSelector color={color} onChange={handleTodoColorChangeClick} />
        <RemoveButton onClick={handleTodoRemoveClick} />
      </div>
    </div>
  );
}
