'use client';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'All Type of Design Works',
      description: 'Comprehensive architectural and engineering design services including structural design, interior design, and 3D modeling for all construction projects.',
      icon: (
        <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ['Architectural Design', 'Structural Engineering', '3D Modeling', 'Interior Design']
    },
    {
      id: 2,
      title: 'Commercial & Apartment Building',
      description: 'Complete construction services for commercial buildings, office complexes, and multi-story apartment buildings with modern amenities.',
      icon: (
        <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ['Office Buildings', 'Shopping Centers', 'Apartment Complexes', 'Modern Amenities']
    },
    {
      id: 3,
      title: 'Residential Works',
      description: 'Custom home construction, villa development, and residential projects built to your exact specifications with premium materials.',
      icon: (
        <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      features: ['Custom Homes', 'Villas', 'Premium Materials', 'Quality Craftsmanship']
    },
    {
      id: 4,
      title: 'School & Hospital Building',
      description: 'Specialized construction for educational institutions and healthcare facilities with focus on safety, accessibility, and modern infrastructure.',
      icon: (
        <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      features: ['Educational Facilities', 'Healthcare Buildings', 'Safety Standards', 'Modern Infrastructure']
    },
    {
      id: 5,
      title: 'All Type of Road Works',
      description: 'Comprehensive road construction services including highways, bridges, flyovers, and urban road development with modern engineering standards.',
      icon: (
        <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ['Highways', 'Bridges', 'Flyovers', 'Urban Roads']
    },
    {
      id: 6,
      title: 'Renovation and Remodeling',
      description: 'Transform existing spaces with modern renovations, upgrades, and remodeling projects that enhance value and functionality.',
      icon: (
        <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: ['Design Consultation', 'Quality Workmanship', 'Minimal Disruption', 'Value Addition']
    },
    {
      id: 7,
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects including water supply systems, sewage treatment, power distribution, and telecommunications.',
      icon: (
        <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ['Water Systems', 'Power Distribution', 'Telecommunications', 'Urban Planning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Construction
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-yellow-500">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full spectrum of construction services, from initial planning to final completion, 
            ensuring your project is executed with precision and excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-yellow-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-50 to-yellow-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss your construction needs and create a plan that brings your vision to life.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
