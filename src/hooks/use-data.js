import { useMemo, useState, useEffect } from 'react';

export const useData = (api, id) => {
  const initialState = useMemo(() => ({
    data: null,
    loading: true,
    error: false,
  }), []);

  const [dateState, setDataState] = useState(initialState);

  const onDataLoaded = (data) => setDataState({
    data,
    loading: false,
    error: false,
  });

  const onError = () => setDataState({
    data: null,
    loading: false,
    error: true,
  });

  useEffect(() => {
    let cancelled = false;

    setDataState(initialState);

    api.getData(id)
      .then((data) => !cancelled && onDataLoaded(data))
      .catch(() => !cancelled && onError());

    return () => {
      cancelled = true;
    };
  }, [api, initialState, id]);

  return dateState;
}
