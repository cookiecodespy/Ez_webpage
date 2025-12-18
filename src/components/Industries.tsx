import { ShoppingCart, Car, Cpu, UtensilsCrossed, Heart } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

const Industries = () => {
  const prefersReducedMotion = useReducedMotion();

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const industries = [
    {
      icon: <ShoppingCart className="h-9 w-9" aria-hidden="true" />,
      title: 'Retail y E-commerce',
      description: 'Cumplimiento ágil y flexible para comercios omnicanal de alto volumen',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&fm=webp',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      meshColor: 'from-blue-50'
    },
    {
      icon: <Car className="h-9 w-9" aria-hidden="true" />,
      title: 'Automotriz',
      description: 'Manejo especializado de autopartes y vehículos con trazabilidad completa',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&fm=webp',
      gradient: 'from-gray-700 via-gray-600 to-gray-500',
      meshColor: 'from-gray-50'
    },
    {
      icon: <Cpu className="h-9 w-9" aria-hidden="true" />,
      title: 'Tecnología',
      description: 'Transporte seguro de equipos y componentes de alto valor',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&fm=webp',
      gradient: 'from-purple-500 via-violet-500 to-indigo-500',
      meshColor: 'from-purple-50'
    },
    {
      icon: <UtensilsCrossed className="h-9 w-9" aria-hidden="true" />,
      title: 'Alimentos y Bebidas',
      description: 'Logística refrigerada para productos perecibles y sensibles',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&fm=webp',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      meshColor: 'from-orange-50'
    },
    {
      icon: <Heart className="h-9 w-9" aria-hidden="true" />,
      title: 'Salud',
      description: 'Soluciones certificadas para la cadena de suministro médica y farmacéutica',
      image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=800&fm=webp',
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      meshColor: 'from-pink-50'
    }
  ];

  return (
    <section
      id="industries"
      className="py-16 md:py-20 bg-white"
      role="region"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="mb-12 text-center"
          variants={headingVariants}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 id="industries-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Sectores que impulsamos
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-20 rounded-full bg-[#E41B13]" aria-hidden="true" />
          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed text-center">
            Experiencia logística especializada para distintas industrias estratégicas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="group relative"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              {/* Floating shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/40 to-gray-300/40 rounded-3xl blur-2xl translate-y-3 group-hover:translate-y-5 group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              {/* Card with gradient border */}
              <div className="relative rounded-3xl overflow-hidden h-80">
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-[2px] rounded-3xl overflow-hidden">
                  
                  {/* Background image with overlay */}
                  <img
                    src={industry.image}
                    alt={industry.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20" />
                  
                  {/* Mesh gradient overlay */}
                  <div className="absolute inset-0">
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${industry.meshColor} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <div className="transition-transform duration-300 group-hover:-translate-y-2">
                      <div className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${industry.gradient} p-3.5 shadow-xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        {industry.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
