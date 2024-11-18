import { useRouteError } from 'react-router-dom';

import { MainNavigation } from '../../components/mainNavigation';
import { PageContent } from '../../components/pageContent';
import { StatusCode } from '../../constants';

export function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  switch (error.status) {
    case StatusCode.NOT_FOUND:
      title = 'Not found!';
      message = 'Could not find resource or page.';
      break;
    case StatusCode.INTERNAL_SERVER_ERROR:
      title = 'Internal server error!';
      message = error.data.message;
      break;
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
