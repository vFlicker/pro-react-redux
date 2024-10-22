import './App.css';

import { Header } from '../components/Header';
import { QueryResult } from '../components/QueryResult';
import { Quiz } from '../components/Quiz';
import { useFetch } from '../hooks/useFetch';
import { fetchQuestions } from '../services/fakeApiService';

export function App() {
  const { error, data, isLoading } = useFetch(fetchQuestions, []);

  return (
    <>
      <Header />
      <main>
        <QueryResult loading={isLoading} error={error}>
          <Quiz questions={data} />
        </QueryResult>
      </main>
    </>
  );
}
