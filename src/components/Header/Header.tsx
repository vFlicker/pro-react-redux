import styles from './Header.module.css';

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.title}>Redux Fundamentals Example</h1>
      </div>
    </header>
  );
}
