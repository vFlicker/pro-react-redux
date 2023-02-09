import { HTMLProps, ReactNode } from 'react';

import classes from './Radio.module.css';

type Props = {
  children: ReactNode;
};

type RadioProps = Props & Omit<HTMLProps<HTMLInputElement>, keyof Props>;

export function Radio({ children, ...props }: RadioProps): JSX.Element {
  return (
    <label className={classes.radio}>
      <input type="radio" className={classes.input} {...props} />
      <span className={classes.label}>{children}</span>
    </label>
  );
}
