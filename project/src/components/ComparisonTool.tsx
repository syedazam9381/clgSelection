import React, { useState } from 'react';
import { Plus, X, Star, MapPin, IndianRupee, ArrowRight } from 'lucide-react';
import { useCollege } from '../contexts/CollegeContext';
import { College } from '../types/college';

export function ComparisonTool() {
  const { colleges } = useCollege();
  const [selectedColleges, setSelectedColleges] = useState<College[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const availableColleges = colleges.filter(college => 
    !selectedColleges.some(selected => selected.id === college.id) &&
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addCollege = (college: College) => {
    if (selectedColleges.length < 3) {
      setSelectedColleges([...selectedColleges, college]);
      setSearchTerm('');
    }
  };

  const removeCollege = (collegeId: string) => {
    setSelectedColleges(selectedColleges.filter(college => college.id !== collegeId));
  };

  const comparisonFeatures = [
    { key: 'nurfRank', label: 'NIRF Rank', type: 'number' },
    { key: 'rating', label: 'Rating', type: 'rating' },
    { key: 'type', label: 'Type', type: 'text' },
    { key: 'city', label: 'Location', type: 'text' },
    { key: 'fees.annual', label: 'Annual Fee', type: 'currency' },
    { key: 'fees.total', label: 'Total Fee', type: 'currency' },
    { key: 'courses', label: 'Courses', type: 'array' },
  ];

  const getValue = (college: College, key: string) => {
    const keys = key.split('.');
    let value: any = college;
    for (const k of keys) {
      value = value[k];
    }
    return value;
  };

  const formatValue = (value: any, type: string) => {
    switch (type) {
      case 'currency':
        return `₹${value.toLocaleString()}`;
      case 'rating':
        return (
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            {value}
          </div>
        );
      case 'array':
        return `${value.length} courses`;
      case 'number':
        return `#${value}`;
      default:
        return value;
    }
  };

  return (
    <section className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compare
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Colleges
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare up to 3 colleges side by side to make an informed decision
          </p>
        </div>

        {/* College Selection */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((index) => (
              <div key={index} className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                {selectedColleges[index] ? (
                  <div className="relative">
                    <button
                      onClick={() => removeCollege(selectedColleges[index].id)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs"
                    >
                      <X className="h-3 w-3" />
                    </button>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{selectedColleges[index].name}</h3>
                      <p className="text-sm text-gray-600">{selectedColleges[index].city}</p>
                      <div className="flex items-center justify-center mt-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">{selectedColleges[index].rating}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Plus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Add College {index + 1}</p>
                    {index === selectedColleges.length && (
                      <div className="space-y-3">
                        <input
                          type="text"
                          placeholder="Search colleges..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                        {searchTerm && (
                          <div className="max-h-40 overflow-y-auto space-y-2">
                            {availableColleges.slice(0, 5).map((college) => (
                              <button
                                key={college.id}
                                onClick={() => addCollege(college)}
                                className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-blue-50 rounded-lg text-sm transition-colors"
                              >
                                <div className="font-medium">{college.name}</div>
                                <div className="text-gray-600 text-xs">{college.city}</div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedColleges.length >= 2 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    {selectedColleges.map((college) => (
                      <th key={college.id} className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        {college.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature.key} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{feature.label}</td>
                      {selectedColleges.map((college) => (
                        <td key={college.id} className="px-6 py-4 text-sm text-gray-700 text-center">
                          {formatValue(getValue(college, feature.key), feature.type)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {selectedColleges.map((college) => (
                  <a
                    key={college.id}
                    href={college.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Apply to {college.name.split(' ')[0]}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {selectedColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Plus className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Comparing Colleges</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Select colleges to compare their features, fees, rankings, and more side by side
            </p>
          </div>
        )}
      </div>
    </section>
  );
}