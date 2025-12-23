import { ShoppingCart, Car, Cpu, UtensilsCrossed, Heart, Plane, Factory, Package } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      icon: <ShoppingCart className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true" />,
      title: 'Retail y E-commerce',
      description: 'Cumplimiento ágil y flexible para comercios omnicanal de alto volumen',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&fm=webp',
      slug: 'retail'
    },
    {
      icon: <Plane className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true" />,
      title: 'Aerospace',
      description: 'Logística de máxima precisión y seguridad para componentes críticos',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&fm=webp',
      slug: 'aerospace'
    },
    {
      icon: <UtensilsCrossed className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true" />,
      title: 'Alimentaria',
      description: 'Cadena de frío y logística controlada para alimentos frescos',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&fm=webp',
      slug: 'alimentaria'
    },
    {
      icon: <Factory className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true" />,
      title: 'Industrial',
      description: 'Transporte especializado de maquinaria pesada y proyectos complejos',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&fm=webp',
      slug: 'industrial'
    },
    {
      icon: <Car className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true" />,
      title: 'Automotriz',
      description: 'Gestión just-in-time para piezas y componentes automotrices',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&fm=webp',
      slug: 'automotriz'
    },
    {
      icon: <Heart className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true" />,
      title: 'Pharmaceutical',
      description: 'Soluciones especializadas para productos de alta sensibilidad',
      image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=800&fm=webp',
      slug: 'pharmaceutical'
    },
    {
      icon: <Cpu className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true" />,
      title: 'Tecnología',
      description: 'Transporte seguro de equipos y componentes de alto valor',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&fm=webp',
      slug: 'tecnologia'
    },
    {
      icon: <Package className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true" />,
      title: 'Otras Industrias',
      description: 'Soluciones logísticas adaptadas a sectores especializados',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&fm=webp',
      slug: 'otras'
    }
  ];4

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <Link key={industry.title} to={`/industrias/${industry.slug}`}>
              <motion.div
                className="group relative h-72 cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-out"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              whileHover={prefersReducedMotion ? undefined : { y: -8, boxShadow: '0 25px 50px -12px rgba(30,41,59,0.25)' }}
            >
              <div className="absolute inset-0">
                <img
                  src={industry.image}
                  alt={industry.title}
                  loading="lazy"
                  className="h-full w-full rounded-2xl object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center rounded-lg bg-[#E41B13] p-3 shadow-lg">
                    {industry.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold min-h-[3.5rem] flex items-center">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {industry.description}
                  </p>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
