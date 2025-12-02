import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen antialiased flex flex-col bg-deep-bg text-gray-200 font-sans">
      <Header />
      
      <main className="flex-grow space-y-24 pt-12 pb-20">
        <Hero />
        <Courses />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;