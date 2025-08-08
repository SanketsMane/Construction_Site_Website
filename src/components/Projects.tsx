import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon, EyeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

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

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
    },
    {
      id: 13,
      title: 'Urban Construction Site',
      subtitle: 'Foundation Work',
      description: 'Heavy machinery construction project showcasing modern building techniques.',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Construction',
      year: '2024',
      location: 'Kolkata, India',
      architect: 'AECOM'
    },
    {
      id: 14,
      title: 'Luxury Bedroom Suite',
      subtitle: 'Private Sanctuary',
      description: 'Elegant master bedroom design featuring custom furniture and ambient lighting.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Interior',
      year: '2024',
      location: 'Goa, India',
      architect: 'Marcel Wanders'
    },
    {
      id: 15,
      title: 'Coastal Beach House',
      subtitle: 'Seaside Living',
      description: 'Stunning beachfront property with panoramic ocean views and natural materials.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Residential',
      year: '2023',
      location: 'Goa, India',
      architect: 'Richard Meier'
    },
    {
      id: 16,
      title: 'Modern Art Museum',
      subtitle: 'Cultural Architecture',
      description: 'Contemporary museum design with innovative exhibition spaces.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Cultural',
      year: '2024',
      location: 'Mumbai, India',
      architect: 'Frank Gehry'
    },
    {
      id: 17,
      title: 'Boutique Hotel Design',
      subtitle: 'Hospitality Innovation',
      description: 'Luxury boutique hotel with unique architectural features and premium amenities.',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Hospitality',
      year: '2024',
      location: 'Udaipur, India',
      architect: 'André Fu'
    },
    {
      id: 18,
      title: 'High-Tech Laboratory',
      subtitle: 'Scientific Innovation',
      description: 'State-of-the-art research facility with advanced technical infrastructure.',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'Commercial',
      year: '2024',
      location: 'Bangalore, India',
      architect: 'HOK'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Construction', 'Interior', 'Hospitality', 'Cultural'];

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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Projects</span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of exceptional architectural projects that showcase innovation, 
            sustainability, and timeless design excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-xl'
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:rotate-1 ${
                index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-16'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-80 lg:h-96 overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2 filter group-hover:brightness-110 group-hover:contrast-105"
                  loading="lazy"
                />
                
                {/* Animated Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-transparent transition-all duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center space-x-4">
                      <button className="p-4 bg-white/20 backdrop-blur-xl rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                        <EyeIcon className="w-6 h-6 text-white drop-shadow-lg" />
                      </button>
                      <button className="p-4 bg-white/20 backdrop-blur-xl rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:-rotate-12">
                        <ArrowTopRightOnSquareIcon className="w-6 h-6 text-white drop-shadow-lg" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Category Badge */}
                <div className="absolute top-6 left-6 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="px-6 py-3 bg-white/95 backdrop-blur-xl text-gray-900 text-sm font-bold rounded-2xl shadow-lg border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Animated Year Badge */}
                <div className="absolute top-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <span className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold rounded-2xl shadow-lg">
                    {project.year}
                  </span>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 bg-gradient-to-br from-white to-gray-50/50 relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="mb-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="font-inter text-lg text-gray-600 font-semibold tracking-wide">
                    {project.subtitle}
                  </p>
                </div>

                <p className="font-inter text-gray-600 leading-relaxed mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.description}
                </p>

                <div className="flex items-center justify-between transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  <div className="text-sm">
                    <p className="font-bold text-gray-800 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></span>
                      {project.location}
                    </p>
                  </div>
                  <button className="font-inter text-gray-900 hover:text-white font-bold group-hover:translate-x-4 transition-all duration-500 px-6 py-3 rounded-2xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:shadow-lg transform hover:scale-105">
                    View Details →
                  </button>
                </div>

                {/* Floating Dots Animation */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium rounded-full hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
