"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Python for Data Science: A Complete Beginner's Guide",
      excerpt: "Learn the fundamentals of Python programming specifically tailored for data science. This guide covers basic syntax, NumPy, and pandas for structured analysis.",
      author: "TatsTech Team",
      date: "2025-10-15",
      category: "Python",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Mastering Data Visualization: From Excel Charts to Power BI Dashboards",
      excerpt: "Discover the art and science of visual storytelling. Create compelling charts in Excel and dynamic dashboards in Power BI.",
      author: "TatsTech Team",
      date: "2025-10-10",
      category: "Data Visualization",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "SQL Fundamentals Every Data Analyst Should Know",
      excerpt: "Essential SQL concepts every analyst must master — from simple queries to advanced joins and aggregations.",
      author: "TatsTech Team",
      date: "2025-10-08",
      category: "SQL",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Machine Learning Project Lifecycle: From Problem to Production",
      excerpt: "Understand the complete ML pipeline — defining problems, preparing data, modeling, and deploying in real-world scenarios.",
      author: "TatsTech Team",
      date: "2025-10-05",
      category: "Machine Learning",
      readTime: "15 min read"
    },
    {
      id: 5,
      title: "Statistical Analysis for Your Dissertation: Best Practices",
      excerpt: "Avoid statistical pitfalls. Learn hypothesis testing, selecting proper models, and interpreting your results correctly.",
      author: "TatsTech Team",
      date: "2025-10-03",
      category: "Statistics",
      readTime: "11 min read"
    },
    {
      id: 6,
      title: "Building a Data Science Portfolio That Impresses Employers",
      excerpt: "Create a portfolio that gets attention — real projects, storytelling, and measurable impact.",
      author: "TatsTech Team",
      date: "2025-10-01",
      category: "Career",
      readTime: "9 min read"
    }
  ]

  const featuredPost = blogPosts[0]

  // ✅ Type-safe function (fixes the implicit 'any' TypeScript error)
  const formatDate = (date: string | number | Date): string =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200 text-gray-900 font-sans antialiased relative overflow-hidden">
      {/* Glowing gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.9),rgba(200,200,200,0.15)_70%)] pointer-events-none" />
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-white/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-gray-400/10 blur-3xl rounded-full animate-pulse-slow" />

      <Header />

      {/* HERO */}
      <section className="py-24 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight relative inline-block">
            TatsTech <span className="text-gray-700">Blog</span>
            <motion.span 
              className="absolute left-0 -bottom-2 w-2/3 h-1 bg-gray-800 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7 }}
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Insights, tutorials, and frameworks powering the next generation of data scientists, analysts, and innovators.
          </p>
        </motion.div>
      </section>

      {/* FEATURED */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-8 text-gray-900"
          >
            Featured Article
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <div className="grid md:grid-cols-2">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <BookOpen className="w-20 h-20 text-gray-400" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <span className="bg-white/70 backdrop-blur-md text-gray-800 px-3 py-1 rounded-full font-medium border border-gray-200">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`} className="text-gray-900 font-semibold hover:underline flex items-center">
                    Read Article
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 border-t border-gray-200 bg-gradient-to-br from-gray-50/80 to-gray-100/90 backdrop-blur-md relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.slice(1).map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white/50 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <span className="bg-white/70 backdrop-blur-md text-gray-800 px-3 py-1 rounded-full font-medium border border-gray-200">{post.category}</span>
                    <span className="text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-gray-900 font-semibold hover:underline flex items-center">
                    Read
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
