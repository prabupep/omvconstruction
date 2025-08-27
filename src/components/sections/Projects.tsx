'use client';

import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'commercial',
      description: 'A state-of-the-art office building featuring sustainable design, smart building technology, and modern amenities.',
      image: '/api/placeholder/400/300',
      year: '2024',
      area: '25,000 sq ft',
      location: 'Downtown Business District'
    },
    {
      id: 2,
      title: 'Luxury Residential Villa',
      category: 'residential',
      description: 'Custom-built luxury villa with premium finishes, smart home systems, and breathtaking views.',
      image: '/api/placeholder/400/300',
      year: '2024',
      area: '8,500 sq ft',
      location: 'Exclusive Hillside Community'
    },
    {
      id: 3,
      title: 'Industrial Warehouse Facility',
      category: 'industrial',
      description: 'Large-scale warehouse with advanced logistics systems, energy-efficient design, and modern security features.',
      image: '/api/placeholder/400/300',
      year: '2023',
      area: '150,000 sq ft',
      location: 'Industrial Park'
    },
    {
      id: 4,
      title: 'Shopping Center Renovation',
      category: 'renovation',
      description: 'Complete renovation of a 1980s shopping center, modernizing facilities while preserving architectural character.',
      image: '/api/placeholder/400/300',
      year: '2023',
      area: '180,000 sq ft',
      location: 'Suburban Retail District'
    },
    {
      id: 5,
      title: 'Sustainable Apartment Complex',
      category: 'residential',
      description: 'Green-certified apartment building with solar panels, rainwater harvesting, and energy-efficient systems.',
      image: '/api/placeholder/400/300',
      year: '2023',
      area: '120,000 sq ft',
      location: 'Eco-Friendly Community'
    },
    {
      id: 6,
      title: 'Corporate Headquarters',
      category: 'commercial',
      description: 'LEED Platinum certified corporate headquarters featuring innovative workspace design and sustainable materials.',
      image: '/api/placeholder/400/300',
      year: '2022',
      area: '45,000 sq ft',
      location: 'Corporate Campus'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'industrial', label: 'Industrial' },
    { key: 'renovation', label: 'Renovation' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-600">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of successful construction projects that showcase our expertise, 
            quality, and commitment to excellence across various sectors.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-yellow-200 to-green-200 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-20 h-20 text-white/80 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-white/80 font-medium">{project.title}</p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full capitalize">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500 mb-1">Year</div>
                    <div className="font-semibold text-gray-900">{project.year}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Area</div>
                    <div className="font-semibold text-gray-900">{project.area}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Location</div>
                    <div className="font-semibold text-gray-900 truncate" title={project.location}>
                      {project.location}
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      Modern Design
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Quality Materials
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      Sustainable
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can bring your construction vision to life with the same quality and expertise 
              demonstrated in our portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 hover:border-green-600 text-gray-700 hover:text-green-600 font-semibold rounded-lg text-lg transition-all duration-300 hover:bg-green-50">
                View Full Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
