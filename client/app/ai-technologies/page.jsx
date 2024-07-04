"use client";

import React from "react";
import { Card } from "../../components/ui/card";
import { Home } from "lucide-react";

const technologies = [
  {
    title: "GPT-4",
    description:
      "OpenAI's most advanced language model, capable of understanding and generating human-like text with remarkable accuracy.",
    imageUrl: "/gpt4-icon.png",
    docsText: "View Docs",
    tutorialText: "Start Tutorial",
    category: "LLM",
    website: "https://openai.com/gpt-4",
    twitter: "https://twitter.com/OpenAI",
    github: "https://github.com/openai",
  },
  {
    title: "Claude",
    description:
      "Anthropic's AI assistant, known for its strong language understanding and generation capabilities.",
    imageUrl: "/claude-icon.png",
    docsText: "View Docs",
    tutorialText: "Start Tutorial",
    category: "LLM",
    website: "https://www.anthropic.com",
    twitter: "https://twitter.com/anthropicAI",
  },
  {
    title: "Gemini",
    description:
      "Google's multimodal AI model, capable of understanding and generating text, images, and other types of data.",
    imageUrl: "/gemini-icon.png",
    docsText: "View Docs",
    tutorialText: "Start Tutorial",
    category: "LLM",
    website: "https://deepmind.google/technologies/gemini/",
    twitter: "https://twitter.com/GoogleAI",
  },
  {
    title: "Midjourney",
    description:
      "An AI-powered tool that generates images from textual descriptions, popular among artists and designers.",
    imageUrl: "/midjourney-icon.png",
    docsText: "View Docs",
    tutorialText: "Start Tutorial",
    category: "Image Generation",
    website: "https://www.midjourney.com",
    twitter: "https://twitter.com/midjourney",
  },
  {
    title: "Next.js",
    description:
      "A React framework that enables server-side rendering and static site generation, among other features, making it popular for building modern web applications.",
    imageUrl: "/nextjs-icon.png",
    docsText: "View Docs",
    tutorialText: "Start Tutorial",
    category: "Framework",
    website: "https://nextjs.org",
    linkedin: "https://www.linkedin.com/company/vercel",
    twitter: "https://twitter.com/nextjs",
    github: "https://github.com/vercel/next.js",
  },
  {
    title: "Stripe",
    description:
      "A suite of payment APIs that powers commerce for businesses of all sizes, handling online and in-person payments.",
    imageUrl: "/stripe-icon.png",
    docsText: "View Docs",
    tutorialText: "Start Tutorial",
    category: "Payment",
    website: "https://stripe.com",
    twitter: "https://twitter.com/stripe",
    github: "https://github.com/stripe",
  },
  {
    title: "Sanity",
    description:
      "A headless CMS that offers real-time collaboration and customizable content models for modern content creation.",
    imageUrl: "/sanity-icon.png",
    docsText: "View Docs",
    tutorialText: "Start Tutorial",
    category: "CMS",
    website: "https://www.sanity.io",
    twitter: "https://twitter.com/sanity_io",
    github: "https://github.com/sanity-io",
  },
  {
    title: "Clerk",
    description:
      "A complete user management and authentication solution for modern applications.",
    imageUrl: "/clerk-icon.png",
    docsText: "View Docs",
    tutorialText: "Start Tutorial",
    category: "Authentication",
    website: "https://clerk.dev",
    twitter: "https://twitter.com/ClerkDev",
    github: "https://github.com/clerkinc",
  },
];

const AITechnologiesPage = () => {
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
        <span className="text-blue-600">&lt;</span>AI & Technologies
        <span className="text-blue-600">/&gt;</span>
      </h1>
      <p className="text-lg text-gray-600 text-center mb-4">
        Generative AI -- Backend Technologies -- Frontend Technologies
      </p>
      <p className="text-lg text-gray-600 text-center mb-8">
        LLM's -- Frameworks -- Libraries
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <Card
            key={`${tech.title}-${index}`}
            title={tech.title}
            description={tech.description}
            imageUrl={tech.imageUrl}
            docsText={tech.docsText}
            tutorialText={tech.tutorialText}
            category={tech.category}
            website={tech.website}
            linkedin={tech.linkedin}
            twitter={tech.twitter}
            github={tech.github}
          />
        ))}
      </div>
    </div>
  );
};

export default AITechnologiesPage;
