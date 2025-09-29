
import React from 'react';

interface TestimonialCardProps {
    quote: string;
    author: string;
    company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
    <p className="text-gray-600 italic">💬 “{quote}”</p>
    <div className="mt-6 flex items-center space-x-4">
        <img src={`https://i.pravatar.cc/40?u=${author}`} alt="Founder avatar" className="w-10 h-10 rounded-full"/>
        <div>
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{company}</p>
        </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trusted by Founders</h2>
            <p className="mt-3 text-lg text-gray-600">See how we've helped startups like yours succeed.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard quote="This prototype helped us get early investor interest in just one week!" author="Startup Founder" company="TechNova" />
          <TestimonialCard quote="We tested our idea with real users before committing to development — saved us months of work and thousands of dollars." author="Solo Entrepreneur" company="Innovate Co."/>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;