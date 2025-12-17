import { useEffect, useState, useRef } from 'react';
import { Building2, Globe, Award, Sparkles } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

interface Milestone {
  icon: React.ReactNode;
  year: string;
  title: string;
  description: string;
}

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotionSetting = useReducedMotion();
  const prefersReducedMotion = prefersReducedMotionSetting ?? false;

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const milestones: Milestone[] = [
    { 
      icon: <Building2 className="h-8 w-8" aria-hidden="true" />, 
      year: '2013',
      title: 'Fundación EZ Logistics',
      description: 'Inicio de operaciones como operador logístico digital'
    },
    { 
      icon: <Globe className="h-8 w-8" aria-hidden="true" />, 
      year: '2015',
      title: 'Apertura EZ Ship Logistics Chile',
      description: 'Expansión internacional con oficinas en Chile'
    },
    { 
      icon: <Award className="h-8 w-8" aria-hidden="true" />, 
      year: '2019',
      title: 'Miembro Premier Cargo Alliance',
      description: 'Certificación IPCAI - Red global de logística'
    },
    { 
      icon: <Sparkles className="h-8 w-8" aria-hidden="true" />, 
      year: '2021',
      title: 'Creación EZ Logistics Holdings',
      description: 'Consolidación del grupo empresarial'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      id="nuestro-recorrido"
      ref={sectionRef}
      className="relative py-12 md:py-16 bg-white overflow-hidden"
      role="region"
      aria-labelledby="timeline-heading"
    >
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E41B13] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E41B13] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="text-center mb-10"
          variants={headingVariants}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 id="timeline-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Nuestro Recorrido
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Más de una década construyendo excelencia logística
          </p>
        </motion.div>

        {/* Timeline horizontal */}
        <div className="relative">
          {/* Línea horizontal conectora */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E41B13]/20 to-transparent" aria-hidden="true" />
          
          {/* Puntos de conexión animados */}
          {milestones.map((_, index) => (
            <motion.div
              key={`dot-${index}`}
              className="hidden md:block absolute top-16 w-3 h-3 bg-[#E41B13] rounded-full -translate-y-1/2"
              style={{ left: `${(100 / (milestones.length + 1)) * (index + 1)}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : undefined}
              transition={{ delay: index * 0.2, duration: 0.4 }}
            />
          ))}

          {/* Grid de timeline con efecto stagger */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="relative"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : undefined}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1], 
                  delay: index * 0.15 
                }}
              >
                {/* Card con efectos modernos */}
                <div className="group relative h-full bg-gradient-to-br from-white to-gray-50/50 border-l-4 border-[#E41B13] rounded-xl p-5 shadow-[4px_0_20px_rgba(228,27,19,0.1)] hover:shadow-[8px_0_40px_rgba(228,27,19,0.25)] transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm cursor-pointer">
                  {/* Efecto glassmorphism en hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/90 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Brillo animado en hover */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#E41B13] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl" />
                  
                  {/* Contenido */}
                  <div className="relative space-y-3">
                    {/* Icono */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#E41B13] to-[#C41710] text-white shadow-lg shadow-[#E41B13]/30 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-[#E41B13]/50 transition-all duration-500">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {milestone.icon}
                      </div>
                    </div>

                    {/* Año */}
                    <div className="relative">
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500">
                        {milestone.year}
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 blur-2xl bg-[#E41B13]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Título */}
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-[#E41B13] to-transparent" />
                      <div className="text-lg font-bold text-[#E41B13]">
                        {milestone.title}
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-sm text-gray-700 leading-snug">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Badge ISO 9001:2015 */}
          <motion.div
            className="mt-12 text-center"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#E41B13]/10 to-[#E41B13]/5 border border-[#E41B13]/20">
              <Award className="h-5 w-5 text-[#E41B13]" />
              <span className="text-sm font-semibold text-gray-900">Certificación ISO 9001:2015</span>
              <div className="h-4 w-px bg-[#E41B13]/30" />
              <span className="text-xs text-gray-600">Gestión de Calidad</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
