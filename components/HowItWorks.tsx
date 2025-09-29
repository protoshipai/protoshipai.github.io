import React from 'react';
import Button from './ui/Button';

interface StepCardProps {
    number: string;
    title: string;
    description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-left h-full transform transition-transform duration-300 hover:-translate-y-2">
        <div className="flex items-center justify-center h-16 w-16 bg-indigo-100 text-indigo-600 font-bold text-2xl rounded-full mb-6">
            {number}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);


interface HowItWorksProps {
  onOpenModal: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenModal }) => {
    const steps = [
        { number: '1', title: 'Share Your Idea', description: 'Share your idea with us. Your concept is kept 100% private and secure.' },
        { number: '2', title: 'AI-Powered Generation', description: 'We generate a fully interactive prototype using AI.' },
        { number: '3', title: 'Test, Get Feedback, and Refine', description: 'Test the prototype, get feedback, and refine before building the real product.' }
    ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">From idea to interactive prototype in just a few days.</p>

        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
                <StepCard key={step.number} {...step} />
            ))}
        </div>

        <div className="mt-16">
          <Button onClick={onOpenModal}>
            Get Started Now →
          </Button>
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

export default HowItWorks;