// import Image from 'next/image';
import localFont from 'next/font/local';
// import Header from '@/components/header';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { login } from '@/handlers/handlers';
import LoginForm from '@/components/LoginForm';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (username: string, otp: string) => {
    try {
      const data = await login({ username, otp });
      localStorage.setItem('token', data.token);
      router.push('/quotes');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <h1 className="text-3xl font-bold mb-5">Login</h1>
      <LoginForm onSubmit={handleLogin} />
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
}
