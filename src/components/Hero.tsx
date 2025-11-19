import { useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { motion, useAnimation, useReducedMotion, type Easing } from 'framer-motion';
import { OutlineButton, PrimaryButton } from './UIButtons';

const Hero = () => {
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      controls.set('visible');
      return;
    }
    controls.start('visible');
  }, [controls, prefersReducedMotion]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 88;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition >= 0 ? offsetPosition : 0,
        behavior: 'smooth'
      });
    }
  };

  const easeOut: Easing = [0.16, 1, 0.3, 1];

  const contentVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        when: 'beforeChildren' as const,
        staggerChildren: 0.12
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  } as const;

  return (
    <motion.section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      role="region"
      aria-labelledby="hero-heading"
      initial="hidden"
      animate={controls}
      variants={contentVariants}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2000&fm=webp"
          alt="Logística"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 z-5">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="world-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#world-pattern)" />
          </svg>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={itemVariants}>
          <motion.div className="flex items-center justify-center space-x-2 mb-5" variants={itemVariants}>
            <MapPin className="h-5 w-5 text-[#E41B13]" aria-hidden="true" />
            <span className="text-white/90 text-sm font-medium tracking-wide uppercase">Santiago de Chile y Operaciones Globales</span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Logística Global.
            <br />
            <span className="text-[#E41B13]">Experiencia Local.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-light text-left md:text-center"
            variants={itemVariants}
          >
            Impulsamos tu cadena de suministro con precisión, confiabilidad y rapidez.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <PrimaryButton className="px-7 py-3" onClick={() => scrollToSection('contact')}>
              Solicitar cotización
            </PrimaryButton>
            <OutlineButton className="px-7 py-3" onClick={() => scrollToSection('services')}>
              Ver servicios
            </OutlineButton>
          </motion.div>
        </motion.div>
      </div>

	<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
