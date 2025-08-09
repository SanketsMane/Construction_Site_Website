import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Design Trends for 2025",
    date: "August 8, 2025",
    author: "Arshad",
    excerpt: "Explore the top architectural design trends for the coming year, from sustainable materials to smart home technologies.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Maximizing Space in Modern Homes",
    date: "July 15, 2025",
    author: "Priya Sharma",
    excerpt: "Tips and tricks for creating spacious-feeling interiors in urban apartments and compact homes.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Luxury Interiors: What Makes Them Unique?",
    date: "June 22, 2025",
    author: "Rohit Kumar",
    excerpt: "What defines a luxury interior? We break down the principles and design philosophies of high-end spaces.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
//       title: 'Luxury Interiors',",
  }
];

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Blogs</span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights, inspiration, and tips from the world of architecture and interior design.
          </p>
        </div>
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden transition-all hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{post.date} &middot; {post.author}</p>
                <p className="font-inter text-gray-700 dark:text-gray-200 mb-4">
                  {post.excerpt}
                </p>
                <button className="px-6 py-2 font-medium rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-blue-600 hover:to-purple-600 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;