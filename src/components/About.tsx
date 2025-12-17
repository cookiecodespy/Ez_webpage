import { Target, Eye, Award, Sparkles, Building2 } from 'lucide-react';
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
    { icon: <Target className="h-6 w-6" />, title: 'Confiabilidad', description: 'Servicio constante y seguro para respaldar cada operación' },
    { icon: <Sparkles className="h-6 w-6" />, title: 'Innovación', description: 'Soluciones de vanguardia para una logística moderna' },
    { icon: <Award className="h-6 w-6" />, title: 'Enfoque en el cliente', description: 'Tu éxito es nuestra prioridad en cada proyecto' }
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
          className="text-center mb-16"
          variants={headingVariants}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E41B13]/10 border border-[#E41B13]/20 mb-6">
            <Building2 className="h-4 w-4 text-[#E41B13]" />
            <span className="text-sm font-semibold text-[#E41B13]">Sobre Nosotros</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Liderando la logística digital
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Más de una década transformando cadenas de suministro en Latinoamérica
          </p>
        </motion.div>

        {/* Intro cards con iconos */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 - Experiencia */}
          <motion.div
            className="group relative"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full backdrop-blur-sm bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-[#E41B13] to-[#C41710] shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Experiencia Global</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Operador logístico digital con más de 10 años de experiencia. Holding empresarial basado en Estados Unidos con oficinas en Perú y Chile.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Liderazgo */}
          <motion.div
            className="group relative"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full backdrop-blur-sm bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-[#E41B13] to-[#C41710] shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Liderazgo Regional</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Líderes en el manejo de carga internacional y aduanas en el Perú, con un equipo altamente calificado y especializado en diversas industrias.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Tecnología */}
          <motion.div
            className="group relative"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full backdrop-blur-sm bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-[#E41B13] to-[#C41710] shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Tecnología Avanzada</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Combinamos experiencia y tecnología logística para construir las mejores soluciones. Potenciamos nuestros productos con Cargowise.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Misión/Visión - Elevated cards con imagen */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Imagen con overlay y stats */}
          <div className="relative group flex items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13]/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&fm=webp"
                alt="EZ Ship Logistics"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
              
              {/* Glass card overlay */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">10+</div>
                    <div className="text-sm text-white/80">Años de experiencia</div>
                  </div>
                  <div className="h-12 w-px bg-white/20" />
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">500+</div>
                    <div className="text-sm text-white/80">Clientes activos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Misión y Visión stacked */}
          <div className="flex flex-col gap-6">
            {/* Misión - Feature card */}
            <div className="group relative flex-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13] to-[#C41710] rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative h-full backdrop-blur-sm bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] shadow-lg">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Misión</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Superar las expectativas de servicio de nuestros clientes, satisfaciendo las necesidades en toda la cadena de suministro a través de soluciones que se aplican a los diferentes requerimientos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visión - Feature card */}
            <div className="group relative flex-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13] to-[#C41710] rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative h-full backdrop-blur-sm bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] shadow-lg">
                    <Eye className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Visión</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lograr que el grupo EZ Ship Logistics cree un ambiente de amor y felicidad donde sus colaboradores puedan desarrollarse profesional y personalmente, extendiendo este ambiente a su entorno de manera sustentable y sostenible en el tiempo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Valores - Modern grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Nuestros valores</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group relative"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full backdrop-blur-sm bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#E41B13] to-[#C41710] shadow-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{value.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
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
