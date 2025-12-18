import { Target, Eye, Users, Heart, Shield, Sparkles, Award } from 'lucide-react';
import { motion, type Variants, useReducedMotion, useInView, animate, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Glass overlay con stats animados
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

        {/* Bento Grid Layout - Hero + ISO Badge */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Hero Image - 3 columns */}
          <motion.div 
            className="lg:col-span-3 relative group"
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-full rounded-3xl overflow-hidden shadow-xl">
              <motion.img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&fm=webp"
                alt="EZ Ship Logistics Operations"
                className="w-full h-full min-h-[500px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
              
              {/* Glass overlay con stats animados */}
              <AnimatedStatsOverlay />
            </div>
          </motion.div>

          {/* ISO Badge + Calidad - 2 columns */}
          <motion.div 
            className="lg:col-span-2 flex flex-col gap-6"
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* ISO Badge destacado */}
            <div className="relative group flex-1 bg-gradient-to-br from-[#E41B13] to-[#C41710] rounded-3xl p-10 text-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-20 translate-x-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl translate-y-16 -translate-x-16" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 border border-white/30">
                  <Award className="h-5 w-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">Certificado</span>
                </div>
                <h3 className="text-4xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">ISO 9001:2015</h3>
                <p className="text-white/95 leading-relaxed text-lg">
                  Sistema de Gestión de Calidad certificado, garantizando operaciones eficientes y mejora continua en todos nuestros servicios.
                </p>
              </div>
            </div>

            {/* Sustentabilidad */}
            <div className="relative group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full blur-2xl -translate-y-12 translate-x-12 opacity-50" />
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sustentabilidad</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Transformando cada envío en una oportunidad para construir un futuro más verde y eficiente.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Áreas clave - 2 cards horizontales */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          <motion.div
            className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E41B13] transition-colors duration-300">Importaciones & Exportaciones</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrando control documental, auditorías internas y evaluación de desempeño continuo para garantizar excelencia en cada operación internacional.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E41B13] transition-colors duration-300">Centro de Almacenaje y Distribución</h3>
                <p className="text-gray-600 leading-relaxed">
                  Servicios logísticos confiables y seguros con mejora constante, alineados con las mejores prácticas de la industria.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Misión y Visión - Cards grandes */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Misión */}
          <motion.div 
            className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E41B13] to-transparent rounded-t-3xl" />
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Misión</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Superar las expectativas de servicio de nuestros clientes, satisfaciendo las necesidades en toda la cadena de suministro a través de soluciones que se aplican a los diferentes requerimientos.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visión */}
          <motion.div 
            className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E41B13] to-transparent rounded-t-3xl" />
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Visión</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Lograr que el grupo EZ Ship Logistics cree un ambiente de amor y felicidad donde sus colaboradores puedan desarrollarse profesional y personalmente, extendiendo este ambiente a su entorno de manera sustentable y sostenible en el tiempo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Valores - Grid consistente con otras cards */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestros valores</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] flex items-center justify-center shadow-lg text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E41B13] transition-colors duration-300">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
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

export default About;
