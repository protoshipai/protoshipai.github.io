import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import WhoIsThisFor from './components/WhoIsThisFor';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import Modal from './components/ui/Modal';
import LeadForm from './components/LeadForm';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans antialiased">
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Benefits />
        <WhoIsThisFor />
        <HowItWorks onOpenModal={openModal} />
        <WhyChooseUs onOpenModal={openModal} />
      </main>
      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LeadForm onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default App;