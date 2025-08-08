import React, { useState } from 'react';
import { 
  BookOpenIcon, 
  CalendarIcon, 
  EyeIcon, 
  ArrowTopRightOnSquareIcon,
  TagIcon,
  UserIcon
} from '@heroicons/react/24/outline';

interface Publication {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  featured: boolean;
}

const Publications: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const publications: Publication[] = [
    {
      id: 1,
      title: 'Sustainable Architecture: Building for Tomorrow',
      excerpt: 'Exploring innovative approaches to sustainable design that minimize environmental impact while maximizing aesthetic appeal and functionality.',
      category: 'Sustainability',
      date: '2023-12-15',
      author: 'Arjun Patel',
      readTime: '8 min read',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'The Future of Urban Planning in India',
      excerpt: 'How modern urban planning principles can transform Indian cities into more liveable, sustainable, and economically vibrant spaces.',
      category: 'Urban Planning',
      date: '2023-11-28',
      author: 'Priya Sharma',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 3,
      title: 'Integrating Traditional and Modern Design',
      excerpt: 'A deep dive into how contemporary architecture can honor traditional Indian design elements while embracing modern functionality.',
      category: 'Design Philosophy',
      date: '2023-11-10',
      author: 'Rohit Kumar',
      readTime: '10 min read',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: 'Smart Homes: Technology Meets Architecture',
      excerpt: 'Examining the integration of smart technology in residential design and its impact on modern living experiences.',
      category: 'Technology',
      date: '2023-10-22',
      author: 'Arjun Patel',
      readTime: '7 min read',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      title: 'Biophilic Design: Bringing Nature Indoors',
      excerpt: 'Understanding the principles of biophilic design and how natural elements can enhance well-being in built environments.',
      category: 'Design Philosophy',
      date: '2023-10-05',
      author: 'Priya Sharma',
      readTime: '9 min read',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      title: 'Affordable Housing Solutions for Growing Cities',
      excerpt: 'Innovative architectural approaches to creating quality, affordable housing that addresses urban population growth challenges.',
      category: 'Urban Planning',
      date: '2023-09-18',
      author: 'Rohit Kumar',
      readTime: '11 min read',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = ['All', 'Sustainability', 'Urban Planning', 'Design Philosophy', 'Technology'];

  const filteredPublications = filter === 'All' 
    ? publications 
    : publications.filter(publication => publication.category === filter);

  const featuredPublications = publications.filter(pub => pub.featured);
  const regularPublications = filteredPublications.filter(pub => !pub.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Publications</span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Insights, research, and thought leadership from our team on architecture, design, 
            and the future of built environments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Publications */}
        {filter === 'All' && featuredPublications.length > 0 && (
          <div className="mb-16">
            <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Featured Articles
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPublications.map((publication) => (
                <article
                  key={publication.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={publication.image}
                      alt={publication.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors duration-300">
                          <EyeIcon className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors duration-300">
                          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <TagIcon className="w-4 h-4 mr-1" />
                        {publication.category}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {formatDate(publication.date)}
                      </div>
                    </div>

                    <h3 className="font-playfair text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                      {publication.title}
                    </h3>

                    <p className="font-inter text-gray-600 leading-relaxed mb-4">
                      {publication.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <UserIcon className="w-4 h-4 mr-1" />
                        {publication.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {publication.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Publications */}
        <div>
          {filter !== 'All' && (
            <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              {filter} Articles
            </h3>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(filter === 'All' ? regularPublications : filteredPublications).map((publication) => (
              <article
                key={publication.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-gray-900 text-sm font-medium rounded-full">
                      {publication.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors duration-300">
                      <BookOpenIcon className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {formatDate(publication.date)}
                  </div>

                  <h3 className="font-playfair text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
                    {publication.title}
                  </h3>

                  <p className="font-inter text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {publication.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{publication.author}</span>
                    <span className="text-gray-500">{publication.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="font-inter text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights on architecture, 
            design trends, and industry innovations directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
