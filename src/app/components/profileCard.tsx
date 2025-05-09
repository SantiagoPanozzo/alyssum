'use client';

import Image from 'next/image';

const ProfileCard = ({name, shortDescription, description, image}: {name: string, shortDescription: string, description: string, image: string}) => {
  return (
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            <Image
              src={image}
              alt="Profile Picture"
              className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 transition-transform duration-300 hover:scale-105"
	      width={200}
	      height={200}
            />
            <h1 className="text-2xl font-bold text-indigo-800 mb-2">{name}</h1>
            <p className="text-gray-600">{shortDescription}</p>
          </div>

          <div className="md:w-2/3 md:pl-8 place-content-center">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">¿Quién es?</h2>
            <p className="text-gray-700 mb-6">
	        {description}
            </p>

          </div>
        </div>
      </div>
  );
};

export default ProfileCard;

