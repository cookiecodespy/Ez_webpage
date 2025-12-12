import { motion, useReducedMotion } from 'framer-motion';

interface FlowConnectorProps {
  direction?: 'diagonal-right' | 'diagonal-left' | 'horizontal';
  animate?: boolean;
  className?: string;
}

/**
 * FlowConnector - FIRMA VISUAL A
 * Componente único de EZ Ship que simula el flujo logístico entre secciones
 * Líneas/flechas diagonales que conectan visualmente las secciones
 */
const FlowConnector = ({ 
  direction = 'diagonal-right', 
  animate = true,
  className = ''
}: FlowConnectorProps) => {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animate && !prefersReducedMotion;

  // Paths SVG para diferentes direcciones
  const paths = {
    'diagonal-right': 'M0,0 L100,100',
    'diagonal-left': 'M100,0 L0,100',
    'horizontal': 'M0,50 L100,50'
  };

  const pathVariants = {
    hidden: { 
      pathLength: 0,
      opacity: 0 
    },
    visible: { 
      pathLength: 1,
      opacity: 0.3,
      transition: { 
        pathLength: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as any },
        opacity: { duration: 0.5 }
      }
    }
  } as const;

  return (
    <div className={`absolute inset-x-0 pointer-events-none z-10 ${className}`}>
      <svg 
        className="w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* Gradiente rojo característico de EZ Ship */}
          <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E41B13" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#E41B13" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E41B13" stopOpacity="0.1" />
          </linearGradient>
          
          {/* Patrón de puntos para simular tracking/trazabilidad */}
          <pattern id="flow-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="0.8" fill="#E41B13" opacity="0.2" />
          </pattern>
        </defs>

        {/* Línea de fondo (relleno sutil) */}
        <motion.path
          d={paths[direction]}
          stroke="url(#flow-dots)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={shouldAnimate ? 'hidden' : 'visible'}
          animate="visible"
          variants={shouldAnimate ? pathVariants : undefined}
        />

        {/* Línea principal con gradiente */}
        <motion.path
          d={paths[direction]}
          stroke="url(#flow-gradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="5,5"
          initial={shouldAnimate ? 'hidden' : 'visible'}
          animate="visible"
          variants={shouldAnimate ? pathVariants : undefined}
        />

        {/* Flecha al final (indicador de dirección) */}
        <motion.path
          d={direction === 'diagonal-right' 
            ? 'M95,95 L100,100 L95,100 Z' 
            : direction === 'diagonal-left'
            ? 'M5,95 L0,100 L5,100 Z'
            : 'M95,48 L100,50 L95,52 Z'
          }
          fill="#E41B13"
          opacity="0.4"
          initial={shouldAnimate ? { opacity: 0, scale: 0 } : undefined}
          animate={shouldAnimate ? { opacity: 0.4, scale: 1 } : undefined}
          transition={shouldAnimate ? { delay: 1.2, duration: 0.3 } : undefined}
        />
      </svg>
    </div>
  );
};

export default FlowConnector;
