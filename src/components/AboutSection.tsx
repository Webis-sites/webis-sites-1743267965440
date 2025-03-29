'use client';

import { FC } from 'react';
import { FaDumbbell, FaAward, FaUsers, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative backdrop-blur-md bg-white/20 rounded-3xl p-6 shadow-card border border-white/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-80 z-0"></div>
      <div className="relative z-10">
        <div className="text-primary bg-black/50 p-3 rounded-full inline-block mb-4 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
        <p className="text-black/80">{description}</p>
      </div>
      <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-primary rounded-full opacity-20 blur-xl transition-all duration-500 group-hover:w-20 group-hover:h-20"></div>
    </motion.div>
  );
};

const AboutSection: FC = () => {
  // Features data
  const features = [
    {
      icon: <FaDumbbell size={24} />,
      title: "ציוד מתקדם",
      description: "מכשירים חדישים ומתקדמים לאימון יעיל ובטוח"
    },
    {
      icon: <FaAward size={24} />,
      title: "צוות מקצועי",
      description: "מאמנים מוסמכים עם ניסיון רב בתחום הכושר"
    },
    {
      icon: <FaUsers size={24} />,
      title: "קהילה תומכת",
      description: "אווירה חברתית ותומכת שתעזור לך להשיג את היעדים שלך"
    },
    {
      icon: <FaClock size={24} />,
      title: "שעות פעילות נוחות",
      description: "פתוח בשעות נוחות לאורך כל השבוע"
    }
  ];

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="relative py-20 overflow-hidden" dir="rtl">
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085')] bg-fixed opacity-5 -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative backdrop-blur-sm bg-white/70 rounded-3xl p-10 mb-16 border border-white/60 shadow-xl"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-20 blur-2xl"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
            >
              אודות <span className="text-white bg-primary px-3 py-1 rounded-lg">מכון כושר ביתא</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-center max-w-3xl mx-auto text-gray-700 leading-relaxed"
            >
              אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו דרך ציוד מתקדם, צוות מיומן ואווירה תומכת.
            </motion.p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* About Content with Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-xl h-[400px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
              alt="מכון כושר ביתא - אימון איכותי"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 right-6 backdrop-blur-md bg-black/30 px-4 py-2 rounded-xl border border-white/10 shadow-lg">
              <p className="text-white font-medium">10+ שנות ניסיון</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-bold text-gray-800">למה לבחור בנו?</motion.h3>
            <motion.ul variants={containerVariants} className="space-y-4 text-gray-700">
              <motion.li variants={itemVariants} className="flex items-center gap-3">
                <span className="text-white bg-primary p-1.5 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-lg">צוות מקצועי ומנוסה שילווה אותך לאורך כל הדרך</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-3">
                <span className="text-white bg-primary p-1.5 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-lg">תוכניות אימון מותאמות אישית לפי הצרכים והיעדים שלך</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-3">
                <span className="text-white bg-primary p-1.5 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-lg">מגוון רחב של שיעורים וסדנאות לכל רמות הכושר</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-3">
                <span className="text-white bg-primary p-1.5 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-lg">אווירה תומכת ומוטיבציה לעזור לך להשיג את המטרות שלך</span>
              </motion.li>
            </motion.ul>

            {/* Call to Action */}
            <motion.div 
              variants={itemVariants}
              className="pt-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                הצטרפו אלינו עכשיו
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;