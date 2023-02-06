import { ChangeEvent } from 'react';

import { Color, colorDictionary } from '~/domain/filter';

import { Option, Select } from '../Select';

type ColorSelectorProps = {
  color: Color;
  onChange: (color: Color) => void;
};

export function ColorSelector({
  color,
  onChange,
}: ColorSelectorProps): JSX.Element {
  return (
    <Select
      style={{ color }}
      value={color}
      onChange={(evt) => {
        const { target } = evt as ChangeEvent<HTMLSelectElement>;
        onChange(target.value as Color);
      }}
    >
      {Object.entries(colorDictionary).map(([value, text]) => (
        <Option key={value} id={value} value={value}>
          {text}
        </Option>
      ))}
    </Select>
  );
}
