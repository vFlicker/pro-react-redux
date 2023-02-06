import { CSSProperties, PropsWithChildren } from 'react';

import classes from './Select.module.css';

type SelectProps = PropsWithChildren<{
  label?: string;
  style?: CSSProperties;
  onChange: (color: string) => void;
}>;

type OptionProps = PropsWithChildren<{
  id?: string;
  value: string;
}>;

export function Select({
  label,
  style,
  children,
  onChange,
}: SelectProps): JSX.Element {
  return (
    <label>
      {label && <span className={classes.label}>{label}</span>}
      <select
        style={style}
        className={classes.select}
        onChange={(evt) => onChange(evt.target.value)}
      >
        {children}
      </select>
    </label>
  );
}

export function Option({ id, value, children }: OptionProps): JSX.Element {
  return (
    <option key={id || value} className={classes.option} value={value}>
      {children}
    </option>
  );
}
