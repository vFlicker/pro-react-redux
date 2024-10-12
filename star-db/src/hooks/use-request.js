import { useEffect, useMemo, useState } from 'react';

export const useRequest = (request) => {
  const initialState = useMemo(() => {
    return {
      data: null,
      loading: true,
      error: false,
    };
  }, []);

  const [dateState, setDataState] = useState(initialState);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setDataState(initialState);

      try {
        const data = await request();
        if (!cancelled) {
          setDataState({
            data,
            loading: false,
            error: false,
          });
        }
      } catch {
        if (!cancelled) {
          setDataState({
            data: null,
            loading: false,
            error: true,
          });
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [request, initialState]);

  return dateState;
};
