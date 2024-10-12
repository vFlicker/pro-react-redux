import { useEffect, useMemo, useState } from 'react';

export const useRequest = (request) => {
  const initialState = useMemo(
    () => ({
      data: null,
      loading: true,
      error: false,
    }),
    [],
  );

  const [dateState, setDataState] = useState(initialState);

  useEffect(() => {
    let cancelled = false;

    setDataState(initialState);

    request()
      .then(
        (data) =>
          !cancelled &&
          setDataState({
            data,
            loading: false,
            error: false,
          }),
      )
      .catch(
        () =>
          !cancelled &&
          setDataState({
            data: null,
            loading: false,
            error: true,
          }),
      );

    return () => {
      cancelled = true;
    };
  }, [request, initialState]);

  return dateState;
};
