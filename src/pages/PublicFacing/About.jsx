import { useState, useEffect, useRef } from 'react';
import logo from "../../assets/me.jpg"
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiInstagram, FiMail, FiSun, FiMoon, FiArrowRight, FiChevronDown, FiAward, FiZap, FiTrendingUp, FiLock, FiUnlock } from 'react-icons/fi';
import { FaGoogle, FaFacebook, FaReact, FaNodeJs, FaHubspot, FaChartLine, FaCode, FaLightbulb, FaSearch, FaShieldAlt, FaMobileAlt, FaServer } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer, SiAdobephotoshop, SiFigma, SiWordpress, SiShopify } from 'react-icons/si';
import { TbBrandGoogleAnalytics, TbSeo, TbDeviceAnalytics } from 'react-icons/tb';
import { RiCustomerService2Line, RiQuillPenLine, RiPagesLine } from 'react-icons/ri';

// Interactive Locked Content Component
const LockedContent = ({ title, icon, children }) => {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <motion.div
      className={`rounded-3xl overflow-hidden ${unlocked ? 'border-blue-500' : 'border-gray-700'} border-2`}
      whileHover={!unlocked ? { y: -5 } : {}}
    >
      <div
        className={`p-6 cursor-pointer flex items-center justify-between ${unlocked ? 'bg-blue-900/20' : 'bg-gray-800/50'}`}
        onClick={() => !unlocked && setUnlocked(true)}
      >
        <div className="flex items-center gap-4">
          <div className="text-2xl">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        {unlocked ? (
          <FiUnlock className="text-blue-500 text-xl" />
        ) : (
          <FiLock className="text-gray-500 text-xl" />
        )}
      </div>

      <AnimatePresence>
        {unlocked && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-gray-900/30"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Interactive Quiz Component
const MarketingQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "What's the most important factor for SEO ranking in 2023?",
      answers: [
        { text: "Keyword density", correct: false },
        { text: "Backlink quantity", correct: false },
        { text: "User experience signals", correct: true },
        { text: "Social media shares", correct: false }
      ]
    },
    {
      question: "Which Google Ads bidding strategy is best for conversions?",
      answers: [
        { text: "Maximize clicks", correct: false },
        { text: "Target CPA", correct: true },
        { text: "Target impression share", correct: false },
        { text: "Manual CPC", correct: false }
      ]
    },
    {
      question: "What's the ideal website load time for mobile?",
      answers: [
        { text: "Under 5 seconds", correct: false },
        { text: "Under 3 seconds", correct: true },
        { text: "Under 1 second", correct: false },
        { text: "Under 10 seconds", correct: false }
      ]
    }
  ];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer.correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setQuizCompleted(true);
      }
    }, 1000);
  };

  return (
    <div className="p-6 bg-gray-900/30 rounded-b-3xl">
      {!quizCompleted ? (
        <>
          <h4 className="text-lg font-bold mb-4">{questions[currentQuestion].question}</h4>
          <div className="space-y-3">
            {questions[currentQuestion].answers.map((answer, i) => (
              <motion.button
                key={i}
                onClick={() => handleAnswer(answer)}
                disabled={selectedAnswer}
                className={`w-full text-left p-3 rounded-lg ${selectedAnswer
                  ? answer.correct
                    ? 'bg-green-900/50 border-green-500'
                    : selectedAnswer === answer
                      ? 'bg-red-900/50 border-red-500'
                      : 'bg-gray-800/50 border-gray-700'
                  : 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50'} border`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {answer.text}
              </motion.button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h4 className="text-xl font-bold mb-4">Quiz Complete!</h4>
          <p className="mb-6">Your score: {score}/{questions.length}</p>
          {score === questions.length ? (
            <p className="text-green-500">Perfect! You clearly know your digital marketing!</p>
          ) : score >= questions.length / 2 ? (
            <p className="text-blue-500">Good job! You have solid digital marketing knowledge.</p>
          ) : (
            <p className="text-yellow-500">Interesting results! Want to improve? Let's talk strategy.</p>
          )}
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setQuizCompleted(false);
            }}
            className="mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};

const AboutPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [unlockedSections, setUnlockedSections] = useState([]);
  const containerRef = useRef(null);

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);



  const unlockSection = (section) => {
    if (!unlockedSections.includes(section)) {
      setUnlockedSections([...unlockedSections, section]);
    }
  };

  const services = [
    {
      title: "Digital Marketing",
      description: "Data-driven campaigns that convert visitors into customers.",
      icon: <FaChartLine className="text-4xl" />,
      color: "text-blue-500 border-blue-500",
      items: [
        "- Search Engine Marketing (SEM)",
        "- Social Media Advertising",
        "- Conversion Rate Optimization",
        "- Email Marketing Automation",
        "- Influencer Marketing Strategy",
        "- Marketing Strategy",


      ]
    },
    {
      title: "Fullstack Web Development",
      description: "Blazing fast, modern websites & web apps.",
      icon: <FaCode className="text-4xl" />,
      color: "text-purple-500 border-purple-500",
      items: [
        "- Responsive Web Design",
        "- E-commerce Solutions",
        "- Headless CMS Architecture",
        "- API Integrations",
        "- Web Performance Optimization"
      ]
    },
    {
      title: "Technical SEO",
      description: "Optimized architecture that ranks & converts.",
      icon: <TbSeo className="text-4xl" />,
      color: "text-green-500 border-green-500",
      items: [
        "- Site Structure Optimization",
        "- Core Web Vitals Improvement",
        "- Structured Data Implementation",
        "- Technical Audit & Fixes",
        "- International SEO Setup"
      ]
    }
  ];



  const marketingCaseStudies = [
    {
      title: "E-commerce Growth Strategy",
      result: "320% ROI increase",
      actions: [
        "Google My Business profile Optimization",
        "Facebook retargeting sequences",
        "Email flow automation"
      ]
    },
    {
      title: "Local Service Lead Gen",
      result: "5x more qualified leads",
      actions: [
        "Geo-targeted search campaigns",
        "Landing page conversion optimization",
        "Review generation system"
      ]
    }
  ];

  const developmentCaseStudies = [
    {
      title: "Web App Performance Boost",
      result: "2.8s → 0.8s load time",
      actions: [
        "Next.js migration",
        "Image optimization pipeline",
        "CDN configuration"
      ]
    },
    {
      title: "E-commerce Redesign",
      result: "40% higher conversions",
      actions: [
        "Headless Shopify setup",
        "Custom React components",
        "Checkout optimization"
      ]
    }
  ];

  const marketingProcess = [
    { step: 1, title: "Discovery Audit", description: "Comprehensive analysis of your current digital presence" },
    { step: 2, title: "Strategy Development", description: "Custom plan tailored to your business goals" },
    { step: 3, title: "Implementation", description: "Campaign setup with continuous optimization" },
    { step: 4, title: "Reporting & Scaling", description: "Transparent results and growth planning" }
  ];

  const developmentProcess = [
    { step: 1, title: "Requirement Analysis", description: "Understanding your technical needs" },
    { step: 2, title: "Architecture Planning", description: "Building scalable foundations" },
    { step: 3, title: "Development", description: "Clean, maintainable code implementation" },
    { step: 4, title: "Performance Optimization", description: "Speed, security, and SEO refinements" }
  ];

  return (
    <div
      className="min-h-screen dark bg-gray-900 text-white"
      ref={containerRef}
    >
      {/* Floating interactive elements (simplified) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Kelvin Ndoma
            </h1>
            <p className="text-sm text-gray-400">Digital Marketing & Web Development Expert</p>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <FiArrowRight className="transform rotate-90 text-xl" />
          </motion.button>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-2/5 relative"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-xl"
                  animate={{
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <img
                  src={logo}
                  alt="Kelvin Ndoma"
                  className="relative rounded-2xl w-full h-auto object-cover shadow-2xl border-4 border-gray-800"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-3/5"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Turning <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Vision</span> Into <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Revenue</span>
              </motion.h1>

              <motion.div
                className="relative p-6 rounded-2xl mb-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-blue-500"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-purple-500"></div>

                <p className="text-xl leading-relaxed text-white">
                  <span className="font-bold">I'm Kelvin Ndoma.</span> I bring ideas to life at the crossroads of digital strategy, technology, and creative storytelling. Whether it's building brands, launching campaigns, or automating growth — I’m all about turning vision into velocity.
                  <br /><br />
                  My edge? <span className="font-bold">Data-driven creativity.</span> I believe the best ideas are born from insight and shaped by imagination. I use sharp analytics and experimental thinking to craft experiences that not only look stunning but also inspire action and drive results.
                  <br /><br />
                  From zero to launch — I help people and businesses get unstuck, show up online with clarity, and grow with intention. Strategy is the engine. Design is the fuel. Execution is everything.
                  <br /><br />
                  This isn’t just digital work — it’s transformation in motion.
                </p>
              </motion.div>


              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
              >
                {/* {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm shadow-md border border-gray-700"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-400">{stat.icon}</span>
                      <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))} */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                >
                  <span className="font-medium">Explore Services</span>
                  <FiArrowRight />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => unlockSection('strategyGuide')}
                  className="px-8 py-4 rounded-xl flex items-center gap-3 bg-gray-800 hover:bg-gray-700 shadow-lg border border-gray-700"
                >
                  <span className="font-medium">Get Free Strategy Guide</span>
                  <FiChevronDown />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Strategy Guide */}
        {unlockedSections.includes('strategyGuide') && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
            className="mb-32 bg-gray-800/30 rounded-3xl p-8 border border-gray-700"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Free Digital Strategy Guide
              </h2>
              <button
                onClick={() => setUnlockedSections(unlockedSections.filter(s => s !== 'strategyGuide'))}
                className="text-gray-500 hover:text-white"
              >
                ×
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">5-Step Marketing Framework</h3>
                <ol className="space-y-4">
                  {[
                    "Audit & Opportunity Analysis",
                    "Conversion Funnel Design",
                    "Paid Media Strategy",
                    "Content & SEO Plan",
                    "Measurement Framework"
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center">
                        {i + 1}
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Web Development Checklist</h3>
                <ul className="space-y-3">
                  {[
                    "Core Web Vitals Optimization",
                    "Mobile-First Responsive Design",
                    "SEO-Friendly Architecture",
                    "Conversion-Optimized UI/UX",
                    "Security Best Practices"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-purple-900/50 flex items-center justify-center">
                        <FiArrowRight className="text-xs" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              
              </div>
            </div>
          </motion.section>
        )}

        {/* Services Section */}
        <section id="services" className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Comprehensive <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Digital Solutions</span>
            </h2>
            <p className="text-xl text-center max-w-3xl mx-auto text-gray-400">
              End-to-end services tailored to your business goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="rounded-3xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-xl"
              >
                <div
                  className="h-48 flex items-center justify-center"
                  style={{ backgroundColor: `${service.color.split('-')[2]}10` }}
                >
                  <div
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: `${service.color.split('-')[2]}20` }}
                  >
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="mb-6 text-gray-300">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${service.color}`}></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                 
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Marketing vs Development Toggle */}
          <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700 mb-16">
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg p-1 bg-gray-900">
                <button
                  className={`px-6 py-3 rounded-md ${unlockedSections.includes('marketingFocus') ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => {
                    if (unlockedSections.includes('marketingFocus')) {
                      setUnlockedSections(unlockedSections.filter(s => s !== 'marketingFocus'));
                    } else {
                      setUnlockedSections([
                        ...unlockedSections.filter(s => s !== 'devFocus'),
                        'marketingFocus'
                      ]);
                    }
                  }}
                >
                  Marketing Focus
                </button>
                <button
                  className={`px-6 py-3 rounded-md ${unlockedSections.includes('devFocus') ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => {
                    if (unlockedSections.includes('devFocus')) {
                      setUnlockedSections(unlockedSections.filter(s => s !== 'devFocus'));
                    } else {
                      setUnlockedSections([
                        ...unlockedSections.filter(s => s !== 'marketingFocus'),
                        'devFocus'
                      ]);
                    }
                  }}
                >
                  Development Focus
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {unlockedSections.includes('marketingFocus') && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  <div>
                    <h4 className="text-lg font-bold mb-4">Marketing Case Studies</h4>
                    {marketingCaseStudies.map((study, i) => (
                      <div key={i} className="mb-6 p-6 bg-gray-900/30 rounded-xl">
                        <h5 className="font-bold text-blue-400">{study.title}</h5>
                        <p className="text-sm text-green-400 mb-3">Result: {study.result}</p>
                        <ul className="space-y-2">
                          {study.actions.map((action, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <FiZap className="text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-4">Marketing Process</h4>
                    {marketingProcess.map((step, i) => (
                      <div key={i} className="mb-6 p-6 bg-gray-900/30 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center">
                            {step.step}
                          </div>
                          <h5 className="font-bold">{step.title}</h5>
                        </div>
                        <p className="text-sm text-gray-400">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {unlockedSections.includes('devFocus') && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  <div>
                    <h4 className="text-lg font-bold mb-4">Development Case Studies</h4>
                    {developmentCaseStudies.map((study, i) => (
                      <div key={i} className="mb-6 p-6 bg-gray-900/30 rounded-xl">
                        <h5 className="font-bold text-purple-400">{study.title}</h5>
                        <p className="text-sm text-green-400 mb-3">Result: {study.result}</p>
                        <ul className="space-y-2">
                          {study.actions.map((action, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <FiZap className="text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-4">Development Process</h4>
                    {developmentProcess.map((step, i) => (
                      <div key={i} className="mb-6 p-6 bg-gray-900/30 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center">
                            {step.step}
                          </div>
                          <h5 className="font-bold">{step.title}</h5>
                        </div>
                        <p className="text-sm text-gray-400">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Default state when neither is selected */}
              {!unlockedSections.includes('marketingFocus') && !unlockedSections.includes('devFocus') && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 text-gray-400"
                >
                  Select either Marketing or Development focus to view details
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Interactive Tech Stack Showcase */}
          <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
            <h3 className="text-xl font-bold mb-6 text-center">My Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { icon: <FaGoogle />, name: "Google Ads", color: "text-blue-500 border-blue-500" },
                { icon: <FaFacebook />, name: "Meta Ads", color: "text-blue-400 border-blue-400" },
                { icon: <TbBrandGoogleAnalytics />, name: "GA4", color: "text-green-500 border-green-500" },
                { icon: <TbSeo />, name: "SEO Tools", color: "text-purple-500 border-purple-500" },
                { icon: <FaReact />, name: "React", color: "text-blue-400 border-blue-400" },
                { icon: <SiNextdotjs />, name: "Next.js", color: "text-gray-300 border-gray-300" },
                { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600 border-blue-600" },
                { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600 border-green-600" },
                { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500 border-green-500" },
                { icon: <SiTailwindcss />, name: "Tailwind", color: "text-blue-400 border-blue-400" },
                { icon: <SiFramer />, name: "Framer", color: "text-pink-500 border-pink-500" },
                { icon: <SiShopify />, name: "Shopify", color: "text-green-400 border-green-400" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-xl flex flex-col items-center justify-center ${tech.color.split(' ')[0]} bg-opacity-10 border ${tech.color.split(' ')[1]} border-opacity-20 cursor-pointer`}
                >
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <span className="text-sm text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Quiz Section */}
        <section className="mb-32">
          <LockedContent
            title="Digital Marketing Quiz"
            icon={<TbDeviceAnalytics />}
          >
            <MarketingQuiz />
          </LockedContent>
        </section>



        {/* Final CTA */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-12 text-center bg-gray-800/50 backdrop-blur-sm shadow-2xl border border-gray-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Let's build something extraordinary together. The first step is a conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
             
              <motion.a
                href="https://linkedin.com/in/kelvinndoma"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl flex items-center gap-3 bg-gray-800 hover:bg-gray-700 shadow-lg border border-gray-700"
              >
                <FiLinkedin className="text-xl" />
                <span className="font-medium">Connect on LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;