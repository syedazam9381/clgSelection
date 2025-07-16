import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, Star, IndianRupee, Building, Users, ExternalLink } from 'lucide-react';
import { useCollege } from '../contexts/CollegeContext';
import { College } from '../types/college';
import { CollegeCard } from './CollegeCard';
import { CollegeModal } from './CollegeModal';

export function CollegeFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [maxFee, setMaxFee] = useState<number>(500000);
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [sortBy, setSortBy] = useState<'rank' | 'fee' | 'name'>('rank');
  
  const { colleges, bookmarkedColleges, toggleBookmark } = useCollege();

  const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad'];
  const collegeTypes = ['Government', 'Private', 'Central', 'Deemed', 'Autonomous'];

  const filteredColleges = useMemo(() => {
    let filtered = colleges.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesLocation = !selectedLocation || college.city === selectedLocation;
      const matchesType = !selectedType || college.type === selectedType;
      const matchesFee = college.fees.annual <= maxFee;

      return matchesSearch && matchesLocation && matchesType && matchesFee;
    });

    // Sort colleges
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rank':
          return a.nurfRank - b.nurfRank;
        case 'fee':
          return a.fees.annual - b.fees.annual;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [colleges, searchTerm, selectedLocation, selectedType, maxFee, sortBy]);

  return (
    <section className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Perfect College
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Filter and compare colleges based on rankings, location, fees, and more
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search colleges, courses, or cities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">All Types</option>
                {collegeTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rank' | 'fee' | 'name')}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option value="rank">Sort by Rank</option>
                <option value="fee">Sort by Fee</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>

          {/* Fee Range */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maximum Annual Fee: ₹{maxFee.toLocaleString()}
            </label>
            <input
              type="range"
              min="50000"
              max="1000000"
              step="25000"
              value={maxFee}
              onChange={(e) => setMaxFee(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-blue-600">{filteredColleges.length}</span> colleges
          </p>
        </div>

        {/* College Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
              isBookmarked={bookmarkedColleges.includes(college.id)}
              onBookmark={() => toggleBookmark(college.id)}
              onViewDetails={() => setSelectedCollege(college)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No colleges found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>

      {/* College Detail Modal */}
      {selectedCollege && (
        <CollegeModal
          college={selectedCollege}
          isOpen={!!selectedCollege}
          onClose={() => setSelectedCollege(null)}
          isBookmarked={bookmarkedColleges.includes(selectedCollege.id)}
          onBookmark={() => toggleBookmark(selectedCollege.id)}
        />
      )}
    </section>
  );
}