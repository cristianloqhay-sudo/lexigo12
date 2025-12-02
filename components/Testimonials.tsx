import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">Lo que Dicen Nuestros Estudiantes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Gracias a Lexigo, conseguí ese ascenso en mi trabajo. Las clases de conversación con hablantes nativos son increíbles y muy efectivas."
            author="María P."
            course="Curso de Inglés Avanzado"
            borderColor="border-accent"
            quoteColor="text-accent"
          />
          <TestimonialCard 
            quote="Empecé el curso de Portugués sin saber nada y ahora puedo comunicarme perfectamente en mis viajes a Brasil. ¡Muy recomendado!"
            author="Javier M."
            course="Curso de Portugués Básico"
            borderColor="border-primary"
            quoteColor="text-primary"
          />
          <TestimonialCard 
            quote="La plataforma es muy intuitiva y el enfoque cultural del curso de Italiano es fascinante. Aprender es divertido y fácil de seguir."
            author="Sofía G."
            course="Curso de Italiano Intermedio"
            borderColor="border-accent"
            quoteColor="text-accent"
          />
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  course: string;
  borderColor: string;
  quoteColor: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, course, borderColor, quoteColor }) => (
  <div className={`bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 ${borderColor} hover:shadow-xl transition duration-300 text-white h-full flex flex-col justify-between`}>
    <div>
      <div className={`text-4xl ${quoteColor} mb-4 font-serif leading-none`}>“</div>
      <p className="text-gray-400 italic mb-6 leading-relaxed">
        "{quote}"
      </p>
    </div>
    <div className="border-t border-gray-700 pt-4">
      <div className="font-bold text-white">{author}</div>
      <div className="text-sm text-primary font-medium">{course}</div>
    </div>
  </div>
);