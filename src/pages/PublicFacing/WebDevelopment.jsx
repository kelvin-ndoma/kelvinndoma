import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

// Images
const HERO_IMAGE = "https://www.mckinsey.com/spContent/bespoke/tech-trends-2024-hero-nav/techtrends-hero-desktop.jpg";
const CODE_IMAGE = "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80";
const RAILS_IMAGE = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const SQUARESPACE_IMAGE = "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80";
const MAILCHIMP_IMAGE = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const API_IMAGE = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1085&q=80";

const GRADIENTS = {
  primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  secondary: "linear-gradient(to right, #00c6ff, #0072ff)",
  accent: "linear-gradient(to right, #ff758c, #ff7eb3)",
  bubble: "radial-gradient(circle at 75% 30%, #667eea, #764ba2)"
};

const SERVICES = [
  {
    title: "Ruby on Rails Development",
    description: "Full-stack web applications with clean, maintainable code",
    image: RAILS_IMAGE,
    icon: "💎",
    features: [
      "Custom web applications",
      "Database architecture",
      "API integrations",
      "Authentication systems",
      "Performance optimization"
    ]
  },
  {
    title: "API Integration Services",
    description: "Seamless connection between your systems and third-party services",
    image: API_IMAGE,
    icon: "🔌",
    features: [
      "RESTful API development",
      "Third-party API integration",
      "Webhook implementation",
      "Authentication setup",
      "Data synchronization"
    ]
  },
  {
    title: "Next.js Frontends",
    description: "Blazing fast, SEO-friendly React applications",
    image: CODE_IMAGE,
    icon: "⚡",
    features: [
      "Server-side rendering",
      "Static site generation",
      "Performance optimized",
      "TypeScript support",
      "SEO optimized"
    ]
  },
  {
    title: "Custom Websites",
    description: "Hand-coded responsive websites for unique needs",
    image: CODE_IMAGE,
    icon: "🖥️",
    features: [
      "HTML5/CSS3/JavaScript",
      "React components",
      "Performance optimized",
      "CMS integration"
    ]
  }
];

const PROCESS = [
  {
    step: "1",
    title: "Discovery Call",
    description: "We'll discuss your project goals and requirements",
    icon: "🗣️"
  },
  {
    step: "2",
    title: "Strategy Session",
    description: "You'll receive a detailed project plan and estimate",
    icon: "📝"
  },
  {
    step: "3",
    title: "Development",
    description: "Regular updates as we build your solution",
    icon: "💻"
  },
  {
    step: "4",
    title: "Launch & Growth",
    description: "Deployment and performance optimization",
    icon: "🚀"
  }
];

const FloatingBubbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 100 + 50;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10 blur-md"
            style={{
              background: GRADIENTS.bubble,
              width: `${size}px`,
              height: `${size}px`,
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              y: [0, -100, -200],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.2, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
        );
      })}
    </div>
  );
};

const WebDevelopment = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="text-white overflow-hidden">
      <Helmet>
        <title>Web Development That Drives Results | Custom Digital Solutions</title>
        <meta name="description" content="Conversion-focused web development with Ruby on Rails, Next.js, and API integrations. Let's build digital solutions that grow your business." />
      </Helmet>

      {/* Hero Section with Bubbly Design */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ scale }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
       <div className="absolute inset-0 w-full h-full z-0">
  <img 
    src={HERO_IMAGE} 
    alt="Developer coding" 
    className="w-full h-full object-cover object-center"
    loading="eager"
  />
  <div className="absolute inset-0 bg-black opacity-40" />
</div>

        
        <FloatingBubbles />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-lg font-semibold text-white bg-clip-text text-transparent" style={{ backgroundImage: GRADIENTS.primary }}>
                Web Development That Converts
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Custom Digital Solutions</span>
              <span className="block">That <span className="relative inline-block">
                <span className="relative z-10 bg-clip-text text-transparent" style={{ backgroundImage: GRADIENTS.primary }}>
                  Grow Your Business
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/50 rounded-full z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span></span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              I build <span className="font-semibold text-blue-300">high-performance websites</span> and <span className="font-semibold text-purple-300">custom applications</span> that deliver real business results - from blazing-fast Next.js frontends to robust Ruby on Rails backends.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                onHoverStart={() => setHoveredBtn('primary')}
                onHoverEnd={() => setHoveredBtn(null)}
              >
                <Link 
                  to="/contact" 
                  className="relative px-8 py-4 rounded-full font-bold text-lg overflow-hidden"
                >
                  <motion.span 
                    className="absolute inset-0 rounded-full z-0"
                    style={{ background: GRADIENTS.primary }}
                    animate={{
                      scale: hoveredBtn === 'primary' ? 1.05 : 1,
                      boxShadow: hoveredBtn === 'primary' ? '0 10px 25px rgba(102, 126, 234, 0.5)' : '0 5px 15px rgba(0, 0, 0, 0.1)'
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  />
                  <span className="relative z-10">Get Your Free Consultation</span>
                </Link>
              </motion.div>
              
              <motion.div
                onHoverStart={() => setHoveredBtn('secondary')}
                onHoverEnd={() => setHoveredBtn(null)}
              >
                <Link 
                  to="#services" 
                  className="relative px-8 py-4 rounded-full font-bold text-lg border border-white/20 overflow-hidden"
                >
                  <motion.span 
                    className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full z-0"
                    animate={{
                      backgroundColor: hoveredBtn === 'secondary' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: hoveredBtn === 'secondary' ? '0 10px 25px rgba(255, 255, 255, 0.2)' : 'none'
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  />
                  <span className="relative z-10">Explore Services</span>
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-12 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center space-x-2 text-blue-300">
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span>See how it works</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-500/10 mb-6 text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Built In</h3>
              <p className="text-gray-400">
                Websites that load in under 2 seconds with optimized code and infrastructure for better conversions.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-purple-500/10 mb-6 text-2xl">
                💡
              </div>
              <h3 className="text-xl font-bold mb-4">Strategic Approach</h3>
              <p className="text-gray-400">
                Every pixel and line of code serves a purpose - designed to guide users toward your business goals.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-pink-500 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500/10 mb-6 text-2xl">
                📈
              </div>
              <h3 className="text-xl font-bold mb-4">Results That Matter</h3>
              <p className="text-gray-400">
                Trackable metrics and analytics to prove ROI - not just pretty designs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENTS.secondary }}>
                Solutions That Drive Growth
              </span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized services designed to solve your business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 cursor-pointer relative overflow-hidden group"
                  whileHover={{ 
                    borderColor: "#667eea",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className={`${index === 0 ? 'bg-red-500/10' : index === 1 ? 'bg-blue-500/10' : index === 2 ? 'bg-black/10' : 'bg-green-500/10'} p-3 rounded-lg mr-4`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </motion.div>
              ))}
            </div>

            <div className="hidden lg:block relative h-full min-h-[500px] rounded-xl overflow-hidden">
              <AnimatePresence>
                {hoveredService !== null ? (
                  <motion.div
                    key={hoveredService}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={SERVICES[hoveredService].image} 
                      alt={SERVICES[hoveredService].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <ul className="space-y-3">
                        {SERVICES[hoveredService].features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-medium">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="absolute inset-0 bg-gray-800 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center p-8">
                      <div className="text-5xl mb-4">👆</div>
                      <h3 className="text-xl font-bold mb-2">Hover a service</h3>
                      <p className="text-gray-400">See details and examples</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENTS.accent }}>
                Technology I Work With
              </span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The right tools for the right job - ensuring optimal performance and maintainability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Ruby on Rails", icon: "💎", color: "bg-red-500/10" },
              { name: "TypeScript", icon: "📘", color: "bg-blue-500/10" },
              { name: "Next.js", icon: "⚡", color: "bg-black/10 border border-gray-800" },
              { name: "React", icon: "⚛️", color: "bg-blue-300/10" },
              { name: "PostgreSQL", icon: "🐘", color: "bg-blue-600/10" },
              { name: "HTML5", icon: "📄", color: "bg-orange-500/10" },
              { name: "CSS3", icon: "🎨", color: "bg-blue-400/10" },
              { name: "JavaScript", icon: "📜", color: "bg-yellow-400/10" },
              { name: "REST APIs", icon: "🔌", color: "bg-green-500/10" },
              { name: "GraphQL", icon: "📊", color: "bg-purple-500/10" },
              { name: "Git", icon: "🔀", color: "bg-orange-600/10" },
              { name: "Linux", icon: "🐧", color: "bg-gray-500/10" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className={`${tech.color} p-4 rounded-xl border border-gray-800 hover:border-gray-600 transition-all`}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-medium">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENTS.primary }}>
                My Proven Process
              </span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A collaborative approach that ensures your project's success
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 -ml-px"></div>
            
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
              {PROCESS.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="hidden lg:flex absolute left-1/2 top-0 w-12 h-12 rounded-full items-center justify-center -ml-6 z-10 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
                    <span className="text-white text-xl">{step.icon}</span>
                  </div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 lg:mt-12 border border-gray-700 hover:border-blue-500 transition-all h-full">
                    <div className="lg:hidden w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 mb-6 text-2xl shadow-lg">
                      {step.icon}
                    </div>
                    <div className="text-blue-400 font-bold text-lg mb-2">Step {step.step}</div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-90 z-0"></div>
        <FloatingBubbles />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block px-6 py-3 rounded-full bg-white/20 backdrop-blur-md mb-6 border border-white/30"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-lg font-semibold">Ready to get started?</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Let's Build Something <span className="text-yellow-300">Amazing</span> Together
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Whether you need a complete web application or expert consultation, I'm here to help your business thrive online.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="relative px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  <span>Get Your Free Quote</span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                             </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;