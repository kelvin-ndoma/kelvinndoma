import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-24 pb-16 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0078F0] to-[#32D296]">
                Kelvin Ndoma
              </span>
            </div>
            <p className="text-[#F2F4F7]">
              Transforming businesses through innovative digital solutions that drive growth and engagement.
            </p>
            <div className="flex space-x-4">
                          
              {/* Instagram */}
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.instagram.com/kelvinndomamutua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0078F0] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </motion.a>
              
              {/* LinkedIn */}
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/kelvin-ndoma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0078F0] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#F2F4F7] hover:text-[#32D296] transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#32D296] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-[#F2F4F7] hover:text-[#32D296] transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#32D296] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/website-development" className="text-[#F2F4F7] hover:text-[#32D296] transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#32D296] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#F2F4F7] hover:text-[#32D296] transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#32D296] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#F2F4F7] hover:text-[#32D296] transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#32D296] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/digital-marketing" className="text-[#F2F4F7] hover:text-[#32D296] transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#32D296] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/website-development" className="text-[#F2F4F7] hover:text-[#32D296] transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#32D296] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/consultation" className="text-[#F2F4F7] hover:text-[#32D296] transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#32D296] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Consultation
                </Link>
              </li>
              <li>
                <Link to="/services#seo" className="text-[#F2F4F7] hover:text-[#32D296] transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#32D296] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services#ecommerce" className="text-[#F2F4F7] hover:text-[#32D296] transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#32D296] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  E-Commerce Solutions
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#32D296] mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-[#F2F4F7]">
                  123 Digital Avenue, Tech City, TC 10001
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#32D296] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+11234567890"
                  className="text-[#F2F4F7] hover:text-[#32D296] transition-colors duration-300"
                >
                  +1 (123) 456-7890
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#32D296] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@kelvinndoma.com"
                  className="text-[#F2F4F7] hover:text-[#32D296] transition-colors duration-300"
                >
                  contact@kelvinndoma.com
                </a>
              </div>
              
              {/* Newsletter */}
              <div className="mt-8">
                <h4 className="text-[#F2F4F7] font-medium mb-3">Subscribe to Newsletter</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="px-4 py-3 bg-[#222222] border border-[#333333] text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#0078F0] w-full"
                  />
                  <button className="bg-gradient-to-r from-[#0078F0] to-[#32D296] text-white px-4 rounded-r-lg font-medium hover:opacity-90 transition-opacity">
                    Subscribe
                  </button>
                </div>
              </div>
            </address>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-[#333333] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-[#8A94A6] text-sm">
            &copy; {new Date().getFullYear()} Kelvin Ndoma. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-[#8A94A6] hover:text-[#32D296] text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[#8A94A6] hover:text-[#32D296] text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-[#8A94A6] hover:text-[#32D296] text-sm transition-colors duration-300"
            >
              Cookies Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;