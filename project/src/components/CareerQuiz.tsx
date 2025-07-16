import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Brain, Target, Award } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: Array<{ text: string; field: string; weight: number }>;
}

export function CareerQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState<Record<string, number>>({});

  const questions: Question[] = [
    {
      id: 1,
      question: "What type of activities do you enjoy most?",
      options: [
        { text: "Building and creating things", field: "engineering", weight: 3 },
        { text: "Helping and caring for others", field: "medical", weight: 3 },
        { text: "Analyzing data and solving problems", field: "science", weight: 3 },
        { text: "Creating art and expressing ideas", field: "arts", weight: 3 },
        { text: "Managing and organizing", field: "management", weight: 3 }
      ]
    },
    {
      id: 2,
      question: "Which environment do you prefer to work in?",
      options: [
        { text: "High-tech laboratories", field: "science", weight: 2 },
        { text: "Hospitals and clinics", field: "medical", weight: 2 },
        { text: "Corporate offices", field: "management", weight: 2 },
        { text: "Creative studios", field: "arts", weight: 2 },
        { text: "Industrial sites", field: "engineering", weight: 2 }
      ]
    },
    {
      id: 3,
      question: "What motivates you the most?",
      options: [
        { text: "Making scientific discoveries", field: "science", weight: 3 },
        { text: "Saving lives and health", field: "medical", weight: 3 },
        { text: "Leading teams to success", field: "management", weight: 3 },
        { text: "Creating beautiful things", field: "arts", weight: 3 },
        { text: "Solving technical challenges", field: "engineering", weight: 3 }
      ]
    },
    {
      id: 4,
      question: "Which subjects did you excel in during school?",
      options: [
        { text: "Mathematics and Physics", field: "engineering", weight: 2 },
        { text: "Biology and Chemistry", field: "medical", weight: 2 },
        { text: "All Sciences", field: "science", weight: 2 },
        { text: "Literature and History", field: "arts", weight: 2 },
        { text: "Economics and Social Studies", field: "management", weight: 2 }
      ]
    },
    {
      id: 5,
      question: "How do you prefer to solve problems?",
      options: [
        { text: "Through systematic research", field: "science", weight: 2 },
        { text: "By consulting with others", field: "medical", weight: 2 },
        { text: "Using creative approaches", field: "arts", weight: 2 },
        { text: "Through strategic planning", field: "management", weight: 2 },
        { text: "By building and testing", field: "engineering", weight: 2 }
      ]
    }
  ];

  const fieldRecommendations = {
    engineering: {
      title: "Engineering & Technology",
      description: "You have a strong aptitude for technical problem-solving and building innovative solutions.",
      courses: ["Computer Science", "Mechanical Engineering", "Electronics", "Civil Engineering"],
      careers: ["Software Engineer", "Mechanical Engineer", "Data Scientist", "Robotics Engineer"]
    },
    medical: {
      title: "Medical & Health Sciences",
      description: "You show great potential for caring for others and interest in health and medicine.",
      courses: ["MBBS", "Nursing", "Pharmacy", "Physiotherapy", "Dental"],
      careers: ["Doctor", "Nurse", "Pharmacist", "Medical Researcher", "Healthcare Administrator"]
    },
    science: {
      title: "Science & Research",
      description: "You have a natural curiosity for understanding how things work and discovering new knowledge.",
      courses: ["Physics", "Chemistry", "Biology", "Mathematics", "Environmental Science"],
      careers: ["Research Scientist", "Lab Technician", "Science Teacher", "Environmental Consultant"]
    },
    arts: {
      title: "Arts & Creative Fields",
      description: "You have strong creative abilities and enjoy expressing ideas through various mediums.",
      courses: ["Fine Arts", "Literature", "Psychology", "Mass Communication", "Design"],
      careers: ["Graphic Designer", "Writer", "Psychologist", "Journalist", "Art Director"]
    },
    management: {
      title: "Business & Management",
      description: "You show leadership potential and interest in business operations and strategy.",
      courses: ["BBA", "Economics", "Marketing", "Finance", "Human Resources"],
      careers: ["Business Manager", "Marketing Executive", "Financial Analyst", "Entrepreneur"]
    }
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = { ...answers, [currentQuestion]: optionIndex };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: Record<number, number>) => {
    const fieldScores: Record<string, number> = {};

    questions.forEach((question, qIndex) => {
      const answerIndex = finalAnswers[qIndex];
      if (answerIndex !== undefined) {
        const selectedOption = question.options[answerIndex];
        fieldScores[selectedOption.field] = (fieldScores[selectedOption.field] || 0) + selectedOption.weight;
      }
    });

    setResults(fieldScores);
    setIsCompleted(true);
  };

  const getTopRecommendations = () => {
    return Object.entries(results)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
    setResults({});
  };

  if (isCompleted) {
    const topRecommendations = getTopRecommendations();

    return (
      <section className="py-12 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Career
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {' '}Recommendations
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Based on your responses, here are the fields that best match your interests and aptitudes
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {topRecommendations.map(([field, score], index) => {
              const recommendation = fieldRecommendations[field as keyof typeof fieldRecommendations];
              const percentage = Math.round((score / Math.max(...Object.values(results))) * 100);

              return (
                <div key={field} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-gold-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{recommendation.title}</h3>
                        <div className="flex items-center mt-1">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-blue-600">{percentage}% match</span>
                        </div>
                      </div>
                    </div>
                    {index === 0 && (
                      <div className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-medium">
                        Best Match
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 mb-4">{recommendation.description}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Recommended Courses:</h4>
                      <div className="space-y-1">
                        {recommendation.courses.map((course, courseIndex) => (
                          <div key={courseIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm">
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Career Opportunities:</h4>
                      <div className="space-y-1">
                        {recommendation.careers.map((career, careerIndex) => (
                          <div key={careerIndex} className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm">
                            {career}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={resetQuiz}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Career Guidance
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Quiz
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover which field suits your interests and aptitudes best
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-blue-600">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 text-left bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                    {option.text}
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <Target className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">Quiz Tips</h4>
              <p className="text-blue-700 text-sm">
                Answer honestly based on your genuine interests and preferences. There are no right or wrong answers - this quiz is designed to help you discover your natural inclinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}