'use client';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from '../components/ui/sheet';
import { usePathname } from '@/navigation';
// import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

import { links } from './Nav';
import { Link } from '@/navigation';

const MobileNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle>
          <VisuallyHidden.Root>Menu</VisuallyHidden.Root>
        </SheetTitle>
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-sembiold">
              Jedi<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, idx) => (
            <SheetClose key={idx} asChild>
              <Link
                href={link.path}
                className={`${
                  link.path === pathname
                    ? 'text-accent border-b-2 border-accent'
                    : ''
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
