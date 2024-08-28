import { Link } from '@/navigation';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

// Components

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-wthite">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Jedi<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Locale Switch */}
        <LocaleSwitcherSelect />
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
