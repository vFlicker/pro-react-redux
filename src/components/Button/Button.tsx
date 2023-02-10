import classNames from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import classes from './Button.module.css';

export type ButtonProps = ComponentPropsWithoutRef<'button'>;

export function Button({
  className,
  children,
  onClick,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={classNames(classes.button, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export function RemoveButton({ onClick }: ButtonProps): JSX.Element {
  return (
    <button
      className={classNames(classes.button, classes.remove)}
      onClick={onClick}
    >
      <span className="visually-hidden">Remove</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        xmlSpace="preserve"
      >
        <path d="m638.6 500 322.7-322.7c38.3-38.3 38.3-100.3 0-138.6S861 .4 822.7 38.7L500 361.4 177.3 38.7C139 .4 77 .4 38.7 38.7S.4 139 38.7 177.3L361.4 500 38.7 822.7C.4 861 .4 923 38.7 961.3 57.9 980.4 82.9 990 108 990s50.1-9.6 69.3-28.7L500 638.6l322.7 322.7c19.1 19.1 44.2 28.7 69.3 28.7 25.1 0 50.1-9.6 69.3-28.7 38.3-38.3 38.3-100.3 0-138.6L638.6 500z" />
      </svg>
    </button>
  );
}
