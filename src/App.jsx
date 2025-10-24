import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Stats from './components/stats/Stats';
import Portfolio from './components/portfolio/Portfolio';
import Clients from './components/clients/Clients';
import Domains from './components/domains/Domains';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Portfolio />
      <Clients />
      <Domains />
      <Testimonial />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
