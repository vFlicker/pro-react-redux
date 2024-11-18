import { NewsletterSignup } from '../../components/newsletterSignup';
import { PageContent } from '../../components/pageContent';

export function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}
