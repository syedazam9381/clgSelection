import React from 'react';
import { X, Star, MapPin, IndianRupee, Heart, ExternalLink, Building, Users, Calendar, FileText, Phone, Mail, Globe } from 'lucide-react';
import { College } from '../types/college';

interface CollegeModalProps {
  college: College;
  isOpen: boolean;
  onClose: () => void;
  isBookmarked: boolean;
  onBookmark: () => void;
}

export function CollegeModal({ college, isOpen, onClose, isBookmarked, onBookmark }: CollegeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>

        <div className="relative inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {/* Campus Image */}
          <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden">
            <img 
              src={college.image} 
              alt={`${college.name} campus`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Header */}
          <div className="flex justify-between items-start mb-6 -mt-20 relative z-10">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <span className="px-3 py-1 bg-blue-100/90 backdrop-blur-sm text-blue-700 text-sm font-medium rounded-lg">
                  NIRF Rank #{college.nurfRank}
                </span>
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-lg">
                  {college.type}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{college.name}</h2>
              <div className="flex items-center text-white/90">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{college.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={onBookmark}
                className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <Heart className={`h-6 w-6 ${isBookmarked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
              </button>
              <button
                onClick={onClose}
                className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Rating and Stats */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-lg font-bold">{college.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600">Rating</p>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">{college.courses.length}+</div>
                    <p className="text-sm text-gray-600">Courses</p>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">15K+</div>
                    <p className="text-sm text-gray-600">Students</p>
                  </div>
                </div>
              </div>

              {/* Courses */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Courses</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {college.courses.map((course, index) => (
                    <div key={index} className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              {/* Admission Process */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Admission Process</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <div>
                      <p className="font-medium">Entrance Exam</p>
                      <p className="text-sm text-gray-600">{college.admission.entrance}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <div>
                      <p className="font-medium">Eligibility</p>
                      <p className="text-sm text-gray-600">{college.admission.eligibility}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <div>
                      <p className="font-medium">Application Process</p>
                      <p className="text-sm text-gray-600">{college.admission.process}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Fee Structure */}
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Fee Structure</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Annual Fee</span>
                    <span className="font-semibold">₹{college.fees.annual.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Course</span>
                    <span className="font-semibold">₹{college.fees.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Additional</span>
                    <span className="font-semibold">₹{college.fees.additional.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{college.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{college.contact.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <a href={college.contact.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-yellow-50 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Documents</h3>
                <div className="space-y-2">
                  {college.admission.documents.map((doc, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={college.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  Apply Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <button className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Add to Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}