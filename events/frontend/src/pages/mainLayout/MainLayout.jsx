import { Outlet, useNavigation } from 'react-router-dom';

import { MainNavigation } from '../../components/mainNavigation';

export function MainLayout() {
  const navigation = useNavigation();

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
