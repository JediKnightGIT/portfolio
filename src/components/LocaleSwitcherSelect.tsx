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

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(
        // @ts-ignore
        { pathname, params },
        { locale: nextLocale },
      );
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    label: locale.toUpperCase(),
    value: locale,
    flag: `/flag-${locale}.svg`,
  });

  const languages = locales.map((locale) => ({
    label: locale,
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
    // <label
    //   className={clsx(
    //     'cursor-pointer relative text-gray-400',
    //     isPending && 'transition-opacity [&:disabled]:opacity-30',
    //   )}
    // >
    //   <p className="sr-only">{label}</p>
    //   <select
    //     defaultValue={defaultValue}
    //     disabled={isPending}
    //     onChange={onSelectChange}
    //     className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
    //   >
    //     {children}
    //   </select>
    //   <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    // </label>

    // <Select.Root>
    //   <Select.Trigger className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] shadow-[0_2px_10px] shadow-black/10 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none">
    //     <Select.Value placeholder={defaultValue} />
    //     <Select.Icon />
    //   </Select.Trigger>

    //   <Select.Portal>
    //     <Select.Content className="overflow-hidden rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
    //       <Select.ScrollUpButton className="flex items-center justify-center h-[25px] cursor-default" />
    //       <Select.Viewport>{children}</Select.Viewport>
    //       <Select.ScrollDownButton />
    //       <Select.Arrow />
    //     </Select.Content>
    //   </Select.Portal>
    // </Select.Root>
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center py-2 px-3 border rounded-md shadow-sm focus:outline-none"
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
        <ul
          role="listbox"
          className="absolute z-10 mt-2 w-full  border rounded-md shadow-lg"
        >
          {languages.map((language) => (
            <li
              key={language.value}
              role="option"
              aria-selected={selectedLanguage.value === language.value}
              onClick={() => handleSelect(language)}
              className="flex items-center cursor-pointer py-2 px-3 hover:bg-gray-100"
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
