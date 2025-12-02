import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-8 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-xl tracking-tight">Lexigo</span>
        </div>
        <div className="text-sm text-gray-400 mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Lexigo. Todos los derechos reservados.
        </div>
        <div className="text-sm text-gray-400">
          Aprender idiomas nunca fue tan fácil.
        </div>
      </div>
    </footer>
  );
};