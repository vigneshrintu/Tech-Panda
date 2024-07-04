'use client'

import React from 'react';
import Image from 'next/image';
import { Button } from './button';

const ExtensionCard = ({ name, title, description, imageUrl, category }) => {
  return (
    <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:border-gray-300 hover:-translate-y-2 hover:scale-105">
      <div className="p-6 space-y-4">
        <div className="relative">
          <div className="w-20 h-20 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            {imageUrl ? (
              <Image 
                src={imageUrl} 
                alt={title} 
                width={48} 
                height={48}
                className="object-contain transition-transform duration-300 hover:scale-110"
              />
            ) : (
              <span className="text-2xl font-bold text-gray-700">{name}</span>
            )}
          </div>
          <span className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-2 py-1 rounded-full transition-all duration-300 hover:bg-gray-800 hover:px-3">
            {category}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-center text-black transition-colors duration-300 hover:text-gray-700">{title}</h2>
        <p className="text-gray-600 text-sm text-center leading-relaxed transition-colors duration-300 hover:text-gray-800">{description}</p>
        <div className="pt-2">
          <Button variant="default" className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
            Get
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ExtensionCard };