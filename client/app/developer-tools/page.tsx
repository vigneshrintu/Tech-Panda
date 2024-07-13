'use client'

import React from 'react';
import { ExtensionCard } from '../../components/ui/anotherCard';
import { Home } from 'lucide-react';

const developerTools = [
  {
    name: "VSC",
    title: "Visual Studio Code",
    description: "A powerful, free, open-source code editor with built-in debugging support, Git integration, and intelligent code completion.",
    imageUrl: "/vscode-icon.png",
    category: "IDE",
  },
  {
    name: "Git",
    title: "Git",
    description: "Distributed version control system for tracking changes in source code during software development.",
    imageUrl: "/git-icon.png",
    category: "VCS",
  },
  {
    name: "Node",
    title: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side JavaScript execution.",
    imageUrl: "/nodejs-icon.png",
    category: "Runtime",
  },
  {
    name: "Docker",
    title: "Docker",
    description: "Platform for developing, shipping, and running applications in containers, ensuring consistency across different environments.",
    imageUrl: "/docker-icon.png",
    category: "DevOps",
  },
  {
    name: "NPM",
    title: "npm",
    description: "The default package manager for Node.js, allowing developers to share and reuse code efficiently.",
    imageUrl: "/npm-icon.png",
    category: "Package Manager",
  },
  {
    name: "Webpack",
    title: "Webpack",
    description: "A static module bundler for modern JavaScript applications, optimizing and packaging web assets.",
    imageUrl: "/webpack-icon.png",
    category: "Build Tool",
  },
  {
    name: "GitHub",
    title: "GitHub",
    description: "Web-based hosting service for version control using Git, offering collaboration features for developers.",
    imageUrl: "/github-icon.png",
    category: "Collaboration",
  },
  {
    name: "Jest",
    title: "Jest",
    description: "A delightful JavaScript testing framework with a focus on simplicity and support for large web applications.",
    imageUrl: "/jest-icon.webp",
    category: "Testing",
  },
  {
    name: "Postman",
    title: "Postman",
    description: "A popular API client that makes it easy for developers to create, share, test and document APIs.",
    imageUrl: "/postman-icon.png",
    category: "API Development",
  },
  {
    name: "Babel",
    title: "Babel",
    description: "A JavaScript compiler that allows you to use next generation JavaScript, today.",
    imageUrl: "/babel-icon.png",
    category: "Transpiler",
  },
  {
    name: "Kubernetes",
    title: "Kubernetes",
    description: "An open-source system for automating deployment, scaling, and management of containerized applications.",
    imageUrl: "/kubernetes-icon.png",
    category: "DevOps",
  },
  {
    name: "TypeScript",
    title: "TypeScript",
    description: "A typed superset of JavaScript that compiles to plain JavaScript, adding optional static typing.",
    imageUrl: "/typescript-icon.png",
    category: "Language",
  }
];

const DeveloperToolsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 relative">
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
      <p className="text-lg text-gray-600 text-center mb-4">
        Build Tools -- Package Managers -- Deployment Tools
      </p>
      <p className="text-lg text-gray-600 text-center mb-8">
        IDEs -- Code Editors -- Extensions
      </p>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
    </div>
  );
};

export default DeveloperToolsPage;