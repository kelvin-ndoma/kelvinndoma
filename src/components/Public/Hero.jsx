import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import workShowcaseImage from '../../assets/social.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A1A1A]">
      {/* Background with new color scheme */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#0078F0] opacity-95"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')]"></div>
        
        {/* Animated elements with new accent color */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#0078F0] mix-blend-overlay filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#32D296] mix-blend-overlay filter blur-3xl animate-float animation-delay-2000"></div>
        </div>
      </div>

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-4 py-2 bg-[#0078F0]/10 text-[#0078F0] text-sm font-medium rounded-full border border-[#0078F0]/30 backdrop-blur-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0078F0] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0078F0]"></span>
                </span>
                YOUR PREMIUM CREATIVE SOLUTIONS
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFDFC] leading-tight tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0078F0] via-[#32D296] to-[#32D296]">
                Elevate Your Brand
              </span>{' '}
              With Cutting-Edge Design
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-xl text-[#F2F4F7] max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              I specialize in <span className="font-semibold text-[#FFFDFC] bg-gradient-to-r from-[#0078F0] to-[#32D296] bg-clip-text text-transparent">high-impact digital experiences</span> that blend stunning aesthetics with measurable business results.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="relative px-8 py-4 bg-gradient-to-r from-[#0078F0] to-[#32D296] hover:from-[#0066CC] hover:to-[#28B884] text-[#FFFDFC] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#FFFDFC]/10 to-[#FFFDFC]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Start Your Project
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              
            </motion.div>
          </div>
          
          {/* Right side - Work showcase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[36rem] rounded-3xl overflow-hidden shadow-2xl border border-[#FFFDFC]/10 transform perspective-1000 group">
              <div className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(5deg)_rotateX(2deg)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0078F0]/30 via-[#32D296]/30 to-[#32D296]/30 z-10"></div>
                <img 
                  src={workShowcaseImage} 
                  alt="Creative work showcase" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-transparent p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#32D296] animate-pulse"></div>
                    <span className="text-xs font-medium tracking-wider text-[#32D296] uppercase">get the best </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FFFDFC]">Kelvin Ndoma</h3>
                  <p className="mt-1 text-[#F2F4F7]">Web Developer+ Digital Marketing Specialist</p>
                  <div className="mt-4 flex gap-3">
                    <span className="px-3 py-1 bg-[#FFFDFC]/5 text-xs font-medium rounded-full border border-[#FFFDFC]/10">SEO PRO</span>
                    <span className="px-3 py-1 bg-[#FFFDFC]/5 text-xs font-medium rounded-full border border-[#FFFDFC]/10">Branding</span>
                    <span className="px-3 py-1 bg-[#FFFDFC]/5 text-xs font-medium rounded-full border border-[#FFFDFC]/10">Development</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;