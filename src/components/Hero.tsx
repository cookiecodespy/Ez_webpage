import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { motion, useAnimation, useReducedMotion, useInView, type Easing } from 'framer-motion';
import { OutlineButton, PrimaryButton } from './UIButtons';
import FlowConnector from './FlowConnector';
import { useRef } from 'react';

// Iconos SVG custom premium
const DeliveryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

const GlobalNetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
  </svg>
);

const TrackingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10H3"/>
    <path d="M21 6H3"/>
    <path d="M21 14H3"/>
    <path d="M21 18H3"/>
    <circle cx="18" cy="10" r="2" fill="currentColor"/>
    <circle cx="6" cy="14" r="2" fill="currentColor"/>
    <circle cx="12" cy="18" r="2" fill="currentColor"/>
  </svg>
);

// Componente para animar números
const AnimatedNumber = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000; // 2 segundos
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

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
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
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

  const imageVariants = {
    hidden: { opacity: 0, x: 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: easeOut,
        delay: 0.3
      }
    }
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      role="region"
      aria-labelledby="hero-heading"
    >
      {/* Background pattern sutil */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Layout asimétrico 60/40 - ROMPE PLANTILLA */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 md:py-20">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
          
          {/* CONTENIDO 60% - Lado izquierdo */}
          <motion.div
            className="text-left"
            initial="hidden"
            animate={controls}
            variants={contentVariants}
          >
            <motion.div className="flex items-center space-x-2 mb-6" variants={itemVariants}>
              <MapPin className="h-6 w-6 text-[#E41B13]" aria-hidden="true" />
              <span className="text-white/80 text-sm font-medium tracking-wide uppercase">Santiago de Chile • Operaciones Globales</span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Logística Global.
              <br />
              <span className="text-[#E41B13]">Experiencia Local.</span>
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              Impulsamos tu cadena de suministro con precisión, confiabilidad y rapidez. Más de 10 años conectando negocios en Latinoamérica.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <PrimaryButton className="px-8 py-4 text-lg" onClick={() => scrollToSection('contact')}>
                Solicitar cotización
              </PrimaryButton>
              <OutlineButton className="px-8 py-4 text-lg" onClick={() => scrollToSection('services')}>
                Ver servicios
              </OutlineButton>
            </motion.div>

            {/* Stats inline - Mini preview con animated counters */}
            <motion.div 
              className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10"
              variants={itemVariants}
            >
              <div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedNumber value={10} suffix="+" />
                </div>
                <div className="text-sm text-white/60">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedNumber value={500} suffix="+" />
                </div>
                <div className="text-sm text-white/60">Clientes activos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedNumber value={30} suffix="K+" />
                </div>
                <div className="text-sm text-white/60">Envíos anuales</div>
              </div>
            </motion.div>
          </motion.div>

          {/* VISUAL 40% - Lado derecho con recorte diagonal */}
          <motion.div
            className="relative hidden lg:block"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            {/* Contenedor con clip-path diagonal - IDENTIDAD ÚNICA */}
            <div 
              className="relative h-[600px] rounded-3xl overflow-hidden group"
              style={{
                clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1200&fm=webp"
                alt="Operaciones logísticas EZ Ship"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E41B13]/40 via-transparent to-transparent" />
              
              {/* Glass cards flotantes - Diferenciador visual */}
              <div className="absolute bottom-8 left-8 right-8 space-y-3">
                <div className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg cursor-pointer">
                  <div className="p-2 bg-[#E41B13] rounded-lg transition-transform duration-300 group-hover:scale-110">
                    <DeliveryIcon />
                  </div>
                  <div>
                    <div className="text-white font-bold">98% Entregas puntuales</div>
                    <div className="text-white/70 text-sm">Índice de confiabilidad</div>
                  </div>
                </div>
                <div className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg cursor-pointer">
                  <div className="p-2 bg-[#E41B13] rounded-lg transition-transform duration-300 group-hover:scale-110">
                    <GlobalNetworkIcon />
                  </div>
                  <div>
                    <div className="text-white font-bold">Cobertura global</div>
                    <div className="text-white/70 text-sm">Chile, Perú, USA y más</div>
                  </div>
                </div>
                <div className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg cursor-pointer">
                  <div className="p-2 bg-[#E41B13] rounded-lg transition-transform duration-300 group-hover:scale-110">
                    <TrackingIcon />
                  </div>
                  <div>
                    <div className="text-white font-bold">Trazabilidad 24/7</div>
                    <div className="text-white/70 text-sm">Tracking en tiempo real</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Borde rojo lateral - FIRMA B preview */}
            <div className="absolute left-0 top-12 bottom-12 w-1 bg-gradient-to-b from-transparent via-[#E41B13] to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Flow Connector - FIRMA A: transición al siguiente bloque */}
      <FlowConnector direction="diagonal-right" className="bottom-0 h-32" />
    </section>
  );
};

export default Hero;
