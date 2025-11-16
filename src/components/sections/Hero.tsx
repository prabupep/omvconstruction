'use client';

import Image from 'next/image';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Styling */}
      <div className="absolute inset-0">
        <Image
          src="/images/construction/investor-calling.jpg"
          alt="New construction sketch - Building the future with OMV Construction Services"
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Enhanced overlay with gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/65"></div>
        {/* Additional subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
          aria-hidden="true"
        />
      </div>

      {/* Enhanced Background Pattern with Better Positioning */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content with Enhanced Typography and Spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Badge with Better Styling */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-400/95 text-gray-900 text-sm font-bold mb-8 backdrop-blur-md border-2 border-yellow-500/90 shadow-2xl">
            <span className="w-2 h-2 bg-gray-900 rounded-full mr-3 animate-pulse" aria-hidden="true"></span>
            Professional Construction Services
            <span className="ml-3 text-gray-900" role="img" aria-label="construction">🏗️</span>
          </div>

          {/* Enhanced Main Headline with Better Typography */}
          <div className="mb-8 px-6 py-4 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Building Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-green-400 drop-shadow-[0_2px_8px_rgba(250,204,21,0.5)]">
                Dreams
              </span>
              Into Reality
            </h1>
          </div>

          {/* Enhanced Subtitle with Better Readability */}
          <div className="mb-10 px-6 py-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-white leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              From concept to completion, we deliver exceptional construction services with unmatched quality, 
              reliability, and attention to detail. Your vision, our expertise.
            </p>
          </div>

          {/* Enhanced CTA Buttons with Better Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToContact}
              className="group px-10 py-5 bg-gradient-to-r from-teal-700 to-teal-800 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold rounded-xl text-lg transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-yellow-500/25 border-2 border-transparent hover:border-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
              aria-label="Start your construction project"
            >
              <span className="flex items-center">
                Start Your Project
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              onClick={scrollToServices}
              className="group px-10 py-5 border-2 border-white hover:border-yellow-400 text-white hover:text-yellow-400 font-bold rounded-xl text-lg transition-all duration-500 hover:bg-white/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-white/25 focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="View our construction services"
            >
              <span className="flex items-center">
                View Services
                <svg className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Enhanced Stats with Better Visual Appeal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group px-6 py-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/40 transition-all duration-300">
              <div className="text-4xl font-bold text-yellow-400 mb-3 drop-shadow-[0_2px_8px_rgba(250,204,21,0.6)] group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">Projects Completed</div>
            </div>
            <div className="text-center group px-6 py-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/40 transition-all duration-300">
              <div className="text-4xl font-bold text-green-400 mb-3 drop-shadow-[0_2px_8px_rgba(34,197,94,0.6)] group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">Years Experience</div>
            </div>
            <div className="text-center group px-6 py-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/40 transition-all duration-300">
              <div className="text-4xl font-bold text-yellow-400 mb-3 drop-shadow-[0_2px_8px_rgba(250,204,21,0.6)] group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center shadow-lg">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="text-white text-xs mt-2 opacity-80">Scroll Down</div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-20 left-10 hidden lg:block" aria-hidden="true">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      </div>
      <div className="absolute top-40 right-20 hidden lg:block" aria-hidden="true">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
