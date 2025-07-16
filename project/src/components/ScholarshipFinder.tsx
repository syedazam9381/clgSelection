import React, { useState } from 'react';
import { Search, Award, IndianRupee, Calendar, Users, FileText, ExternalLink } from 'lucide-react';

interface Scholarship {
  id: string;
  name: string;
  provider: string;
  amount: number;
  type: 'merit' | 'need' | 'minority' | 'sports' | 'research';
  category: string[];
  eligibility: string[];
  deadline: string;
  description: string;
  website: string;
}

export function ScholarshipFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const scholarships: Scholarship[] = [
    {
      id: '1',
      name: 'National Scholarship Portal',
      provider: 'Government of India',
      amount: 50000,
      type: 'need',
      category: ['All Categories'],
      eligibility: ['Family income < 2 LPA', 'Merit based on previous exams'],
      deadline: '2024-12-31',
      description: 'Central sector scholarship for students from economically weaker sections.',
      website: 'https://scholarships.gov.in'
    },
    {
      id: '2',
      name: 'INSPIRE Scholarship',
      provider: 'Department of Science & Technology',
      amount: 80000,
      type: 'merit',
      category: ['Science', 'Engineering'],
      eligibility: ['Top 1% in Class XII', 'Pursuing science/engineering'],
      deadline: '2024-11-30',
      description: 'Innovation in Science Pursuit for Inspired Research scholarship.',
      website: 'https://online-inspire.gov.in'
    },
    {
      id: '3',
      name: 'Minority Scholarship',
      provider: 'Ministry of Minority Affairs',
      amount: 30000,
      type: 'minority',
      category: ['All Categories'],
      eligibility: ['Minority community', 'Family income < 2.5 LPA'],
      deadline: '2024-10-31',
      description: 'Pre-matric and post-matric scholarship for minority students.',
      website: 'https://maef.nic.in'
    },
    {
      id: '4',
      name: 'JEE Main Scholarship',
      provider: 'NTA',
      amount: 100000,
      type: 'merit',
      category: ['Engineering'],
      eligibility: ['JEE Main rank < 10000', 'Admission in NIT/IIIT'],
      deadline: '2024-09-30',
      description: 'Merit scholarship for top performers in JEE Main examination.',
      website: 'https://jeemain.nta.nic.in'
    },
    {
      id: '5',
      name: 'Sports Scholarship',
      provider: 'Sports Authority of India',
      amount: 60000,
      type: 'sports',
      category: ['Sports'],
      eligibility: ['State/National level sports achievement', 'Pursuing any course'],
      deadline: '2024-08-31',
      description: 'Scholarship for students with exceptional sports achievements.',
      website: 'https://sportsauthorityofindia.nic.in'
    },
    {
      id: '6',
      name: 'Research Fellowship',
      provider: 'UGC',
      amount: 120000,
      type: 'research',
      category: ['Research'],
      eligibility: ['Master\'s degree with 55%', 'NET/GATE qualified'],
      deadline: '2024-07-31',
      description: 'Junior Research Fellowship for pursuing PhD.',
      website: 'https://ugcnet.nta.nic.in'
    }
  ];

  const types = [
    { value: 'merit', label: 'Merit Based', color: 'bg-blue-100 text-blue-700' },
    { value: 'need', label: 'Need Based', color: 'bg-green-100 text-green-700' },
    { value: 'minority', label: 'Minority', color: 'bg-purple-100 text-purple-700' },
    { value: 'sports', label: 'Sports', color: 'bg-orange-100 text-orange-700' },
    { value: 'research', label: 'Research', color: 'bg-indigo-100 text-indigo-700' }
  ];

  const categories = ['Engineering', 'Medical', 'Science', 'Arts', 'Commerce', 'Sports', 'Research'];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || scholarship.type === selectedType;
    const matchesCategory = !selectedCategory || 
                           scholarship.category.includes(selectedCategory) || 
                           scholarship.category.includes('All Categories');

    return matchesSearch && matchesType && matchesCategory;
  });

  const getTypeStyle = (type: string) => {
    const typeInfo = types.find(t => t.value === type);
    return typeInfo ? typeInfo.color : 'bg-gray-100 text-gray-700';
  };

  const isDeadlineNear = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30 && diffDays > 0;
  };

  return (
    <section className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              {' '}Scholarships
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover scholarships that match your profile and help fund your education
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search scholarships..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">All Types</option>
                {types.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredScholarships.map((scholarship) => (
            <div key={scholarship.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              {/* Header */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium ${getTypeStyle(scholarship.type)}`}>
                      {types.find(t => t.value === scholarship.type)?.label}
                    </span>
                    {isDeadlineNear(scholarship.deadline) && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-lg">
                        Deadline Soon
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-green-600">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      <span className="font-bold">₹{scholarship.amount.toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-gray-600">per year</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.name}</h3>
                <p className="text-gray-600 text-sm">{scholarship.provider}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4">{scholarship.description}</p>

                {/* Eligibility */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Eligibility
                  </h4>
                  <div className="space-y-1">
                    {scholarship.eligibility.map((criterion, index) => (
                      <div key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        {criterion}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deadline */}
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {scholarship.category.map((cat, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={scholarship.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Apply Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    <FileText className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredScholarships.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No scholarships found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results</p>
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Scholarship Application Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Start Early</h4>
                <p className="text-sm text-gray-600">Begin your application process well before the deadline to gather all required documents.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Read Carefully</h4>
                <p className="text-sm text-gray-600">Thoroughly read eligibility criteria and application requirements before applying.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Complete Documents</h4>
                <p className="text-sm text-gray-600">Ensure all required documents are properly attested and submitted on time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}