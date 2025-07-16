import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QualificationSelector } from './components/QualificationSelector';
import { CollegeFinder } from './components/CollegeFinder';
import { ComparisonTool } from './components/ComparisonTool';
import { CareerQuiz } from './components/CareerQuiz';
import { ScholarshipFinder } from './components/ScholarshipFinder';
import { Dashboard } from './components/Dashboard';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { CollegeProvider } from './contexts/CollegeContext';

function AppContent() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const { user } = useAuth();

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onGetStarted={() => setActiveTab('qualification')} />
            <QualificationSelector onNext={() => setActiveTab('finder')} />
          </>
        );
      case 'qualification':
        return <QualificationSelector onNext={() => setActiveTab('finder')} />;
      case 'finder':
        return <CollegeFinder />;
      case 'comparison':
        return <ComparisonTool />;
      case 'quiz':
        return <CareerQuiz />;
      case 'scholarships':
        return <ScholarshipFinder />;
      case 'dashboard':
        return user ? <Dashboard /> : <div className="min-h-screen flex items-center justify-center"><p>Please log in to access your dashboard</p></div>;
      default:
        return (
          <>
            <Hero onGetStarted={() => setActiveTab('qualification')} />
            <QualificationSelector onNext={() => setActiveTab('finder')} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CollegeProvider>
        <AppContent />
      </CollegeProvider>
    </AuthProvider>
  );
}

export default App;