import { colors } from '~/domain/filter';
import { Todo } from '~/domain/todos';

import { RemoveButton } from '../Button';
import { Checkbox } from '../Checkbox';
import { Option, Select } from '../Select';
import classes from './TodoItem.module.css';

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps): JSX.Element {
  const { color, isChecked, title } = todo;

  const style = color ? { color } : undefined;

  return (
    <div className={classes.wrapper}>
      <Checkbox label={title} checked={isChecked} />

      <div className={classes.actions}>
        <Select style={style} onChange={() => console.log('set color')}>
          <Option value=""></Option>
          {Object.entries(colors).map(([value, text]) => (
            <Option key={value} value={value}>
              {text}
            </Option>
          ))}
        </Select>

        <RemoveButton />
      </div>
    </div>
  );
}
