import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-red-600/95 backdrop-blur supports-[backdrop-filter]:bg-red-600/60 py-4">
      <div className="flex justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">Quotesy</h1>
        </Link>
        <div className="flex  w-56 justify-around">
          <div>Account</div>
        </div>
      </div>
      {/* <NavigationMenuDemo /> */}
    </header>
  );
};

export default Header;
