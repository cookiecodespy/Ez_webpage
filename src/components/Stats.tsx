import { useEffect, useState, useRef } from 'react';
import { Award, Users, Package, TrendingUp } from 'lucide-react';
import { animate, motion, useMotionValue, useReducedMotion, useTransform, type Variants } from 'framer-motion';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
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
    { icon: <Award className="h-8 w-8 md:h-10 md:w-10" aria-hidden="true" />, value: 10, suffix: '+', label: 'Años de experiencia' },
    { icon: <Users className="h-8 w-8 md:h-10 md:w-10" aria-hidden="true" />, value: 500, suffix: '+', label: 'Clientes satisfechos' },
    { icon: <Package className="h-8 w-8 md:h-10 md:w-10" aria-hidden="true" />, value: 30, suffix: 'K+', label: 'Envíos entregados' },
    { icon: <TrendingUp className="h-8 w-8 md:h-10 md:w-10" aria-hidden="true" />, value: 98, suffix: '%', label: 'Entregas puntuales' }
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
  className="py-12 md:py-16 bg-gradient-to-r from-[#E41B13] to-[#c41610]"
      role="region"
      aria-labelledby="stats-heading"
    >
  <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="text-center mb-8"
          variants={headingVariants}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Ventajas Competitivas
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-20 rounded-full bg-white" aria-hidden="true" />
          <p className="mt-3 text-sm md:text-base text-white/85 max-w-3xl mx-auto leading-relaxed text-left md:text-center">
            Indicadores clave que respaldan nuestra promesa de servicio confiable y eficiente en cada envío.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center text-white"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-3 opacity-90">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1.5">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  index={index}
                  isActive={isVisible}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </div>
              <div className="text-xs md:text-sm font-medium opacity-90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
