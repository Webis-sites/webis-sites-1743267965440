'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Types for our gallery items
interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: 'weights' | 'cardio' | 'classes' | 'facilities';
}

// Gallery data with real Unsplash images
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1170',
    alt: 'אזור המשקולות במכון כושר ביתא',
    caption: 'אזור המשקולות המתקדם שלנו',
    category: 'weights',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=1170',
    alt: 'אזור הקרדיו במכון כושר ביתא',
    caption: 'מכשירי קרדיו חדישים',
    category: 'cardio',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1170',
    alt: 'אזור השיעורים במכון כושר ביתא',
    caption: 'אולם השיעורים המרווח',
    category: 'classes',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1170',
    alt: 'אימון אישי במכון כושר ביתא',
    caption: 'אימונים אישיים עם מדריכים מוסמכים',
    category: 'classes',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1652090549677-f12856d93c76?q=80&w=1170',
    alt: 'חדרי הלבשה במכון כושר ביתא',
    caption: 'חדרי הלבשה מפנקים',
    category: 'facilities',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1532009877282-3340270e0529?q=80&w=1170',
    alt: 'בר תזונה במכון כושר ביתא',
    caption: 'בר תזונה עשיר בחלבונים',
    category: 'facilities',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1170',
    alt: 'אזור מתיחות במכון כושר ביתא',
    caption: 'אזור מתיחות ושחרור',
    category: 'facilities',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=1169',
    alt: 'אימון פונקציונלי במכון כושר ביתא',
    caption: 'אזור אימון פונקציונלי',
    category: 'weights',
  },
];

// Filter categories with Hebrew labels
const filterCategories = [
  { value: 'all', label: 'הכל' },
  { value: 'weights', label: 'משקולות' },
  { value: 'cardio', label: 'קרדיו' },
  { value: 'classes', label: 'שיעורים' },
  { value: 'facilities', label: 'מתקנים' },
];

const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Filter gallery items based on active filter
  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

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
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-24 relative overflow-hidden" dir="rtl">
      {/* Background with texture and gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=1170')] bg-fixed opacity-5 -z-10"></div>
      
      {/* Glassmorphism background circles */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/20 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-secondary/20 opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        {/* Gallery Header with Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto backdrop-blur-md bg-white/70 rounded-3xl p-10 mb-16 border border-white/60 shadow-xl"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">הגלריה</span> שלנו
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-center text-gray-700 mb-10"
          >
            צפו במתקני מכון כושר ביתא המתקדמים והסביבה המקצועית שלנו
          </motion.p>

          {/* Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filterCategories.map((category, index) => (
              <motion.button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className={`
                  px-6 py-3 rounded-xl transition-all duration-300
                  border font-medium shadow-md
                  ${activeFilter === category.value 
                    ? 'bg-primary text-white border-primary shadow-primary/20' 
                    : 'bg-white/80 text-gray-700 border-white/60 hover:bg-primary/10'}
                `}
                aria-pressed={activeFilter === category.value}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              layoutId={`gallery-item-${item.id}`}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 border border-white/60 shadow-xl hover:shadow-2xl cursor-pointer"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)'
              }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              onClick={() => openLightbox(item)}
            >
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Overlay gradient on hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                  aria-hidden="true"
                ></div>
              </div>

              {/* Caption with Glassmorphism */}
              <div className="absolute bottom-0 right-0 left-0 p-6 backdrop-blur-md bg-white/10 border-t border-white/20 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.caption}
                </h3>
                <div className="w-12 h-0.5 mb-3 bg-primary transition-all duration-300 group-hover:w-20"></div>
                <p className="text-white/90 text-sm">
                  לחצו להגדלה
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 backdrop-blur-md bg-white/50 rounded-3xl border border-white/40 mt-8 shadow-lg"
          >
            <p className="text-xl text-gray-700">לא נמצאו תוצאות בקטגוריה זו</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter('all')}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-xl shadow-md hover:shadow-lg"
            >
              הצג את כל התמונות
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative max-w-5xl w-full max-h-[90vh] bg-transparent rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 backdrop-blur-xl bg-black/50 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.caption}</h3>
              <p className="text-white/80">{selectedItem.alt}</p>
            </div>
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center backdrop-blur-md hover:bg-black/70 transition-colors"
              onClick={closeLightbox}
              aria-label="סגור את התמונה המוגדלת"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PortfolioGallery;