'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  backgroundImageUrl?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  headline = 'הצטרפו למכון כושר ביתא והתחילו את המסע שלכם לחיים בריאים!',
  subheadline = 'אימונים מותאמים אישית, מאמנים מקצועיים, וציוד מתקדם - הכל במקום אחד',
  buttonText = 'קבע תור עכשיו',
  backgroundImageUrl = '/fitness-background.jpg', // Placeholder image path
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      dir="rtl" 
      className="relative overflow-hidden py-16 md:py-24 w-full"
      aria-labelledby="cta-headline"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageUrl}
          alt="אנשים מתאמנים במכון כושר"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-black/30"></div>
      </div>

      {/* Glassmorphism Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`
            backdrop-blur-md bg-white/10 rounded-2xl
            border border-white/20 shadow-lg
            p-8 md:p-12 max-w-4xl mx-auto
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}
            bg-gradient-to-br from-[#feffd6]/40 to-[#feffd6]/20
          `}
        >
          {/* Content Container */}
          <div className="text-center">
            <h2 
              id="cta-headline"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-md"
              style={{ fontFamily: '"Rubik", sans-serif' }}
            >
              {headline}
            </h2>
            
            <p 
              className="text-lg md:text-xl mb-8 text-white/90"
              style={{ fontFamily: '"Heebo", sans-serif' }}
            >
              {subheadline}
            </p>
            
            {/* CTA Button with Animation */}
            <button
              className={`
                bg-[#fcff2e] hover:bg-[#e0e329] text-gray-900 font-bold
                py-3 px-8 md:py-4 md:px-10 rounded-full text-lg md:text-xl
                transition-all duration-300 transform hover:scale-105
                shadow-lg hover:shadow-xl border border-[#fcff2e]/50
                relative overflow-hidden group
              `}
              onClick={() => console.log('Button clicked')}
              aria-label={buttonText}
            >
              {/* Button shine effect */}
              <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
              
              {/* Button text */}
              <span className="relative z-10 inline-flex items-center">
                {buttonText}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2 rtl:rotate-180" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#fcff2e]/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fcff2e]/20 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        {/* Floating Badges */}
        <div 
          className={`
            absolute top-10 left-10 md:top-20 md:left-20
            backdrop-blur-md bg-white/20 rounded-full
            border border-white/30 shadow-lg
            py-2 px-4 text-white
            transition-all duration-1000 delay-300 ease-out
            ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}
          `}
        >
          <span className="text-sm md:text-base">⭐ מדורג מספר 1 באזור</span>
        </div>
        
        <div 
          className={`
            absolute bottom-10 right-10 md:bottom-20 md:right-20
            backdrop-blur-md bg-white/20 rounded-full
            border border-white/30 shadow-lg
            py-2 px-4 text-white
            transition-all duration-1000 delay-500 ease-out
            ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}
          `}
        >
          <span className="text-sm md:text-base">🔥 הצטרפו עכשיו וקבלו 20% הנחה</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;