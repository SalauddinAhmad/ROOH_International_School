import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminData {
  siteInfo: {
    schoolName: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
    establishedYear: string;
  };
  heroSection: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      students: string;
      teachers: string;
      years: string;
    };
  };
  aboutSection: {
    vision: string;
    mission: string;
    coreValues: string;
    principalMessage: string;
    principalName: string;
    principalTitle: string;
    schoolStats: {
      yearsOfExcellence: string;
      happyStudents: string;
      qualifiedTeachers: string;
      gradeLevels: string;
    };
  };
  programs: Array<{
    id: string;
    title: string;
    age: string;
    description: string;
    subjects: string[];
  }>;
  news: Array<{
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    date: string;
    featured: boolean;
  }>;
  testimonials: Array<{
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    studentName: string;
  }>;
  gallery: Array<{
    id: string;
    title: string;
    category: string;
    imageUrl: string;
  }>;
}

interface AdminContextType {
  adminData: AdminData;
  updateAdminData: (data: Partial<AdminData>) => void;
  updateSiteInfo: (field: string, value: string) => void;
  updateHeroSection: (field: string, value: string) => void;
  updateAboutSection: (field: string, value: string) => void;
  addNewsItem: () => void;
  updateNewsItem: (id: string, data: any) => void;
  deleteNewsItem: (id: string) => void;
  saveData: () => void;
  exportData: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const defaultAdminData: AdminData = {
  siteInfo: {
    schoolName: 'ROOH International School',
    tagline: 'Nurturing Tomorrow\'s Leaders Today',
    phone: '+880 1896-061644',
    email: 'info@roohschool.edu.bd',
    address: 'House 35, Road 05, Sector 13, Uttara, Dhaka-1230',
    establishedYear: '2014'
  },
  heroSection: {
    title: 'Nurturing Tomorrow\'s Leaders Today',
    subtitle: 'Excellence in Education',
    description: 'At ROOH International School, we provide world-class education that nurtures young minds with excellence in education, character development, and holistic growth for a brighter future.',
    stats: {
      students: '650+',
      teachers: '35+',
      years: '11+'
    }
  },
  aboutSection: {
    vision: 'To be a leading educational institution that empowers students to become confident, creative, and compassionate global citizens who contribute positively to society.',
    mission: 'To provide excellent education in a nurturing environment that fosters intellectual curiosity, moral integrity, and social responsibility while celebrating diversity and individual potential.',
    coreValues: 'Excellence, Integrity, Respect, Innovation, and Community. These values guide everything we do and help shape the character of our students and school community.',
    principalMessage: 'Welcome to ROOH International School, where every child\'s journey of discovery begins. As an educator with over 15 years of experience, I believe that education is not just about academic achievement, but about nurturing the whole child.',
    principalName: 'Sadiqun Nahar',
    principalTitle: 'Vice Principal, ROOH International School',
    schoolStats: {
      yearsOfExcellence: '6+',
      happyStudents: '150+',
      qualifiedTeachers: '25+',
      gradeLevels: '5'
    }
  },
  programs: [
    {
      id: '1',
      title: 'Playgroup',
      age: '2-3 Years',
      description: 'Introduction to learning through play-based activities, social interaction and basic skill development.',
      subjects: ['Play Activities', 'Basic Communication', 'Motor Skills', 'Social Skills']
    },
    {
      id: '2',
      title: 'Nursery',
      age: '3-4 Years',
      description: 'Building foundation skills through structured learning, creative play and early academic concepts.',
      subjects: ['Pre-Reading Skills', 'Number Recognition', 'Creative Arts', 'Physical Development']
    }
  ],
  news: [
    {
      id: '1',
      title: 'New Science Laboratory Inaugurated',
      excerpt: 'State-of-the-art science laboratory with modern equipment now open for students.',
      content: 'The new science laboratory at ROOH International School represents a significant milestone...',
      category: 'Facilities',
      author: 'Dr. Aminul Islam',
      date: '2024-01-15',
      featured: true
    }
  ],
  testimonials: [
    {
      id: '1',
      name: 'Sarah Ahmed',
      role: 'Parent of Grade 3 Student',
      content: 'ROOH International School has exceeded our expectations. The caring environment and quality education have helped our daughter flourish.',
      rating: 5,
      studentName: 'Ayesha Ahmed'
    }
  ],
  gallery: [
    {
      id: '1',
      title: 'Happy Students in Classroom',
      category: 'Academics',
      imageUrl: 'https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg'
    }
  ]
};

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [adminData, setAdminData] = useState<AdminData>(defaultAdminData);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('roohAdminData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        // Deep merge with defaultAdminData to ensure all properties exist
        const mergedData = {
          siteInfo: { ...defaultAdminData.siteInfo, ...parsedData.siteInfo },
          heroSection: {
            ...defaultAdminData.heroSection,
            ...parsedData.heroSection,
            stats: { ...defaultAdminData.heroSection.stats, ...parsedData.heroSection?.stats }
          },
          aboutSection: {
            ...defaultAdminData.aboutSection,
            ...parsedData.aboutSection,
            schoolStats: { ...defaultAdminData.aboutSection.schoolStats, ...parsedData.aboutSection?.schoolStats }
          },
          programs: Array.isArray(parsedData.programs) ? parsedData.programs : defaultAdminData.programs,
          news: Array.isArray(parsedData.news) ? parsedData.news : defaultAdminData.news,
          testimonials: Array.isArray(parsedData.testimonials) ? parsedData.testimonials : defaultAdminData.testimonials,
          gallery: Array.isArray(parsedData.gallery) ? parsedData.gallery : defaultAdminData.gallery
        };
        setAdminData(mergedData);
      } catch (error) {
        console.error('Error loading admin data:', error);
        // Fallback to default data if parsing fails
        setAdminData(defaultAdminData);
      }
    }
  }, []);

  // Auto-save data whenever adminData changes
  useEffect(() => {
    localStorage.setItem('roohAdminData', JSON.stringify(adminData));
  }, [adminData]);

  const updateAdminData = (data: Partial<AdminData>) => {
    setAdminData(prev => ({ ...prev, ...data }));
  };

  const updateSiteInfo = (field: string, value: string) => {
    setAdminData(prev => ({
      ...prev,
      siteInfo: {
        ...prev.siteInfo,
        [field]: value
      }
    }));
  };

  const updateHeroSection = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setAdminData(prev => ({
        ...prev,
        heroSection: {
          ...prev.heroSection,
          [parent]: {
            ...prev.heroSection[parent as keyof typeof prev.heroSection],
            [child]: value
          }
        }
      }));
    } else {
      setAdminData(prev => ({
        ...prev,
        heroSection: {
          ...prev.heroSection,
          [field]: value
        }
      }));
    }
  };

  const updateAboutSection = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setAdminData(prev => ({
        ...prev,
        aboutSection: {
          ...prev.aboutSection,
          [parent]: {
            ...prev.aboutSection[parent as keyof typeof prev.aboutSection],
            [child]: value
          }
        }
      }));
    } else {
      setAdminData(prev => ({
        ...prev,
        aboutSection: {
          ...prev.aboutSection,
          [field]: value
        }
      }));
    }
  };

  const addNewsItem = () => {
    const newItem = {
      id: Date.now().toString(),
      title: 'New Article',
      excerpt: 'Article excerpt...',
      content: 'Article content...',
      category: 'General',
      author: 'Admin',
      date: new Date().toISOString().split('T')[0],
      featured: false
    };
    setAdminData(prev => ({
      ...prev,
      news: [...prev.news, newItem]
    }));
  };

  const updateNewsItem = (id: string, data: any) => {
    setAdminData(prev => ({
      ...prev,
      news: prev.news.map(item => 
        item.id === id ? { ...item, ...data } : item
      )
    }));
  };

  const deleteNewsItem = (id: string) => {
    setAdminData(prev => ({
      ...prev,
      news: prev.news.filter(item => item.id !== id)
    }));
  };

  const saveData = () => {
    localStorage.setItem('roohAdminData', JSON.stringify(adminData));
    // Show success notification
    const event = new CustomEvent('adminDataSaved');
    window.dispatchEvent(event);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(adminData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rooh-website-data.json';
    link.click();
  };

  return (
    <AdminContext.Provider value={{
      adminData,
      updateAdminData,
      updateSiteInfo,
      updateHeroSection,
      updateAboutSection,
      addNewsItem,
      updateNewsItem,
      deleteNewsItem,
      saveData,
      exportData
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};