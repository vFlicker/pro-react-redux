import { useEffect } from 'react';
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from 'react-router-dom';

import { MainNavigation } from '../../components/mainNavigation';
import { HttpMethod } from '../../constants';
import { getTokenDuration, TOKEN_STATUS_EXPIRED } from '../../utils/token';

export function MainLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  const navigation = useNavigation();

  useEffect(() => {
    if (!token) return;

    if (token === TOKEN_STATUS_EXPIRED) {
      submit(null, { action: '/auth/logout', method: HttpMethod.POST });
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: '/auth/logout', method: HttpMethod.POST });
    }, tokenDuration);
  }, [token, submit]);

  const isLoading = navigation.state === 'loading';

  return (
    <>
      <MainNavigation />
      <main>
        {isLoading && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}
