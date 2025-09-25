import React from 'react';
import HeroSection from '../components/home/HeroSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import ProgramsSection from '../components/home/ProgramsSection';
import ClassStructureSection from '../components/home/ClassStructureSection';
import GallerySection from '../components/home/GallerySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsSection from '../components/home/NewsSection';
import CampusTourSection from '../components/home/CampusTourSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseSection />
      <ProgramsSection />
      <ClassStructureSection />
      <GallerySection />
      <TestimonialsSection />
      <NewsSection />
      <CampusTourSection />
    </div>
  );
};

export default Home;