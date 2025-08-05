import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FiCheck, FiZap, FiBarChart2, FiUsers, FiClock } from 'react-icons/fi';

const Contact = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setAlertMessage("✅ We'll get back to you within 24 hours.");
      form.current.reset();
    } catch (error) {
      console.error('Email sending error:', error);
      setAlertMessage("❌ Message failed. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | [Agency Name]</title>
        <meta name="description" content="Get in touch with our team for expert digital solutions." />
      </Helmet>

      {/* Hero Image */}
      <div className="relative h-96 w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional team meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white text-center px-4"
          >
            Ready to Transform Your Business?
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12">
        {/* Left Side: Value Proposition */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Why Partner With Us</h2>
          
          {/* Stats/Results Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <FiZap className="text-blue-600 text-2xl mb-2" />
              <h3 className="font-bold text-lg">72 Hours</h3>
              <p className="text-gray-600">Avg. project kickoff time</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <FiBarChart2 className="text-green-600 text-2xl mb-2" />
              <h3 className="font-bold text-lg">+240%</h3>
              <p className="text-gray-600">Avg. client growth</p>
            </div>
          </div>

          {/* Process Highlights */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Our Process</h3>
            {[
              {
                icon: <FiUsers className="text-purple-500" />,
                title: "1. Discovery Call",
                desc: "We listen to your unique challenges"
              },
              {
                icon: <FiClock className="text-blue-500" />,
                title: "2. Custom Strategy",
                desc: "Tailored plan delivered in 3 days"
              },
              {
                icon: <FiCheck className="text-green-500" />,
                title: "3. Rapid Execution",
                desc: "Agile implementation with weekly updates"
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1">{step.icon}</div>
                <div>
                  <h4 className="font-medium">{step.title}</h4>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">We Work With</h3>
            <div className="flex flex-wrap gap-4">
              {['Fortune 500', 'Startups', 'Non-Profits', 'E-commerce'].map((type) => (
                <span key={type} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-lg shadow-xl"
        >
          {alertMessage && (
            <div className={`p-3 mb-6 rounded-md ${
              alertMessage.includes("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}>
              {alertMessage}
            </div>
          )}

          <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">Name*</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email*</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">What's your biggest challenge?*</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSending}
              className={`w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg transition ${
                isSending ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
            >
              {isSending ? "Sending..." : "Get Free Consultation →"}
            </motion.button>
          </form>

          {/* Privacy Assurance */}
          <p className="mt-4 text-sm text-gray-500">
            We respect your privacy. No spam, ever.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;