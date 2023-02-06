import { ComponentPropsWithoutRef } from 'react';

import classes from './Select.module.css';

type SelectProps = ComponentPropsWithoutRef<'select'> & {
  onChange: (data: string) => void;
};

type OptionProps = ComponentPropsWithoutRef<'option'>;

export function Select({ children, ...props }: SelectProps): JSX.Element {
  return (
    <label>
      <select className={classes.select} {...props}>
        {children}
      </select>
    </label>
  );
}

export function Option({ children, ...props }: OptionProps): JSX.Element {
  return (
    <option className={classes.option} {...props}>
      {children}
    </option>
  );
}
