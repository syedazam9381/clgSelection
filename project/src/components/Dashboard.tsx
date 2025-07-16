import React from 'react';
import { Heart, Eye, Star, TrendingUp, Award, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCollege } from '../contexts/CollegeContext';

export function Dashboard() {
  const { user } = useAuth();
  const { colleges, bookmarkedColleges } = useCollege();

  const savedColleges = colleges.filter(college => bookmarkedColleges.includes(college.id));

  const stats = [
    { icon: Heart, label: 'Saved Colleges', value: bookmarkedColleges.length, color: 'text-red-500' },
    { icon: Eye, label: 'Colleges Viewed', value: '12', color: 'text-blue-500' },
    { icon: Star, label: 'Applications', value: '3', color: 'text-yellow-500' },
    { icon: TrendingUp, label: 'Success Rate', value: '95%', color: 'text-green-500' },
  ];

  const recentActivity = [
    { action: 'Viewed', college: 'IIT Delhi', time: '2 hours ago' },
    { action: 'Saved', college: 'NIT Trichy', time: '5 hours ago' },
    { action: 'Compared', college: 'BITS Pilani vs IIT Bombay', time: '1 day ago' },
    { action: 'Applied', college: 'IIIT Hyderabad', time: '2 days ago' },
  ];

  return (
    <section className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h2>
          <p className="text-gray-600">Track your college selection journey and manage your applications</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl bg-gray-50`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Saved Colleges */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Your Saved Colleges</h3>
              {savedColleges.length > 0 ? (
                <div className="space-y-4">
                  {savedColleges.slice(0, 5).map((college) => (
                    <div key={college.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-sm">#{college.nurfRank}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{college.name}</h4>
                          <p className="text-sm text-gray-600">{college.city}, {college.state}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-yellow-500 mb-1">
                          <Star className="h-4 w-4 mr-1" />
                          <span className="text-sm font-medium">{college.rating}</span>
                        </div>
                        <p className="text-sm text-gray-600">₹{college.fees.annual.toLocaleString()}/year</p>
                      </div>
                    </div>
                  ))}
                  {savedColleges.length > 5 && (
                    <p className="text-center text-gray-600 text-sm">
                      and {savedColleges.length - 5} more colleges...
                    </p>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">You haven't saved any colleges yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.action}</span> {activity.college}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-white text-gray-700 px-4 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 text-left">
                  🔍 Find More Colleges
                </button>
                <button className="w-full bg-white text-gray-700 px-4 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 text-left">
                  📊 Compare Colleges
                </button>
                <button className="w-full bg-white text-gray-700 px-4 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 text-left">
                  🎯 Take Career Quiz
                </button>
                <button className="w-full bg-white text-gray-700 px-4 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 text-left">
                  🏆 Find Scholarships
                </button>
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-yellow-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-yellow-600" />
                Upcoming Deadlines
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">JEE Main Registration</p>
                    <p className="text-sm text-gray-600">Engineering Entrance</p>
                  </div>
                  <span className="text-sm font-medium text-red-600">5 days left</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">NEET Application</p>
                    <p className="text-sm text-gray-600">Medical Entrance</p>
                  </div>
                  <span className="text-sm font-medium text-yellow-600">12 days left</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}