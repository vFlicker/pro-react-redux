import { useRouteError } from 'react-router-dom';

import { MainNavigation } from '../../components/mainNavigation';
import { PageContent } from '../../components/pageContent';
import { StatusCode } from '../../constants';

const responseData = {
  default: {
    title: 'An error occurred!',
    message: 'Something went wrong!',
  },
  [StatusCode.UNAUTHORIZED]: {
    title: 'Unauthorized!',
    message: 'You are not authorized to access this page.',
  },
  [StatusCode.FORBIDDEN]: {
    title: 'Forbidden!',
    message: 'You do not have permission to access this page.',
  },
};

export function ErrorPage() {
  const { status } = useRouteError();

  const { message, title } = responseData[status] || responseData.default;

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
