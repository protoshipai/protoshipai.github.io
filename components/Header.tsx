import React from 'react';
import Button from './ui/Button';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">
          Protoship AI
        </div>
        <nav>
          <Button className="px-6 py-2 text-base" onClick={onOpenModal}>
            Get Started Now →
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;