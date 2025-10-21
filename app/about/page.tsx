"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from "framer-motion"
import { CheckCircle, Users, Award, Clock, Target, BookOpen, BarChart3, Brain, Star } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const values = [
    { icon: <Target className="w-7 h-7" />, title: "Excellence", description: "I pursue mastery in every project — setting the standard for academic and analytical quality." },
    { icon: <Users className="w-7 h-7" />, title: "Student-Centered", description: "My work revolves around you — your learning style, your pace, and your aspirations." },
    { icon: <CheckCircle className="w-7 h-7" />, title: "Integrity", description: "I uphold honesty, originality, and transparency in every engagement." },
    { icon: <Clock className="w-7 h-7" />, title: "Reliability", description: "Timely delivery, constant communication, and consistent quality are my hallmarks." }
  ]

  const stats = [
    { number: "100+", label: "Students Empowered" },
    { number: "95%", label: "Grade 1 & 2.1 Achievements" },
    { number: "50+", label: "Completed Research Projects" },
    { number: "3+", label: "Years of Experience" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200 relative text-gray-900 font-sans antialiased overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.8),rgba(200,200,200,0.15)_70%)] pointer-events-none" />
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-white/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-gray-400/10 blur-3xl rounded-full animate-pulse-slow" />

      <Header />

      {/* HERO */}
      <section className="py-28 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 relative inline-block">
            About <span className="text-gray-700">TatsTech</span>
            <motion.span 
              className="absolute left-0 -bottom-2 w-2/3 h-1 bg-gray-800 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.7 }}
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I empower students and professionals through analytical precision, mentorship, and academic excellence — transforming complex ideas into impactful outcomes.
          </p>
        </motion.div>
      </section>

      {/* STORY */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6">My Journey</h2>
            <p className="text-lg text-gray-600 mb-6">
              I began TatsTech as a small initiative to simplify academic research and technical learning. Over time, it evolved into a hub of mentorship, data-driven insights, and student empowerment.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Every project reflects precision, integrity, and a dedication to seeing students succeed in their academic and professional pursuits.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2"><CheckCircle className="text-gray-700 w-5 h-5" /> Rooted in academic excellence</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-gray-700 w-5 h-5" /> Focused on mentorship and clarity</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-gray-700 w-5 h-5" /> Consistent results across disciplines</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-white/60 shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-3xl font-bold text-gray-900">{stat.number}</h3>
                <p className="text-gray-700 mt-2 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-gradient-to-b from-gray-50/80 to-gray-100/90 backdrop-blur-md relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.6),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Core Values</h2>
          <p className="text-lg text-gray-600 mb-14 max-w-3xl mx-auto">
            The guiding principles that shape my approach and define the quality of every collaboration.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white/50 backdrop-blur-xl p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all"
              >
                <div className="text-gray-800 mb-4 flex justify-center relative">
                  <span className="absolute w-3 h-3 bg-gray-300 rounded-full animate-pulse-slow -top-1 -right-1" />
                  {v.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-200 border-t border-gray-200 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Ready to Elevate Your Academic Journey?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Partner with TatsTech — where analytical rigor meets academic creativity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-gray-900/90 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800/90 transition backdrop-blur-md shadow-lg">
              Get in Touch
            </Link>
            <Link href="https://wa.me/263771186558" target="_blank" className="border border-gray-500/50 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100/60 backdrop-blur-sm transition">
              WhatsApp: +263 771 186 558
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
