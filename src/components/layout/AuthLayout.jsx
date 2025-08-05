import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left Side - Form Content */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col">
        <div className="p-8 lg:p-12 flex-1 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">Project Portal</h1>
            <p className="mt-2 text-gray-600">Track your projects and milestones</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            {children}
          </div>
        </div>

        <div className="px-6 py-4 text-center">
          <p className="text-xs text-gray-500">
            Secure project management system
          </p>
        </div>
      </div>

      {/* Right Side - Visual Content */}
      <div className="hidden md:flex w-1/2 lg:w-3/5 items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 p-8 relative overflow-hidden">
        {/* Modern abstract project management illustration */}
        <div className="absolute inset-0 bg-[url('https://www.sectorlink.com/img/blog/Website-Analytics.png')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 max-w-2xl text-center px-4">
          <img 
            src="https://lpsonline.sas.upenn.edu/sites/default/files/2022-10/plpso-feratures-data-business.jpg" 
            alt="Modern project dashboard"
            className="w-full h-auto rounded-xl shadow-2xl border-8 border-white border-opacity-20"
          />
          <div className="mt-8 text-white">
            <h2 className="text-2xl font-bold mb-3">Visualize Your Progress</h2>
            <p className="text-indigo-100 max-w-md mx-auto text-lg">
              Interactive dashboards and real-time collaboration tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;