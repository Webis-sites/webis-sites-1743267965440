'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Icons for services
const PersonalTrainingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const GroupClassesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const NutritionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const WorkoutProgramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const FitnessAssessmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const RehabilitationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

// Define types for our services
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.FC;
}

const ServicesSection: React.FC = () => {
  // Services data
  const services: Service[] = [
    {
      id: 1,
      title: 'אימון אישי',
      description: 'אימונים מותאמים אישית עם מאמנים מוסמכים שיעזרו לך להשיג את היעדים שלך',
      icon: PersonalTrainingIcon,
    },
    {
      id: 2,
      title: 'שיעורים קבוצתיים',
      description: 'מגוון רחב של שיעורים קבוצתיים מאתגרים ומהנים לכל רמות הכושר',
      icon: GroupClassesIcon,
    },
    {
      id: 3,
      title: 'ייעוץ תזונה',
      description: 'תוכניות תזונה מותאמות אישית שיעזרו לך להשיג את יעדי הבריאות והכושר שלך',
      icon: NutritionIcon,
    },
    {
      id: 4,
      title: 'תוכניות אימון מותאמות',
      description: 'תוכניות אימון מקצועיות המותאמות ליעדים ולצרכים האישיים שלך',
      icon: WorkoutProgramIcon,
    },
    {
      id: 5,
      title: 'הערכת כושר',
      description: 'בדיקות כושר מקיפות לקביעת רמת הכושר הנוכחית שלך וקביעת יעדים ריאליים',
      icon: FitnessAssessmentIcon,
    },
    {
      id: 6,
      title: 'שיקום פציעות',
      description: 'תוכניות שיקום מקצועיות לאחר פציעות בהדרכת מאמנים מוסמכים',
      icon: RehabilitationIcon,
    },
  ];

  // State for hover effect
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden" dir="rtl">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5"></div>
      
      {/* Glassmorphism background circles */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/30 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-secondary/30 opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">השירותים</span> שלנו
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            במכון כושר ביתא אנו מציעים מגוון רחב של שירותים מקצועיים המותאמים לצרכים האישיים שלך
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="relative backdrop-blur-md bg-white/50 rounded-3xl p-8 border border-white/60 shadow-card overflow-hidden group"
              style={{ 
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)'
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { type: "spring", stiffness: 300 }
              }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/30"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full -ml-12 -mb-12 transition-all duration-500 group-hover:bg-secondary/30"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <motion.div 
                    className="text-white bg-gradient-to-br from-primary to-primary-dark p-4 rounded-2xl shadow-xl"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    animate={{ 
                      y: hoveredId === service.id ? [0, -5, 0] : 0 
                    }}
                    transition={{ 
                      duration: 0.5, 
                      ease: "easeInOut",
                      repeat: hoveredId === service.id ? Infinity : 0,
                      repeatType: "reverse"
                    }}
                  >
                    <service.icon />
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-700 text-center">
                  {service.description}
                </p>
                
                <motion.div 
                  className="mt-8 flex justify-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredId === service.id ? 1 : 0,
                    y: hoveredId === service.id ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                    פרטים נוספים
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-10 rounded-3xl backdrop-blur-sm border border-white/40 shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-800">מוכנים להתחיל את מסע הכושר שלכם?</h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            הצטרפו היום למכון כושר ביתא וקבלו שבוע ניסיון חינם וייעוץ אישי ללא התחייבות!
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            קבעו פגישת היכרות
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;