import { ChangeEvent } from 'react';

import { Color } from '~/domain/filters';
import { capitalize } from '~/utils/capitalize';

import { Option, Select } from '../Select';

type ColorSelectorProps = {
  color: Color;
  onChange: (color: Color) => void;
};

export function ColorSelector({
  color,
  onChange,
}: ColorSelectorProps): JSX.Element {
  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const color = evt.target.value as Color;
    onChange(color);
  };

  const optionList = Object.entries(Color).map(([key, value]) => (
    <Option key={key} id={key} value={value}>
      {value && capitalize(value)}
    </Option>
  ));

  return (
    <Select style={{ color }} value={color} onChange={handleChange}>
      {optionList}
    </Select>
  );
}
