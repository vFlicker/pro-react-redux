import { Header } from '../components/Header';
import { TodoPage } from '../pages/TodoPage';

export function App(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <TodoPage />
      </main>
    </div>
  );
}
