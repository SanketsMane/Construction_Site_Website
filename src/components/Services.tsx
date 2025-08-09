
// import React from 'react';
// import architectureImg from '../assets/images/architecture.png';
// import constructionImg from '../assets/images/construction.png';
// import jdImg from '../assets/images/jd.png';

// type Service = {
//   id: string;
//   title: string;
//   description: string;
//   img: string;
// };

// const services: Service[] = [
//   {
//     id: '0001',
//     title: 'Architecture',
//     description:
//       'Impress Imagination creates resilient, innovative, and beautiful architecture through design, setting the standard for enhancing wellness, productivity, and reflecting each client’s unique mission.',
//     img: architectureImg,
//   },
//   {
//     id: '0002',
//     title: 'Construction',
//     description:
//       'Our end-to-end construction management delivers quality, safety, and on-time completion—bringing designs to life with precision and care.',
//     img: constructionImg,
//   },
//   {
//     id: '0003',
//     title: 'JD & Development',
//     description:
//       'We craft future-ready urban environments, balancing community needs, cultural aspirations, and environmental responsibility for inspirational master plans.',
//     img: jdImg,
//   },
// ];

// const Services: React.FC = () => {
//   return (
//     <section id="services" className="py-20 bg-white dark:bg-black">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
//         {services.map((svc, idx) => (
//           <div
//             key={svc.id}
//             className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
//               // Alternate sides on large screens
//               idx % 2 === 1
//                 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
//                 : ''
//             }`}
//           >
//             {/* Text Column */}
//             <div className="space-y-4">
//               <p className="text-gray-500 dark:text-gray-400 font-mono text-sm">
//                 {svc.id}
//               </p>
//               <h2 className="text-2xl font-bold text-black dark:text-white">
//                 {svc.title}
//               </h2>
//               <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//                 {svc.description}
//               </p>
//             </div>

//             {/* Image Column: only the image rotates in 3D; fixed uniform size */}
//             <div className="w-full perspective">
//               {/* Apply the slow 0°→90°→0° oscillation here */}
//               <div className="w-full transform-style-preserve-3d animate-tilt-90">
//                 {/* Aspect box keeps every image the same display size */}
//                 <div className="relative w-full aspect-[4/3]">
//                   <img
//                     src={svc.img}
//                     alt={svc.title}
//                     // object-contain preserves full artwork (no cropping)
//                     className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from 'react';
import architectureImg from '../assets/images/architecture.png';
import constructionImg from '../assets/images/construction.png';
import jdImg from '../assets/images/jd.png';

type Service = {
  id: string;
  title: string;
  description: string;
  img: string;
};

const services: Service[] = [
  {
    id: '0001',
    title: 'Architecture',
    description:
      'Impress Imagination creates resilient, innovative, and beautiful architecture through design, setting the standard for enhancing wellness, productivity, and reflecting each client’s unique mission.',
    img: architectureImg,
  },
  {
    id: '0002',
    title: 'Construction',
    description:
      'Our end-to-end construction management delivers quality, safety, and on-time completion—bringing designs to life with precision and care.',
    img: constructionImg,
  },
  {
    id: '0003',
    title: 'JD & Development',
    description:
      'We craft future-ready urban environments, balancing community needs, cultural aspirations, and environmental responsibility for inspirational master plans.',
    img: jdImg,
  },
];

const Services: React.FC = () => (
  <section id="services" className="py-20 bg-white dark:bg-black">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
      {services.map((svc, idx) => (
        <div
          key={svc.id} // ← Unique key
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
            idx % 2 === 1
              ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
              : ''
          }`}
        >
          {/* Text Column */}
          <div className="space-y-4">
            <p className="text-gray-500 dark:text-gray-400 font-mono text-sm">
              {svc.id}
            </p>
            <h2 className="text-2xl font-bold text-black dark:text-white">
              {svc.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {svc.description}
            </p>
          </div>

          {/* Image Column */}
          <div className="w-full perspective">
            <div className="w-full transform-style-preserve-3d animate-tilt-90">
              <div className="relative w-full aspect-[4/3]">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;