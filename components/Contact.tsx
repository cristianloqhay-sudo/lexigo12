import React from 'react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './ui/Icons';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="bg-gradient-to-br from-primary to-fuchsia-600 text-white rounded-3xl shadow-2xl p-8 sm:p-16 text-center transform hover:scale-[1.01] transition duration-500">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          ¡Tu Viaje Lingüístico Comienza Hoy!
        </h2>
        <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
          No esperes más para dominar un nuevo idioma. Síguenos en nuestras redes sociales para recibir tips diarios, frases útiles y ofertas exclusivas.
        </p>
        
        <div className="flex justify-center items-center space-x-8">
          <SocialLink 
            href="https://www.facebook.com/profile.php?id=61583705050960" 
            label="Facebook"
            colorClass="hover:text-secondary"
          >
            <FacebookIcon className="w-8 h-8" />
          </SocialLink>

          <SocialLink 
            href="https://www.instagram.com/lexigo2.0/" 
            label="Instagram"
            colorClass="hover:text-accent"
          >
            <InstagramIcon className="w-8 h-8" />
          </SocialLink>

          <SocialLink 
            href="https://www.tiktok.com/@lexigo2.0" 
            label="TikTok"
            colorClass="hover:text-secondary"
          >
            <TikTokIcon className="w-8 h-8" />
          </SocialLink>
        </div>
      </div>
    </section>
  );
};

interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
  colorClass: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, children, colorClass }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`bg-white/10 hover:bg-white text-white ${colorClass} p-4 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm`} 
    aria-label={label}
  >
    {children}
  </a>
);