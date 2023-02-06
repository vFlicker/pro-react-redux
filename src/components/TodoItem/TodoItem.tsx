import { useState } from 'react';

import { colors } from '~/domain/filter';

import { RemoveButton } from '../Button';
import { Checkbox } from '../Checkbox';
import { Option, Select } from '../Select';
import classes from './TodoItem.module.css';

export function TodoItem(): JSX.Element {
  const [color, setColor] = useState('');

  return (
    <div className={classes.wrapper}>
      <Checkbox label="Clean house" />

      <div className={classes.actions}>
        <Select style={{ color }} onChange={setColor}>
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
