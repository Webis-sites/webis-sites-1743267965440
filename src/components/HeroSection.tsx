'use client';

import Image from 'next/image';
import { FC } from 'react';
import { motion } from 'framer-motion';

/**
 * HeroSection Component
 * 
 * A responsive hero section for 'מכון כושר ביתא' with RTL support
 * Implements glassmorphism design with transparent elements and blur effects
 */
const HeroSection: FC = () => {
  return (
    <section 
      id="hero"
      dir="rtl" 
      className="relative min-h-[92vh] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070"
          alt="מכון כושר ביתא - אימון מקצועי"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Decorative shapes with animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-float"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-secondary/30 blur-3xl animation-delay-200 animate-float"
      />

      {/* Content container with glassmorphism effect */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:items-end">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-xl backdrop-blur-md bg-white/10 p-8 sm:p-10 rounded-3xl border border-white/20 shadow-xl"
        >
          <div className="space-y-6">
            {/* Main headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            >
              <span className="text-primary">מכון כושר</span> מוביל בישראל
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl sm:text-2xl text-secondary-light font-medium"
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white/90 text-lg"
            >
              אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl transition-all duration-300 overflow-hidden shadow-lg hover:shadow-primary/50"
                aria-label="קבע תור עכשיו למכון כושר ביתא"
              >
                {/* Button background animation */}
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative">קבע תור עכשיו</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating badge with glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="absolute top-4 right-4 sm:top-8 sm:right-8 backdrop-blur-md bg-black/30 px-6 py-3 rounded-full border border-white/10 shadow-md"
        >
          <h2 className="text-primary font-bold text-xl">מכון כושר ביתא</h2>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="absolute bottom-10 right-10 backdrop-blur-sm bg-primary/10 p-4 rounded-xl border border-primary/20 shadow-lg hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.4 }}
        className="absolute top-1/4 left-10 backdrop-blur-sm bg-secondary/10 p-4 rounded-xl border border-secondary/20 shadow-lg hidden lg:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </motion.div>
      
      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.7 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white text-sm mb-2">גלול למטה</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
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