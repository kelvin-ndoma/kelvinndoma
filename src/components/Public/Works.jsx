import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: "Association of Grassroot Journalists Kenya",
    category: "Web Development",
    description: "Designed and developed a responsive website with CMS integration for Kenya's leading journalism association, improving their online presence and member engagement.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    link: "https://www.agjkenya.org/",
    color: "from-[#0078F0] to-[#0078F0]"
  },
  {
    title: "African Original Copywriting",
    category: "Content Strategy",
    description: "Developed compelling brand messaging and website copy that increased conversion rates by 35% for this African heritage fashion brand.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    link: "https://africanoriginals.com/",
    color: "from-[#32D296] to-[#32D296]"
  },
  {
    title: "KATA Digital Consulting",
    category: "SEO Strategy",
    description: "Implemented comprehensive technical SEO improvements that increased organic traffic by 120% within 6 months for this digital agency.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    link: "https://kata-dc.com/",
    color: "from-[#0078F0] to-[#32D296]"
  }
];

const SomeWorks = () => {
  return (
    <section className="relative py-24 bg-[#FFFDFC]">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-[#0078F0] bg-[#0078F0]/10 rounded-full mb-4">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0078F0] to-[#32D296]">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto">
            Selected work demonstrating my expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Changed div to a tag for proper linking */}
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative h-full bg-[#FFFDFC] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#F2F4F7]">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
                  </div>
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-3 bg-gradient-to-r ${item.color}`}>
                      {item.category}
                    </span>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                    <p className="text-[#1A1A1A]/80 mb-4">{item.description}</p>
                    <div className="flex items-center text-sm font-medium text-[#0078F0] group-hover:text-[#32D296] transition-colors">
                      View Project
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SomeWorks;