'use client';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Construction Elements */}
      <div className="absolute inset-0">
        {/* Main Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700"></div>
        
        {/* Construction Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Grid Pattern */}
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        {/* Floating Construction Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        
        {/* Construction Icons */}
        <div className="absolute top-32 left-1/4 w-16 h-16 text-yellow-400/30 animate-float">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
        </div>
        
        <div className="absolute bottom-32 right-1/4 w-20 h-20 text-teal-400/30 animate-float animation-delay-2000">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Brand Banner */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center mb-8 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* OM VINAYAGA Logo */}
              <div className="relative w-24 h-24 mr-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700 relative overflow-hidden shadow-2xl">
                  {/* Left teal section */}
                  <div className="absolute left-0 top-0 w-12 h-24 bg-teal-600 rounded-l-full"></div>
                  {/* Right yellow section */}
                  <div className="absolute right-0 top-0 w-12 h-24 bg-yellow-400 rounded-r-full"></div>
                  {/* Diagonal line */}
                  <div className="absolute bottom-6 left-3 w-16 h-1.5 bg-yellow-400 transform rotate-12"></div>
                  {/* Ruler marks */}
                  <div className="absolute bottom-3 left-3 space-y-1">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-1 h-2 bg-white opacity-80"></div>
                    ))}
                  </div>
                  {/* Upward extensions - skyscrapers */}
                  <div className="absolute -top-3 left-3 w-2 h-6 bg-teal-600"></div>
                  <div className="absolute -top-4 left-6 w-2 h-8 bg-teal-600"></div>
                  <div className="absolute -top-3 right-6 w-2 h-10 bg-yellow-400"></div>
                </div>
              </div>
              {/* Company Name */}
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">OM VINAYAGA</h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-yellow-300 leading-tight drop-shadow-lg">CONSTRUCTIONS</h2>
              </div>
            </div>
          </div>

          {/* Company Slogan Banner */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-yellow-500/90 to-yellow-400/90 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-white/20">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                BUILDING EXCELLENCE,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-800">
                  CRAFTING THE FUTURE
                </span>
              </h3>
              <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium">
                From concept to completion, we deliver exceptional construction services with unmatched quality, 
                reliability, and attention to detail across all types of construction projects.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToContact}
              className="px-10 py-5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-teal-500/50 border-2 border-teal-500"
            >
              Start Your Project
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-10 py-5 bg-white/20 hover:bg-white/30 text-white font-bold rounded-2xl text-xl transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm border-2 border-white/30"
            >
              View Services
            </button>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="text-4xl font-bold text-yellow-300 mb-2 drop-shadow-lg">500+</div>
              <div className="text-white font-medium">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">15+</div>
              <div className="text-white font-medium">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="text-4xl font-bold text-yellow-300 mb-2 drop-shadow-lg">100%</div>
              <div className="text-white font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Construction Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent">
        <div className="flex justify-center items-end h-full pb-8">
          {/* Construction Icons Row */}
          <div className="flex space-x-8 text-white/60">
            <div className="w-8 h-8 animate-bounce">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <div className="w-8 h-8 animate-bounce animation-delay-2000">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div className="w-8 h-8 animate-bounce animation-delay-4000">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-2 h-4 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

