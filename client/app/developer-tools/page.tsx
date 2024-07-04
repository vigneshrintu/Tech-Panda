'use client'

import React from 'react';
import { ExtensionCard } from '../../components/ui/anotherCard';
import { Home } from 'lucide-react';

const developerTools = [
  {
    name: "VSC",
    title: "Visual Studio Code",
    description: "A powerful, free, open-source code editor with built-in debugging support, Git integration, and intelligent code completion.",
    imageUrl: "/images/vscode-icon.png",
    category: "IDE",
  },
  {
    name: "Git",
    title: "Git",
    description: "Distributed version control system for tracking changes in source code during software development.",
    imageUrl: "/images/git-icon.png",
    category: "VCS",
  },
  {
    name: "Node",
    title: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side JavaScript execution.",
    imageUrl: "/images/nodejs-icon.png",
    category: "Runtime",
  },
  {
    name: "Docker",
    title: "Docker",
    description: "Platform for developing, shipping, and running applications in containers, ensuring consistency across different environments.",
    imageUrl: "/images/docker-icon.png",
    category: "DevOps",
  }
];

const DeveloperToolsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <a 
        href="/home" 
        className="fixed bottom-4 right-4 border-black bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full shadow-lg transition-all duration-300 z-10 group"
        aria-label="Go to home page"
      >
        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
        <div className="relative flex items-center justify-center">
          <Home className="w-6 h-6" />
        </div>
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Back to Home
        </span>
      </a>
      <h1 className="text-4xl font-bold mb-8 text-center">
        <span className="text-blue-600">&lt;</span>Developer Tools<span className="text-blue-600">/&gt;</span>
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Build Tools -- Package Managers -- Deployment Tools
      </p>
      <p className="text-lg text-gray-600 text-center mb-8">
        IDEs -- Code Editors -- Extensions
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {developerTools.map((tool) => (
          <ExtensionCard
            key={tool.name}
            name={tool.name}
            title={tool.title}
            description={tool.description}
            imageUrl={tool.imageUrl}
            category={tool.category}
          />
        ))}
      </div>
    </div>
  );
};

export default DeveloperToolsPage;