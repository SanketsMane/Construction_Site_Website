// import React, { useState, useEffect } from 'react';
// import ThemeToggle from './ThemeToggle';
// import WhatsAppIcon from './WhatsAppIcon';
// import imaginationlogo from '../assets/images/imagination-logo .png'; // transparent PNG

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 100);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // ← UPDATED: Added fallback for "home" button
//   const scrollToSection = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     } else if (id === 'home') {
//       // Fallback: scroll to top if #home not found
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//     setIsOpen(false);
//   };

//   const navLinks = ['Home', 'Projects', 'Services', 'About', 'Blogs', 'Contact'];

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-md shadow-lg'
//           : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center h-20">
//           <div
//             className="flex-1 cursor-pointer pr-8"
//             onClick={() => scrollToSection('home')}
//           >
//             <img
//               src={imaginationlogo}
//               alt="Impress Imagination Logo"
//               className="h-16 w-56 max-w-md object-contain object-left drop-shadow-lg dark:drop-shadow-none"
//             />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className="relative px-3 py-2 text-sm font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 group"
//               >
//                 {item}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
//               </button>
//             ))}
//             <a
//               href="https://wa.me/919999999999"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Chat on WhatsApp"
//               className="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//             >
//               <WhatsAppIcon />
//             </a>
//             <ThemeToggle />
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center space-x-4">
//             <ThemeToggle />
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition-colors duration-300"
//             >
//               <div className="w-6 h-6 relative flex flex-col justify-center items-center">
//                 <span
//                   className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
//                     isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
//                   }`}
//                 />
//                 <span
//                   className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
//                     isOpen ? 'opacity-0' : 'opacity-100'
//                   }`}
//                 />
//                 <span
//                   className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
//                     isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
//                   }`}
//                 />
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden overflow-hidden transition-all duration-300 ${
//             isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
//           }`}
//         >
//           <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-b-lg">
//             {navLinks.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className="block w-full text-left px-3 py-3 text-base font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
//               >
//                 {item}
//               </button>
//             ))}
//             <a
//               href="https://wa.me/919999999999"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Chat on WhatsApp"
//               className="flex items-center px-3 py-3 w-full text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
//             >
//               <WhatsAppIcon />
//               <span className="ml-2">WhatsApp</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import WhatsAppIcon from './WhatsAppIcon';
import imaginationlogo from '../assets/images/imagination-logo .png'; // transparent PNG

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = ['Home', 'Projects', 'Services', 'About', 'Blogs', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-md shadow-lg'
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div
            className="flex-1 cursor-pointer pr-8"
            onClick={() => scrollToSection('home')}
          >
            <img
              src={imaginationlogo}
              alt="Impress Imagination Logo"
              className="h-16 w-56 max-w-md object-contain object-left drop-shadow-lg dark:drop-shadow-none"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative px-3 py-2 text-sm font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <WhatsAppIcon />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition-colors duration-300"
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ transitionProperty: 'max-height, opacity' }}
        >
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-b-lg">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-3 text-base font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center px-3 py-3 w-full text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <WhatsAppIcon />
              <span className="ml-2">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;