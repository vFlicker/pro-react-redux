import { HTMLProps } from 'react';

import classes from './Checkbox.module.css';

type Props = {
  label: React.ReactNode;
};

type CheckboxProps = Props & Omit<HTMLProps<HTMLInputElement>, keyof Props>;

export function Checkbox({ label }: CheckboxProps): JSX.Element {
  return (
    <label className={classes.checkbox}>
      <input type="checkbox" className={classes.input} />
      <span className={classes.box}></span>
      <span className={classes.label}>{label}</span>
    </label>
  );
}
