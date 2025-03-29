import Image from 'next/image';
import { FC } from 'react';

/**
 * HeroSection Component
 * 
 * A responsive hero section for 'מכון כושר ביתא' with RTL support
 * Implements glassmorphism design with transparent elements and blur effects
 */
const HeroSection: FC = () => {
  return (
    <section 
      dir="rtl" 
      className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gym-background.jpg" // Replace with actual image path
          alt="מכון כושר ביתא - אימון מקצועי"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-secondary/30 blur-3xl"></div>

      {/* Content container with glassmorphism effect */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:items-end">
        <div className="w-full max-w-xl backdrop-blur-md bg-white/10 p-8 sm:p-10 rounded-2xl border border-white/20 shadow-lg">
          <div className="space-y-6">
            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight">
              מכון כושר מוביל בישראל
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-secondary font-medium">
              חווית לקוח מושלמת בכל ביקור
            </p>
            
            {/* Description */}
            <p className="text-white/90 text-lg">
              אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button 
                className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-black font-bold text-lg rounded-xl transition-all duration-300 overflow-hidden shadow-lg hover:shadow-primary/50"
                aria-label="קבע תור עכשיו למכון כושר ביתא"
              >
                {/* Button background animation */}
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative">קבע תור עכשיו</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating badge with glassmorphism */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 backdrop-blur-md bg-black/30 px-4 py-2 rounded-full border border-white/10 shadow-md">
          <h2 className="text-primary font-bold text-xl">מכון כושר ביתא</h2>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute bottom-10 right-10 backdrop-blur-sm bg-primary/10 p-3 rounded-xl border border-primary/20 shadow-lg hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <div className="absolute top-1/4 left-10 backdrop-blur-sm bg-secondary/10 p-3 rounded-xl border border-secondary/20 shadow-lg hidden lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

// Add to your tailwind.config.js:
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         primary: '#fcff2e',
//         secondary: '#feffd6',
//       },
//     },
//   },
// }