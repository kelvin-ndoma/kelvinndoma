import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const consultationOfferings = [
  { title: "Business Strategy", description: "Get expert advice on growing your business with digital solutions tailored to your goals.", icon: "📈" },
  { title: "Digital Transformation", description: "Guidance on transitioning your business to digital platforms effectively.", icon: "🔄" },
  { title: "Website Audit", description: "Comprehensive analysis of your website with actionable recommendations.", icon: "🔍" },
  { title: "Marketing Strategy", description: "Tailored marketing plan to maximize your online presence and ROI.", icon: "🎯" },
  { title: "Technology Stack", description: "Expert recommendations on the best technologies for your business needs.", icon: "💻" },
];

const consultationPricing = [
  {
    title: "Basic Consultation",
    price: "$199",
    features: [
      "1-hour strategy session",
      "Basic business assessment",
      "General recommendations",
      "Follow-up email support"
    ],
  },
  {
    title: "Comprehensive Review",
    price: "$499",
    features: [
      "2-hour in-depth consultation",
      "Detailed business analysis",
      "Written action plan",
      "1 week email support"
    ],
  },
  {
    title: "Ongoing Advisory",
    price: "$1,500/month",
    features: [
      "Monthly strategy sessions",
      "Continuous business guidance",
      "Priority access to expertise",
      "Regular progress reviews"
    ],
  },
  {
    title: "Enterprise Package",
    price: "Custom Pricing",
    features: [
      "Dedicated consultant",
      "Custom engagement model",
      "24/7 priority access",
      "Comprehensive transformation plan"
    ],
  }
];

const Consultations = () => {
  return (
    <>
      <Helmet>
        <title>Business Consultation Services | Grow with Kelvin</title>
        <meta name="description" content="Expert business and digital strategy consultation services to help Kenyan businesses grow and thrive online." />
        <meta name="keywords" content="Business Consultation Kenya, Digital Strategy Kenya, Marketing Consultation Kenya, Website Audit Kenya" />
      </Helmet>

      <div className="bg-gray-50 py-16 mt-20">
        <div className="text-center mb-12">
          <motion.h3
            className="text-lg text-blue-600 font-semibold uppercase"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Consultation
          </motion.h3>
          <motion.h2
            className="text-3xl font-extrabold text-gray-800 mt-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Expert Guidance for Your Business
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Get personalized advice to overcome challenges and accelerate your business growth.
          </motion.p>
        </div>

        <div className="bg-white py-12">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-extrabold text-gray-800 mb-8 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Consultation Services
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {consultationOfferings.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-xl flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  <div className="text-blue-600 text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-base">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white py-12">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-extrabold text-gray-800 mb-8 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Consultation Packages
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {consultationPricing.map((plan, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-xl flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.title}</h3>
                  <p className="text-gray-600 text-2xl font-semibold mb-6">{plan.price}</p>
                  <ul className="text-gray-600 text-base mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" state={{ service: "Consultation", plan: plan.title, price: plan.price }}>
                    <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700">
                      Book Now
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-12 mt-12 relative border flex items-center" style={{ backgroundImage: 'url("https://tse4.mm.bing.net/th?id=OIP.szK9yLAJb9FbPWpoAZ6tdgHaE7&pid=Api")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="max-w-4xl mx-auto text-center text-black bg-white bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-3xl font-extrabold mb-4">
              Need Expert Advice?
            </h2>
            <p className="mb-6">
              Schedule a consultation to get personalized guidance for your business challenges.
            </p>
            <Link to="/contact">
              <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700">
                Book a Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultations;