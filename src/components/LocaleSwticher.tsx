import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

import LocaleSwitcherSelect, { SelectItem } from './LocaleSwitcherSelect';
import { locales } from '@/config';

const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {/* {locales.map((cur) => (
        <option
          key={cur}
          value={cur}
          className="bg-left bg-no-repeat pl-7 bg-[length:20px] locale-option"
        >
          {t('locale', { locale: cur })}
        </option>
      ))} */}
      {locales.map((cur) => (
        <SelectItem key={cur} value={cur} className="">
          {t('locale', { locale: cur })}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
};

export default LocaleSwitcher;
