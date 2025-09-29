import React from 'react';
import Button from './ui/Button';

const FeatureItem: React.FC<{ title: string, description: string, icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-gray-600">{description}</p>
            </div>
        </div>
    </div>
);

const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const LightBulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;

interface WhyChooseUsProps {
    onOpenModal: () => void;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenModal }) => {
    const features = [
        { icon: <CodeIcon />, title: "Test Without Full Development", description: "Validate your core idea without writing a single line of code." },
        { icon: <CheckCircleIcon />, title: "Avoid Wasted Costs", description: "Ensure you only build features that your users actually want." },
        { icon: <ClockIcon />, title: "Fast Turnaround", description: "Get actionable insights in days, not months." },
        { icon: <LightBulbIcon />, title: "Guidance Included", description: "Receive expert feedback to improve your product." }
    ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose a Prototype Over Building First?</h2>
            <p className="mt-3 text-lg text-gray-600">We're more than a service; we're your first product partner.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
            ))}
        </div>
        <div className="mt-16 text-center">
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

export default WhyChooseUs;