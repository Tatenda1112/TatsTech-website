'use client'

import { motion } from 'framer-motion'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState, useCallback } from 'react'
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
  Target,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 7000, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  const services = [
    {
      icon: BookOpen,
      title: 'Dissertation Projects & Data Analysis',
      desc: 'Comprehensive support in research, modeling, and LaTeX formatting for academic distinction.',
      features: ['SPSS, R, Python, Power BI', 'Hypothesis Testing', 'Model Building', 'Formatting & Interpretation'],
      tag: 'Research & Stats',
      gradient: 'from-gray-50 to-gray-100',
      highlight: true,
    },
    {
      icon: FileText,
      title: 'Attachment & Internship Reports',
      desc: 'Transform your internship experience into a professional, well-structured academic report.',
      features: ['Executive Summary', 'Visual Analytics', 'Formatting & Proofreading', 'Contextual Analysis'],
      tag: 'Professional Reports',
      gradient: 'from-gray-50 to-gray-100',
    },
    {
      icon: Code,
      title: 'Python Tutoring',
      desc: 'Interactive lessons focused on practical coding, automation, and research applications.',
      features: ['Pandas & NumPy', 'APIs & Automation', 'Machine Learning Basics', 'Mini Projects'],
      tag: 'Coding Skills',
      gradient: 'from-gray-50 to-gray-100',
      highlight: true,
    },
    {
      icon: Brain,
      title: 'Machine Learning Foundations',
      desc: 'Learn the essentials of machine learning through guided, real-world examples.',
      features: ['Supervised & Unsupervised', 'Metrics & Evaluation', 'Feature Engineering', 'Hands-on Projects'],
      tag: 'AI / ML',
      gradient: 'from-gray-50 to-gray-100',
    },
    {
      icon: Calculator,
      title: 'Excel for Analysts',
      desc: 'Master data manipulation, dashboards, and financial modeling with practical exercises.',
      features: ['Pivot Tables', 'Dashboards', 'Macros & VBA', 'Scenario Planning'],
      tag: 'Analytics Tools',
      gradient: 'from-gray-50 to-gray-100',
    },
    {
      icon: Database,
      title: 'SQL & Power BI',
      desc: 'Gain mastery over data querying and visualization through modern BI techniques.',
      features: ['Data Modeling', 'Joins & Queries', 'Interactive Dashboards', 'Performance Metrics'],
      tag: 'Data Visualization',
      gradient: 'from-gray-50 to-gray-100',
    },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 text-gray-900 overflow-hidden font-sans">
      {/* Ambient radial lighting */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-16 w-64 h-64 bg-gray-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 mix-blend-overlay" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-lg border border-gray-300/30 px-6 py-3 rounded-full shadow-md mb-8"
          >
            <Sparkles className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-medium text-gray-800">Professional Academic Services</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight relative">
            Tailored Services for
            <span className="block md:inline bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent md:ml-2">
              Academic Excellence
            </span>
            <motion.span
              layoutId="underline"
              className="absolute left-1/2 md:left-[65%] bottom-[-8px] w-32 h-[3px] bg-gray-700/60 rounded-full mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-8">
            I provide personalized academic and data-driven services crafted to make your projects, research,
            and reports stand out with clarity and precision.
          </p>
        </motion.div>
      </section>

      {/* Carousel */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore comprehensive solutions designed to elevate your academic and analytical excellence.
            </p>
          </motion.div>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />

            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {services.map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
                    transition={{ type: 'spring', stiffness: 150 }}
                    className="flex-[0_0_100%] sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_45%] px-4"
                  >
                    <div className="relative bg-white/30 backdrop-blur-md border border-gray-200/50 rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 h-full flex flex-col justify-between">
                      {s.highlight && (
                        <motion.span
                          initial={{ opacity: 0, y: -10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          className="absolute top-3 right-5 text-xs bg-gray-900 text-white px-3 py-1 rounded-full shadow-sm"
                        >
                          <Star className="w-3 h-3 inline-block mr-1" /> Featured
                        </motion.span>
                      )}
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-white/60 rounded-2xl flex items-center justify-center shadow-md border border-gray-200/40">
                          <s.icon className="w-10 h-10 text-gray-700" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-3">{s.title}</h3>
                      <p className="text-center text-gray-600 mb-6">{s.desc}</p>
                      <ul className="space-y-3 text-gray-700">
                        {s.features.map((f, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-gray-800 mt-1 flex-shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-center mt-6">
                        <span className="text-sm bg-white/70 px-4 py-2 rounded-full text-gray-700 font-semibold border border-gray-200 shadow-sm">
                          {s.tag}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-10 gap-2">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-[3px] w-8 rounded-full transition-all ${
                    i === selectedIndex ? 'bg-gray-800 w-10' : 'bg-gray-400/50 hover:bg-gray-600/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 border-t border-gray-200 relative text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg"
          >
            <Zap className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Work{' '}
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Smarter?
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's turn your academic goals into exceptional achievements. Every project deserves excellence —
            let’s make it happen together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-gray-900 to-gray-800 text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/263771186558"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-gray-800 px-10 py-5 rounded-2xl font-bold border-2 border-gray-300 hover:border-gray-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
            >
              <span>WhatsApp: +263 771 186 558</span>
            </a>
          </div>
          <div className="bg-white/50 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-md max-w-md mx-auto">
            <p className="text-gray-700 text-lg">
              Email: <span className="font-bold text-gray-900">tatendatatenda1112@gmail.com</span>
            </p>
            <p className="text-gray-600 text-sm mt-2">Typically respond within 2 hours</p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
