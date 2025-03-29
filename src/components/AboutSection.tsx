import { FC } from 'react';
import { FaDumbbell, FaAward, FaUsers, FaClock } from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative backdrop-blur-md bg-white/20 rounded-xl p-6 shadow-lg border border-white/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fcff2e]/20 to-[#feffd6]/30 opacity-80 z-0"></div>
      <div className="relative z-10">
        <div className="text-[#fcff2e] bg-black/50 p-3 rounded-full inline-block mb-4 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
        <p className="text-black/80">{description}</p>
      </div>
    </div>
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

  return (
    <section className="relative py-16 overflow-hidden" dir="rtl">
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#feffd6] to-[#fcff2e]/70 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/fitness-pattern.png')] opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="relative backdrop-blur-sm bg-white/10 rounded-2xl p-8 mb-16 border border-white/20 shadow-lg">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fcff2e] rounded-full opacity-30 blur-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-black">
              אודות <span className="text-black bg-[#fcff2e] px-2 rounded-lg">מכון כושר ביתא</span>
            </h2>
            <p className="text-xl text-center max-w-3xl mx-auto text-black/80 leading-relaxed">
              אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Trust Section */}
        <div className="relative backdrop-blur-md bg-white/20 rounded-xl p-8 mt-16 border border-white/30 shadow-lg overflow-hidden">
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#fcff2e] rounded-full opacity-20 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-black">למה לבחור בנו?</h3>
            <ul className="space-y-3 text-black/80">
              <li className="flex items-center gap-2">
                <span className="text-[#fcff2e] bg-black/50 p-1 rounded-full">✓</span>
                <span>צוות מקצועי ומנוסה שילווה אותך לאורך כל הדרך</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#fcff2e] bg-black/50 p-1 rounded-full">✓</span>
                <span>תוכניות אימון מותאמות אישית לפי הצרכים והיעדים שלך</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#fcff2e] bg-black/50 p-1 rounded-full">✓</span>
                <span>מגוון רחב של שיעורים וסדנאות לכל רמות הכושר</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#fcff2e] bg-black/50 p-1 rounded-full">✓</span>
                <span>אווירה תומכת ומוטיבציה לעזור לך להשיג את המטרות שלך</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-black text-[#fcff2e] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            הצטרפו אלינו עכשיו
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;