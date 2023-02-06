import { Header } from '../components/Header';
import { TodoPage } from '../pages/TodoPage';
import classes from './App.module.css';

export function App(): JSX.Element {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>
        <TodoPage />
      </main>
    </div>
  );
}
