import { useEffect, useState, useRef } from 'react';
import { Award, Users, Package, TrendingUp } from 'lucide-react';
import { animate, motion, useMotionValue, useReducedMotion, useTransform, type Variants } from 'framer-motion';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
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

  const stats: Stat[] = [
    { 
      icon: <Award className="h-8 w-8" aria-hidden="true" />, 
      value: 10, 
      suffix: '+', 
      label: 'Años',
      description: 'De experiencia en logística internacional'
    },
    { 
      icon: <Users className="h-8 w-8" aria-hidden="true" />, 
      value: 500, 
      suffix: '+', 
      label: 'Clientes',
      description: 'Confían en nuestras operaciones'
    },
    { 
      icon: <Package className="h-8 w-8" aria-hidden="true" />, 
      value: 30, 
      suffix: 'K+', 
      label: 'Envíos',
      description: 'Entregados exitosamente cada año'
    },
    { 
      icon: <TrendingUp className="h-8 w-8" aria-hidden="true" />, 
      value: 98, 
      suffix: '%', 
      label: 'Puntualidad',
      description: 'En entregas comprometidas'
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

  const AnimatedCounter = ({
    value,
    suffix,
    index,
    isActive,
    prefersReducedMotion,
  }: {
    value: number;
    suffix: string;
    index: number;
    isActive: boolean;
    prefersReducedMotion: boolean;
  }) => {
    const motionValue = useMotionValue(0);
    const roundedValue = useTransform(motionValue, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      const unsubscribe = roundedValue.on('change', (latest) => {
        setDisplayValue(latest);
      });

      return () => {
        unsubscribe();
      };
    }, [roundedValue]);

    useEffect(() => {
  if (!isActive) return;

      if (prefersReducedMotion) {
        motionValue.set(value);
        setDisplayValue(value);
        return;
      }

      const controls = animate(motionValue, value, {
        duration: 1.2,
        ease: 'easeOut',
        delay: index * 0.15,
      });

      return () => {
        controls.stop();
      };
  }, [index, isActive, motionValue, prefersReducedMotion, value]);

    return (
      <motion.span>
        {displayValue}
        {suffix}
      </motion.span>
    );
  };

  return (
    <section
      id="por-que-elegirnos"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-white overflow-hidden"
      role="region"
      aria-labelledby="stats-heading"
    >
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E41B13] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E41B13] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="text-center mb-16"
          variants={headingVariants}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 id="stats-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Respaldados por resultados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Números que demuestran nuestro compromiso con la excelencia logística
          </p>
        </motion.div>

        {/* Timeline horizontal - NUEVO LAYOUT único */}
        <div className="relative">
          {/* Línea horizontal conectora - Simula flujo logístico */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E41B13]/20 to-transparent" aria-hidden="true" />
          
          {/* Puntos de conexión animados */}
          {stats.map((_, index) => (
            <motion.div
              key={`dot-${index}`}
              className="hidden md:block absolute top-16 w-3 h-3 bg-[#E41B13] rounded-full -translate-y-1/2"
              style={{ left: `${(100 / (stats.length + 1)) * (index + 1)}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : undefined}
              transition={{ delay: index * 0.2, duration: 0.4 }}
            />
          ))}

          {/* Grid de stats con efecto stagger */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : undefined}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1], 
                  delay: index * 0.15 
                }}
              >
                {/* Card con efectos modernos y glassmorphism sutil */}
                <div className="group relative h-full bg-gradient-to-br from-white to-gray-50/50 border-l-4 border-[#E41B13] rounded-2xl p-8 shadow-[4px_0_20px_rgba(228,27,19,0.1)] hover:shadow-[6px_0_32px_rgba(228,27,19,0.2)] transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm">
                  {/* Efecto glassmorphism en hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Brillo animado en hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E41B13] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
                  
                  {/* Contenido */}
                  <div className="relative space-y-4">
                    {/* Icono con efecto pulsante */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] text-white shadow-lg shadow-[#E41B13]/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                    </div>

                    {/* Número animado con efecto brillante */}
                    <div className="relative">
                      <div className="text-6xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          index={index}
                          isActive={isVisible}
                          prefersReducedMotion={prefersReducedMotion}
                        />
                      </div>
                      {/* Glow effect sutil */}
                      <div className="absolute inset-0 blur-xl bg-[#E41B13]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Label con línea decorativa */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-[#E41B13] to-transparent" />
                      <div className="text-xl font-bold text-[#E41B13]">
                        {stat.label}
                      </div>
                    </div>

                    {/* Descripción con mejor tipografía */}
                    <p className="text-base text-gray-700 leading-relaxed font-medium">
                      {stat.description}
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
