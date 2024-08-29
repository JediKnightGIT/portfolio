import { unstable_setRequestLocale } from 'next-intl/server';
import { LocaleProps } from '../page';
import ResumeLayout from './layout';

const Work = ({ params: { locale } }: LocaleProps) => {
  unstable_setRequestLocale(locale);

  return <ResumeLayout />;
};

export default Work;
