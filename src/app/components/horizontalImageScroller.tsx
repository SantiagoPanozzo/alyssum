'use client';

import Image from 'next/image';

const images = [
  '/visa.svg',
  '/amazon.svg',
  '/microsoft.svg',
  '/google.svg',
  '/nike.svg',
];

export default function HorizontalImageScroller() {
  return (
    <div className="relative w-full h-40 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 flex h-full animate-scroll gap-2">
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="relative h-32 w-auto aspect-video flex-shrink-0 flex items-center justify-center"
          >
            {/* Blurred shadow image */}
            <Image
              src={src}
              alt={`scroll-shadow-${idx}`}
              width={160}
              height={80}
              style={{ objectFit: 'contain' }}
              className="absolute top-0 left-0 w-full h-full rounded-xl translate-y-36 blur-xs opacity-20 -scale-100"
              priority
            />
            {/* Main image */}
            <Image
              src={src}
              alt={`scroll-${idx}`}
              width={140}
              height={80}
              style={{ objectFit: 'contain' }}
              className="rounded-xl"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}

