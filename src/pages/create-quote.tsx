import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CreateQuoteForm from '../components/CreateQuoteForm';
import { uploadImage, createQuote } from '@/handlers/handlers';

export default function CreateQuotePage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateQuote = async (text: string, file: File) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/');
        return;
      }

      const fileData = new FormData();
      fileData.append('file', file);

      const uploadResponse = await uploadImage(fileData);
      const mediaUrl = uploadResponse?.url;

      await createQuote(text, mediaUrl, token);
      setLoading(false);

      router.push('/quotes');
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError('Failed to create quote. Please try again.');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/');
    }
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <CreateQuoteForm onSubmit={handleCreateQuote} loading={loading} />
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
}
