'use client';

import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioGallery from '../components/PortfolioGallery';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import LocationSection from '../components/LocationSection';
import FooterSection from '../components/FooterSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading - will be automatically hidden when assets are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-24 h-24">
            <div className="absolute w-full h-full rounded-full border-4 border-primary/30 border-t-primary/90 animate-spin"></div>
            <div className="absolute inset-2 w-20 h-20 rounded-full border-4 border-secondary/30 border-b-secondary/90 animate-spin animation-delay-500"></div>
          </div>
          <p className="text-gray-500 text-lg font-medium">טוען...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
    
      <AboutSection />
    
      <ServicesSection />
    
      <PortfolioGallery />
    
      <CTASection />
    
      <ContactForm />
    
      <LocationSection />
    
      <FooterSection />
    </main>
  );
}