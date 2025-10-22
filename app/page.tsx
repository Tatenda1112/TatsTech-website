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
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/10 to-green-100/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 md:py-16 lg:py-20">
          <div className="space-y-6 md:space-y-8 relative z-20">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for new projects
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Hire a Data Analyst
              </span>
              <br />
              <span className="text-gray-900">
                for Your Project
              </span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              <span className="font-semibold text-gray-800">Struggling with statistical analysis? </span> Get expert help from a professional data analyst who specializes in academic research. 
              <span className="text-blue-600 font-medium">Transform your data into compelling insights</span> that impress your supervisors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Link 
                href="/contact" 
                className="group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-h-[52px] flex items-center justify-center touch-manipulation"
              >
                <span className="relative z-10">Book a Clarity Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                href="#how-i-work" 
                className="group bg-white/80 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 text-center border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md min-h-[52px] flex items-center justify-center touch-manipulation"
              >
                See How I Work
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </Link>
            </div>
            
            
          </div>
          
          {/* Enhanced Mobile Background Visualization */}
          <div className="lg:hidden absolute inset-0 opacity-25 pointer-events-none overflow-hidden">
            {/* Additional floating elements */}
            <div className="absolute top-1/4 left-4 w-16 h-16 bg-blue-200/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/4 left-8 w-12 h-12 bg-green-200/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '1.5s'}}></div>
            
            <div className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 scale-60 sm:scale-80">
              {/* Enhanced Mobile Dashboard */}
              <div className="bg-gradient-to-br from-white/90 via-blue-50/60 to-green-50/50 rounded-2xl shadow-xl p-4 border border-gray-100/40 backdrop-blur-sm max-w-xs animate-float-4">
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
                      <div className="text-sm font-bold text-blue-600 animate-number-count">100+</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                    <div className="animate-count-up" style={{animationDelay: '1.4s'}}>
                      <div className="text-sm font-bold text-green-600 animate-number-count">98.5%</div>
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
                      <h4 className="font-bold text-gray-800 text-lg mb-3">Student Success Rate</h4>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Grade Achievement</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full"></div>
                          <span className="text-gray-700 font-medium">Completion Rate</span>
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
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-800 text-xs">Master's</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-800 text-xs">Undergrad</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-800 text-xs">Research</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated Summary Stats */}
                    <div className="mt-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border border-gray-200 relative overflow-hidden">
                      {/* Progress indicator */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 animate-progress-loading"></div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="animate-count-up" style={{animationDelay: '2.5s'}}>
                          <div className="text-xl font-bold text-gray-800 animate-number-count">91.2%</div>
                          <div className="text-xs text-gray-600 font-medium">Avg Success</div>
                        </div>
                        <div className="animate-count-up" style={{animationDelay: '2.7s'}}>
                          <div className="text-xl font-bold text-blue-600 animate-number-count">100+</div>
                          <div className="text-xs text-gray-600 font-medium">Projects</div>
                        </div>
                        <div className="animate-count-up" style={{animationDelay: '2.9s'}}>
                          <div className="text-xl font-bold text-green-600 animate-number-count">98.5%</div>
                          <div className="text-xs text-gray-600 font-medium">Satisfaction</div>
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
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">100+</div>
                    <div className="text-xs text-gray-600 font-medium mt-1">Success Stories</div>
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

      {/* STUDENT CHALLENGES SECTION – REFINED VERSION */}
<section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-28 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">

    {/* LEFT COLUMN */}
    <div className="space-y-6">
      {/* Card 1 */}
      <motion.div 
        className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
        whileHover={{ y: -4 }}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center">
            {/* Folder Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h5l2 2h7a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-1">Data Chaos</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Students often collect excellent data but struggle to organize, clean, and structure it for analysis — losing precious time before submission.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div 
        className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
        whileHover={{ y: -4 }}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center">
            {/* Confused Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M16 10h.01M12 14h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-1">Tool Overload</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              “Should I use SPSS or R?” “Do I need Python?” — students get lost switching tools without clear guidance on the right one for their study.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div 
        className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
        whileHover={{ y: -4 }}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center">
            {/* Equation Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5v14" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-1">Statistical Confusion</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Hypothesis testing, p-values, correlation — many students feel uncertain about which tests fit their research design.
            </p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* CENTER COLUMN */}
    <div className="text-center relative">
      <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <span className="w-2 h-2 bg-gray-700 rounded-full animate-pulse"></span>
        Challenges Faced by Students
      </div>

      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I Understand <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
          What You’re Going Through
        </span>
      </motion.h2>

      <motion.p 
        className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        From unclear supervisor feedback to tight submission deadlines — I’ve seen students face frustration, burnout, and confusion during research analysis. That’s exactly why this service exists — to simplify your academic journey.
      </motion.p>

      <motion.button 
        className="group inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-gray-700 transition-colors"
        whileHover={{ scale: 1.05 }}
      >
        Explore Solutions
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.span>
      </motion.button>

      {/* Subtle Center Glow */}
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur-3xl opacity-40" />
    </div>

    {/* RIGHT COLUMN */}
    <div className="space-y-6">
      {/* Card 4 */}
      <motion.div 
        className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
        whileHover={{ y: -4 }}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center">
            {/* Supervisor Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 20.083M12 14L5.84 10.578A12.083 12.083 0 003 20.083" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-1">Supervisor Pressure</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Constant revisions and unclear feedback leave many students unsure if they’re even on the right track.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Card 5 */}
      <motion.div 
        className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
        whileHover={{ y: -4 }}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center">
            {/* Clock Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-1">Tight Deadlines</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Many students balance coursework, jobs, and research — leaving little time to analyze data effectively before submission.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Card 6 */}
      <motion.div 
        className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
        whileHover={{ y: -4 }}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center">
            {/* Alert Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a1 1 0 00.86 1.5h18.64a1 1 0 00.86-1.5L13.71 3.86a1 1 0 00-1.72 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-1">Fear of Failing</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The stress of defending unclear results or producing weak statistical output causes anxiety — making students doubt their capabilities.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>

  {/* Subtle Pattern Background */}
  <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-center bg-repeat pointer-events-none" />

  {/* Floating dots for motion depth */}
  <div className="absolute top-20 left-12 w-3 h-3 bg-gray-400 rounded-full opacity-30 animate-pulse" />
  <div className="absolute bottom-28 right-20 w-2 h-2 bg-gray-500 rounded-full opacity-30 animate-pulse delay-1000" />
  <div className="absolute top-40 right-40 w-4 h-4 bg-gray-600 rounded-full opacity-30 animate-pulse delay-2000" />
</section>


{/* About Section */}
<section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-28 overflow-hidden">
  {/* Decorative background pattern */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/geometry.png')] opacity-[0.05] bg-repeat bg-center pointer-events-none" />

  {/* Floating tagline */}
  <div className="absolute top-12 right-10 text-gray-300 text-sm italic tracking-wide select-none">
    — The Solution I Offer —
  </div>

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

    {/* Left Content */}
    <div className="space-y-10">
      {/* Intro */}
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 relative inline-block after:content-[''] after:block after:w-24 after:h-[3px] after:bg-gray-800 after:mt-2">
          Hey, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
            TatsTech
          </span>
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          I’m a <span className="font-semibold text-gray-900 underline decoration-gray-400">Data Analysis Specialist </span> 
          helping students and professionals transform <span className="font-semibold text-gray-900">raw data into actionable insights</span>. 
          With <span className="font-semibold text-gray-900">over a year of hands-on experience</span> in academic and business projects, 
          I turn complexity into clarity — empowering you to make informed decisions.
        </p>
      </div>

      {/* How I Help */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 border-l-4 border-gray-800 pl-3">
          How I Help
        </h3>
        <p className="text-gray-700 leading-relaxed">
          From <span className="font-semibold text-gray-900">data cleaning and visualization</span> to <span className="font-semibold text-gray-900">advanced analytics and model interpretation</span>, 
          I offer <span className="font-semibold text-gray-900 underline decoration-gray-400">step-by-step project guidance</span> — ensuring 
          your results are accurate, insightful, and presentation-ready.
        </p>
      </div>

      {/* Collaboration */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 border-l-4 border-gray-800 pl-3">
          Let’s Collaborate
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Ready to transform your dataset into something extraordinary?{" "}
          <span className="font-semibold text-gray-900">Let’s connect</span> and 
          make your research or business story shine with data-driven precision.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 pt-6">
        <a
          href="/contact"
          className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg text-center"
        >
          Let’s Work Together
        </a>
        <a
          href="https://wa.me/263771186558"
          className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 text-center"
        >
          WhatsApp Me
        </a>
      </div>
    </div>

    {/* Right Content */}
    <div className="relative">
      {/* Image */}
      <div className="relative mb-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-3xl blur-2xl scale-105 opacity-60"></div>
        <img
          src="/tatstech.png"
          alt="TatsTech - Data Analyst"
          className="w-80 h-96 object-cover rounded-2xl shadow-2xl mx-auto border border-gray-200"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
            if (nextElement) {
              nextElement.style.display = 'flex';
            }
          }}
        />
        {/* Fallback Avatar */}
        <div className="w-80 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl mx-auto items-center justify-center hidden">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-3xl font-bold">T</span>
            </div>
            <p className="text-gray-800 font-medium">TatsTech</p>
            <p className="text-gray-500 text-sm">Data Analysis Expert</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 text-center">
        <div className="hover:scale-105 transition-transform">
          <div className="text-3xl font-extrabold text-gray-900 mb-1">1+</div>
          <div className="text-sm text-gray-600 font-medium">Years Experience</div>
        </div>
        <div className="hover:scale-105 transition-transform">
          <div className="text-3xl font-extrabold text-gray-900 mb-1">100+</div>
          <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
        </div>
        <div className="hover:scale-105 transition-transform">
          <div className="text-3xl font-extrabold text-gray-900 mb-1">98%</div>
          <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
        </div>
      </div>

      {/* Expertise Card */}
      <div className="mt-12">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <h4 className="font-semibold text-gray-900 mb-3 underline decoration-gray-400 underline-offset-4">
            Data Analytics Expertise
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Skilled in <span className="font-semibold text-gray-900">SPSS, Power BI, Python, R, and Excel</span> — 
            delivering clear, data-driven solutions for academic and professional success.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* TECHNOLOGY SECTION – CLEAN, PROFESSIONAL, & CONSISTENT STYLE */}
<section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-28 overflow-hidden text-gray-900">

  {/* Subtle Side Tagline (matches About section style) */}
  <div className="absolute top-10 right-10 text-gray-300 text-sm italic tracking-wide">
    — Technologies I Use —
  </div>

  {/* Animated Background Blobs */}
  <div className="absolute inset-0 overflow-hidden">
    <motion.div 
      className="absolute top-1/3 left-1/3 w-80 h-80 bg-gray-200/40 rounded-full blur-3xl"
      animate={{
        x: [0, 40, 0],
        y: [0, -30, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute bottom-1/4 right-1/3 w-[28rem] h-[28rem] bg-gray-300/30 rounded-full blur-3xl"
      animate={{
        x: [0, -40, 0],
        y: [0, 30, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>

  <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="space-y-8"
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-4 relative inline-block after:content-[''] after:block after:w-24 after:h-[3px] after:bg-gray-800 after:mt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Technologies I Use for <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
          Powerful Data Analysis
        </span>
      </motion.h2>

      <motion.p 
        className="text-gray-700 text-lg leading-relaxed max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        I use a combination of <span className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4">statistical software</span>, 
        <span className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4"> coding tools</span>, and 
        <span className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4"> visualization platforms</span> 
        to turn complex datasets into clear, insightful results.  
        Each tool plays a unique role in delivering structured, evidence-based conclusions.
      </motion.p>

      {/* Buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 pt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Link 
          href="/contact"
          className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg text-center"
        >
          Let’s Collaborate
        </Link>
        <a
          href="#about"
          className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 text-center"
        >
          Learn More
        </a>
      </motion.div>
    </motion.div>

    {/* RIGHT CONTENT – Orbiting Tech Icons */}
    <div className="relative">
      <div className="relative w-[26rem] h-[26rem] mx-auto">
        
        {/* Central Node */}
        <motion.div 
          className="absolute inset-0 m-auto w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl flex flex-col items-center justify-center shadow-2xl z-20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 22, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span className="text-white text-xl font-bold">DA</span>
          <p className="text-xs text-white/80 font-medium">Data Analyst</p>
        </motion.div>

        {/* Orbiting Technologies */}
        {[
          { name: "Python", color: "from-gray-700 to-gray-500", radius: 140, speed: 40 },
          { name: "R", color: "from-gray-600 to-gray-400", radius: 160, speed: 35 },
          { name: "SPSS", color: "from-gray-700 to-gray-500", radius: 120, speed: 45 },
          { name: "Excel", color: "from-gray-600 to-gray-400", radius: 180, speed: 30 },
          { name: "Power BI", color: "from-gray-700 to-gray-500", radius: 200, speed: 25 },
          { name: "Tableau", color: "from-gray-600 to-gray-400", radius: 140, speed: 38 },
          { name: "Jupyter", color: "from-gray-700 to-gray-500", radius: 160, speed: 32 },
          { name: "Stats", color: "from-gray-600 to-gray-400", radius: 100, speed: 50 },
        ].map((tool, i) => (
          <motion.div
            key={i}
            className={`absolute w-20 h-20 bg-gradient-to-br ${tool.color} rounded-2xl flex flex-col items-center justify-center shadow-lg cursor-pointer`}
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
              scale: 1.25,
              zIndex: 40,
              boxShadow: "0 0 25px rgba(0,0,0,0.2)",
              transition: { duration: 0.2 },
            }}
            style={{
              left: "50%",
              top: "50%",
              marginLeft: -40,
              marginTop: -40,
            }}
          >
            <span className="text-white text-lg font-bold">{tool.name[0]}</span>
            <p className="text-xs text-white/90 font-medium text-center">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>

  {/* Subtle floating dots */}
  {[...Array(6)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gray-400/40 rounded-full"
      animate={{
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 80 - 40],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3 + i,
        repeat: Infinity,
        delay: i * 0.4,
      }}
      style={{
        left: `${20 + i * 12}%`,
        top: `${15 + i * 8}%`,
      }}
    />
  ))}
</section>

      <ProcessSection />

 {/* Academic Programs Section - Refined with Side Tag */}
<section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-24 overflow-hidden">
  {/* Side Tagline (matches About section style) */}
  <div className="absolute top-10 right-10 text-gray-300 text-sm italic tracking-wide">
    — Academic Excellence —
  </div>

  {/* Subtle background pattern */}
  <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/geometry.png')] bg-repeat bg-center pointer-events-none" />

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    {/* Header */}
    <div className="text-center mb-20">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 relative inline-block after:content-[''] after:block after:w-24 after:h-[3px] after:bg-gray-800 after:mx-auto after:mt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Academic Programs I’ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Worked With</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Over the past year, I’ve assisted students and professionals in 
        <span className="font-semibold text-gray-900"> diverse academic disciplines</span> — 
        transforming raw data into clear, structured insights that enhance research quality and presentation.
      </motion.p>
    </div>

    {/* Programs Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
      {[
        { name: "Actuarial Science", description: "Risk modeling & probability" },
        { name: "Financial Mathematics", description: "Quantitative finance & forecasting" },
        { name: "Mathematics & Statistics", description: "Pure & applied research" },
        { name: "Data Science", description: "Machine learning & predictive analytics" },
        { name: "Business Studies", description: "Market analysis & insights" },
        { name: "Economics", description: "Econometric & policy modeling" },
        { name: "Tourism & Hospitality", description: "Industry trend analytics" },
        { name: "Supply Chain Management", description: "Operational optimization" },
        { name: "Social Sciences", description: "Survey & demographic studies" },
        { name: "Physics & Engineering", description: "Experimental data modeling" },
        { name: "Psychology", description: "Behavioral & cognitive analytics" },
        { name: "Health Sciences", description: "Clinical & biomedical research" },
      ].map((program, index) => (
        <motion.div
          key={index}
          className="group bg-white hover:bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.04 }}
          whileHover={{ y: -3, scale: 1.02 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-3.5 h-3.5 bg-gray-700 rounded-full mt-1 group-hover:scale-125 transition-transform duration-300"></div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:underline group-hover:decoration-gray-400 group-hover:underline-offset-4 transition-all duration-300">
                {program.name}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {program.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA Section */}
    <motion.div
      className="relative bg-white rounded-3xl p-10 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="text-center relative z-10">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 underline decoration-gray-300 underline-offset-4">
          Don’t See Your Field?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
          I’ve collaborated with researchers across many unique fields. 
          If your project involves <span className="font-semibold text-gray-900">data analysis, visualization, or interpretation</span>, 
          I can help you turn your results into something exceptional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Discuss Your Project
            <span className="ml-2">→</span>
          </Link>
          <button className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:border-gray-300 transition-all duration-300">
            View Examples
          </button>
        </div>
      </div>

      {/* Decorative accents */}
      <div className="absolute top-6 right-6 w-16 h-16 bg-gray-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-6 left-6 w-20 h-20 bg-gray-100/40 rounded-full blur-2xl"></div>
    </motion.div>
  </div>

  {/* Subtle background glow */}
  <div className="absolute top-24 right-20 w-40 h-40 bg-gray-100/50 rounded-full blur-3xl"></div>
</section>

     {/* FAQ Section – Elegant Grey Design */}
<section id="faq" className="relative py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
  {/* Subtle Background Accents */}
  <div className="absolute inset-0 overflow-hidden">
    <motion.div 
      className="absolute top-24 left-1/3 w-72 h-72 bg-gray-200/40 rounded-full blur-3xl"
      animate={{
        x: [0, 30, 0],
        y: [0, -20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute bottom-24 right-1/3 w-[22rem] h-[22rem] bg-gray-300/30 rounded-full blur-3xl"
      animate={{
        x: [0, -30, 0],
        y: [0, 20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p 
        className="text-gray-600 text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Everything you need to know about working with me — from research support to data analysis and timelines.
      </motion.p>
    </div>

    {/* Category Tabs */}
    <motion.div 
      className="flex flex-wrap justify-center gap-3 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {[
        { id: 'all', label: 'All' },
        { id: 'services', label: 'Services' },
        { id: 'process', label: 'Process' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'technical', label: 'Technical' },
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveCategory(tab.id)}
          className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
            activeCategory === tab.id
              ? 'bg-gray-900 text-white shadow-md'
              : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </motion.div>

    {/* FAQ Grid */}
    <motion.div 
      className="grid md:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {[
        {
          question: "What kind of data analysis services do you provide?",
          answer: "I offer full-scope data analysis including data cleaning, descriptive statistics, inferential tests, regression modeling, visualization, and interpretation for academic and professional research projects.",
          category: "services",
        },
        {
          question: "Do you help with both qualitative and quantitative studies?",
          answer: "Yes. I handle both types — quantitative using statistical software (SPSS, R, Python) and qualitative using coding frameworks (NVivo, thematic analysis).",
          category: "services",
        },
        {
          question: "How long does a project usually take?",
          answer: "Most projects are completed within 7–14 days. Complex research involving multiple models may take up to 3 weeks. I always provide an estimated timeline after reviewing your data and objectives.",
          category: "process",
        },
        {
          question: "Can you explain your process briefly?",
          answer: "I start with a consultation to understand your objectives, followed by data assessment, model setup, statistical testing, and report generation. You receive progress updates and final insights in a professional report format.",
          category: "process",
        },
        {
          question: "What is your pricing structure?",
          answer: "Pricing is based on project scope, dataset size, and analytical complexity. Basic projects start around $150, with advanced modeling or full thesis support ranging from $400–$800.",
          category: "pricing",
        },
        {
          question: "Do you offer installment payments?",
          answer: "Yes. For larger projects, I allow 50% upfront and 50% upon completion. I accept PayPal, bank transfer, and secure online payments.",
          category: "pricing",
        },
        {
          question: "Which tools or software do you use?",
          answer: "I primarily use Python, R, SPSS, Excel, and Power BI for quantitative analysis — and Jupyter or Tableau for visualization. The choice depends on your data and research requirements.",
          category: "technical",
        },
        {
          question: "Can you handle confidential or academic data securely?",
          answer: "Absolutely. I maintain strict confidentiality protocols and can sign NDAs. All files are stored and transferred securely through encrypted channels.",
          category: "technical",
        },
        {
          question: "Can you assist with research design or hypothesis formulation?",
          answer: "Yes, I often assist clients in developing strong research frameworks, hypotheses, and analytical strategies to align with their study objectives.",
          category: "services",
        },
        {
          question: "What if I need revisions after delivery?",
          answer: "I offer up to two free revisions within 10 days after delivery to ensure the results and presentation align with your expectations.",
          category: "process",
        },
      ]
        .filter(faq => activeCategory === 'all' || faq.category === activeCategory)
        .map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            whileHover={{ y: -2 }}
          >
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {faq.question}
                </h3>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          </motion.div>
        ))}
    </motion.div>

    {/* CTA Card */}
    <motion.div 
      className="text-center mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-300 max-w-xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6">
          Let’s discuss your research goals and how I can help you with your analysis.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Schedule a Free Call
          <span className="ml-2 text-lg">→</span>
        </Link>
      </div>
    </motion.div>
  </div>
</section>



      <Footer />
    </div>
  );
}
