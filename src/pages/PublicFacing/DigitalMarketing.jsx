import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const IMAGES = {
  marketingHero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  abstractBg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80",
  seoImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  socialMediaImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  contentImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ppcImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  emailImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  analyticsImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  brandingImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  strategyImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  metaAdsImage: "https://www.searchenginejournal.com/wp-content/uploads/2024/09/img_2024-09-09-195224-837.jpeg",
  conversionImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  influencerImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  videoImage: "https://images.unsplash.com/photo-1574717024453-354056aafa98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  mobileImage: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
};

const STATISTICS = [
  {
    stat: "87%",
    description: "of shoppers begin product searches online",
    source: "Digital Commerce 360"
  },
  {
    stat: "3.2x",
    description: "higher conversion rates from targeted campaigns",
    source: "CMA Industry Report"
  },
  {
    stat: "24/7",
    description: "digital presence working for your business",
    source: ""
  }
];

const INDUSTRIES = [
  {
    industry: "E-commerce & Retail",
    details: "Boost online sales with conversion-optimized product pages and targeted ads"
  },
  {
    industry: "Hospitality & Tourism",
    details: "Increase bookings with compelling destination marketing and reputation management"
  },
  {
    industry: "Professional Services",
    details: "Generate high-quality leads through strategic content and precise targeting"
  },
  {
    industry: "Healthcare",
    details: "Build patient trust with compliant, educational digital marketing"
  },
  {
    industry: "SaaS & Tech Startups",
    details: "Drive signups and demos with targeted digital campaigns"
  },
  {
    industry: "Education & E-learning",
    details: "Attract students with content marketing and conversion funnels"
  },
  {
    industry: "Nonprofits & NGOs",
    details: "Increase donations and engagement through digital storytelling"
  },
  {
    industry: "Real Estate",
    details: "Generate leads and showcase properties with visual marketing"
  }
];

// Updated SERVICES array with 3 additional services
const SERVICES = [
  { 
    title: "Search Engine Optimization", 
    summary: "I help businesses dominate search results and drive organic traffic",
    highlights: [
      "Comprehensive keyword research and strategy",
      "Technical SEO optimization audits",
      "Content optimization for higher rankings",
      "Local and international SEO implementation",
      "Ongoing performance tracking and reporting"
    ],
    image: IMAGES.seoImage,
    icon: "🔍"
  },
  { 
    title: "Meta Ads Management", 
    summary: "I create and optimize high-converting Facebook & Instagram campaigns",
    highlights: [
      "Custom audience targeting for global markets",
      "Creative testing and performance optimization",
      "Conversion-focused ad copywriting",
      "Cross-border campaign management",
      "Detailed ROI analysis and reporting"
    ],
    image: IMAGES.metaAdsImage,
    icon: "📈"
  },
  { 
    title: "Content Marketing", 
    summary: "I develop engaging content that attracts and converts audiences",
    highlights: [
      "SEO-optimized blog content strategy",
      "Social media content calendars",
      "Email marketing sequences",
      "Video script writing and production",
      "Performance tracking and optimization"
    ],
    image: IMAGES.contentImage,
    icon: "✍️"
  },
  { 
    title: "Digital Strategy", 
    summary: "I build customized roadmaps for sustainable online growth",
    highlights: [
      "Competitor and market opportunity analysis",
      "Omnichannel strategy development",
      "KPI framework aligned with business goals",
      "3-12 month implementation planning",
      "Global performance benchmarking"
    ],
    image: IMAGES.strategyImage,
    icon: "🧭"
  },
  { 
    title: "PPC Advertising", 
    summary: "I manage results-driven pay-per-click campaigns",
    highlights: [
      "Google Ads account setup and management",
      "Social media advertising campaigns",
      "Display and remarketing networks",
      "Conversion rate optimization",
      "Budget management and ROI tracking"
    ],
    image: IMAGES.ppcImage,
    icon: "💰"
  },
  { 
    title: "Analytics & Optimization", 
    summary: "I provide data-driven insights for better marketing decisions",
    highlights: [
      "Conversion tracking implementation",
      "Customer journey and funnel analysis",
      "Heatmap and user behavior tracking",
      "A/B and multivariate testing",
      "Monthly performance reporting"
    ],
    image: IMAGES.analyticsImage,
    icon: "📊"
  },
  // New services added
  { 
    title: "Conversion Rate Optimization", 
    summary: "I maximize conversions through data-driven website improvements",
    highlights: [
      "User behavior analysis and heatmapping",
      "A/B testing of landing pages and CTAs",
      "Checkout process optimization",
      "Personalization strategies",
      "Continuous performance enhancement"
    ],
    image: IMAGES.conversionImage,
    icon: "🚀"
  },
  { 
    title: "Influencer Marketing", 
    summary: "I create authentic brand partnerships with key influencers",
    highlights: [
      "Influencer identification and vetting",
      "Campaign strategy development",
      "Content collaboration management",
      "Performance tracking and reporting",
      "Relationship building with micro-influencers"
    ],
    image: IMAGES.influencerImage,
    icon: "🤝"
  },
  { 
    title: "Video Marketing", 
    summary: "I create compelling video content that engages audiences",
    highlights: [
      "Video content strategy development",
      "Scriptwriting and storyboarding",
      "Animation and motion graphics",
      "Social media video optimization",
      "Performance analytics and optimization"
    ],
    image: IMAGES.videoImage,
    icon: "🎥"
  }
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "I begin by thoroughly understanding your business, competitors, and audience to create a customized digital roadmap.",
    image: IMAGES.strategyImage
  },
  {
    step: "02",
    title: "Implementation",
    description: "I personally execute the strategy with continuous optimization based on real-time data and performance.",
    image: IMAGES.brandingImage
  },
  {
    step: "03",
    title: "Optimization",
    description: "I refine campaigns based on performance metrics to maximize your ROI and business impact.",
    image: IMAGES.analyticsImage
  }
];

const DigitalMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Kelvin Ndoma Creatives | Global Digital Marketing Consultant</title>
        <meta name="description" content="Personalized digital marketing services including SEO, Meta ads, and strategic planning for businesses worldwide. Work directly with me, Kelvin Ndoma." />
        <meta name="keywords" content="digital marketing consultant, SEO specialist, Meta ads expert, global marketing strategist" />
      </Helmet>

      {/* Hero Section - Centered Content */}
      <section className="relative bg-gray-900 min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80 z-10"></div>
        <img 
          src={IMAGES.marketingHero} 
          alt="Digital marketing strategy" 
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="relative max-w-7xl w-full mx-auto px-6 lg:px-8 z-20 py-20 flex justify-center">
          <div className="max-w-2xl w-full backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block">Global Digital Marketing</span>
              <span className="block text-blue-300 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                With Kelvin Ndoma 
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-blue-100 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              As your dedicated digital marketing consultant, I combine strategic thinking with hands-on execution to deliver measurable results for businesses worldwide.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Get Your Free Consultation
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
             
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Centered */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMAGES.abstractBg} alt="abstract background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Digital Marketing Impact
            </motion.h2>
            <motion.p
              className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why businesses worldwide invest in digital strategies
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {STATISTICS.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl text-center border border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md max-w-xs w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <p className="text-5xl font-bold text-blue-600 mb-3">{item.stat}</p>
                <p className="text-lg text-gray-700">{item.description}</p>
                {item.source && <p className="mt-3 text-sm text-gray-500">Source: {item.source}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Centered */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              My Comprehensive Services
            </motion.h2>
            <motion.p
              className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              End-to-end digital marketing solutions tailored to your business
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-sm text-2xl">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{service.title}</h3>
                  <p className="text-blue-600 font-medium mb-4 text-center">{service.summary}</p>
                  <ul className="space-y-3">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Process Section - Centered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              My Proven Process
            </motion.h2>
            <motion.p
              className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              How I deliver results as your dedicated consultant
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {PROCESS.map((step, index) => (
              <motion.div
                key={index}
                className="relative group w-full max-w-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
                <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:border-blue-200 transition-all duration-300">
                  <div className="relative h-48 bg-gray-100">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center text-lg shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="p-6 pt-10 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Centered */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Industries I Serve
            </motion.h2>
            <motion.p
              className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience across diverse sectors and business models
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {INDUSTRIES.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200 w-full max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 mx-auto">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-blue-600 mb-3 text-center">{item.industry}</h3>
                <p className="text-gray-700 text-center">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section - Centered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Work With Me Directly?
            </motion.h2>
            <motion.p
              className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The benefits of partnering with an independent consultant
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <motion.div
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 w-full max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4 mx-auto">👔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">No Middlemen</h3>
              <p className="text-gray-700 text-center">
                You work directly with me - no account managers or junior teams. I handle all aspects of your strategy personally.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 w-full max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4 mx-auto">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Global Perspective</h3>
              <p className="text-gray-700 text-center">
                I understand the nuances of marketing across different regions and timezones, tailoring strategies accordingly.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 w-full max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4 mx-auto">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Focused Attention</h3>
              <p className="text-gray-700 text-center">
                With fewer clients than agencies, I dedicate more time and focus to each project.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 w-full max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4 mx-auto">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Specialized Expertise</h3>
              <p className="text-gray-700 text-center">
                Years of focused experience in digital marketing delivers better results than generalist approaches.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Centered */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Grow Your Business Online?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I welcome clients from around the world. Let's discuss how I can help your business achieve its digital goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-blue-700 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Start Your Project Today
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;