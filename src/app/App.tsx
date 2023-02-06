import { Header } from '../components/Header';
import { TodoApp } from '../components/TodoApp';
import classes from './App.module.css';

export function App(): JSX.Element {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>
        <div className="container">
          <h2 className={classes.title}>Todos</h2>
          <TodoApp />
        </div>
      </main>
    </div>
  );
}
