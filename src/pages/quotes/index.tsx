import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import QuoteList from '@/components/QuoteList';
import { getQuotes } from '@/handlers/handlers';
import { Quote } from '@/lib';

export default function QuotesPage() {
  const router = useRouter();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 20;

  const fetchQuotes = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/');
        return;
      }
      const data = await getQuotes(limit, offset, token);
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setQuotes((prevQuotes) => [...prevQuotes, ...data]);
        setOffset((prevOffset) => prevOffset + limit);
      }
    } catch (error) {
      console.error('Failed to fetch quotes:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    fetchQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto mt-10 my-20">
      <h1 className="text-3xl font-bold mb-5">Quotes</h1>
      {quotes && quotes?.length > 0 && <QuoteList quotes={quotes} />}
      <div className="flex justify-center">
        {hasMore && (
          <button
            onClick={fetchQuotes}
            className="mt-5 bg-slate-800 text-white px-4 py-2 lg:px-8 lg:py-4 lg:text-xl rounded flex justify-center"
          >
            Load More
          </button>
        )}
      </div>
      <Link href="/create-quote">
        <div className="fixed bottom-5 right-5 bg-gray-900 text-white p-4 rounded-full w-14 h-14 xl:w-16 xl:h-16 flex justify-center items-center text-3xl xl:text-4xl ">
          +
        </div>
      </Link>
    </div>
  );
}
