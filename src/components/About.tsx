import React from 'react';
import { 
  LightBulbIcon, 
  UsersIcon, 
  BuildingOfficeIcon, 
  TrophyIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const stats = [
    { number: '150+', label: 'Projects Completed', icon: BuildingOfficeIcon },
    { number: '50+', label: 'Happy Clients', icon: HeartIcon },
    { number: '15+', label: 'Awards Won', icon: TrophyIcon },
    { number: '8+', label: 'Years Experience', icon: SparklesIcon }
  ];

  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We push the boundaries of conventional design to create groundbreaking architectural solutions.'
    },
    {
      icon: UsersIcon,
      title: 'Collaboration',
      description: 'Our success stems from close collaboration with clients, understanding their vision and needs.'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Excellence',
      description: 'Every project reflects our commitment to the highest standards of quality and craftsmanship.'
    },
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'We pour our heart into every design, creating spaces that inspire and transform lives.'
    }
  ];

  const team = [
    {
      name: 'Arjun Patel',
      role: 'Principal Architect',
      description: 'With over 15 years of experience, Arjun leads our design vision with innovative approaches to sustainable architecture.',
      image: '/api/placeholder/300/400'
    },
    {
      name: 'Priya Sharma',
      role: 'Lead Interior Designer',
      description: 'Priya brings spaces to life with her exceptional eye for detail and mastery of contemporary interior design.',
      image: '/api/placeholder/300/400'
    },
    {
      name: 'Rohit Kumar',
      role: 'Project Director',
      description: 'Rohit ensures seamless project execution, coordinating teams and maintaining our high standards of delivery.',
      image: '/api/placeholder/300/400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Us</span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are passionate architects and designers dedicated to creating extraordinary spaces 
            that inspire, function beautifully, and stand the test of time.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed mb-6">
                Founded in 2015, Impress Imagination emerged from a simple belief: architecture should 
                not just shelter, but inspire. Our journey began with a small team of passionate designers 
                who dared to imagine beyond conventional boundaries.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed mb-6">
                Today, we've grown into a comprehensive design studio that transforms visionary concepts 
                into award-winning architectural realities. Each project tells a unique story, reflecting 
                our commitment to innovation, sustainability, and human-centered design.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed">
                From residential masterpieces to commercial landmarks, we continue to push the envelope 
                of what's possible in architecture and design.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/api/placeholder/600/450"
                alt="Our Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl -z-10"></div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full -z-10 opacity-80"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="font-inter text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h3>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h4>
                    <p className="font-inter text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h3>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Talented professionals united by a shared passion for exceptional design and architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="font-inter text-purple-600 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="font-inter text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
