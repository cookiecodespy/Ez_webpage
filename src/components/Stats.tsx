import { useEffect, useState, useRef } from 'react';
import { Building2, Globe, Award, Sparkles, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion, type Variants, useInView, animate, useMotionValue } from 'framer-motion';

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

  // Componente para animar los años
  const AnimatedYear = ({ year }: { year: string }) => {
    const yearNumber = parseInt(year);
    const motionValue = useMotionValue(2000);
    const [displayYear, setDisplayYear] = useState(2000);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView && !prefersReducedMotion) {
        const controls = animate(motionValue, yearNumber, {
          duration: 1.5,
          ease: 'easeOut',
        });
        
        const unsubscribe = motionValue.on('change', (latest) => {
          setDisplayYear(Math.round(latest));
        });

        return () => {
          controls.stop();
          unsubscribe();
        };
      } else if (isInView) {
        setDisplayYear(yearNumber);
      }
    }, [isInView, yearNumber, motionValue, prefersReducedMotion]);

    return (
      <span ref={ref} className="transition-colors duration-300 group-hover:text-[#E41B13]">
        {displayYear}
      </span>
    );
  };

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
      title: 'Fundación EZ Ship Logistics',
      description: 'Inicio de operaciones como operador logístico digital'
    },
    { 
      icon: <Globe className="h-8 w-8" aria-hidden="true" />, 
      year: '2015',
      title: 'Apertura EZ Ship Logistics en Chile',
      description: 'Expansión internacional con oficinas en Chile'
    },
    { 
      icon: <Award className="h-8 w-8" aria-hidden="true" />, 
      year: '2019',
      title: 'Miembros en Premier Cargo Alliance',
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
      className="relative py-20 md:py-24 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 overflow-hidden"
      role="region"
      aria-labelledby="timeline-heading"
    >
      {/* Background decorativo moderno */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E41B13]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E41B13]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Header moderno */}
        <motion.div
          className="text-center mb-16"
          variants={headingVariants}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-[#E41B13]/10 text-[#E41B13] text-sm font-semibold">Historia de nuestra compañía</span>
          </div>
          <h2 id="timeline-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Nuestro Recorrido
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Más de una década construyendo excelencia logística
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#E41B13] to-transparent" />
        </motion.div>

        {/* Timeline moderno con conectores */}
        <div className="relative">
          {/* Línea conectora horizontal - visible solo en desktop */}
          <div className="hidden lg:block absolute top-[120px] left-[12.5%] right-[12.5%] h-0.5">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E41B13]/20 via-gray-400 to-[#E41B13]/20" />
            {/* Flechas profesionales */}
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-white border-2 border-gray-300 flex items-center justify-center shadow-sm">
                  <ArrowRight className="h-4 w-4 text-gray-600" />
                </div>
              </div>
            </div>
            <div className="absolute left-2/4 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-white border-2 border-gray-300 flex items-center justify-center shadow-sm">
                  <ArrowRight className="h-4 w-4 text-gray-600" />
                </div>
              </div>
            </div>
            <div className="absolute left-3/4 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-white border-2 border-gray-300 flex items-center justify-center shadow-sm">
                  <ArrowRight className="h-4 w-4 text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="relative group"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : undefined}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.16, 1, 0.3, 1], 
                  delay: index * 0.1 
                }}
              >
                {/* Glassmorphism card premium con hover mejorado */}
                <div className="relative h-full rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-xl transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-[#E41B13]/30 group-hover:bg-white">
                  {/* Línea decorativa top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E41B13] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative p-8 text-center">
                    {/* Icono con resplandor mejorado */}
                    <div className="flex justify-center mb-5">
                      <div className="relative">
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:from-[#E41B13] group-hover:to-[#C41810]">
                          {milestone.icon}
                        </div>
                      </div>
                    </div>

                    {/* Año grande con contador animado */}
                    <div className="text-5xl font-bold text-gray-900 mb-4">
                      <AnimatedYear year={milestone.year} />
                    </div>

                    {/* Título con línea */}
                    <div className="mb-3">
                      <div className="text-lg font-bold text-[#E41B13] leading-tight">
                        {milestone.title}
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Stats;
