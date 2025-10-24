'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Brain, HelpCircle, AlertTriangle, Clock, DollarSign, BookOpen, ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";
import Image from "next/image";

// ProcessSection Component
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  points: string[];
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery Session",
    description:
      "We begin with a comprehensive discussion about your research objectives. I'll examine your data, understand your academic requirements, and determine the best analytical approach for your project.",
    points: [
      "Explore your research questions and hypotheses",
      "Evaluate your dataset structure and quality",
      "Define project scope and deliverable expectations",
    ],
  },
  {
    id: 2,
    title: "Analysis Blueprint",
    description:
      "I develop a customized analysis framework specifically for your study. This includes selecting appropriate statistical methods, planning visualizations, and creating a detailed project roadmap.",
    points: [
      "Design statistical testing methodology",
      "Create comprehensive analysis timeline",
      "Provide detailed cost breakdown and milestones",
    ],
  },
  {
    id: 3,
    title: "Data Processing",
    description:
      "I conduct thorough statistical analysis using professional software like SPSS, R, or Python. You'll receive regular progress updates and can request modifications throughout the process.",
    points: [
      "Perform data cleaning and preparation",
      "Execute statistical tests and modeling",
      "Generate professional charts and visualizations",
    ],
  },
  {
    id: 4,
    title: "Final Delivery",
    description:
      "You receive a comprehensive analysis report with clear interpretations, professional visualizations, and complete documentation. I provide revisions if needed and ongoing support for your defense.",
    points: [
      "Comprehensive results with detailed explanations",
      "Professional report ready for submission",
      "Free revisions and defense preparation support",
    ],
  },
];

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(4);

  return (
    <section
      id="process"
      className="relative bg-gradient-to-b from-gray-50 to-white py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 italic mb-2">Process</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How I Transform Your Data Into Results
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My proven methodology takes you from raw data confusion to crystal-clear academic insights,
            ensuring your research stands out with professional statistical analysis.
          </p>
        </div>

        {/* Timeline + Panel */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Timeline */}
          <div className="relative pl-6 border-l-2 border-gray-200">
            {processSteps.map((step) => (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                className={`group cursor-pointer mb-10 transition-all duration-300 ${
                  activeStep === step.id
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-90"
                }`}
              >
                {/* Step Indicator */}
                <div
                  className={`absolute -left-[26px] flex items-center justify-center w-8 h-8 rounded-full border text-sm font-semibold ${
                    activeStep === step.id
                      ? "bg-green-500 border-green-500 text-white"
                      : "bg-white border-gray-300 text-gray-500"
                  }`}
                >
                  {step.id}
                </div>

                {/* Step Text */}
                <h3
                  className={`font-semibold text-lg mb-1 ${
                    activeStep === step.id ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Content Card */}
          <div className="relative bg-white border border-gray-100 rounded-3xl shadow-sm p-10 overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/40 via-white to-blue-50/40 -z-10" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {processSteps[activeStep - 1].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {processSteps[activeStep - 1].description}
            </p>
            <ul className="space-y-3">
              {processSteps[activeStep - 1].points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-gray-700 text-sm"
                >
                  <span className="text-green-500 text-lg">✔</span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Large Step Number */}
            <div className="absolute bottom-6 right-10 text-[12rem] font-bold text-gray-200/50 select-none leading-none">
              {activeStep}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/geometry.png')] bg-center bg-repeat pointer-events-none" />
    </section>
  );
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  // FAQ data with categories
  const faqData = [
    {
      question: "What exactly do you do?",
      answer: "We provide comprehensive statistical analysis services for academic research, including data cleaning, statistical testing, visualization, and interpretation. We help students and researchers turn raw data into meaningful insights for dissertations, theses, and research projects.",
      category: "general"
    },
    {
      question: "How long does a typical project take?",
      answer: "Most projects take 1-2 weeks depending on complexity and data size. Simple analyses can be completed in 3-5 days, while complex multi-variable studies may take up to 3 weeks. We'll provide a clear timeline during our initial consultation.",
      category: "general"
    },
    {
      question: "What if I don't know exactly what I need?",
      answer: "That's perfectly normal! We start with a free clarity call to understand your research objectives, examine your data, and recommend the most appropriate analytical approach. We'll guide you through the entire process.",
      category: "general"
    },
    {
      question: "Couldn't I just use AI to analyze my data?",
      answer: "While AI tools can help with basic analysis, academic research requires proper statistical methodology, interpretation, and validation. We ensure your analysis meets academic standards and provide meaningful insights that AI tools often miss.",
      category: "general"
    },
    {
      question: "Do you only work with students?",
      answer: "We work with students, researchers, academics, and professionals across various fields who need reliable statistical analysis. Whether you're working on a dissertation, research paper, or business project, we can help.",
      category: "general"
    },
    {
      question: "How involved do I need to be?",
      answer: "We handle all the technical work, but we'll need your input on research objectives, data context, and feedback on preliminary results. Most clients spend 2-3 hours total in consultations throughout the project.",
      category: "general"
    },
    {
      question: "What statistical software do you use?",
      answer: "We use industry-standard tools including SPSS, R, Python, and Excel depending on your project requirements. We can also work with your preferred software or institutional requirements.",
      category: "technical"
    },
    {
      question: "What if my data needs cleaning?",
      answer: "Data cleaning is included in our service. We'll identify and handle missing values, outliers, and formatting issues. We'll also document all cleaning procedures for transparency and reproducibility.",
      category: "technical"
    },
    {
      question: "How much do your services cost?",
      answer: "Pricing depends on project complexity, data size, and timeline. Basic analyses start from $150, while comprehensive dissertation analyses range from $300-800. We provide transparent, upfront pricing with no hidden fees.",
      category: "pricing"
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! For larger projects over $400, we offer 50% upfront and 50% upon completion. We accept PayPal, bank transfers, and other secure payment methods. Contact us to discuss flexible payment options.",
      category: "pricing"
    },
    {
      question: "What if I need revisions?",
      answer: "We include one round of revisions in all projects. Additional revisions are available at $50/hour. We also provide ongoing support via email for 30 days after project completion.",
      category: "support"
    },
    {
      question: "How do I get started?",
      answer: "Simply book a free clarity call through our contact page or WhatsApp. We'll discuss your project, provide a quote, and if you're happy to proceed, we can start immediately. No obligation required.",
      category: "support"
    }
  ];

  // Filter FAQs based on active category
  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  // Split filtered FAQs into two columns
  const leftColumnFAQs = filteredFAQs.filter((_, index) => index % 2 === 0);
  const rightColumnFAQs = filteredFAQs.filter((_, index) => index % 2 === 1);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
          
          {/* Main Content */}
          <div className="text-center mb-16">
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-8 shadow-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for Data Analysis Projects
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Turn Your Data Into
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Powerful Insights
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional data analysis services for students, researchers, and professionals. 
              From raw data to publication-ready results in <span className="font-semibold text-gray-900">days, not months</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                href="/contact"
                className="group bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                Start Your Project Today
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="#process"
                className="group bg-white/80 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-white transition-all duration-300 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
              >
                See How It Works
              </Link>
            </motion.div>
          </div>
          
          {/* Modern Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: "150+", label: "Projects Completed", color: "text-blue-600" },
              { number: "98%", label: "Success Rate", color: "text-green-600" },
              { number: "24h", label: "Average Response", color: "text-purple-600" },
              { number: "5★", label: "Client Rating", color: "text-yellow-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="relative py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Students & Professionals</h2>
            <p className="text-gray-600">From undergraduate projects to PhD dissertations</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { 
                icon: "🎓", 
                title: "Academic Excellence", 
                description: "PhD, Master's, and undergraduate research projects with publication-ready results" 
              },
              { 
                icon: "⚡", 
                title: "Fast Turnaround", 
                description: "Most projects completed within 3-7 days without compromising quality" 
              },
              { 
                icon: "🔒", 
                title: "100% Confidential", 
                description: "Your data and research remain completely private and secure" 
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-sm animate-pulse">
                      <span className="text-white text-xs font-bold animate-glow">✓</span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm animate-fade-in">Analysis Complete</h3>
                  </div>
                  {/* Live status indicator */}
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600 animate-fade-in">Live Data</span>
                  </div>
                </div>
                
                {/* Enhanced Animated Mini Chart */}
                <div className="bg-gradient-to-br from-white/90 to-gray-50/60 rounded-xl p-3 border border-gray-200/40 relative overflow-hidden">
                  {/* Multiple scanning effects */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-chart-scan opacity-80"></div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-chart-scan opacity-60" style={{animationDelay: '1s'}}></div>
                  
                  <div className="flex justify-between items-end h-16 px-1">
                    <div className="w-3 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t shadow-lg animate-grow-1 animate-bar-pulse" style={{height: '40px', animationDelay: '0.2s'}}></div>
                    <div className="w-3 bg-gradient-to-t from-green-600 to-green-400 rounded-t shadow-lg animate-grow-2 animate-bar-pulse" style={{height: '35px', animationDelay: '0.4s'}}></div>
                    <div className="w-3 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t shadow-lg animate-grow-3 animate-bar-pulse" style={{height: '30px', animationDelay: '0.6s'}}></div>
                    <div className="w-3 bg-gradient-to-t from-green-600 to-green-400 rounded-t shadow-lg animate-grow-4 animate-bar-pulse" style={{height: '45px', animationDelay: '0.8s'}}></div>
                  </div>
                  
                  {/* Enhanced moving data points */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-processing-dots" style={{animationDelay: '1s'}}></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-processing-dots" style={{animationDelay: '1.2s'}}></div>
                  </div>
                  
                  {/* Data streaming effect */}
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-data-stream" style={{animationDelay: '2s'}}></div>
                  
                  {/* Animated Mini Stats */}
                  <div className="mt-2 grid grid-cols-2 gap-2 text-center">
                    <div className="animate-count-up" style={{animationDelay: '1.2s'}}>
                      <div className="text-sm font-bold text-blue-600 animate-number-count">150+</div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                    <div className="animate-count-up" style={{animationDelay: '1.4s'}}>
                      <div className="text-sm font-bold text-green-600 animate-number-count">96.1%</div>
                      <div className="text-xs text-gray-600">Success</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated Floating Mobile Badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg animate-bounce-slow">
                <span className="animate-glow">Ready</span>
              </div>
              
              {/* Processing indicators */}
              <div className="absolute top-1 left-1 flex gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-sm" style={{animationDelay: '0.3s'}}></div>
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse shadow-sm" style={{animationDelay: '0.6s'}}></div>
              </div>
            </div>
            
            {/* Secondary Mobile Visualization - Left Side */}
            <div className="absolute top-1/3 left-2 sm:left-4 transform -translate-y-1/2 scale-40 sm:scale-60">
              <div className="bg-gradient-to-br from-white/80 via-purple-50/50 to-blue-50/40 rounded-xl shadow-lg p-3 border border-gray-100/30 backdrop-blur-sm animate-float-2">
                {/* Mini progress bars */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-progress-loading" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-progress-loading" style={{width: '90%', animationDelay: '0.5s'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-progress-loading" style={{width: '85%', animationDelay: '1s'}}></div>
                    </div>
                  </div>
                </div>
                
                {/* Mini status */}
                <div className="mt-2 text-center">
                  <div className="text-xs font-bold text-gray-700 animate-number-flicker">Processing...</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Visualization */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="relative transform rotate-2 hover:rotate-0 transition-all duration-700 max-w-lg hover:scale-105">
                
                {/* Main Analysis Dashboard */}
                <div className="bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 rounded-3xl shadow-2xl p-8 border border-gray-100/50 backdrop-blur-sm">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg">Analysis Complete</h3>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 font-medium">Confidence Level</span>
                      <span className="font-bold text-blue-600 text-lg">98.5%</span>
                    </div>
                  </div>
                  
                  {/* Animated Chart Visualization */}
                  <div className="bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-3xl p-6 border border-gray-200/50 shadow-xl relative overflow-hidden">
                    {/* Scanning line effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-pulse"></div>
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 text-lg mb-3">Academic Success by Level</h4>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Project Success Rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Client Satisfaction</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated Bar Chart */}
                    <div className="relative bg-gradient-to-br from-white to-gray-50/80 rounded-2xl p-4 border border-gray-100/70 overflow-hidden">
                      {/* Data scanning effect */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse opacity-70"></div>
                      
                      <div className="flex justify-between items-end h-32 px-2">
                        {/* PhD */}
                        <div className="flex gap-2 items-end">
                          <div className="w-6 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-lg animate-grow-6 animate-bar-pulse hover:shadow-blue-300/50 transition-all duration-300" style={{height: '100px', animationDelay: '0.5s'}}></div>
                          <div className="w-6 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg shadow-lg animate-grow-7 animate-bar-pulse hover:shadow-green-300/50 transition-all duration-300" style={{height: '105px', animationDelay: '0.7s'}}></div>
                        </div>
                        
                        {/* Master's */}
                        <div className="flex gap-2 items-end">
                          <div className="w-6 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-lg animate-grow-5 animate-bar-pulse hover:shadow-blue-300/50 transition-all duration-300" style={{height: '85px', animationDelay: '0.9s'}}></div>
                          <div className="w-6 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg shadow-lg animate-grow-8 animate-bar-pulse hover:shadow-green-300/50 transition-all duration-300" style={{height: '90px', animationDelay: '1.1s'}}></div>
                        </div>
                        
                        {/* Undergraduate */}
                        <div className="flex gap-2 items-end">
                          <div className="w-6 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-lg animate-grow-4 animate-bar-pulse hover:shadow-blue-300/50 transition-all duration-300" style={{height: '75px', animationDelay: '1.3s'}}></div>
                          <div className="w-6 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg shadow-lg animate-grow-1 animate-bar-pulse hover:shadow-green-300/50 transition-all duration-300" style={{height: '82px', animationDelay: '1.5s'}}></div>
                        </div>
                        
                        {/* Research */}
                        <div className="flex gap-2 items-end">
                          <div className="w-6 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-lg animate-grow-2 animate-bar-pulse hover:shadow-blue-300/50 transition-all duration-300" style={{height: '110px', animationDelay: '1.7s'}}></div>
                          <div className="w-6 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg shadow-lg animate-grow-3 animate-bar-pulse hover:shadow-green-300/50 transition-all duration-300" style={{height: '115px', animationDelay: '1.9s'}}></div>
                        </div>
                      </div>
                      
                      {/* Moving data indicators */}
                      <div className="absolute top-2 right-2 flex gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '2.2s'}}></div>
                      </div>
                      
                      {/* X-axis labels */}
                      <div className="flex justify-between mt-4 px-2">
                        <div className="text-center">
                          <div className="font-bold text-gray-800 text-xs">PhD</div>
                          <div className="text-xs text-gray-500 mt-1">98%</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-800 text-xs">Master's</div>
                          <div className="text-xs text-gray-500 mt-1">95%</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-800 text-xs">Undergrad</div>
                          <div className="text-xs text-gray-500 mt-1">92%</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-800 text-xs">Research</div>
                          <div className="text-xs text-gray-500 mt-1">99%</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated Summary Stats */}
                    <div className="mt-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border border-gray-200 relative overflow-hidden">
                      {/* Progress indicator */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 animate-progress-loading"></div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="animate-count-up" style={{animationDelay: '2.5s'}}>
                          <div className="text-xl font-bold text-gray-800 animate-number-count">96.1%</div>
                          <div className="text-xs text-gray-600 font-medium">Overall Success</div>
                        </div>
                        <div className="animate-count-up" style={{animationDelay: '2.7s'}}>
                          <div className="text-xl font-bold text-blue-600 animate-number-count">150+</div>
                          <div className="text-xs text-gray-600 font-medium">Happy Students</div>
                        </div>
                        <div className="animate-count-up" style={{animationDelay: '2.9s'}}>
                          <div className="text-xl font-bold text-green-600 animate-number-count">99.2%</div>
                          <div className="text-xs text-gray-600 font-medium">On-Time Delivery</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Floating Success Badge */}
                <div className="absolute -top-4 -right-6 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-2xl transform rotate-12 hover:rotate-6 transition-all duration-300 hover:scale-110 border border-green-400/20 animate-bounce-slow">
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-green-600 text-xs font-bold animate-glow">✓</span>
                    </div>
                    <span className="animate-glow">Defense Ready</span>
                  </span>
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white via-blue-50/80 to-purple-50/50 rounded-3xl shadow-2xl p-5 border border-gray-100/70 transform rotate-6 hover:rotate-3 transition-all duration-500 backdrop-blur-sm hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">150+</div>
                    <div className="text-xs text-gray-600 font-medium mt-1">Happy Students</div>
                    <div className="flex justify-center mt-2">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Software Tools Badge */}
                <div className="absolute top-1/3 -right-6 bg-gradient-to-br from-white via-purple-50/80 to-blue-50/50 rounded-2xl shadow-xl px-4 py-3 border border-gray-100/70 transform -rotate-12 hover:-rotate-6 transition-all duration-500 backdrop-blur-sm hover:scale-105">
                  <div className="flex gap-3 text-sm font-bold items-center">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg">SPSS</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">R</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg">Python</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 text-center font-medium">Statistical Tools</div>
                </div>

                {/* Processing Indicators */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full animate-pulse shadow-lg"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.3s'}}></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.6s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVISED STUDENT CHALLENGES SECTION - TOP ALIGNED & DIFFERENT DESIGN */}
<section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-32 overflow-hidden">
  <div className="max-w-8xl mx-auto px-6">
    
    {/* HEADER SECTION - Now at the top */}
    <div className="text-center mb-20">
      <motion.div 
        className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-gray-200 shadow-sm"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full animate-pulse"></span>
        Student Challenges • Real Solutions
      </motion.div>

      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        I Understand Your <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 relative">
          Academic Struggles
          <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
        </span>
      </motion.h2>

      <motion.p 
        className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        From unclear supervisor feedback to tight submission deadlines — I've guided hundreds of students through 
        frustration, burnout, and confusion during research analysis. That's exactly why this service exists — 
        to simplify your academic journey.
      </motion.p>
    </div>

    {/* ENHANCED CARDS GRID - New Layout */}
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {/* Column 1 */}
      <div className="space-y-8">
        {/* Data Chaos Card */}
        <motion.div 
          className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          whileHover={{ y: -6, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gray-400 to-gray-300"></div>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7a2 2 0 012-2h5l2 2h7a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-xl leading-tight">Data Chaos</h3>
                <span className="text-xs font-medium bg-red-100 text-red-600 px-2 py-1 rounded-full">Common</span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Students often collect excellent data but struggle to organize, clean, and structure it for analysis — losing precious time before submission deadlines.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Statistical Confusion Card */}
        <motion.div 
          className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          whileHover={{ y: -6, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gray-400 to-gray-300"></div>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8l4-4m0 0l4 4m-4-4v16m8-8h.01M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-xl leading-tight">Statistical Confusion</h3>
                <span className="text-xs font-medium bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">Critical</span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Hypothesis testing, p-values, correlation — many students feel uncertain about which statistical tests properly fit their research design and data type.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Column 2 */}
      <div className="space-y-8">
        {/* Tool Overload Card */}
        <motion.div 
          className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          whileHover={{ y: -6, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gray-400 to-gray-300"></div>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M16 10h.01M12 14h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-xl leading-tight">Tool Overload</h3>
                <span className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Frequent</span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                "Should I use SPSS or R?" "Do I need Python?" — students get lost switching tools without clear guidance on the right one for their specific research methodology.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Supervisor Pressure Card */}
        <motion.div 
          className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          whileHover={{ y: -6, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gray-400 to-gray-300"></div>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422A12.083 12.083 0 0121 20.083M12 14L5.84 10.578A12.083 12.083 0 003 20.083" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-xl leading-tight">Supervisor Pressure</h3>
                <span className="text-xs font-medium bg-purple-100 text-purple-600 px-2 py-1 rounded-full">Stressful</span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Constant revisions and unclear feedback leave many students unsure if they're even on the right track with their methodology and analysis approach.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Column 3 */}
      <div className="space-y-8">
        {/* Tight Deadlines Card */}
        <motion.div 
          className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          whileHover={{ y: -6, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gray-400 to-gray-300"></div>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-xl leading-tight">Tight Deadlines</h3>
                <span className="text-xs font-medium bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Urgent</span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Many students balance coursework, jobs, and research — leaving little time to analyze data effectively before submission dates become critical.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Fear of Failing Card */}
        <motion.div 
          className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          whileHover={{ y: -6, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gray-400 to-gray-300"></div>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a1 1 0 00.86 1.5h18.64a1 1 0 00.86-1.5L13.71 3.86a1 1 0 00-1.72 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-xl leading-tight">Fear of Failing</h3>
                <span className="text-xs font-medium bg-pink-100 text-pink-600 px-2 py-1 rounded-full">Anxiety</span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                The stress of defending unclear results or producing weak statistical output causes significant anxiety — making students doubt their research capabilities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* CTA SECTION - Centered at bottom */}
    <motion.div 
      className="text-center mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.button 
        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-bold px-12 py-5 rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">Get Personalized Help</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </motion.div>
  </div>

  {/* Background Elements */}
  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-center bg-repeat pointer-events-none" />
  
  {/* Floating Elements */}
  <motion.div 
    className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full opacity-40"
    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 4, repeat: Infinity }}
  />
  <motion.div 
    className="absolute bottom-20 right-10 w-3 h-3 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full opacity-40"
    animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
    transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
  />
</section>
{/* Enhanced About Section */}
<section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-32 overflow-hidden">
  {/* Enhanced Background Pattern */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/geometry.png')] opacity-[0.03] bg-repeat bg-center pointer-events-none" />
  
  {/* Floating Elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

  {/* Enhanced Floating Tagline */}
  <motion.div 
    className="absolute top-16 right-12 text-gray-400 text-sm font-medium tracking-wide select-none"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    — The Solution I Offer —
  </motion.div>

  <div className="max-w-8xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">

    {/* Left Content - Enhanced */}
    <div className="space-y-12">
      {/* Enhanced Intro */}
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 relative">
            Hey, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 relative">
              TatsTech
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm">
            I'm a <span className="font-bold text-gray-900 bg-gradient-to-r from-gray-100 to-gray-50 px-2 py-1 rounded-lg border border-gray-200">Data Analysis Specialist</span>{" "}
            helping students and professionals transform{" "}
            <span className="font-bold text-gray-900 underline decoration-2 decoration-gray-300">raw data into actionable insights</span>. 
            With <span className="font-bold text-gray-900 bg-gradient-to-r from-gray-100 to-gray-50 px-2 py-1 rounded-lg border border-gray-200">over a year of hands-on experience</span> in academic and business projects, 
            I turn complexity into clarity — empowering you to make informed decisions.
          </p>
        </div>
      </motion.div>

      {/* Enhanced How I Help */}
      <motion.div 
        className="space-y-6 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">
            How I Help
          </h3>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          From <span className="font-bold text-gray-900">data cleaning and visualization</span> to{" "}
          <span className="font-bold text-gray-900">advanced analytics and model interpretation</span>, 
          I offer <span className="font-bold text-gray-900 underline decoration-2 decoration-gray-300">step-by-step project guidance</span> — ensuring 
          your results are accurate, insightful, and presentation-ready.
        </p>
      </motion.div>

      {/* Enhanced Collaboration */}
      <motion.div 
        className="space-y-6 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">
            Let's Collaborate
          </h3>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          Ready to transform your dataset into something extraordinary?{" "}
          <span className="font-bold text-gray-900">Let's connect</span> and 
          make your research or business story shine with data-driven precision.
        </p>
      </motion.div>

      {/* Enhanced Buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-6 pt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.a
          href="/contact"
          className="group relative bg-gradient-to-r from-gray-900 to-gray-700 text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 text-center overflow-hidden"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Let's Work Together</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
        
        <motion.a
          href="https://wa.me/263771186558"
          className="group relative border-2 border-gray-900 text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 text-center"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Me
          </span>
        </motion.a>
      </motion.div>
    </div>

    {/* Right Content - Enhanced */}
    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Enhanced Image Container */}
      <div className="relative mb-16 group">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-gray-300 to-gray-200 rounded-3xl blur-3xl scale-105 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
        
        {/* Main Image with Enhanced Styling */}
        <div className="relative">
          <motion.img
            src="/tatstech.png"
            alt="TatsTech - Data Analyst"
            className="w-96 h-[28rem] object-cover rounded-2xl shadow-2xl mx-auto border-2 border-gray-200 group-hover:border-gray-300 transition-all duration-500 group-hover:scale-[1.02]"
            whileHover={{ y: -10 }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
              if (nextElement) {
                nextElement.style.display = 'flex';
              }
            }}
          />
          
          {/* Enhanced Fallback Avatar */}
          <motion.div 
            className="w-96 h-[28rem] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl mx-auto items-center justify-center hidden flex-col p-8 border-2 border-gray-200"
            whileHover={{ y: -10 }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
              <span className="text-white text-5xl font-black">T</span>
            </div>
            <p className="text-gray-900 text-2xl font-bold mb-2">TatsTech</p>
            <p className="text-gray-600 text-lg font-medium">Data Analysis Expert</p>
            <div className="mt-6 w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
          </motion.div>
        </div>

        {/* Floating Badge */}
        <motion.div 
          className="absolute -top-4 -right-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg"
          initial={{ scale: 0, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          Data Analyst
        </motion.div>
      </div>

      {/* Enhanced Stats */}
      <motion.div 
        className="grid grid-cols-3 gap-8 text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="text-4xl font-black text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">1+</div>
          <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Years Experience</div>
        </motion.div>
        
        <motion.div 
          className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="text-4xl font-black text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">100+</div>
          <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Projects Completed</div>
        </motion.div>
        
        <motion.div 
          className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="text-4xl font-black text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">98%</div>
          <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Client Satisfaction</div>
        </motion.div>
      </motion.div>

      {/* Enhanced Expertise Card */}
      <motion.div 
        className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ y: -8 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h4 className="font-bold text-gray-900 text-xl underline decoration-gray-400 underline-offset-4">
            Data Analytics Expertise
          </h4>
        </div>
        <p className="text-gray-600 text-base leading-relaxed">
          Skilled in <span className="font-semibold text-gray-900 bg-gradient-to-r from-gray-100 to-gray-50 px-2 py-1 rounded-lg border border-gray-200">SPSS, Power BI, Python, R, and Excel</span> — 
          delivering clear, data-driven solutions for academic and professional success.
        </p>
      </motion.div>
    </motion.div>
  </div>

  {/* Additional Floating Elements */}
  <motion.div 
    className="absolute top-1/3 left-1/4 w-3 h-3 bg-gray-400 rounded-full opacity-40"
    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 3, repeat: Infinity }}
  />
  <motion.div 
    className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-gray-500 rounded-full opacity-40"
    animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
  />
</section>
{/* ENHANCED TECHNOLOGY SECTION – MATCHING ABOUT SECTION STYLE */}
<section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-32 overflow-hidden">

  {/* Enhanced Background Elements */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/geometry.png')] opacity-[0.03] bg-repeat bg-center pointer-events-none" />
  
  {/* Enhanced Floating Elements */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

  {/* Enhanced Floating Tagline */}
  <motion.div 
    className="absolute top-16 right-12 text-gray-400 text-sm font-medium tracking-wide select-none"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    — Technologies I Use —
  </motion.div>

  <div className="max-w-8xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">

    {/* LEFT CONTENT - Enhanced */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="space-y-12"
    >
      {/* Enhanced Heading */}
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 relative">
          Technologies for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 relative">
            Powerful Analysis
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
          </span>
        </h2>

        <motion.p 
          className="text-xl text-gray-700 leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I use a combination of{" "}
          <span className="font-bold text-gray-900 bg-gradient-to-r from-gray-100 to-gray-50 px-2 py-1 rounded-lg border border-gray-200">
            statistical software
          </span>
          ,{" "}
          <span className="font-bold text-gray-900 bg-gradient-to-r from-gray-100 to-gray-50 px-2 py-1 rounded-lg border border-gray-200">
            coding tools
          </span>
          , and{" "}
          <span className="font-bold text-gray-900 bg-gradient-to-r from-gray-100 to-gray-50 px-2 py-1 rounded-lg border border-gray-200">
            visualization platforms
          </span> 
          {" "}to turn complex datasets into clear, insightful results.  
          Each tool plays a unique role in delivering structured, evidence-based conclusions.
        </motion.p>
      </motion.div>

      {/* Enhanced Buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-6 pt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.a
          href="/contact"
          className="group relative bg-gradient-to-r from-gray-900 to-gray-700 text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 text-center overflow-hidden"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Let's Collaborate</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
        
        <motion.a
          href="#about"
          className="group relative border-2 border-gray-900 text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 text-center"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </motion.a>
      </motion.div>
    </motion.div>

    {/* RIGHT CONTENT - Enhanced Orbiting System */}
    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative w-[30rem] h-[30rem] mx-auto">
        
        {/* Enhanced Central Node */}
        <motion.div 
          className="absolute inset-0 m-auto w-28 h-28 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl flex flex-col items-center justify-center shadow-2xl z-20 border-2 border-gray-800"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
        >
          <span className="text-white text-2xl font-black">DA</span>
          <p className="text-xs text-white/80 font-semibold mt-1">Data Analyst</p>
        </motion.div>

        {/* Enhanced Orbiting Technologies */}
        {[
          { name: "Python", color: "from-gray-800 to-gray-600", radius: 160, speed: 25, icon: "🐍" },
          { name: "R", color: "from-gray-700 to-gray-500", radius: 190, speed: 30, icon: "📊" },
          { name: "SPSS", color: "from-gray-800 to-gray-600", radius: 140, speed: 20, icon: "📈" },
          { name: "Excel", color: "from-gray-700 to-gray-500", radius: 220, speed: 35, icon: "📋" },
          { name: "Power BI", color: "from-gray-800 to-gray-600", radius: 240, speed: 40, icon: "📉" },
          { name: "Tableau", color: "from-gray-700 to-gray-500", radius: 180, speed: 28, icon: "🎨" },
          { name: "Jupyter", color: "from-gray-800 to-gray-600", radius: 200, speed: 32, icon: "💻" },
          { name: "Stats", color: "from-gray-700 to-gray-500", radius: 120, speed: 18, icon: "🧮" },
        ].map((tool, i) => (
          <motion.div
            key={i}
            className={`absolute w-24 h-24 bg-gradient-to-br ${tool.color} rounded-2xl flex flex-col items-center justify-center shadow-xl cursor-pointer border border-gray-600/20 group`}
            animate={{
              x: [
                Math.cos((i * Math.PI) / 4) * tool.radius,
                Math.cos((i * Math.PI) / 4 + Math.PI) * tool.radius,
              ],
              y: [
                Math.sin((i * Math.PI) / 4) * tool.radius,
                Math.sin((i * Math.PI) / 4 + Math.PI) * tool.radius,
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: tool.speed,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{
              scale: 1.3,
              zIndex: 40,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { duration: 0.3 },
            }}
            style={{
              left: "50%",
              top: "50%",
              marginLeft: -48,
              marginTop: -48,
            }}
          >
            <span className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">{tool.icon}</span>
            <span className="text-white text-sm font-bold text-center leading-tight">{tool.name}</span>
          </motion.div>
        ))}

        {/* Orbital Rings */}
        <motion.div 
          className="absolute inset-0 m-auto w-64 h-64 border-2 border-gray-300/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-0 m-auto w-96 h-96 border-2 border-gray-300/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-0 m-auto w-[32rem] h-[32rem] border-2 border-gray-300/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Enhanced Tech Stats */}
      <motion.div 
        className="grid grid-cols-3 gap-8 text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div 
          className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="text-3xl font-black text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">8+</div>
          <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Tools Mastered</div>
        </motion.div>
        
        <motion.div 
          className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="text-3xl font-black text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">100+</div>
          <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Projects</div>
        </motion.div>
        
        <motion.div 
          className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="text-3xl font-black text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">1Y+</div>
          <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Experience</div>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>

  {/* Enhanced Floating Elements */}
  <motion.div 
    className="absolute top-1/3 left-1/4 w-3 h-3 bg-gray-400 rounded-full opacity-40"
    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 3, repeat: Infinity }}
  />
  <motion.div 
    className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-gray-500 rounded-full opacity-40"
    animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
  />
  <motion.div 
    className="absolute top-1/2 right-1/4 w-4 h-4 bg-gray-300 rounded-full opacity-30"
    animate={{ y: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
  />
</section>
{/* ENHANCED ACADEMIC PROGRAMS SECTION - MATCHING STYLE */}
<section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-32 overflow-hidden">

  {/* Enhanced Background Elements */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/geometry.png')] opacity-[0.03] bg-repeat bg-center pointer-events-none" />
  
  {/* Enhanced Floating Elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

  {/* Enhanced Floating Tagline */}
  <motion.div 
    className="absolute top-16 right-12 text-gray-400 text-sm font-medium tracking-wide select-none"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    — Academic Excellence —
  </motion.div>

  <div className="max-w-8xl mx-auto px-6 relative z-10">
    {/* Enhanced Header */}
    <motion.div
      className="text-center mb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className="text-5xl md:text-6xl font-black text-gray-900 mb-8 relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Academic Programs I've{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 relative">
          Worked With
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
        </span>
      </motion.h2>

      <motion.p
        className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Over the past year, I've assisted students and professionals in{" "}
        <span className="font-bold text-gray-900 bg-gradient-to-r from-gray-100 to-gray-50 px-2 py-1 rounded-lg border border-gray-200">
          diverse academic disciplines
        </span>{" "}
        — transforming raw data into clear, structured insights that enhance research quality and presentation.
      </motion.p>
    </motion.div>

    {/* Enhanced Programs Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
      {[
        { name: "Actuarial Science", description: "Risk modeling & probability analysis", icon: "📊" },
        { name: "Financial Mathematics", description: "Quantitative finance & forecasting", icon: "💹" },
        { name: "Mathematics & Statistics", description: "Pure & applied research methods", icon: "🧮" },
        { name: "Data Science", description: "Machine learning & predictive analytics", icon: "🤖" },
        { name: "Business Studies", description: "Market analysis & strategic insights", icon: "💼" },
        { name: "Economics", description: "Econometric & policy modeling", icon: "📈" },
        { name: "Tourism & Hospitality", description: "Industry trend analytics", icon: "🏨" },
        { name: "Supply Chain Management", description: "Operational optimization", icon: "🚚" },
        { name: "Social Sciences", description: "Survey & demographic studies", icon: "👥" },
        { name: "Physics & Engineering", description: "Experimental data modeling", icon: "⚛️" },
        { name: "Psychology", description: "Behavioral & cognitive analytics", icon: "🧠" },
        { name: "Health Sciences", description: "Clinical & biomedical research", icon: "🏥" },
      ].map((program, index) => (
        <motion.div
          key={index}
          className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          
          <div className="relative flex items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{program.icon}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:underline group-hover:decoration-2 group-hover:decoration-gray-400 group-hover:underline-offset-4 transition-all duration-300">
                {program.name}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {program.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Enhanced CTA Section */}
    <motion.div
      className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 underline decoration-2 decoration-gray-400 underline-offset-4">
            Don't See Your Field?
          </h3>
        </div>
        
        <motion.p
          className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I've collaborated with researchers across many unique fields. 
          If your project involves{" "}
          <span className="font-bold text-gray-900 bg-gradient-to-r from-gray-100 to-gray-50 px-2 py-1 rounded-lg border border-gray-200">
            data analysis, visualization, or interpretation
          </span>
          , I can help you turn your results into something exceptional.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="/contact"
            className="group relative bg-gradient-to-r from-gray-900 to-gray-700 text-white px-12 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 text-center overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Discuss Your Project
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
          
          <motion.button 
            className="group relative border-2 border-gray-900 text-gray-900 px-12 py-5 rounded-2xl font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              View Examples
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Decorative Accents */}
      <div className="absolute top-8 right-8 w-20 h-20 bg-gray-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 bg-gray-100/40 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-gray-400 rounded-full opacity-40 animate-pulse"></div>
    </motion.div>
  </div>

  {/* Enhanced Floating Elements */}
  <motion.div 
    className="absolute top-1/3 left-1/4 w-3 h-3 bg-gray-400 rounded-full opacity-40"
    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 3, repeat: Infinity }}
  />
  <motion.div 
    className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-gray-500 rounded-full opacity-40"
    animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
  />
  <motion.div 
    className="absolute top-1/2 right-1/4 w-4 h-4 bg-gray-300 rounded-full opacity-30"
    animate={{ y: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
  />
</section>
{/* ENHANCED FAQ SECTION – MATCHING STYLE */}
<section id="faq" className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">

  {/* Enhanced Background Elements */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/geometry.png')] opacity-[0.03] bg-repeat bg-center pointer-events-none" />
  
  {/* Enhanced Floating Elements */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

  <div className="max-w-8xl mx-auto px-6 relative z-10">
    {/* Enhanced Header */}
    <motion.div 
      className="text-center mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2 
        className="text-5xl md:text-6xl font-black text-gray-900 mb-8 relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 relative">
          Questions
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
        </span>
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Everything you need to know about working with me — from research support to data analysis and timelines.
      </motion.p>
    </motion.div>

    {/* Enhanced Category Tabs */}
    <motion.div 
      className="flex flex-wrap justify-center gap-4 mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {[
        { id: 'all', label: 'All Questions' },
        { id: 'services', label: 'Services' },
        { id: 'process', label: 'Process' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'technical', label: 'Technical' },
      ].map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => setActiveCategory(tab.id)}
          className={`group px-6 py-4 rounded-2xl font-bold transition-all duration-300 ${
            activeCategory === tab.id
              ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-2xl'
              : 'bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 hover:shadow-lg'
          }`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {tab.label}
        </motion.button>
      ))}
    </motion.div>

    {/* Enhanced FAQ Grid */}
    <motion.div 
      className="grid md:grid-cols-2 gap-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {[
        {
          question: "What kind of data analysis services do you provide?",
          answer: "I offer comprehensive data analysis services including data cleaning and preparation, descriptive statistics, inferential testing, regression modeling, data visualization, and detailed interpretation. I work with both academic research projects and professional business analytics to help you derive meaningful insights from your data.",
          category: "services",
        },
        {
          question: "Do you help with both qualitative and quantitative studies?",
          answer: "Yes, I support both qualitative and quantitative research methodologies. For quantitative analysis, I use statistical software like SPSS, R, and Python. For qualitative studies, I assist with coding frameworks, thematic analysis, and data interpretation using appropriate qualitative analysis methods.",
          category: "services",
        },
        {
          question: "How long does a typical project take to complete?",
          answer: "Project timelines vary based on complexity, but most standard analyses are completed within 7-14 days. More complex projects involving multiple statistical models or large datasets may take up to 3 weeks. I provide a detailed timeline estimate after reviewing your specific requirements and data.",
          category: "process",
        },
        {
          question: "Can you walk me through your typical process?",
          answer: "My process begins with an initial consultation to understand your research objectives and requirements. Then I assess your data quality and structure, set up appropriate analytical models, conduct statistical testing, and generate comprehensive reports with clear interpretations. You'll receive regular progress updates throughout the project.",
          category: "process",
        },
        {
          question: "What is your pricing structure for data analysis projects?",
          answer: "Pricing is tailored to each project's specific needs, considering factors like dataset size, analytical complexity, and reporting requirements. Basic analysis projects start around $150, while comprehensive thesis support or advanced modeling typically ranges from $400 to $800. I provide detailed quotes after understanding your project scope.",
          category: "pricing",
        },
        {
          question: "Do you offer payment plans or installment options?",
          answer: "Yes, I understand that larger projects require financial flexibility. For projects over $300, I offer a 50% upfront payment with the remaining 50% due upon completion. I accept various payment methods including PayPal, bank transfers, and other secure online payment options.",
          category: "pricing",
        },
        {
          question: "Which analytical tools and software do you primarily use?",
          answer: "I'm proficient with a wide range of analytical tools including Python for advanced analytics, R for statistical computing, SPSS for social science research, Excel for basic analysis, and Power BI for visualization. I select the most appropriate tools based on your specific research requirements and data characteristics.",
          category: "technical",
        },
        {
          question: "How do you ensure the security and confidentiality of my data?",
          answer: "Data security is my top priority. I implement strict confidentiality protocols, use encrypted file transfer methods, and can sign non-disclosure agreements if required. All client data is stored securely and deleted upon project completion unless otherwise requested.",
          category: "technical",
        },
        {
          question: "Can you assist with research design and hypothesis development?",
          answer: "Absolutely. I frequently help clients develop robust research frameworks, formulate testable hypotheses, and design appropriate analytical strategies. This ensures your study is methodologically sound and aligned with your research objectives from the outset.",
          category: "services",
        },
        {
          question: "What is your revision policy after project delivery?",
          answer: "I include up to two rounds of complimentary revisions within 10 days of project delivery. This ensures the final results and presentation fully meet your expectations and requirements. Additional revisions beyond this period are available at a reasonable rate.",
          category: "process",
        },
        {
          question: "Do you provide support for academic writing and thesis preparation?",
          answer: "While my primary focus is data analysis, I do provide support in interpreting results and preparing the methodology and results sections of academic papers. I help you present your findings clearly and effectively, ensuring they align with academic standards.",
          category: "services",
        },
        {
          question: "What types of data formats can you work with?",
          answer: "I can work with various data formats including Excel spreadsheets, CSV files, SPSS files, SQL databases, and survey data from platforms like Google Forms or SurveyMonkey. If you have data in other formats, I'm happy to discuss compatibility and conversion options.",
          category: "technical",
        },
      ]
        .filter(faq => activeCategory === 'all' || faq.category === activeCategory)
        .map((faq, index) => (
          <motion.div
            key={index}
            className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <details className="group/details">
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center group-hover/details:scale-110 transition-transform duration-300 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover/details:text-gray-700 transition-colors leading-relaxed">
                    {faq.question}
                  </h3>
                </div>
                <svg
                  className="w-6 h-6 text-gray-400 group-hover/details:text-gray-700 transition-transform duration-300 group-open/details:rotate-180 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full mb-6"></div>
                <p className="text-gray-600 text-base leading-relaxed bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
                  {faq.answer}
                </p>
              </div>
            </details>
          </motion.div>
        ))}
    </motion.div>

    {/* Enhanced CTA Card */}
    <motion.div 
      className="text-center mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 underline decoration-2 decoration-gray-400 underline-offset-4">
              Still have questions?
            </h3>
          </div>
          <motion.p 
            className="text-gray-700 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's discuss your research goals and how I can help you with your analysis.
          </motion.p>
          <motion.a
            href="/contact"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-12 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Schedule a Free Call</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </div>

        {/* Decorative Accents */}
        <div className="absolute top-6 right-6 w-20 h-20 bg-gray-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-6 left-6 w-24 h-24 bg-gray-100/40 rounded-full blur-2xl"></div>
      </div>
    </motion.div>
  </div>

  {/* Enhanced Floating Elements */}
  <motion.div 
    className="absolute top-1/3 left-1/4 w-3 h-3 bg-gray-400 rounded-full opacity-40"
    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 3, repeat: Infinity }}
  />
  <motion.div 
    className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-gray-500 rounded-full opacity-40"
    animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
  />
  <motion.div 
    className="absolute top-1/2 right-1/4 w-4 h-4 bg-gray-300 rounded-full opacity-30"
    animate={{ y: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
  />
</section>


      <Footer />
    </div>
  );
}
