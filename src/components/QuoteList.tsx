import { Quote } from '@/lib';
import QuoteItem from './QuoteItem';

export default function QuoteList(props: { quotes: Quote[] }) {
  const quotes = props?.quotes;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
      {quotes &&
        quotes?.length > 0 &&
        quotes?.map((quote, key) => {
          return (
            <div key={key}>
              <QuoteItem quote={quote} />
            </div>
          );
        })}
    </div>
  );
}
