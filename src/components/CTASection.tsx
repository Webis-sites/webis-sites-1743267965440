'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
  backgroundImageUrl = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1170',
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      } 
    }
  };

  const floatingBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        delay: 0.4
      } 
    }
  };

  const scaleOnHover = {
    scale: 1.05,
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  };

  return (
    <section 
      id="cta"
      dir="rtl" 
      className="relative overflow-hidden py-28 w-full"
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
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50"></div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-primary/40 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-secondary/30 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="backdrop-blur-md bg-white/10 rounded-3xl
            border border-white/20 shadow-xl
            p-12 md:p-16 max-w-4xl mx-auto"
        >
          {/* Content Container */}
          <div className="text-center">
            <motion.h2 
              variants={itemVariants}
              id="cta-headline"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                {headline}
              </span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl mb-10 text-white leading-relaxed max-w-3xl mx-auto"
            >
              {subheadline}
            </motion.p>
            
            {/* CTA Button with Animation */}
            <motion.button
              variants={itemVariants}
              whileHover={scaleOnHover}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-primary to-primary-dark text-white font-bold
                py-5 px-10 rounded-xl text-xl
                shadow-lg shadow-primary/20
                relative overflow-hidden group"
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
            </motion.button>
          </div>
        </motion.div>
        
        {/* Floating Badges */}
        <motion.div 
          variants={floatingBadgeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="absolute top-10 left-10 md:top-20 md:left-20
            backdrop-blur-md bg-gradient-to-r from-primary-dark/60 to-primary/60 rounded-full
            border border-white/30 shadow-lg
            py-3 px-6 text-white"
        >
          <span className="text-base md:text-lg font-semibold flex items-center gap-2">
            <span className="text-xl">⭐</span> מדורג מספר 1 באזור
          </span>
        </motion.div>
        
        <motion.div 
          variants={floatingBadgeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="absolute bottom-10 right-10 md:bottom-20 md:right-20
            backdrop-blur-md bg-gradient-to-r from-secondary/60 to-secondary-dark/60 rounded-full
            border border-white/30 shadow-lg
            py-3 px-6 text-white"
        >
          <span className="text-base md:text-lg font-semibold flex items-center gap-2">
            <span className="text-xl">🔥</span> הצטרפו עכשיו וקבלו 20% הנחה
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;