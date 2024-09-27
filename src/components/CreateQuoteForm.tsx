/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function CreateQuoteForm({ onSubmit, loading }: { onSubmit: (text: string, file: any) => void; loading: boolean }) {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState({
    text: '',
    file: '',
  });

  const handleSubmit = (e: any) => {
    if (text === '') {
      setError({
        ...error,
        text: 'Please enter text',
      });
      return;
    }
    if (file === null) {
      setError({
        ...error,
        file: 'Please select file',
      });
      return;
    }
    e.preventDefault();
    onSubmit(text, file);
  };

  return (
    <div onSubmit={handleSubmit} className="space-y-4 mx-4">
      <Card className="w-full md:2/3 lg:1/2 xl:w-1/3 lg:mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Create Quote</CardTitle>
          <CardDescription className="text-center">Create a new quote✨</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="text">Add Quote Text</Label>
                <Input
                  id="text"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                    setError({ ...error, text: '' });
                  }}
                  placeholder="Quote Text"
                />
                {error.text && <p className="text-red-500 text-sm">{error.text}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="picture">Picture</Label>
                <Input
                  id="picture"
                  type="file"
                  onChange={(e) => {
                    setFile(e?.target?.files[0]);
                    setError({ ...error, file: '' });
                  }}
                  accept="image/*"
                />
                {error.file && <p className="text-red-500 text-sm">{error.file}</p>}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleSubmit}>
            {' '}
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
              'Create Quote'
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
