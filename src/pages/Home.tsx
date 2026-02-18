import React from 'react';
import HeroSection from '../components/home/HeroSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import ProgramsSection from '../components/home/ProgramsSection';
import ClassStructureSection from '../components/home/ClassStructureSection';
import GallerySection from '../components/home/GallerySection';
import VideoShowcaseSection from '../components/home/VideoShowcaseSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsSection from '../components/home/NewsSection';
import CampusTourSection from '../components/home/CampusTourSection';

const Home = () => {
  return (
    <div className="pt-[88px]">
      <HeroSection />
      <WhyChooseSection />
      <ProgramsSection />
      <ClassStructureSection />
      <GallerySection />
      <VideoShowcaseSection />
      <TestimonialsSection />
      <NewsSection />
      <CampusTourSection />
    </div>
  );
};

export default Home;