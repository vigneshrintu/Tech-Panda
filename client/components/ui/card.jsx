'use client'

import React from 'react';
import Image from 'next/image';
import { Button } from './button';

const Card = ({ title, description, imageUrl, docsText, tutorialText, category, website, linkedin, twitter, github }) => {
  return (
    <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:border-gray-300 hover:-translate-y-2 hover:scale-105">
      <div className="p-6 space-y-4">
        <div className="relative">
          <div className="w-20 h-20 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <Image 
              src={imageUrl} 
              alt={title} 
              width={48} 
              height={48}
              className="object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
          <span className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-2 py-1 rounded-full transition-all duration-300 hover:bg-gray-800 hover:px-3">
            {category}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-center text-black transition-colors duration-300 hover:text-gray-700">{title}</h2>
        <p className="text-gray-600 text-sm text-center leading-relaxed transition-colors duration-300 hover:text-gray-800">{description}</p>
        <div className="pt-2 space-y-2">
          <Button variant="default" className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
            {docsText}
          </Button>
          <Button variant="outline" className="w-full border-2 border-black text-black hover:bg-gray-100 font-semibold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
            {tutorialText}
          </Button>
        </div>
      </div>
      <div className="bg-gray-100 px-6 py-4 transition-colors duration-300 hover:bg-gray-200">
        <div className="flex justify-center space-x-4">
          <a href={website} className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-125">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </a>
          <a href={linkedin} className="text-gray-400 hover:text-blue-700 transition-all duration-300 transform hover:scale-125">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
          <a href={twitter} className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
            </svg>
          </a>
          <a href={github} className="text-gray-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-125">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export { Card };