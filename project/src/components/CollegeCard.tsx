import React from 'react';
import { Star, MapPin, IndianRupee, Heart, ExternalLink, Building, Users } from 'lucide-react';
import { College } from '../types/college';

interface CollegeCardProps {
  college: College;
  isBookmarked: boolean;
  onBookmark: () => void;
  onViewDetails: () => void;
}

export function CollegeCard({ college, isBookmarked, onBookmark, onViewDetails }: CollegeCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      {/* Campus Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={college.image} 
          alt={`${college.name} campus`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <button
          onClick={onBookmark}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart className={`h-5 w-5 ${isBookmarked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>
      </div>

      {/* Header */}
      <div className="relative p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Building className="h-4 w-4 text-white" />
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-lg">
              NIRF #{college.nurfRank}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{college.name}</h3>
        
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{college.city}, {college.state}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Type and Rating */}
        <div className="flex justify-between items-center mb-4">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
            {college.type}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-700">{college.rating}</span>
          </div>
        </div>

        {/* Fee */}
        <div className="bg-green-50 rounded-lg p-3 mb-4">
          <div className="flex items-center text-green-700">
            <IndianRupee className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">Annual Fee</span>
          </div>
          <div className="text-xl font-bold text-green-800">
            ₹{college.fees.annual.toLocaleString()}
          </div>
        </div>

        {/* Courses */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Popular Courses:</p>
          <div className="flex flex-wrap gap-1">
            {college.courses.slice(0, 3).map((course, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg"
              >
                {course}
              </span>
            ))}
            {college.courses.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                +{college.courses.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onViewDetails}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            View Details
            <ExternalLink className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}