'use client';

import { useState } from 'react';
import ProfileCard from './profileCard';

const profiles = [
  {
    name: 'Ana Ruiz',
    shortDescription: 'Desarrolladora Frontend',
    description: 'Ana es una experta en React y Vue con 5 años de experiencia en diseño de interfaces atractivas y accesibles.',
    image: 'https://i.pravatar.cc/300?random=1',
  },
  {
    name: 'Carlos Pérez',
    shortDescription: 'Ingeniero DevOps',
    description: 'Carlos automatiza infraestructuras en AWS y Azure, promoviendo despliegues rápidos y seguros.',
    image: 'https://i.pravatar.cc/301',
  },
  {
    name: 'Lucía Gómez',
    shortDescription: 'Diseñadora UX/UI',
    description: 'Lucía lidera proyectos centrados en el usuario, creando experiencias intuitivas y modernas.',
    image: 'https://i.pravatar.cc/302',
  },
];

const ProfileCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % profiles.length);
  const prev = () => setIndex((prev) => (prev - 1 + profiles.length) % profiles.length);

  const currentProfile = profiles[index];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Left circular button */}
      <button
        onClick={prev}
        className="absolute top-1/2 -translate-y-1/2 left-[-2rem] bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-indigo-700 transition z-10"
        aria-label="Previous"
      >
        ‹
      </button>

      {/* Profile card */}
      <ProfileCard {...currentProfile} />

      {/* Right circular button */}
      <button
        onClick={next}
        className="absolute top-1/2 -translate-y-1/2 right-[-2rem] bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-indigo-700 transition z-10"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );

};

export default ProfileCarousel;

