'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface OperatingHour {
  day: string;
  hours: string;
}

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

const LocationSection: React.FC = () => {
  // Operating hours data
  const operatingHours: OperatingHour[] = [
    { day: 'ראשון', hours: '06:00 - 23:00' },
    { day: 'שני', hours: '06:00 - 23:00' },
    { day: 'שלישי', hours: '06:00 - 23:00' },
    { day: 'רביעי', hours: '06:00 - 23:00' },
    { day: 'חמישי', hours: '06:00 - 23:00' },
    { day: 'שישי', hours: '06:00 - 14:00' },
    { day: 'שבת', hours: 'סגור' },
  ];

  // Contact information
  const contactInfo: ContactInfo = {
    phone: '03-1234567',
    email: 'info@beta-fitness.co.il',
    address: 'רחוב הברזל 15, תל אביב',
  };

  // Variants for animations
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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="location"
      dir="rtl" 
      className="relative py-24 overflow-hidden"
      aria-labelledby="location-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl -z-5"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          id="location-heading" 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">בואו לבקר</span> אותנו
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2 h-[400px] lg:h-auto relative rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-white/50 backdrop-blur-md rounded-3xl z-0"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.5775816193827!2d34.7914134!3d32.0852379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b9c4c7d72f5%3A0x3ba3d73d84d74615!2z16jXl9eV15Eg15TXkdeo15bXnCAxNSwg16rXnCDXkNeR15nXkS3Xmdek15U!5e0!3m2!1siw!2sil!4v1654321234567!5m2!1siw!2sil" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="מיקום מכון כושר ביתא"
              className="absolute inset-0 z-10"
              aria-label="מפת מיקום מכון הכושר"
            ></iframe>
            <div className="absolute top-4 right-4 z-20 bg-white px-4 py-2 rounded-xl shadow-lg">
              <h3 className="text-primary font-bold">מכון כושר ביתא</h3>
            </div>
          </motion.div>
          
          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col"
          >
            <div className="backdrop-blur-md bg-white/70 p-8 rounded-3xl shadow-xl border border-white/60 h-full">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-8"
              >
                {/* Contact Info */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">מכון כושר ביתא</h3>
                  
                  <div className="space-y-6">
                    {/* Address */}
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4"
                    >
                      <div className="bg-gradient-to-br from-primary to-primary-dark p-3 rounded-xl shadow-md text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      </div>
                      <p className="text-lg">{contactInfo.address}</p>
                    </motion.div>
                    
                    {/* Phone */}
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4"
                    >
                      <div className="bg-gradient-to-br from-primary to-primary-dark p-3 rounded-xl shadow-md text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                      </div>
                      <a href={`tel:${contactInfo.phone}`} className="text-lg hover:text-primary transition-colors">
                        {contactInfo.phone}
                      </a>
                    </motion.div>
                    
                    {/* Email */}
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4"
                    >
                      <div className="bg-gradient-to-br from-primary to-primary-dark p-3 rounded-xl shadow-md text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <a href={`mailto:${contactInfo.email}`} className="text-lg hover:text-primary transition-colors">
                        {contactInfo.email}
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Hours */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">שעות פעילות</h3>
                  <div className="backdrop-blur-sm bg-gradient-to-br from-gray-50 to-white/80 rounded-xl p-6 border border-white/70 shadow-inner">
                    <ul className="space-y-3">
                      {operatingHours.map((item, index) => (
                        <motion.li 
                          key={index} 
                          className="flex justify-between items-center"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <span className="font-medium text-lg">{item.day}</span>
                          <span 
                            className={`${
                              item.hours === 'סגור' 
                                ? 'text-red-500 font-medium' 
                                : 'text-primary-dark font-medium'
                            }`}
                          >
                            {item.hours}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                {/* Invitation */}
                <motion.div 
                  variants={itemVariants} 
                  className="mt-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 shadow-lg">
                    <p className="text-lg text-gray-800">
                      אנחנו מזמינים אתכם לבקר במכון הכושר שלנו ולהתרשם מהמתקנים המתקדמים והצוות המקצועי. 
                      הצטרפו אלינו והתחילו את המסע לכושר טוב יותר ואורח חיים בריא!
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300 w-full"
                    >
                      צרו קשר עכשיו
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;