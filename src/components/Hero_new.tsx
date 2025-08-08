import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
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
    },
    {
      url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Cultural Centers',
      description: 'Public spaces that bring communities together'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
      title: 'Innovation Hubs',
      description: 'Futuristic workspaces that foster creativity'
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
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Background image slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((imageData, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentBg ? 'opacity-60 scale-105' : 'opacity-0 scale-100'
            }`}
          >
            <img
              src={imageData.url}
              alt={imageData.title}
              className="w-full h-full object-cover filter brightness-75 contrast-110 saturate-105"
              loading="lazy"
            />
            {/* Dynamic overlay gradient based on theme */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBg ? 'opacity-100' : 'opacity-0'
            } ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-900/40 via-black/30 to-transparent' 
                : 'bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-transparent'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Image navigation controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 bg-black/20 backdrop-blur-md rounded-full px-6 py-3">
          {/* Previous button */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 text-white hover:scale-110"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {/* Slide indicators */}
          <div className="flex space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBg 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Play/pause button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 text-white hover:scale-110"
          >
            {isAutoPlaying ? (
              <PauseIcon className="w-5 h-5" />
            ) : (
              <PlayIcon className="w-5 h-5" />
            )}
          </button>

          {/* Next button */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 text-white hover:scale-110"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Image info overlay */}
      <div className="absolute bottom-20 left-8 z-20 max-w-md">
        <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 text-white transform transition-all duration-500 hover:bg-black/40">
          <h3 className="text-lg font-semibold mb-1">{backgroundImages[currentBg].title}</h3>
          <p className="text-sm opacity-90">{backgroundImages[currentBg].description}</p>
        </div>
      </div>
      
      {/* Enhanced background overlay with theme support */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900/85 via-gray-800/75 to-gray-900/90' 
          : 'bg-gradient-to-br from-white/95 via-white/85 to-gray-50/90'
      }`}>
        <div className={`absolute inset-0 transition-all duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-transparent via-blue-500/5 to-purple-500/5' 
            : 'bg-gradient-to-r from-transparent via-purple-500/5 to-blue-500/5'
        } animate-pulse`}></div>
      </div>
      
      {/* Animated background elements with theme support */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-20 w-64 h-64 rounded-full opacity-20 animate-pulse transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-blue-400 to-purple-400' 
            : 'bg-gradient-to-br from-blue-100 to-purple-100'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-15 animate-pulse transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-purple-400 to-pink-400' 
            : 'bg-gradient-to-br from-purple-100 to-pink-100'
        }`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/3 right-1/4 w-32 h-32 rounded-full opacity-20 animate-pulse transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-yellow-400 to-orange-400' 
            : 'bg-gradient-to-br from-yellow-100 to-orange-100'
        }`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main heading */}
        <h1 className={`font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-fadeInUp transition-colors duration-500 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Impress
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Imagination
          </span>
        </h1>

        {/* Rotating taglines */}
        <div className="h-20 flex items-center justify-center mb-8">
          <p className={`font-inter text-xl sm:text-2xl lg:text-3xl font-light transition-colors duration-500 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Where{' '}
            <span className="relative inline-block">
              <span
                key={currentText}
                className={`animate-slideIn text-transparent bg-clip-text font-medium transition-all duration-500 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-gray-100 to-gray-300' 
                    : 'bg-gradient-to-r from-gray-900 to-gray-600'
                }`}
              >
                {texts[currentText]}
              </span>
            </span>
            {' '}Meets Reality
          </p>
        </div>

        {/* Description */}
        <p className={`font-inter text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeInUp transition-colors duration-500 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`} style={{ animationDelay: '0.3s' }}>
          We transform visionary concepts into extraordinary architectural experiences that inspire, 
          captivate, and endure. Every project is a journey where imagination becomes reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => scrollToSection('projects')}
            className={`px-8 py-4 font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
                : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700'
            }`}
          >
            Explore Our Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-4 border-2 font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white' 
                : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
            }`}
          >
            Start Your Project
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
          <button
            onClick={() => scrollToSection('projects')}
            className={`group flex flex-col items-center transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className="text-sm font-medium mb-2">Discover More</span>
            <ChevronDownIcon className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className={`absolute bottom-0 left-0 w-full h-32 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-t from-gray-900 to-transparent' 
          : 'bg-gradient-to-t from-white to-transparent'
      }`}></div>
    </section>
  );
};

export default Hero;
