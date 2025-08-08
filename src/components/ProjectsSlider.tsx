import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  year: string;
  location: string;
  architect?: string;
}

const ProjectsSlider: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Residential Complex',
      subtitle: 'Contemporary Living',
      description: 'A stunning 50-unit residential complex featuring innovative sustainable design elements and community-focused amenities.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Residential',
      year: '2024',
      location: 'Mumbai, India',
      architect: 'Zaha Hadid Architects'
    },
    {
      id: 2,
      title: 'Corporate Office Tower',
      subtitle: 'Commercial Excellence',
      description: 'State-of-the-art 30-story office building with flexible workspaces and energy-efficient systems.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Commercial',
      year: '2024',
      location: 'Bangalore, India',
      architect: 'Foster + Partners'
    },
    {
      id: 3,
      title: 'Luxury Private Villa',
      subtitle: 'Exclusive Design',
      description: 'Bespoke luxury villa combining traditional architecture with contemporary design principles.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Residential',
      year: '2023',
      location: 'Goa, India',
      architect: 'John Pawson'
    },
    {
      id: 4,
      title: 'Modern Interior Design',
      subtitle: 'Spatial Innovation',
      description: 'Complete interior transformation creating sophisticated living spaces with artistic flair.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Interior',
      year: '2024',
      location: 'Delhi, India',
      architect: 'Kelly Wearstler'
    },
    {
      id: 5,
      title: 'Luxury Resort & Spa',
      subtitle: 'Hospitality Design',
      description: 'World-class resort design blending luxury with natural surroundings for an immersive experience.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Hospitality',
      year: '2023',
      location: 'Kerala, India',
      architect: 'Aman Resorts'
    },
    {
      id: 6,
      title: 'High-Rise Construction',
      subtitle: 'Urban Development',
      description: 'Modern high-rise apartment building construction showcasing advanced engineering and sustainable building practices.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Construction',
      year: '2024',
      location: 'Mumbai, India',
      architect: 'SOM'
    },
    {
      id: 7,
      title: 'Contemporary Family Home',
      subtitle: 'Modern Living',
      description: 'Elegant contemporary home with floor-to-ceiling windows and seamless indoor-outdoor living.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Residential',
      year: '2024',
      location: 'Pune, India',
      architect: 'Tadao Ando'
    },
    {
      id: 8,
      title: 'Luxury Estate Villa',
      subtitle: 'Opulent Design',
      description: 'Grand luxury estate featuring classical architecture and premium amenities.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Residential',
      year: '2023',
      location: 'New Delhi, India',
      architect: 'Peter Marino'
    },
    {
      id: 9,
      title: 'Tower Construction Project',
      subtitle: 'Infrastructure Development',
      description: 'Large-scale commercial tower construction with advanced building techniques.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Construction',
      year: '2024',
      location: 'Bangalore, India',
      architect: 'SOM'
    },
    {
      id: 10,
      title: 'Contemporary Glass House',
      subtitle: 'Minimalist Design',
      description: 'Sleek contemporary home with extensive glazing and smart home technology.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Residential',
      year: '2024',
      location: 'Chennai, India',
      architect: 'Mies van der Rohe'
    },
    {
      id: 11,
      title: 'Sustainable Office Complex',
      subtitle: 'Green Architecture',
      description: 'Eco-friendly office complex with solar panels and green roofs.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Commercial',
      year: '2024',
      location: 'Hyderabad, India',
      architect: 'BIG'
    },
    {
      id: 12,
      title: 'Modern Kitchen Design',
      subtitle: 'Culinary Excellence',
      description: 'State-of-the-art kitchen design with premium appliances and sophisticated lighting.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Interior',
      year: '2024',
      location: 'Mumbai, India',
      architect: 'Philippe Starck'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Construction', 'Interior', 'Hospitality'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Projects</span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of exceptional architectural projects that showcase innovation, 
            sustainability, and timeless design excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setCurrentSlide(0);
              }}
              className={`relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-purple-300 shadow-lg hover:shadow-xl'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Active button shine effect */}
              {filter === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full animate-pulse"></div>
              )}
              <span className="relative z-10">{category}</span>
              
              {/* Hover indicator */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-300 ${
                filter === category ? 'w-full' : 'group-hover:w-3/4'
              }`}></div>
            </button>
          ))}
        </div>

        {/* Continuous Scrolling Image Slider */}
        <div className="relative">
          {/* Slider Container */}
          <div className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-3xl shadow-2xl">
            {/* Images */}
            <div 
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0 relative group"
                  onMouseEnter={() => {
                    setIsAutoPlaying(false);
                  }}
                  onMouseLeave={() => {
                    setIsAutoPlaying(true);
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    {/* Project Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                      <div className="max-w-4xl">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold">
                            {project.category}
                          </span>
                          <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-semibold">
                            {project.year}
                          </span>
                        </div>
                        
                        <h3 className="font-playfair text-3xl lg:text-5xl font-bold mb-3">
                          {project.title}
                        </h3>
                        
                        <p className="font-inter text-lg lg:text-xl text-gray-200 mb-2">
                          {project.subtitle}
                        </p>
                        
                        <p className="font-inter text-gray-300 leading-relaxed mb-6 max-w-3xl">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center justify-between">
                          <div className="flex items-center space-x-6">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
                              <span className="text-sm font-semibold">{project.location}</span>
                            </div>
                            {project.architect && (
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                                <span className="text-sm font-semibold">{project.architect}</span>
                              </div>
                            )}
                          </div>
                          
                          <button className="px-8 py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105">
                            View Project →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Side Info Panel for Large Screens */}
                  <div className="hidden xl:block absolute top-8 right-8 bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-white max-w-xs transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-300 mb-1">Project Scale</p>
                        <p className="font-semibold">Large Scale Development</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-300 mb-1">Duration</p>
                        <p className="font-semibold">24 Months</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-300 mb-1">Status</p>
                        <p className="font-semibold text-green-400">Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="p-4 bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-full transition-all duration-300 transform hover:scale-110 text-white"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="p-4 bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-full transition-all duration-300 transform hover:scale-110 text-white"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Play/Pause Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-full transition-all duration-300 transform hover:scale-110 text-white"
            >
              {isAutoPlaying ? (
                <PauseIcon className="w-5 h-5" />
              ) : (
                <PlayIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {filteredProjects.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide">
              Awards Won
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
