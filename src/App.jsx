import React from 'react';
import './App.css';
import 'swiper/swiper-bundle.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
