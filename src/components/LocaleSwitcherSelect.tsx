'use client';

import React, { ReactNode, useTransition, ChangeEvent } from 'react';
import { usePathname, useRouter } from '@/navigation';
import { useParams } from 'next/navigation';
import clsx from 'clsx';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

const LocaleSwitcherSelect: React.FC<Props> = ({
  children,
  defaultValue,
  label,
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

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

    <Select.Root>
      <Select.Trigger className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] shadow-[0_2px_10px] shadow-black/10 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none">
        <Select.Value placeholder={defaultValue} />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] cursor-default" />
          <Select.Viewport>{children}</Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  { children: ReactNode; className: string; value: string }
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={clsx(
        'text-[13px] leading-none rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:pointer-events-none data-[highlighted]:outline-none',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default LocaleSwitcherSelect;
