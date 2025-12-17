import { Target, Eye, Users, Heart, Shield, Sparkles, Award } from 'lucide-react';
import { motion, type Variants, useReducedMotion, useInView, animate, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Componente de stats animados
const AnimatedStatsOverlay = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });
  
  const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
    const motionValue = useMotionValue(0);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (isInView) {
        const controls = animate(motionValue, value, {
          duration: 2,
          ease: 'easeOut',
        });
        
        const unsubscribe = motionValue.on('change', (latest) => {
          setDisplayValue(Math.round(latest));
        });

        return () => {
          controls.stop();
          unsubscribe();
        };
      }
    }, [isInView, value, motionValue]);

    return (
      <>
        {displayValue}
        {suffix}
      </>
    );
  };

  return (
    <div ref={statsRef} className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
      <div className="flex items-center justify-around">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="text-4xl font-bold text-white mb-1">
            <AnimatedNumber value={30} suffix="K+" />
          </div>
          <div className="text-sm text-white/80">Envíos anuales</div>
        </motion.div>
        
        <div className="h-12 w-px bg-white/20" />
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="text-4xl font-bold text-white mb-1">
            <AnimatedNumber value={98} suffix="%" />
          </div>
          <div className="text-sm text-white/80">Puntualidad</div>
        </motion.div>
        
        <div className="h-12 w-px bg-white/20" />
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="text-4xl font-bold text-white mb-1">24/7</div>
          <div className="text-sm text-white/80">Tracking</div>
        </motion.div>
      </div>
    </div>
  );
};

const About = () => {
  const prefersReducedMotion = useReducedMotion();
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const values = [
    { icon: <Shield className="h-6 w-6" />, title: 'Responsabilidad', description: 'Cada empleado actúa con dedicación según su función' },
    { icon: <Users className="h-6 w-6" />, title: 'Trabajo en equipo', description: 'Colaboración profesional para lograr objetivos comunes' },
    { icon: <Sparkles className="h-6 w-6" />, title: 'Innovación', description: 'Creación de servicios nuevos que satisfacen expectativas' },
    { icon: <Heart className="h-6 w-6" />, title: 'Respeto y Empatía', description: 'Comprender necesidades y transmitir conceptos con claridad' },
    { icon: <Award className="h-6 w-6" />, title: 'Proactividad', description: 'Anticiparse a posibles situaciones que afecten el cumplimiento' },
    { icon: <Target className="h-6 w-6" />, title: 'Honestidad', description: 'Actuar con verdad, justicia, integridad y sinceridad' }
  ];

  return (
    <section id="about" className="relative py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E41B13]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E41B13]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Header con badge */}
        <motion.div
          className="text-center mb-12"
          variants={headingVariants}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Liderando la logística digital
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Más de una década transformando cadenas de suministro en Latinoamérica
          </p>
        </motion.div>

        {/* Hero Image con Stats Overlay - Full Width */}
        <motion.div 
          className="relative group mb-16"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13]/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <motion.img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&fm=webp"
              alt="EZ Ship Logistics"
              className="w-full h-[600px] object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
            
            {/* Glass card overlay con Stats animados */}
            <AnimatedStatsOverlay />
          </div>
        </motion.div>

        {/* ISO 9001:2015 - Intro texto */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E41B13]/10 border border-[#E41B13]/20 mb-6">
            <Award className="h-5 w-5 text-[#E41B13]" />
            <span className="text-sm font-semibold text-[#E41B13]">ISO 9001:2015 Certificado</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Compromiso con la Calidad</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            En EZ Logistics garantizamos la <strong>calidad y mejora continua</strong> de todos nuestros servicios a través de nuestro <strong>Sistema de Gestión de Calidad bajo la norma ISO 9001:2015</strong>. Nuestro compromiso es asegurar operaciones eficientes, confiables y en mejora constante, alineados con las mejores prácticas de la industria.
          </p>
        </motion.div>

        {/* Áreas clave - 3 cards modernos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="group relative"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E41B13] to-[#C41710] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Importaciones & Exportaciones</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrando control documental, auditorías internas y evaluación de desempeño continuo.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E41B13] to-[#C41710] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Centro de Almacenaje y Distribución</h3>
              <p className="text-gray-600 leading-relaxed">
                Nuestra meta es ofrecer servicios logísticos confiables, seguros y en mejora constante.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E41B13] to-[#C41710] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustentabilidad</h3>
              <p className="text-gray-600 leading-relaxed">
                Transformando cada envío en una oportunidad para construir un futuro más verde y eficiente.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Misión y Visión - 2 columnas */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Misión - Feature card */}
          <motion.div 
            className="group relative"
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13] to-[#C41710] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
            <div className="relative h-full backdrop-blur-sm bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13] to-[#C41710] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
              <div className="relative h-full backdrop-blur-sm bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] shadow-lg">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Misión</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Superar las expectativas de servicio de nuestros clientes, satisfaciendo las necesidades en toda la cadena de suministro a través de soluciones que se aplican a los diferentes requerimientos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visión - Feature card */}
          <motion.div 
            className="group relative"
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13] to-[#C41710] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
            <div className="relative h-full backdrop-blur-sm bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13] to-[#C41710] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
              <div className="relative h-full backdrop-blur-sm bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] shadow-lg">
                    <Eye className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Visión</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Lograr que el grupo EZ Ship Logistics cree un ambiente de amor y felicidad donde sus colaboradores puedan desarrollarse profesional y personalmente, extendiendo este ambiente a su entorno de manera sustentable y sostenible en el tiempo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Valores - Modern grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Nuestros valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group relative"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13] to-[#C41710] rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                <div className="relative h-full backdrop-blur-sm bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#E41B13] to-[#C41710] shadow-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{value.title}</h4>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
