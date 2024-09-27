import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

const Header: FC = () => {
  const router = useRouter();
  const [tokenPresent, setTokenPresent] = useState(false);
  console.log(router.route);

  useEffect(() => {
    const loginRoute = router.route === '/';
    const token = localStorage.getItem('token');
    if (token && !loginRoute) {
      setTokenPresent(true);
    }
  }, [router]);
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-gray-700/95 backdrop-blur supports-[backdrop-filter]:bg-gray-700/60 py-4">
      <div className="flex justify-between">
        <Link href="/quotes">
          <h1 className="text-2xl font-bold flex justify-center items-center mx-2 lg:mx-8">
            <Image src={'/quote-logo.png'} alt="Logo" width={50} height={50} />
            <span>Quotsy</span>
          </h1>
        </Link>
        {tokenPresent && (
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem('token');
              window.location.reload();
            }}
            className="flex bg-gray-800 text-gray-100 rounded-lg mx-4 justify-center items-center mt-2 px-6 xl:px-8 "
          >
            Logout
          </button>
        )}{' '}
      </div>
    </header>
  );
};

export default Header;
