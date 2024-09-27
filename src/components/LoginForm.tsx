import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function LoginForm({ onSubmit, loading }: any) {
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');

  const [error, setError] = useState({
    username: '',
    otp: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (username === '') {
      setError({
        ...error,
        username: 'Please enter username',
      });
      return;
    }
    if (otp === '') {
      setError({
        ...error,
        otp: 'Please enter otp',
      });

      return;
    }

    setError({
      username: '',
      otp: '',
    });
    onSubmit(username, otp);
  };

  return (
    <div onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center">
      <Card className="w-full md:2/3 lg:1/2 xl:w-1/3 lg:mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl text-gray-800">LOGIN</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="text">Username</Label>
                <Input
                  id="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError({ ...error, username: '' });
                  }}
                  placeholder="Enter Username"
                  required
                />
                {error.username && <p className="text-red-500 text-sm">{error.username}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="text">OTP</Label>
                <Input
                  id="text"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setError({ ...error, otp: '' });
                  }}
                  placeholder="Enter OTP"
                />
                {error.otp && <p className="text-red-500 text-sm">{error.otp}</p>}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleSubmit}>
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              'Login'
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
