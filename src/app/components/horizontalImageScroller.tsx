'use client';

import Image from 'next/image';

const images = [
  '/emigrante.png',
  '/rodelu.png',
  '/estrellagalicia.png',
  '/zenit.png',
];

export default function HorizontalImageScroller() {
  return (
    <div className="relative w-full h-40 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 flex h-full animate-scroll gap-2">
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="relative h-38 w-auto aspect-video flex-shrink-0 flex items-center justify-center"
          >
            {/* Main image */}
            <Image
              src={src}
              alt={`scroll-${idx}`}
              width={200}
              height={100}
              style={{ objectFit: 'contain' }}
	      fill={false}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}

