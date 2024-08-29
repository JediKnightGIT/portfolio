'use client';

import React, { ReactNode, useTransition, ChangeEvent, useState } from 'react';
import { usePathname, useRouter } from '@/navigation';
import { useParams } from 'next/navigation';
import { locales } from '@/config';
import { useLocale } from 'next-intl';

// type Props = {
//   children: ReactNode;
//   defaultValue: string;
//   label: string;
// };

type LanguageOption = {
  label: string;
  value: string;
  flag: string;
};

const LocaleSwitcherSelect: React.FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    label: locale.toUpperCase(),
    value: locale,
    flag: `/flag-${locale}.svg`,
  });

  const languages = locales.map((locale) => ({
    label: locale.toUpperCase(),
    value: locale,
    flag: `/flag-${locale}.svg`,
  }));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (nextLocale: LanguageOption) => {
    setSelectedLanguage(nextLocale);
    setIsOpen(false);
    startTransition(() => {
      router.replace(
        // @ts-ignore
        { pathname, params },
        { locale: nextLocale.value },
      );
    });
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center py-2 px-3 rounded-md shadow-sm focus:outline-none text-sm"
      >
        <img
          src={selectedLanguage.flag}
          alt={selectedLanguage.label}
          className="inline-block h-4 w-4 mr-2"
        />
        {selectedLanguage.label}
        <span className="ml-2 mt-[-11px]">⌄</span>
      </button>

      {isOpen && (
        <ul role="listbox" className="absolute z-10 w-full bg-primary">
          {languages.map((language) => (
            <li
              key={language.value}
              role="option"
              aria-selected={selectedLanguage.value === language.value}
              onClick={() => handleSelect(language)}
              className="flex items-center cursor-pointer py-2 px-3 hover:bg-accent hover:text-primary text-sm"
            >
              <img
                src={language.flag}
                alt={language.label}
                className="inline-block h-4 w-4 mr-2"
              />
              {language.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocaleSwitcherSelect;
