import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSlider from './components/ProjectsSlider';
import About from './components/About';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <ProjectsSlider />
        <About />
        <Publications />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
