'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

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
    { name: 'דף הבית', href: '/' },
    { name: 'אודות', href: '/about' },
    { name: 'שירותים', href: '/services' },
    { name: 'מאמנים', href: '/trainers' },
    { name: 'לוח זמנים', href: '/schedule' },
    { name: 'מחירים', href: '/pricing' },
    { name: 'צור קשר', href: '/contact' },
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

  return (
    <footer className="relative bg-gradient-to-b from-[#feffd6]/80 to-[#fcff2e]/80 backdrop-blur-md border-t border-white/20 shadow-lg rtl">
      {/* Decorative background elements for glassmorphism effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#fcff2e]/30 blur-xl"></div>
        <div className="absolute top-40 -left-10 w-32 h-32 rounded-full bg-[#fcff2e]/20 blur-lg"></div>
        <div className="absolute bottom-10 right-1/4 w-24 h-24 rounded-full bg-[#fcff2e]/25 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-end">
              <div className="mb-4 relative h-16 w-40">
                {/* Replace with your actual logo */}
                <div className="bg-[#fcff2e] rounded-lg p-2 inline-block font-bold text-gray-800 text-xl">
                  מכון כושר ביתא
                </div>
              </div>
              <p className="text-gray-800 text-right mb-4 text-sm leading-relaxed">
                אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-gray-800 text-right">ניווט מהיר</h3>
            <ul className="space-y-2 text-right">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-300 hover:underline decoration-[#fcff2e] decoration-2 underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-gray-800 text-right">צור קשר</h3>
            <div className="space-y-2 text-right">
              <p className="text-gray-700">טלפון: 03-1234567</p>
              <p className="text-gray-700">אימייל: info@betagym.co.il</p>
              <p className="text-gray-700">כתובת: רחוב הספורט 123, תל אביב</p>
              <p className="text-gray-700">שעות פעילות: א'-ה' 06:00-23:00, ו' 06:00-16:00, שבת 08:00-22:00</p>
            </div>
          </div>

          {/* Social media and newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-gray-800 text-right">עקבו אחרינו</h3>
            <div className="flex justify-end space-x-4 space-x-reverse mb-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="bg-white/30 hover:bg-[#fcff2e] text-gray-800 p-3 rounded-full backdrop-blur-sm border border-white/20 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Newsletter subscription */}
            <h3 className="text-lg font-bold mb-4 text-gray-800 text-right">הרשמו לניוזלטר</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="האימייל שלך"
                className="px-4 py-2 bg-white/50 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcff2e] text-right"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#fcff2e] text-gray-800 rounded-lg hover:bg-[#fcff2e]/80 transition-colors duration-300 font-medium"
              >
                הרשמה
              </button>
            </form>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-12 pt-6 border-t border-gray-200/30 text-center">
          <p className="text-gray-700">
            © {new Date().getFullYear()} מכון כושר ביתא. כל הזכויות שמורות.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 p-3 bg-[#fcff2e] text-gray-800 rounded-full shadow-lg z-50 transition-all duration-300 hover:bg-[#feffd6] hover:shadow-xl ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="חזרה למעלה"
      >
        <FaArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default FooterSection;