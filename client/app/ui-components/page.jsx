"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Eye,
  Package,
  Moon,
  Sun,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Home } from "lucide-react";

const ComponentCard = ({
  title,
  description,
  preview,
  code,
  installation,
  isDarkMode,
}) => {
  const [currentView, setCurrentView] = useState("preview");

  const views = [
    {
      label: "Preview",
      icon: Eye,
      content: (
        <div className={`${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
          {preview}
        </div>
      ),
    },
    {
      label: "Code",
      icon: Code,
      content: (
        <pre
          className={`${
            isDarkMode
              ? "bg-gray-800 text-gray-300"
              : "bg-gray-100 text-gray-800"
          } p-4 rounded-md text-sm overflow-x-auto`}
        >
          <code>{code}</code>
        </pre>
      ),
    },
    {
      label: "Installation",
      icon: Package,
      content: (
        <div className={`${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
          {installation}
        </div>
      ),
    },
  ];

  const currentIndex = views.findIndex(
    (view) => view.label.toLowerCase() === currentView
  );

  const handlePrev = () => {
    setCurrentView(
      views[
        (currentIndex - 1 + views.length) % views.length
      ].label.toLowerCase()
    );
  };

  const handleNext = () => {
    setCurrentView(
      views[(currentIndex + 1) % views.length].label.toLowerCase()
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border ${
        isDarkMode ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <div className={`${isDarkMode ? "bg-gray-900" : "bg-gray-100"} p-6`}>
        <h2
          className={`text-2xl font-bold ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h2>
        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mt-2`}>
          {description}
        </p>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          {views.map((view) => (
            <motion.button
              key={view.label}
              onClick={() => setCurrentView(view.label.toLowerCase())}
              className={`flex items-center px-3 py-2 rounded-md transition-colors duration-200 ${
                currentView === view.label.toLowerCase()
                  ? "bg-blue-500 text-white"
                  : `${
                      isDarkMode
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-600 hover:bg-gray-200"
                    }`
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <view.icon size={18} className="mr-2" />
              {view.label}
            </motion.button>
          ))}
        </div>
        <div className="relative">
          <motion.button
            onClick={handlePrev}
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            } transition-colors duration-200`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft
              size={24}
              className={isDarkMode ? "text-gray-300" : "text-gray-600"}
            />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            } transition-colors duration-200`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight
              size={24}
              className={isDarkMode ? "text-gray-300" : "text-gray-600"}
            />
          </motion.button>
          <div className="px-12 py-8 min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {
                  views.find((view) => view.label.toLowerCase() === currentView)
                    .content
                }
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const UILibraryShowcase = ({ components }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div>
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
      <div
        className={`min-h-screen ${
          isDarkMode ? "dark bg-gray-900" : "bg-gray-50"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto py-12 px-4">
          <div className="flex justify-between items-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <div>
                <h1 className="text-center m-4">UI Components</h1>
                <p className="text-sm text-center m-2">
                  Integrate components directly into your code without needing
                  to install any dependency other than React, Lucide, and Framer
                  Motion.
                </p>
                <p className="text-sm text-center m-2">
                  Tailwind CSS-only components with dark mode feature.
                </p>
                <p className="text-sm text-center m-2">
                  No variables, no configurations, no Tailwind config file to
                  stop you from modifying the code as much as you want.
                </p>
                <p className="text-sm text-center m-2">
                  Go for maximum modifications and your code never breaks.
                </p>
              </div>
            </motion.h1>
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "bg-gray-700 text-yellow-400"
                  : "bg-gray-200 text-gray-800"
              } transition-colors duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </motion.button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {components.map((component, index) => (
              <ComponentCard
                key={index}
                {...component}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const exampleComponents = [
  {
    title: "Button Component",
    description: "A simple button component with customizable styles.",
    preview: (
      <button className="bg-blue-500 text-white py-2 px-4 rounded transition-transform duration-200 hover:scale-105">
        Button
      </button>
    ),
    code: '<button className="bg-blue-500 text-white py-2 px-4 rounded transition-transform duration-200 hover:scale-105">Button</button>',
    installation: "npm install your-button-package",
  },
  {
    title: "Card Component",
    description: "A card component with a shadow and rounded corners.",
    preview: (
      <div className="bg-white dark:bg-gray-700 p-4 shadow-md rounded-lg transition-transform duration-200 hover:scale-105">
        <h3 className="text-lg font-bold">Card Title</h3>
        <p className="text-gray-600 dark:text-gray-300">
          This is a card component.
        </p>
      </div>
    ),
    code: '<div className="bg-white dark:bg-gray-700 p-4 shadow-md rounded-lg transition-transform duration-200 hover:scale-105"><h3 className="text-lg font-bold">Card Title</h3><p className="text-gray-600 dark:text-gray-300">This is a card component.</p></div>',
    installation: "npm install your-card-package",
  },

  {
    title: "Tooltip Component",
    description:
      "A tooltip component to provide additional information on hover.",
    preview: (
      <div className="relative group">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Hover me
        </button>
        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded transition-opacity duration-200 opacity-0 group-hover:opacity-100">
          This is a tooltip
        </div>
      </div>
    ),
    code: '<div className="relative group"><button className="bg-blue-500 text-white py-2 px-4 rounded">Hover me</button><div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded transition-opacity duration-200 opacity-0 group-hover:opacity-100">This is a tooltip</div></div>',
    installation: "npm install your-tooltip-package",
  },
  {
    title: "Dropdown Component",
    description: "A dropdown component with a list of options.",
    preview: (
      <div className="relative inline-block text-left">
        <div>
          <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
            Options
          </button>
        </div>
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 transition-transform duration-200 transform-gpu hover:scale-105">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
            >
              Option 3
            </a>
          </div>
        </div>
      </div>
    ),
    code: '<div className="relative inline-block text-left"><div><button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">Options</button></div><div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 transition-transform duration-200 transform-gpu hover:scale-105"><div className="py-1"><a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300">Option 1</a><a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300">Option 2</a><a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300">Option 3</a></div></div></div>',
    installation: "npm install your-dropdown-package",
  },
  {
    title: "Alert Component",
    description: "An alert component for displaying important messages.",
    preview: (
      <div className="bg-red-500 text-white p-4 rounded-md transition-transform duration-200 hover:scale-105">
        <p className="font-bold">Alert!</p>
        <p>This is an alert message.</p>
      </div>
    ),
    code: '<div className="bg-red-500 text-white p-4 rounded-md transition-transform duration-200 hover:scale-105"><p className="font-bold">Alert!</p><p>This is an alert message.</p></div>',
    installation: "npm install your-alert-package",
  },
  {
    title: "Badge Component",
    description: "A badge component to display status or count.",
    preview: (
      <span className="bg-green-500 text-white py-1 px-3 rounded-full transition-transform duration-200 hover:scale-105">
        Badge
      </span>
    ),
    code: '<span className="bg-green-500 text-white py-1 px-3 rounded-full transition-transform duration-200 hover:scale-105">Badge</span>',
    installation: "npm install your-badge-package",
  },

  {
    title: "Accordion Component",
    description: "An accordion component for collapsible content panels.",
    preview: (
      <div className="space-y-2">
        <details className="transition duration-200">
          <summary className="bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded cursor-pointer">
            Accordion 1
          </summary>
          <div className="p-4 bg-gray-100 dark:bg-gray-800">
            <p>This is the content of accordion 1.</p>
          </div>
        </details>
        <details className="transition duration-200">
          <summary className="bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded cursor-pointer">
            Accordion 2
          </summary>
          <div className="p-4 bg-gray-100 dark:bg-gray-800">
            <p>This is the content of accordion 2.</p>
          </div>
        </details>
      </div>
    ),
    code: '<div className="space-y-2"><details className="transition duration-200"><summary className="bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded cursor-pointer">Accordion 1</summary><div className="p-4 bg-gray-100 dark:bg-gray-800"><p>This is the content of accordion 1.</p></div></details><details className="transition duration-200"><summary className="bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded cursor-pointer">Accordion 2</summary><div className="p-4 bg-gray-100 dark:bg-gray-800"><p>This is the content of accordion 2.</p></div></details></div>',
    installation: "npm install your-accordion-package",
  },
];

const Page = () => <UILibraryShowcase components={exampleComponents} />;

export default Page;
