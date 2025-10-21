'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  Phone, Mail, MapPin, Send, MessageCircle,
  CheckCircle, Clock, Users, Target, ChevronDown
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', projectDetails: '', agreedToTerms: false
  })
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement
    const { name, value } = target
    const checked = (target as HTMLInputElement).checked
    const type = (target as HTMLInputElement).type
    setFormData((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }))
  }

  const contactMethods = [
    {
      icon: <Phone className="w-7 h-7" />,
      title: 'Phone & WhatsApp',
      description: 'Reach out for quick assistance or consultations.',
      contact: '+263 771 186 558',
      link: 'tel:+263771186558',
      whatsapp: 'https://wa.me/263771186558',
      badge: 'Fast Response',
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: 'Email',
      description: 'Send a detailed message anytime — replies are prompt and personalized.',
      contact: 'tatendatatenda1112@gmail.com',
      link: 'mailto:tatendatatenda1112@gmail.com',
      badge: 'Detailed Replies',
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: 'Location',
      description: 'Available globally for online or in-person sessions.',
      contact: 'Online & Worldwide',
      link: '#availability',
      badge: 'Flexible Sessions',
    },
  ]

  const faqs = [
    {
      q: 'How do I get started?',
      a: 'Contact me via WhatsApp or email with your project details. We will schedule a free consultation to align with your goals.',
      icon: <Target className="w-5 h-5" />,
    },
    {
      q: 'Do you offer online sessions?',
      a: 'Yes — all tutoring, report guidance, and project consultations are available online via Zoom or Google Meet.',
      icon: <Users className="w-5 h-5" />,
    },
    {
      q: 'What is your success rate?',
      a: 'I maintain a 95 % + distinction and upper-class rate across dissertations, reports, and data projects.',
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      q: 'What are your working hours?',
      a: 'Available daily 9 AM – 9 PM CAT. WhatsApp messages are usually answered within a few hours.',
      icon: <Clock className="w-5 h-5" />,
    },
  ]

  const stats = [
    { number: '95 % +', label: 'Success Rate' },
    { number: '2-4 h', label: 'Avg Response' },
    { number: '100 %', label: 'Client Satisfaction' },
    { number: '24 / 7', label: 'Availability' },
  ]

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.02),transparent_70%)] from-gray-100 via-gray-50 to-gray-100 text-gray-900">
      <Header />

      {/* HERO */}
      <section className="relative py-28 text-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Let Me Help You Start Your <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent underline decoration-gray-400/40 decoration-2">Project</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Connect with me to discuss your project, training, or research goals. You’ll receive professional, efficient assistance every step of the way.
          </p>

          {/* stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-10">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                className="text-center">
                <div className="text-3xl font-bold text-gray-900">{s.number}</div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT METHODS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-gray-900">
            Get in Touch
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                {c.badge && (
                  <span className="inline-flex items-center gap-2 mb-4 text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-gray-700 rounded-full animate-pulse" /> {c.badge}
                  </span>
                )}
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shadow-inner">
                    {c.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-3">{c.title}</h3>
                <p className="text-center text-gray-600 mb-4">{c.description}</p>
                <p className="text-center font-semibold text-gray-800 mb-6">{c.contact}</p>
                <div className="flex flex-col gap-3">
                  <a href={c.link}
                    className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all text-center">
                    Contact Now
                  </a>
                  {c.whatsapp && (
                    <a href={c.whatsapp} target="_blank" rel="noopener noreferrer"
                      className="border border-gray-300 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all text-center flex justify-center items-center">
                      <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-center mb-8">Send a Message</h2>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {['firstName', 'lastName'].map((f, i) => (
                  <div key={i}>
                    <label className="block font-semibold mb-2 capitalize">{f.replace(/Name/, ' Name ')} *</label>
                    <input type="text" name={f} required value={formData[f]}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-700 outline-none transition-all"
                      placeholder={`Your ${f.replace(/Name/, ' name ')}`} />
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-semibold mb-2">Email *</label>
                  <input type="email" name="email" required value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-700 outline-none transition-all"
                    placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Phone</label>
                  <input type="tel" name="phone" value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-700 outline-none transition-all"
                    placeholder="+263 xxx xxx xxx" />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-2">Project Details *</label>
                <textarea rows={6} name="projectDetails" required value={formData.projectDetails}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-700 outline-none transition-all resize-none"
                  placeholder="Briefly describe your project, goals, and deadlines..." />
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <input type="checkbox" name="agreedToTerms" required checked={formData.agreedToTerms}
                  onChange={handleInputChange} className="h-5 w-5 text-gray-700 border-gray-300 rounded focus:ring-gray-700" />
                <label className="text-gray-700 text-lg">
                  I agree to the Terms of Service and Privacy Policy *
                </label>
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-5 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center text-lg">
                <Send className="w-6 h-6 mr-3" /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white/70 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-md transition-all">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="flex justify-between items-center w-full text-left">
                  <div className="flex items-center gap-3">
                    {f.icon}
                    <h3 className="text-lg font-semibold text-gray-900">{f.q}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFAQ === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFAQ === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
                      className="mt-3 text-gray-600 leading-relaxed pl-8 pr-2">
                      {f.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
