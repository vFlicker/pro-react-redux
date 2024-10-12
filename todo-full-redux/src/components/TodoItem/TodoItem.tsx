import { Color } from '~/domain/filters';
import { Todo } from '~/domain/todos';
import { useAppDispatch, useAppSelector } from '~/store';
import {
  selectTodoById,
  todoColorChanged,
  todoToggled,
  todoDeleted,
} from '~/store/feature/todos/todosSlice';

import { RemoveButton } from '../Button';
import { Checkbox } from '../Checkbox';
import { ColorSelector } from '../ColorSelector';
import classes from './TodoItem.module.css';

type TodoItemProps = {
  id: UniqueId;
};

export function TodoItem({ id }: TodoItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { color, isCompleted, title } = useAppSelector((state) =>
    selectTodoById(state, id),
  ) as Todo;

  const handleTodoToggleClick = () => {
    dispatch(todoToggled({ id }));
  };

  const handleTodoColorChangeClick = (color: Color) => {
    dispatch(todoColorChanged({ id, color }));
  };

  const handleTodoRemoveClick = () => dispatch(todoDeleted({ id }));

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
