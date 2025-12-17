import { Target, Eye, Users, Heart, Shield, Sparkles, Award } from 'lucide-react';
import { motion, type Variants, useReducedMotion } from 'framer-motion';

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
            <div className="relative h-full rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&fm=webp"
                alt="EZ Ship Logistics Operations"
                className="w-full h-full min-h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              
              {/* Stats overlay minimalista */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">10+</div>
                    <div className="text-xs text-white/80 uppercase tracking-wide">Años</div>
                  </div>
                  <div className="text-center border-l border-r border-white/20">
                    <div className="text-3xl font-bold text-white mb-1">98%</div>
                    <div className="text-xs text-white/80 uppercase tracking-wide">Satisfacción</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-xs text-white/80 uppercase tracking-wide">Soporte</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ISO Badge + Calidad - 2 columns */}
          <motion.div 
            className="lg:col-span-2 flex flex-col gap-8"
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* ISO Badge destacado */}
            <div className="relative group h-full bg-gradient-to-br from-[#E41B13] to-[#C41710] rounded-3xl p-8 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Award className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Certificado</span>
                </div>
                <h3 className="text-3xl font-bold mb-3">ISO 9001:2015</h3>
                <p className="text-white/90 leading-relaxed">
                  Sistema de Gestión de Calidad certificado, garantizando operaciones eficientes y mejora continua en todos nuestros servicios.
                </p>
              </div>
            </div>

            {/* Sustentabilidad */}
            <div className="relative group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustentabilidad</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Transformando cada envío en una oportunidad para construir un futuro más verde y eficiente.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Áreas clave - 2 cards horizontales */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Importaciones & Exportaciones</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrando control documental, auditorías internas y evaluación de desempeño continuo para garantizar excelencia en cada operación internacional.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Centro de Almacenaje y Distribución</h3>
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

        {/* Valores - Grid unificado */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestros valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{value.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
