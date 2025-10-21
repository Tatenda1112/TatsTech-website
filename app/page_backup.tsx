import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 bg-gradient-to-br from-green-50 to-blue-50 flex items-center">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Hire a Data Analysis Partner
              <br />
              <span className="block">to Build Your Dissertation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <span className="font-semibold">Non-tech student?</span> Don't give up on your dissertation. 
              Let's build your data analysis together. <span className="text-gray-500">(TatsTech)</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="/contact" 
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Book a Clarity Call
              </Link>
              <Link 
                href="#how-i-work" 
                className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
              >
                See How I Work
              </Link>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 font-medium mb-4">Trusted By</p>
              <div className="flex gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">S</span>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">M</span>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-sm">J</span>
                </div>
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm">+</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Compact Client-Focused Mockup */}
              <div className="relative transform rotate-3 hover:rotate-1 transition-all duration-500 max-w-lg" style={{transform: 'rotate(3deg) perspective(1000px) rotateY(-5deg)'}}>
                
                {/* Main Dashboard - Curved & Organic */}
                <div className="bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 rounded-3xl shadow-2xl p-8 border border-gray-100/50 backdrop-blur-sm" style={{borderRadius: '2rem 3rem 2rem 3rem'}}>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg">Analysis Complete</h3>
                    </div>
                    <p className="text-gray-600 text-sm ml-11">PhD Psychology Dissertation</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 mb-6" style={{borderRadius: '1rem 2rem 1rem 2rem'}}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 font-medium">Confidence Level</span>
                      <span className="font-bold text-blue-600 text-lg">98.5%</span>
                    </div>
                  </div>
                  
                  {/* Organic Bar Chart Visualization */}
                  <div className="bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-3xl p-8 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 group backdrop-blur-sm" style={{borderRadius: '2rem 3rem 2.5rem 2rem'}}>
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-800 text-xl mb-3 group-hover:text-blue-600 transition-colors duration-300">Student Success Rate by Academic Level</h4>
                      <div className="flex items-center gap-8 text-sm">
                        <div className="flex items-center gap-3 hover:scale-110 transition-transform duration-300 cursor-pointer">
                          <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-pulse shadow-lg"></div>
                          <span className="text-gray-700 font-semibold">Grade Achievement</span>
                        </div>
                        <div className="flex items-center gap-3 hover:scale-110 transition-transform duration-300 cursor-pointer">
                          <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.5s'}}></div>
                          <span className="text-gray-700 font-semibold">Completion Rate</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Curved Chart Container */}
                    <div className="relative bg-gradient-to-br from-white to-gray-50/80 rounded-2xl p-6 border border-gray-100/70 shadow-inner" style={{borderRadius: '1.5rem 2rem 1.5rem 2rem'}}>
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-4 h-48 flex flex-col justify-between text-sm text-gray-500 -ml-12 font-medium">
                        <span>100%</span>
                        <span>80%</span>
                        <span>60%</span>
                        <span>40%</span>
                        <span>20%</span>
                        <span>0%</span>
                      </div>
                      
                      {/* Grid lines */}
                      <div className="absolute inset-4 h-48">
                        <div className="h-full flex flex-col justify-between">
                          <div className="border-t border-gray-200"></div>
                          <div className="border-t border-gray-200"></div>
                          <div className="border-t border-gray-200"></div>
                          <div className="border-t border-gray-200"></div>
                          <div className="border-t border-gray-200"></div>
                          <div className="border-t border-gray-300 border-2"></div>
                        </div>
                      </div>
                      
                      {/* Bars */}
                      <div className="flex justify-between items-end h-48 px-4 pt-4">
                        {/* PhD */}
                        <div className="flex gap-3 items-end group/bar">
                          <div className="relative group cursor-pointer">
                            <div className="w-10 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 hover:from-blue-700 hover:to-blue-500 animate-slideUp transform hover:rotate-1" style={{height: '180px', animationDelay: '0.1s', borderRadius: '0.5rem 0.5rem 0 0', clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'}}>
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-700 to-blue-800 text-white px-3 py-2 rounded-2xl text-sm font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105" style={{borderRadius: '1rem 1.5rem 1rem 1.5rem'}}>
                                94.2%
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{borderRadius: '0.5rem 0.5rem 0 0'}}></div>
                            </div>
                          </div>
                          <div className="relative group cursor-pointer">
                            <div className="w-10 bg-gradient-to-t from-green-600 via-green-500 to-green-400 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 hover:from-green-700 hover:to-green-500 animate-slideUp transform hover:-rotate-1" style={{height: '186px', animationDelay: '0.2s', borderRadius: '0.5rem 0.5rem 0 0', clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'}}>
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-700 to-green-800 text-white px-3 py-2 rounded-2xl text-sm font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105" style={{borderRadius: '1rem 1.5rem 1rem 1.5rem'}}>
                                96.8%
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{borderRadius: '0.5rem 0.5rem 0 0'}}></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Master's */}
                        <div className="flex gap-3 items-end group/bar">
                          <div className="relative group cursor-pointer">
                            <div className="w-10 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 hover:from-blue-700 hover:to-blue-500 animate-slideUp transform hover:rotate-2" style={{height: '170px', animationDelay: '0.3s', borderRadius: '0.5rem 0.5rem 0 0', clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)'}}>
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-700 to-blue-800 text-white px-3 py-2 rounded-2xl text-sm font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105" style={{borderRadius: '1rem 1.5rem 1rem 1.5rem'}}>
                                88.7%
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{borderRadius: '0.5rem 0.5rem 0 0'}}></div>
                            </div>
                          </div>
                          <div className="relative group cursor-pointer">
                            <div className="w-10 bg-gradient-to-t from-green-600 via-green-500 to-green-400 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 hover:from-green-700 hover:to-green-500 animate-slideUp transform hover:-rotate-2" style={{height: '177px', animationDelay: '0.4s', borderRadius: '0.5rem 0.5rem 0 0', clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)'}}>
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-700 to-green-800 text-white px-3 py-2 rounded-2xl text-sm font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105" style={{borderRadius: '1rem 1.5rem 1rem 1.5rem'}}>
                                92.3%
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{borderRadius: '0.5rem 0.5rem 0 0'}}></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Undergraduate */}
                        <div className="flex gap-3 items-end group/bar">
                          <div className="relative group cursor-pointer">
                            <div className="w-10 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 hover:from-blue-700 hover:to-blue-500 animate-slideUp transform hover:-rotate-1" style={{height: '158px', animationDelay: '0.5s', borderRadius: '0.5rem 0.5rem 0 0', clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)'}}>
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-700 to-blue-800 text-white px-3 py-2 rounded-2xl text-sm font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105" style={{borderRadius: '1rem 1.5rem 1rem 1.5rem'}}>
                                82.1%
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{borderRadius: '0.5rem 0.5rem 0 0'}}></div>
                            </div>
                          </div>
                          <div className="relative group cursor-pointer">
                            <div className="w-10 bg-gradient-to-t from-green-600 via-green-500 to-green-400 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 hover:from-green-700 hover:to-green-500 animate-slideUp transform hover:rotate-1" style={{height: '172px', animationDelay: '0.6s', borderRadius: '0.5rem 0.5rem 0 0', clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)'}}>
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-700 to-green-800 text-white px-3 py-2 rounded-2xl text-sm font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105" style={{borderRadius: '1rem 1.5rem 1rem 1.5rem'}}>
                                89.7%
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{borderRadius: '0.5rem 0.5rem 0 0'}}></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Research Projects */}
                        <div className="flex gap-3 items-end group/bar">
                          <div className="relative group cursor-pointer">
                            <div className="w-10 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 hover:from-blue-700 hover:to-blue-500 animate-slideUp transform hover:rotate-3" style={{height: '187px', animationDelay: '0.7s', borderRadius: '0.5rem 0.5rem 0 0', clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)'}}>
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-700 to-blue-800 text-white px-3 py-2 rounded-2xl text-sm font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105" style={{borderRadius: '1rem 1.5rem 1rem 1.5rem'}}>
                                97.3%
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{borderRadius: '0.5rem 0.5rem 0 0'}}></div>
                            </div>
                          </div>
                          <div className="relative group cursor-pointer">
                            <div className="w-10 bg-gradient-to-t from-green-600 via-green-500 to-green-400 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 hover:from-green-700 hover:to-green-500 animate-slideUp transform hover:-rotate-3" style={{height: '190px', animationDelay: '0.8s', borderRadius: '0.5rem 0.5rem 0 0', clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)'}}>
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-700 to-green-800 text-white px-3 py-2 rounded-2xl text-sm font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105" style={{borderRadius: '1rem 1.5rem 1rem 1.5rem'}}>
                                98.9%
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{borderRadius: '0.5rem 0.5rem 0 0'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Curved X-axis labels */}
                      <div className="flex justify-between mt-6 px-4">
                        <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-200">
                          <div className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition-colors duration-200">PhD</div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200">Research</div>
                        </div>
                        <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-200">
                          <div className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition-colors duration-200">Master's</div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200">Thesis</div>
                        </div>
                        <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-200">
                          <div className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition-colors duration-200">Undergraduate</div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200">Final Projects</div>
                        </div>
                        <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-200">
                          <div className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition-colors duration-200">Research</div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200">Papers</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Summary Stats */}
                    <div className="mt-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="group cursor-pointer hover:scale-105 transition-transform duration-200">
                          <div className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 animate-fadeInScale" style={{animationDelay: '0.9s'}}>91.2%</div>
                          <div className="text-sm text-gray-600 font-medium">Average Success Rate</div>
                        </div>
                        <div className="group cursor-pointer hover:scale-105 transition-transform duration-200">
                          <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-200 animate-fadeInScale" style={{animationDelay: '1.0s'}}>4,900+</div>
                          <div className="text-sm text-gray-600 font-medium">Successful Projects</div>
                        </div>
                        <div className="group cursor-pointer hover:scale-105 transition-transform duration-200">
                          <div className="text-2xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-200 animate-fadeInScale" style={{animationDelay: '1.1s'}}>98.5%</div>
                          <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Organic Floating Success Badge */}
                <div className="absolute -top-3 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 transform rotate-12 hover:rotate-6" style={{borderRadius: '1rem 2rem 1rem 2rem'}}>
                  ✓ Defense Ready
                </div>
                
                {/* Curved Floating Stats Card */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-2xl p-4 border border-gray-100/70 transform rotate-6 hover:rotate-3 transition-all duration-500 hover:scale-105 backdrop-blur-sm" style={{borderRadius: '1rem 2rem 1.5rem 1rem'}}>
                  <div className="text-center">
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">4,900+</div>
                    <div className="text-xs text-gray-600 font-medium">Success Stories</div>
                  </div>
                </div>
                
                {/* Organic Software Badge */}
                <div className="absolute top-1/3 -right-4 bg-gradient-to-br from-white to-purple-50/50 rounded-2xl shadow-xl px-3 py-2 border border-gray-100/70 transform -rotate-12 hover:-rotate-6 transition-all duration-500 hover:scale-105 backdrop-blur-sm" style={{borderRadius: '0.5rem 1.5rem 1rem 0.5rem'}}>
                  <div className="flex gap-2 text-sm font-bold">
                    <span className="text-purple-600">SPSS</span>
                    <span className="text-blue-600">R</span>
                    <span className="text-green-600">Python</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 text-center">Statistical Tools</div>
                </div>

                {/* Organic Processing Indicators */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full animate-pulse shadow-lg"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.3s'}}></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.6s'}}></div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
