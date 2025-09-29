import React from 'react';
import Button from './ui/Button';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative bg-white pt-20 pb-24 text-center">
      <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Validate Your Startup Idea Using AI—<span className="text-indigo-600">In Days, Not Months</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Save months of development and thousands of dollars by validating your idea first with a fully clickable AI prototype and get real user feedback in days.
          </p>
          <div className="mt-10">
            <Button onClick={onOpenModal} className="!text-xl !py-5 !px-10">
              Get Started Now →
            </Button>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-500">
            <span>Takes less than 2 minutes to get started</span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span>100% privacy—your idea stays secure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;