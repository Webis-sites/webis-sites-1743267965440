'use client';

import { useState } from 'react';
import Image from 'next/image';

// Types for our gallery items
interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: 'weights' | 'cardio' | 'classes' | 'facilities';
}

// Sample gallery data with Hebrew content
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/images/weights-area.jpg',
    alt: 'אזור המשקולות במכון כושר ביתא',
    caption: 'אזור המשקולות המתקדם שלנו',
    category: 'weights',
  },
  {
    id: 2,
    src: '/images/cardio-section.jpg',
    alt: 'אזור הקרדיו במכון כושר ביתא',
    caption: 'מכשירי קרדיו חדישים',
    category: 'cardio',
  },
  {
    id: 3,
    src: '/images/class-space.jpg',
    alt: 'אזור השיעורים במכון כושר ביתא',
    caption: 'אולם השיעורים המרווח',
    category: 'classes',
  },
  {
    id: 4,
    src: '/images/personal-training.jpg',
    alt: 'אימון אישי במכון כושר ביתא',
    caption: 'אימונים אישיים עם מדריכים מוסמכים',
    category: 'classes',
  },
  {
    id: 5,
    src: '/images/locker-room.jpg',
    alt: 'חדרי הלבשה במכון כושר ביתא',
    caption: 'חדרי הלבשה מפנקים',
    category: 'facilities',
  },
  {
    id: 6,
    src: '/images/nutrition-bar.jpg',
    alt: 'בר תזונה במכון כושר ביתא',
    caption: 'בר תזונה עשיר בחלבונים',
    category: 'facilities',
  },
  {
    id: 7,
    src: '/images/stretching-area.jpg',
    alt: 'אזור מתיחות במכון כושר ביתא',
    caption: 'אזור מתיחות ושחרור',
    category: 'facilities',
  },
  {
    id: 8,
    src: '/images/functional-training.jpg',
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

  // Filter gallery items based on active filter
  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Header with Glassmorphism */}
        <div className="backdrop-blur-md bg-opacity-20 bg-white/10 rounded-xl p-6 mb-12 border border-white/20 shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary-500" style={{ color: '#fcff2e' }}>
            הגלריה שלנו
          </h2>
          <p className="text-xl text-center text-white/90 mb-8">
            צפו במתקני מכון כושר ביתא המתקדמים והסביבה המקצועית שלנו
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filterCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`
                  px-5 py-2 rounded-full transition-all duration-300 backdrop-blur-sm
                  border border-white/10 hover:border-white/30
                  ${activeFilter === category.value 
                    ? 'bg-primary-500 bg-opacity-30 text-white shadow-md' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10'}
                `}
                style={{
                  backgroundColor: activeFilter === category.value ? 'rgba(252, 255, 46, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: activeFilter === category.value ? '0 4px 12px rgba(252, 255, 46, 0.15)' : 'none'
                }}
                aria-pressed={activeFilter === category.value}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl transition-all duration-500 backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/30 shadow-lg"
              style={{ 
                transform: hoveredItem === item.id ? 'scale(1.03)' : 'scale(1)',
                transition: 'all 0.4s ease-in-out'
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                {/* Placeholder for Next.js Image component */}
                <div className="absolute inset-0 bg-gray-300 animate-pulse">
                  {/* In a real implementation, replace this with actual Next.js Image component */}
                  {/* <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  /> */}
                </div>
                
                {/* Overlay gradient on hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  aria-hidden="true"
                ></div>
              </div>

              {/* Caption with Glassmorphism */}
              <div className="absolute bottom-0 right-0 left-0 p-4 backdrop-blur-md bg-black/30 border-t border-white/10 transition-all duration-300 group-hover:bg-black/50">
                <h3 
                  className="text-lg font-bold mb-1 transition-all duration-300 group-hover:translate-y-[-4px]"
                  style={{ color: '#fcff2e' }}
                >
                  {item.caption}
                </h3>
                <div 
                  className="w-10 h-0.5 mb-2 transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: '#feffd6' }}
                ></div>
                <p className="text-white/80 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  לחצו להגדלה
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 backdrop-blur-md bg-white/5 rounded-xl border border-white/10 mt-8">
            <p className="text-xl text-white/80">לא נמצאו תוצאות בקטגוריה זו</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;