import React, { useEffect, useState } from 'react';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';
import id11 from '../assets/images/id11.jpg';

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
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Modern Residential Complex',
      description: 'Contemporary living spaces with innovative design'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
      title: 'Urban Architecture',
      description: 'Cutting-edge commercial and residential developments'
    },
    {
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Sustainable Design',
      description: 'Eco-friendly buildings that harmonize with nature'
    },
    {
      url: id11,
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
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
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
    }, 3000);

    return () => {
      clearInterval(textInterval);
      clearInterval(bgInterval);
    };
  }, [texts.length, backgroundImages.length, isAutoPlaying, isHovered]);

  const nextSlide = () => {
    setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentBg((prev) =>
      prev - 1 < 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentBg(index);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home" // ← ADDED: This is what makes the "Home" button work
      className="relative h-screen flex items-center justify-center overflow-hidden scroll-mt-20" // ← ADDED: scroll-mt-20 for navbar offset
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentBg ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-gray-900/70'
                  : 'bg-gradient-to-r from-black/60 via-black/40 to-black/60'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 z-20 p-2 rounded-full transition-transform hover:scale-110 ${
          isDarkMode
            ? 'bg-white/10 hover:bg-white/20 text-white'
            : 'bg-black/10 hover:bg-black/20 text-white'
        }`}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-4 z-20 p-2 rounded-full transition-transform hover:scale-110 ${
          isDarkMode
            ? 'bg-white/10 hover:bg-white/20 text-white'
            : 'bg-black/10 hover:bg-black/20 text-white'
        }`}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Play/Pause */}
      <button
        onClick={() => setIsAutoPlaying((p) => !p)}
        className={`absolute top-4 right-4 z-20 p-2 rounded-full transition-transform hover:scale-110 ${
          isDarkMode
            ? 'bg-white/10 hover:bg-white/20 text-white'
            : 'bg-black/10 hover:bg-black/20 text-white'
        }`}
      >
        {isAutoPlaying ? (
          <PauseIcon className="w-5 h-5" />
        ) : (
          <PlayIcon className="w-5 h-5" />
        )}
      </button>

      {/* Text & Button */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Impress Imagination
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8">
          {texts[currentText]}
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
          {backgroundImages[currentBg].description}
        </p>
        <button
          onClick={() => scrollToSection('projects')}
          className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-transform hover:scale-105 shadow-lg"
        >
          Explore Projects
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {backgroundImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-transform ${
              idx === currentBg
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Slide Info */}
      <div className="absolute bottom-20 left-8 z-20 text-white">
        <h3 className="font-semibold">{backgroundImages[currentBg].title}</h3>
        <p className="text-sm">
          {currentBg + 1} / {backgroundImages.length}
        </p>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white/70 hover:text-white transition-colors"
        >
          <ChevronDownIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;