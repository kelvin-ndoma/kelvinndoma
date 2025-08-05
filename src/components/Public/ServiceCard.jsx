import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Digital Marketing",
    description: "I craft data-driven campaigns that blend creativity with analytics to maximize your ROI. From social media strategies to targeted PPC campaigns, I optimize every touchpoint to convert audiences into loyal customers while building brand authority in your niche.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: "bg-gradient-to-br from-purple-500 to-fuchsia-600"
  },
  {
    title: "Web Design",
    description: "I design immersive digital experiences that marry aesthetics with functionality. Every interface I create follows UX best practices while reflecting your brand personality, ensuring intuitive navigation that guides visitors toward conversion with strategic visual storytelling.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    color: "bg-gradient-to-br from-blue-500 to-cyan-600"
  },
  {
    title: "Web Development",
    description: "I build lightning-fast, secure websites using modern stacks like React, Next.js and headless architectures. Every line of code is optimized for performance and scalability, with responsive designs that deliver flawless experiences across all devices and browsers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "bg-gradient-to-br from-indigo-500 to-violet-600"
  },
  {
    title: "SEO Strategy",
    description: "I engineer comprehensive SEO solutions that drive sustainable organic growth. Through technical audits, content optimization, and strategic link building, I help your site climb rankings for high-intent keywords while future-proofing against algorithm updates.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: "bg-gradient-to-br from-emerald-500 to-teal-600"
  },
  {
    title: "UX Consulting",
    description: "I analyze and refine user journeys to eliminate friction points and boost conversions. Using heatmaps, user testing, and interaction analytics, I identify opportunities to enhance engagement and create intuitive flows that keep visitors moving toward your goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "bg-gradient-to-br from-amber-500 to-orange-600"
  },
  {
    title: "E-Commerce Solutions",
    description: "I develop high-converting online stores with Shopify, WooCommerce and custom solutions. From seamless checkout flows to inventory management integrations, I create shopping experiences that reduce cart abandonment and increase average order value.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    color: "bg-gradient-to-br from-red-500 to-pink-600"
  }
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#05051A]">
      {/* Dark galaxy background */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2942&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#05051A]/90 via-[#05051A]/70 to-[#05051A]/90"></div>
      </div>
      
      {/* Floating stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.5,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 text-xs font-semibold tracking-wider text-cyan-300 uppercase bg-cyan-900/30 rounded-full mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Digital Solutions
            </span> That Deliver Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every project benefits from my focused attention and tailored approach - no generic solutions, just strategic digital craftsmanship.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 ${service.color}`}></div>
                
                <div className="p-8">
                  {/* Icon with gradient background */}
                  <div className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;