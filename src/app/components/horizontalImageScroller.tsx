'use client';

import Image from 'next/image';
const images = [
    'https://picsum.photos/300/200?random=1',
    'https://picsum.photos/300/200?random=2',
    'https://picsum.photos/300/200?random=3',
    'https://picsum.photos/300/200?random=4',
    'https://picsum.photos/300/200?random=5',
];

export default function HorizontalImageScroller() {
  return (
    <div className="relative w-full h-40 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 flex h-full animate-scroll gap-2">
        {[...images, ...images].map((src, idx) => (
          <div key={idx} className="relative h-32 aspect-video flex-shrink-0">
            <Image src={src} alt={`scroll-${idx}`} fill style={{ objectFit: 'cover' }} className="rounded-xl translate-y-36 blur-xs opacity-20 -scale-100" priority />
            <Image src={src} alt={`scroll-${idx}`} fill style={{ objectFit: 'cover' }} className="rounded-xl" priority />
          </div>
        ))}
      </div>
    </div>
  );
}
