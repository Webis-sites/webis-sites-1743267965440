'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

const FooterSection: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Navigation links for the footer
  const navLinks: NavLink[] = [
    { name: 'דף הבית', href: '#hero' },
    { name: 'אודות', href: '#about' },
    { name: 'שירותים', href: '#services' },
    { name: 'גלריה', href: '#gallery' },
    { name: 'מיקום', href: '#location' },
    { name: 'צור קשר', href: '#contact' },
  ];

  // Social media links
  const socialLinks: SocialLink[] = [
    { name: 'פייסבוק', href: 'https://facebook.com', icon: FaFacebook },
    { name: 'אינסטגרם', href: 'https://instagram.com', icon: FaInstagram },
    { name: 'טוויטר', href: 'https://twitter.com', icon: FaTwitter },
    { name: 'וואטסאפ', href: 'https://whatsapp.com', icon: FaWhatsapp },
  ];

  // Handle scroll event to show/hide the "back to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-16 backdrop-blur-md border-t border-white/20 shadow-lg rtl">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 -left-10 w-60 h-60 rounded-full bg-secondary/20 blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Logo and description */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="flex flex-col items-end">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="mb-6 inline-block"
              >
                <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-4 font-bold text-white text-2xl shadow-lg">
                  מכון כושר ביתא
                </div>
              </motion.div>
              <p className="text-gray-700 text-right mb-6 text-lg leading-relaxed">
                אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו, כדי לעזור לכם להשיג את המטרות הבריאותיות והגופניות שלכם.
              </p>
            </div>
          </motion.div>

          {/* Navigation links */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-gray-800 text-right">ניווט מהיר</h3>
            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-3 text-right"
            >
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 hover:underline decoration-primary decoration-2 underline-offset-4 text-lg"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact information */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-gray-800 text-right">צור קשר</h3>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-3 text-right"
            >
              <motion.div variants={fadeInUp} className="flex items-center justify-end gap-3">
                <p className="text-gray-700 text-lg">טלפון: 03-1234567</p>
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-center justify-end gap-3">
                <p className="text-gray-700 text-lg">אימייל: info@betagym.co.il</p>
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-center justify-end gap-3">
                <p className="text-gray-700 text-lg">כתובת: רחוב הספורט 123, תל אביב</p>
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Social media and newsletter */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-gray-800 text-right">עקבו אחרינו</h3>
            <div className="flex justify-end space-x-4 space-x-reverse mb-8">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={social.name}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="bg-white shadow-lg hover:shadow-xl text-gray-800 p-3 rounded-xl backdrop-blur-sm border border-white/40 transition-all duration-300"
                >
                  <social.icon className="h-6 w-6 text-primary" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter subscription */}
            <h3 className="text-xl font-bold mb-6 text-gray-800 text-right">הרשמו לניוזלטר</h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="האימייל שלך"
                className="px-5 py-4 bg-white/80 backdrop-blur-sm border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-right shadow-sm"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-5 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-bold"
              >
                הרשמה לעדכונים
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Copyright section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-20 pt-8 border-t border-gray-300/50 text-center"
        >
          <p className="text-gray-700 text-lg">
            © {new Date().getFullYear()} מכון כושר ביתא. כל הזכויות שמורות.
          </p>
        </motion.div>
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-10 left-10 p-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full shadow-lg z-50 hover:shadow-xl"
            aria-label="חזרה למעלה"
          >
            <FaArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default FooterSection;