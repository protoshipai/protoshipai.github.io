import React from 'react';

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
);
const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);

interface AudienceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const AudienceCard: React.FC<AudienceCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-left flex items-start space-x-5">
        <div className="flex-shrink-0 h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    </div>
);

const WhoIsThisFor: React.FC = () => {
    const audienceProfiles = [
        {
            icon: <RocketIcon />,
            title: "Early-Stage Founders",
            description: "Need to validate an idea before hiring an expensive development team or committing to a tech stack."
        },
        {
            icon: <UserIcon />,
            title: "Solo Entrepreneurs",
            description: "Juggling multiple roles and need a fast, efficient way to test concepts without getting bogged down in code."
        },
        {
            icon: <BriefcaseIcon />,
            title: "Product Managers",
            description: "Looking to present a tangible, interactive concept to stakeholders and get crucial buy-in for new features."
        },
        {
            icon: <UsersIcon />,
            title: "Teams Seeking Investment",
            description: "Need a compelling, interactive demo to show potential investors the vision and functionality of the product."
        }
    ];

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Perfect for Early-Stage Innovators</h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">Our service is built to help you succeed, whether you're a solo founder or a growing team.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {audienceProfiles.map((profile, index) => (
              <AudienceCard key={index} {...profile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;