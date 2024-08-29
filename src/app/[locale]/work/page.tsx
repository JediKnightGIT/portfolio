import { unstable_setRequestLocale } from 'next-intl/server';
import { LocaleProps } from '../page';
import WorkLayout from './layout';

const Work = ({ params: { locale } }: LocaleProps) => {
  unstable_setRequestLocale(locale);

  return <WorkLayout />;
};

export default Work;
