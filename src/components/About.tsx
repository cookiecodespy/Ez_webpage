import { Target, Eye, Award, ArrowRight } from 'lucide-react';
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { PrimaryButton } from './UIButtons';

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
    {
  icon: <Target className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true" />,
      title: 'Confiabilidad',
      description: 'Servicio constante y seguro para respaldar cada operación'
    },
    {
  icon: <Eye className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true" />,
      title: 'Innovación',
      description: 'Soluciones de vanguardia para una logística moderna'
    },
    {
  icon: <Award className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true" />,
      title: 'Enfoque en el cliente',
      description: 'Tu éxito es nuestra prioridad en cada proyecto'
    }
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-white"
      role="region"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:gap-10">
          <div className="relative mx-auto w-full md:w-1/2">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&fm=webp"
                alt="Equipo de EZ Ship Logistics"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#E41B13] text-white p-8 rounded-xl shadow-xl">
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-sm font-medium">Años de excelencia</div>
            </div>
          </div>

          <motion.div
            className="w-full md:w-1/2"
            variants={headingVariants}
            initial={prefersReducedMotion ? undefined : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="space-y-4 text-center md:text-left">
              <h2 id="about-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Sobre EZ Ship Logistics
              </h2>
              <div className="mx-auto mt-2 h-0.5 w-20 rounded-full bg-[#E41B13] md:mx-0" aria-hidden="true" />
              <p className="max-w-3xl text-base md:text-lg text-gray-600 leading-relaxed mx-auto md:mx-0">
                Nacimos en Santiago de Chile y llevamos más de una década diseñando soluciones logísticas eficientes y basadas en datos para toda Latinoamérica y mercados globales.
              </p>
              <p className="max-w-3xl text-base md:text-lg text-gray-600 leading-relaxed mx-auto md:mx-0">
                Combinamos conocimiento local con cobertura internacional para entregar cadenas de suministro fluidas. Nuestra apuesta por la innovación y el servicio nos convierte en un aliado confiable para empresas de todos los tamaños.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <h3 className="text-center md:text-left text-2xl font-bold text-gray-900">
                Nuestros valores
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm transition-colors duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E41B13] to-[#C41710] text-white shadow-md">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <PrimaryButton className="mt-10 px-7 py-3">
              <span className="inline-flex items-center gap-2">
                Conoce más de nosotros
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </PrimaryButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
