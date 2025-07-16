import React, { useState } from 'react';
import { BookOpen, GraduationCap, Building, ArrowRight, CheckCircle } from 'lucide-react';

interface QualificationSelectorProps {
  onNext: () => void;
}

export function QualificationSelector({ onNext }: QualificationSelectorProps) {
  const [selectedQualification, setSelectedQualification] = useState<string>('');
  const [selectedStream, setSelectedStream] = useState<string>('');

  const qualifications = [
    {
      id: '10th',
      title: '10th Pass',
      description: 'Just completed 10th grade',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'intermediate',
      title: 'Intermediate/12th',
      description: 'Completed 12th or equivalent',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'diploma',
      title: 'Diploma',
      description: 'Completed diploma course',
      icon: Building,
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const streams = [
    'Engineering & Technology',
    'Medical & Health Sciences',
    'Science & Research',
    'Arts & Humanities',
    'Commerce & Management',
    'Law & Legal Studies',
    'Agriculture & Allied',
    'Design & Creative Arts'
  ];

  const canProceed = selectedQualification && selectedStream;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tell Us About Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Background
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help us understand your current education level and interests to provide personalized college recommendations
          </p>
        </div>

        {/* Qualification Selection */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            What's your current qualification?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {qualifications.map((qual) => (
              <div
                key={qual.id}
                onClick={() => setSelectedQualification(qual.id)}
                className={`relative cursor-pointer group transition-all duration-300 hover:scale-105 ${
                  selectedQualification === qual.id ? 'scale-105' : ''
                }`}
              >
                <div className={`p-8 rounded-2xl border-2 transition-all ${
                  selectedQualification === qual.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}>
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${qual.color} mb-4`}>
                      <qual.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{qual.title}</h4>
                    <p className="text-gray-600">{qual.description}</p>
                  </div>
                  {selectedQualification === qual.id && (
                    <div className="absolute -top-2 -right-2">
                      <CheckCircle className="h-8 w-8 text-green-500 bg-white rounded-full" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stream Selection */}
        {selectedQualification && (
          <div className="mb-12 animate-fadeIn">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Which field interests you?
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {streams.map((stream) => (
                <button
                  key={stream}
                  onClick={() => setSelectedStream(stream)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 hover:scale-105 ${
                    selectedStream === stream
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <span className="font-medium">{stream}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Continue Button */}
        {canProceed && (
          <div className="text-center animate-fadeIn">
            <button
              onClick={onNext}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto"
            >
              Find My Colleges
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}