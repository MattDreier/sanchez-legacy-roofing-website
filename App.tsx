import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden w-full">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;