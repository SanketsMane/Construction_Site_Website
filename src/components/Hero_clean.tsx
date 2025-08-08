import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useTheme();
  
  const texts = [
    'Architectural Excellence',
    'Innovative Design', 
    'Creative Solutions',
    'Inspiring Spaces'
  ];

  const backgroundImages = [
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Modern Residential Complex',
      description: 'Contemporary living spaces with innovative design'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
      title: 'Urban Architecture',
      description: 'Cutting-edge commercial and residential developments'
    },
    {
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Sustainable Design',
      description: 'Eco-friendly buildings that harmonize with nature'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
      title: 'Luxury Interiors',
      description: 'Sophisticated spaces that inspire and delight'
    }
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    const bgInterval = setInterval(() => {
      if (isAutoPlaying && !isHovered) {
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
      }
    }, 5000);

    return () => {
      clearInterval(textInterval);
      clearInterval(bgInterval);
    };
  }, [texts.length, backgroundImages.length, isAutoPlaying, isHovered]);

  const nextSlide = () => {
    setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentBg((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentBg(index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBg ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-gray-900/70' 
                : 'bg-gradient-to-r from-black/60 via-black/40 to-black/60'
            }`} />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 z-20 p-2 rounded-full transition-all duration-200 hover:scale-110 ${
          isDarkMode 
            ? 'bg-white/10 hover:bg-white/20 text-white' 
            : 'bg-black/10 hover:bg-black/20 text-white'
        }`}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-4 z-20 p-2 rounded-full transition-all duration-200 hover:scale-110 ${
          isDarkMode 
            ? 'bg-white/10 hover:bg-white/20 text-white' 
            : 'bg-black/10 hover:bg-black/20 text-white'
        }`}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Play/Pause Control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className={`absolute top-4 right-4 z-20 p-2 rounded-full transition-all duration-200 hover:scale-110 ${
          isDarkMode 
            ? 'bg-white/10 hover:bg-white/20 text-white' 
            : 'bg-black/10 hover:bg-black/20 text-white'
        }`}
      >
        {isAutoPlaying ? (
          <PauseIcon className="h-5 w-5" />
        ) : (
          <PlayIcon className="h-5 w-5" />
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Impress Imagination
          </span>
        </h1>
        
        <div className="h-16 mb-8 flex items-center justify-center">
          <p className="text-xl md:text-2xl font-light transition-all duration-500 transform">
            {texts[currentText]}
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {backgroundImages[currentBg].description}
          </p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Explore Projects
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentBg 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Image Info */}
      <div className="absolute bottom-20 left-8 z-20 text-white">
        <h3 className="text-lg font-semibold mb-1">
          {backgroundImages[currentBg].title}
        </h3>
        <p className="text-sm text-gray-200">
          {currentBg + 1} / {backgroundImages.length}
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white/70 hover:text-white transition-colors duration-200"
        >
          <ChevronDownIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
