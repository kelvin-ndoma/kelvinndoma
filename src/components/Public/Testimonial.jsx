import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "I dive deep into understanding your vision, goals, and challenges to craft a solution that fits perfectly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.25 5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H14C12.8954 4.75 12 5.64543 12 6.75V19.25L12.8284 18.4216C13.5786 17.6714 14.596 17.25 15.6569 17.25H18.25C18.8023 17.25 19.25 16.8023 19.25 16.25V5.75Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H10C11.1046 4.75 12 5.64543 12 6.75V19.25L11.1716 18.4216C10.4214 17.6714 9.40401 17.25 8.34315 17.25H5.75C5.19772 17.25 4.75 16.8023 4.75 16.25V5.75Z" />
      </svg>
    )
  },
  {
    step: "02",
    title: "Strategy",
    description: "I design a customized roadmap with clear milestones, ensuring every step aligns with your objectives.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    step: "03",
    title: "Crafting",
    description: "With meticulous attention to detail, I bring the vision to life using cutting-edge technologies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    step: "04",
    title: "Refinement",
    description: "I polish every aspect, test rigorously, and optimize until we achieve perfection together.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
            MY WORKFLOW
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How I Create <span className="text-indigo-600">Exceptional</span> Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A personalized approach that ensures quality, creativity, and results you'll love.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated connecting line */}
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full">
            <div className="relative h-full w-0.5 bg-gradient-to-b from-indigo-200 to-indigo-100">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-full bg-indigo-500 origin-top"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}
              >
                <div className={`p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                }`}>
                  {/* Decorative element */}
                  <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Step indicator */}
                  <div className={`absolute -top-4 ${index % 2 === 0 ? '-left-4' : '-right-4 lg:left-auto lg:-right-4'} w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-indigo-600 mb-6 transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-400 rounded-2xl pointer-events-none transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;