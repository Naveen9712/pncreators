import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Technologies from './components/technologies/Technologies';
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
      <Portfolio />
      <Technologies />
      <Domains />
      <Testimonial />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
