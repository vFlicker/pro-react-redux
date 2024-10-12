import classes from './Header.module.css';

export function Header(): JSX.Element {
  return (
    <header className={classes.header}>
      <div className="container">
        <h1 className={classes.title}>Redux Fundamentals Example</h1>
      </div>
    </header>
  );
}
