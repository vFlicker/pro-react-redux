import { useCallback, useEffect, useState } from 'react';

const useRequest = (fetchFn, initialData) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeRequest = useCallback(
    async (requestData) => {
      setIsLoading(true);
      setError(null);

      try {
        const responseData = await fetchFn(requestData);
        setData(responseData);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsLoading(false);
    },
    [fetchFn],
  );

  const clearData = () => {
    setData(initialData);
  };

  return {
    data,
    isLoading,
    error,
    executeRequest,
    clearData,
  };
};

export const useQuery = (fetchFn, initialData) => {
  const { data, isLoading, error, executeRequest } = useRequest(
    fetchFn,
    initialData,
  );

  useEffect(() => {
    executeRequest();
  }, [executeRequest]);

  return { data, isLoading, error };
};

export const useMutation = (fetchFn, initialData) => {
  const { executeRequest, ...rest } = useRequest(fetchFn, initialData);
  return { sendRequest: executeRequest, ...rest };
};
