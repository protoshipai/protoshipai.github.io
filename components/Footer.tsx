
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-indigo-400">Protoship AI</h3>
            <p className="text-gray-400 mt-2">Validate your startup idea, faster.</p>
          </div>
          <div className="mt-6 md:mt-0">
             <p className="text-gray-400">&copy; {new Date().getFullYear()} Protoship AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;