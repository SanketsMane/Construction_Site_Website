import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Hero_clean';
import ProjectsSlider from './components/ProjectsSlider';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        
        <Navbar />
        <Home />
        <ProjectsSlider />
        <Services/>
        <About />
        <Blogs />
        <Contact />
       
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
