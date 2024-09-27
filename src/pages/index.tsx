import localFont from 'next/font/local';
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
  const [loading, setLoading] = useState(false);

  const handleLogin = async (username: string, otp: string) => {
    try {
      setLoading(true);
      const data = await login({ username, otp });
      await localStorage.setItem('token', data.token);
      setLoading(false);
      router.push('/quotes');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setLoading(false);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} mx:auto flex flex-col min-h-screen justify-center font-[family-name:var(--font-geist-sans)]`}
    >
      <LoginForm onSubmit={handleLogin} loading={loading} />
      {error && !loading && <p className="text-red-500 mt-3 text-center">{error}</p>}
    </div>
  );
}
