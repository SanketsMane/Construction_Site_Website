import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-3 rounded-2xl transition-all duration-500 transform hover:scale-110 ${
        isDarkMode 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
          : 'bg-white text-gray-900 hover:bg-gray-50 shadow-lg'
      }`}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6">
        <SunIcon 
          className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
            isDarkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <MoonIcon 
          className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
            isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
          }`}
        />
      </div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
        isDarkMode 
          ? 'bg-yellow-400/20 opacity-100' 
          : 'bg-blue-400/20 opacity-0 hover:opacity-100'
      }`}></div>
    </button>
  );
};

export default ThemeToggle;
