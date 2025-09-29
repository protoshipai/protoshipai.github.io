
import React from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const BenefitItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
            <CheckIcon />
        </div>
        <p className="text-gray-700">{children}</p>
    </div>
);


const Benefits: React.FC = () => {
    const benefits = [
        { text: 'Save Time: Go from idea to clickable prototype in just a few days.' },
        { text: 'Reduce Costs: Avoid expensive development before validating your concept.' },
        { text: 'Increase Confidence: Get real feedback from potential users before building the product.' },
        { text: 'Iterate Fast: Make changes instantly based on user insights.' },
    ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-lg">
                {benefits.map((benefit, index) => (
                    <BenefitItem key={index}>{benefit.text}</BenefitItem>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;