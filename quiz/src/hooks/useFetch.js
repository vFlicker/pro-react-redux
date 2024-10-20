import { useEffect, useState } from 'react';

export const useFetch = (fetchFn, initialValue) => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [data, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsLoading(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isLoading,
    data,
    error,
  };
};
