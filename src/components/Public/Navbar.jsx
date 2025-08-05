import { useState, useRef, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/kelvinndoma.png';
import { UserContext } from '../../context/userContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  // List of public paths where navbar should always be visible
  const publicPaths = [
    '/',
    '/about',
    '/services/digital-marketing',
    '/services/website-development',
    '/services/consultation',
    '/contact',
    '/login',
    '/signUp'
  ];

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close all menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setIsServicesOpen(false);
  };

  const toggleServices = (e) => {
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
  };

  // Services data with modern icons and gradient colors
  const services = [
    {
      path: "/services/digital-marketing",
      name: "Digital Marketing",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500"
    },
    {
      path: "/services/website-development",
      name: "Website Development",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      path: "/services/consultation",
      name: "Consultations",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      color: "from-green-500 to-teal-500"
    }
  ];

  // Only hide navbar if user is authenticated AND not on a public path
  if (user && !publicPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <nav 
      className="sticky top-0 z-50 w-full"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(247,250,252,0.98) 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.5)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
      }}
      ref={navRef}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex h-20 items-center justify-between">
          {/* Logo container */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-lg transition-all hover:opacity-90 active:scale-95"
            >
              <img 
                src={logo} 
                alt="Company Logo" 
                className="h-12 w-auto md:h-14 lg:h-16 transition-transform hover:scale-105"
                style={{ minWidth: '120px' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`flex items-center px-5 py-2.5 text-base font-medium rounded-lg transition-all ${
                  isServicesOpen 
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50/50"
                }`}
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <svg 
                  className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-white' : 'text-gray-500'
                  }`} 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute left-0 z-10 mt-2 w-64 origin-top-right rounded-xl shadow-xl ring-1 ring-gray-200 ring-opacity-10 focus:outline-none transition-all duration-200 ease-out overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(247,250,252,0.98) 100%)',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-1.5 space-y-1">
                    {services.map((service) => (
                      <Link 
                        key={service.path}
                        to={service.path} 
                        className={`block px-4 py-3 text-base font-medium text-gray-800 hover:bg-gradient-to-r hover:text-white transition-all duration-200 group ${service.color}`}
                      >
                        <span className="relative flex items-center">
                          <span className={`p-1.5 mr-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                            {service.icon}
                          </span>
                          {service.name}
                          <svg 
                            className="ml-auto h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className="relative px-5 py-2.5 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
            >
              <span className="flex items-center">
                About
                <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-4/5"></span>
              </span>
            </Link>

            <Link 
              to="/contact" 
              className="relative px-5 py-2.5 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
            >
              <span className="flex items-center">
                Contact
                <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-4/5"></span>
              </span>
            </Link>

            {!user ? (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2.5 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Login
                </Link>
                <Link 
                  to="/signUp" 
                  className="ml-4 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-semibold shadow-md hover:shadow-lg transition-all hover:opacity-90 active:scale-95"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link 
                to={user.role === 'admin' ? '/admin/dashboard' : '/user/dashboard'}
                className="ml-4 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-semibold shadow-md hover:shadow-lg transition-all hover:opacity-90 active:scale-95"
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-fadeIn">
          <div 
            className="space-y-1 pb-3 pt-2 px-4"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(247,250,252,0.98) 100%)',
              boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }}
          >
            {/* Mobile Services Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={toggleServices}
                className={`flex w-full items-center justify-between py-3 text-lg font-medium rounded-lg px-3 transition-all ${
                  isServicesOpen 
                    ? "bg-blue-50/50 text-blue-600"
                    : "text-gray-800 hover:bg-gray-50/50"
                }`}
                aria-expanded={isServicesOpen}
              >
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  Services
                </span>
                <svg 
                  className={`ml-1 h-6 w-6 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-blue-600' : 'text-gray-500'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="mt-2 space-y-1 pl-8">
                  {services.map((service) => (
                    <Link 
                      key={service.path}
                      to={service.path} 
                      className="flex items-center py-2.5 px-3 text-lg font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className={`flex items-center justify-center w-9 h-9 mr-3 rounded-full bg-gradient-to-r ${service.color} text-white`}>
                        {service.icon}
                      </span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className="block py-3 px-3 text-lg font-medium text-gray-800 hover:bg-gray-50/50 hover:text-blue-600 rounded-lg transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className="block py-3 px-3 text-lg font-medium text-gray-800 hover:bg-gray-50/50 hover:text-blue-600 rounded-lg transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {!user ? (
              <>
                <Link 
                  to="/login" 
                  className="block py-3 px-3 text-lg font-medium text-gray-800 hover:bg-gray-50/50 hover:text-blue-600 rounded-lg transition-colors border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signUp" 
                  className="block mt-4 w-full py-3 px-4 text-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link 
                to={user.role === 'admin' ? '/admin/dashboard' : '/user/dashboard'}
                className="block mt-4 w-full py-3 px-4 text-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;