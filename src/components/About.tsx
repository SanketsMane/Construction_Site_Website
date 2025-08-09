import React from 'react';
import employeeImg from '../assets/images/employee.jpg';
import employeeImg1 from '../assets/images/employee1.jpg';
import employeeImg2 from '../assets/images/employee2.jpg';
import studioImg from '../assets/images/studio.jpg';
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
      image: employeeImg2
    },
    {
      name: 'Priya Sharma',
      role: 'Lead Interior Designer',
      description: 'Priya brings spaces to life with her exceptional eye for detail and mastery of contemporary interior design.',
      image: employeeImg
    },
    {
      name: 'Rohit Kumar',
      role: 'Project Director',
      description: 'Rohit ensures seamless project execution, coordinating teams and maintaining our high standards of delivery.',
      image: employeeImg1
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Us</span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are passionate architects and designers dedicated to creating extraordinary spaces 
            that inspire, function beautifully, and stand the test of time.
          </p>
        </div>

        {/* Story & Studio Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Impress Imagination was born from a shared belief: that architecture should uplift,delight,
                and exceed expectations. Guided by inspiration and a dedication to thoughtful design, our 
                team brings together creative minds who turn vision into extraordinary spaces.

              </p>
              <p className="font-inter text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Collaboration is at the heart of what we do. We listen first, design with empathy, and tailor
                each project to reflect the dreams and values of our clients. From distinctive homes to landmark 
                workplaces, our work blends innovative ideas with practical elegance and a commitment to sustainability.
              </p>
              <p className="font-inter text-gray-600 dark:text-gray-300 leading-relaxed">
                Every design from Impress Imagination is crafted to inspire—transforming ordinary moments and 
                spaces into memorable experiences. Our story is one of curiosity, care, and the pursuit of
                timeless, meaningful architecture.
              </p>
            </div>
          </div>

          {/* Main Studio 3D Image */}
          <div className="relative" style={{ perspective: '1000px' }}>
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={studioImg}
                alt="Our Studio"
                className="
                  w-full h-full object-cover rounded-2xl shadow-2xl
                  transition-transform duration-500
                  hover:scale-105 hover:-rotate-3 hover:shadow-[0_36px_70px_rgba(88,80,236,0.22),0_1.5px_20px_rgba(216,70,214,0.05)]
                "
              />
            </div>
           
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="
                  inline-flex items-center justify-center w-16 h-16
                  bg-gray-900 dark:bg-gray-700 rounded-2xl mb-4
                  group-hover:scale-110 transition-transform duration-300
                ">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="font-inter text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h3>
            <p className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {value.title}
                    </h4>
                    <p className="font-inter text-gray-600 dark:text-gray-300 leading-relaxed">
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
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Team
            </h3>
            <p className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Talented professionals united by a shared passion for exceptional design and architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="aspect-w-3 aspect-h-4 overflow-hidden" style={{ perspective: '1000px' }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="
                        w-full h-80 object-cover rounded-2xl shadow-xl
                        transition-transform duration-500
                        group-hover:scale-105 group-hover:-rotate-2 group-hover:shadow-2xl
                      "
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h4>
                    <p className="font-inter text-purple-600 dark:text-purple-400 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="font-inter text-gray-600 dark:text-gray-300 leading-relaxed">
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