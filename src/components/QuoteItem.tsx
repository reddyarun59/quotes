import { Quote } from '@/lib';
import Image from 'next/image';
import { useState } from 'react';

export default function QuoteItem(props: { quote: Quote }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-64">
        {props?.quote?.mediaUrl && !imageError ? (
          <Image
            src={props?.quote?.mediaUrl}
            alt="Quote Image"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          props?.quote?.mediaUrl && <img src={props?.quote?.mediaUrl} alt="Quote Image" style={{ objectFit: 'cover' }} />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-center p-4">{props?.quote.text}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="font-bold">{props?.quote?.username}</p>
        <p className="text-sm text-gray-600">{new Date(props?.quote.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
}
