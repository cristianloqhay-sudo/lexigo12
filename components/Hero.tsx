import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="bg-secondary rounded-2xl shadow-xl border border-gray-800 overflow-hidden">
        <div className="px-6 py-16 lg:py-24 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-full text-center">
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Domina Nuevos <span className="text-primary">Idiomas</span> con Lexigo
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ofrecemos cursos online de alta calidad para que aprendas Inglés, Portugués e Italiano desde cero y a tu propio ritmo. ¡Tu fluidez comienza aquí!
            </p>
            
            {/* Ebooks Section */}
            <div className="bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto border border-primary/50">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                Elige tu idioma y empieza hoy mismo, ¡es totalmente <span className="text-accent">GRATIS</span>!
              </h3>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                <EbookButton 
                  href="https://cristianloqhay-sudo.github.io/ingles1/" 
                  emoji="🇺🇸" 
                  label="Inglés" 
                />
                <EbookButton 
                  href="https://cristianloqhay-sudo.github.io/portugues/" 
                  emoji="🇧🇷" 
                  label="Portugués" 
                />
                <EbookButton 
                  href="https://cristianloqhay-sudo.github.io/italiano/" 
                  emoji="🇮🇹" 
                  label="Italiano" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface EbookButtonProps {
  href: string;
  emoji: string;
  label: string;
}

const EbookButton: React.FC<EbookButtonProps> = ({ href, emoji, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group bg-primary hover:bg-primary/80 text-white text-lg font-semibold px-8 py-4 rounded-xl transition duration-300 shadow-lg transform hover:-translate-y-1 flex items-center justify-center space-x-3 w-full sm:w-auto"
  >
    <span className="text-2xl group-hover:scale-110 transition-transform">{emoji}</span>
    <span>{label}</span>
  </a>
);