'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle,
  BookOpen,
  Code,
  Database,
  Brain,
  Calculator,
  FileText,
  Star,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Users,
  Clock,
  Shield,
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Dissertation & Thesis Support',
      desc: 'Comprehensive research assistance from data collection to final analysis and formatting.',
      features: ['SPSS, R, Python Analysis', 'Hypothesis Testing', 'Statistical Modeling', 'Academic Formatting'],
      tag: 'Academic Research',
      gradient: 'from-gray-50 to-gray-100',
      highlight: true,
    },
    {
      icon: FileText,
      title: 'Academic Report Writing',
      desc: 'Professional report preparation for internships, attachments, and research projects.',
      features: ['Data Visualization', 'Executive Summaries', 'Professional Formatting', 'Quality Assurance'],
      tag: 'Report Writing',
      gradient: 'from-gray-50 to-gray-100',
    },
    {
      icon: Code,
      title: 'Programming Tutoring',
      desc: 'One-on-one coding lessons focused on practical data analysis and research applications.',
      features: ['Python & R Programming', 'Data Analysis Skills', 'Project-Based Learning', 'Real-world Applications'],
      tag: 'Skill Development',
      gradient: 'from-gray-50 to-gray-100',
      highlight: true,
    },
    {
      icon: Database,
      title: 'Data Analysis Projects',
      desc: 'End-to-end data analysis for academic projects and research studies.',
      features: ['Data Cleaning & Preparation', 'Statistical Analysis', 'Results Interpretation', 'Visualization'],
      tag: 'Data Science',
      gradient: 'from-gray-50 to-gray-100',
    },
  ]

  const features = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most projects completed within 7-14 days with regular progress updates.'
    },
    {
      icon: Shield,
      title: 'Confidential & Secure',
      description: 'Your data and work are protected with strict confidentiality protocols.'
    },
    {
      icon: Users,
      title: 'Personalized Support',
      description: 'One-on-one guidance tailored to your specific academic needs and goals.'
    },
    {
      icon: Target,
      title: 'Quality Guaranteed',
      description: 'Professional standards with revision options to ensure your satisfaction.'
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-16 w-64 h-64 bg-gray-300/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/geometry.png')] opacity-[0.03]" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 px-6 py-3 rounded-2xl shadow-sm mb-8"
            >
              <Sparkles className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-semibold text-gray-800">Academic Support Services</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
              Services for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
                Student Success
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              Professional academic support services designed to help students achieve excellence in their 
              research, data analysis, and academic projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              How I Can Help You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive academic support services tailored to meet your specific needs and deadlines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <service.icon className="w-8 h-8 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{service.desc}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gray-800 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-semibold">
                      {service.tag}
                    </span>
                    <Link
                      href="/contact"
                      className="text-gray-900 hover:text-gray-700 font-semibold text-sm flex items-center gap-2 group/link"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-lg p-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-gray-900 mb-4">Why Choose My Services</h3>
              <p className="text-gray-600 text-lg">Professional support designed with your academic success in mind</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg"
            >
              <Zap className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Ready to Excel in Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
                Studies?
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's work together to achieve your academic goals. Professional support tailored to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-gray-900 to-gray-700 text-white px-12 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="https://wa.me/263771186558"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-gray-900 px-12 py-5 rounded-2xl font-bold border-2 border-gray-300 hover:border-gray-400 hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm max-w-md mx-auto">
              <p className="text-gray-700 text-lg">
                Email: <span className="font-bold text-gray-900">tatendatatenda1112@gmail.com</span>
              </p>
              <p className="text-gray-600 text-sm mt-2">Fast response guaranteed</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}