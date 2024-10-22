import { useEffect, useState } from 'react';

export const useFetch = (fetchFn, initialData) => {
  const [data, setFetchedData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const responseData = await fetchFn();
        setFetchedData(responseData);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsLoading(false);
    };

    fetchData();
  }, [fetchFn]);

  return {
    isLoading,
    data,
    error,
  };
};
