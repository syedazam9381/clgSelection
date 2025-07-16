import React, { createContext, useContext, useState, useEffect } from 'react';
import { College } from '../types/college';
import { collegeData } from '../data/colleges';

interface CollegeContextType {
  colleges: College[];
  bookmarkedColleges: string[];
  toggleBookmark: (collegeId: string) => void;
}

const CollegeContext = createContext<CollegeContextType | undefined>(undefined);

export function CollegeProvider({ children }: { children: React.ReactNode }) {
  const [colleges] = useState<College[]>(collegeData);
  const [bookmarkedColleges, setBookmarkedColleges] = useState<string[]>([]);

  useEffect(() => {
    // Load bookmarks from localStorage
    const savedBookmarks = localStorage.getItem('bookmarkedColleges');
    if (savedBookmarks) {
      setBookmarkedColleges(JSON.parse(savedBookmarks));
    }
  }, []);

  const toggleBookmark = (collegeId: string) => {
    setBookmarkedColleges(prev => {
      const newBookmarks = prev.includes(collegeId)
        ? prev.filter(id => id !== collegeId)
        : [...prev, collegeId];
      
      localStorage.setItem('bookmarkedColleges', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  return (
    <CollegeContext.Provider value={{ colleges, bookmarkedColleges, toggleBookmark }}>
      {children}
    </CollegeContext.Provider>
  );
}

export function useCollege() {
  const context = useContext(CollegeContext);
  if (context === undefined) {
    throw new Error('useCollege must be used within a CollegeProvider');
  }
  return context;
}