import React, { useEffect, useState } from 'react';

export const Courses: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Wait 5 seconds before showing the section
    const timer = setTimeout(() => {
      setShouldRender(true);
      // Small delay to allow render before applying opacity transition
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) {
    return null; // Don't take up space initially
  }

  return (
    <section 
      id="cursos-nav" 
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform scroll-mt-24 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Motivational Phrase */}
      <div className="bg-gradient-to-r from-gray-800 to-secondary p-6 rounded-lg border-l-4 border-accent shadow-sm mb-10 max-w-3xl mx-auto text-center">
        <p className="text-xl text-gray-200 font-medium italic">
          "¡No pospongas más tus sueños! Elige el idioma que siempre quisiste aprender y comienza hoy mismo con nuestros cursos diseñados para tu éxito."
        </p>
      </div>
      
      <h2 className="text-3xl font-bold text-center text-white mb-8">Elige tu Próximo Idioma</h2>
      
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
        <CourseCard 
          href="https://go.hotmart.com/C103156556U"
          emoji="🇺🇸"
          title="Curso Inglés"
        />
        <CourseCard 
          href="https://go.hotmart.com/R103170159Q"
          emoji="🇧🇷"
          title="Curso Portugués"
        />
        <CourseCard 
          href="https://go.hotmart.com/U103170151V"
          emoji="🇮🇹"
          title="Curso Italiano"
        />
      </div>
    </section>
  );
};

interface CourseCardProps {
  href: string;
  emoji: string;
  title: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ href, emoji, title }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer" 
    className="w-full md:w-auto min-w-[280px] bg-secondary border-2 border-primary text-white hover:bg-primary hover:text-white text-xl font-bold px-8 py-5 rounded-2xl transition duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 text-center flex flex-col items-center group"
  >
    <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">{emoji}</span>
    <span>{title}</span>
    <span className="text-xs font-normal mt-1 opacity-70">Ver Oferta</span>
  </a>
);