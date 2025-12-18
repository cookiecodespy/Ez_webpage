import { Plane, Warehouse, ScrollText, Truck } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { OutlineButton } from './UIButtons';

const Services = () => {
  const prefersReducedMotion = useReducedMotion();

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const services = [
    {
      icon: <Plane className="h-9 w-9" aria-hidden="true" />,
      title: 'Transporte Internacional',
      description: 'Coordinamos soluciones aéreas, marítimas y terrestres según tu operación para que cada carga llegue segura y puntualmente a su destino.',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      meshColor: 'from-blue-50'
    },
    {
      icon: <Warehouse className="h-9 w-9" aria-hidden="true" />,
      title: 'Almacenaje y Distribución',
      description: 'Centros de distribución con tecnología WMS, inventario en línea y redes estratégicas para optimizar cada eslabón de tu cadena.',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      meshColor: 'from-emerald-50'
    },
    {
      icon: <ScrollText className="h-9 w-9" aria-hidden="true" />,
      title: 'Agenciamiento de Aduanas',
      description: 'Equipo experto en normativa internacional que gestiona documentación, permisos y compliance para liberar tus cargas sin contratiempos.',
      gradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
      meshColor: 'from-purple-50'
    },
    {
      icon: <Truck className="h-9 w-9" aria-hidden="true" />,
      title: 'Distribución de Última Milla',
      description: 'Red de transporte capilar con seguimiento en tiempo real para entregar a tus clientes finales de forma rápida y confiable.',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      meshColor: 'from-orange-50'
    }
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-20 bg-gray-50"
      role="region"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="mb-12 text-center"
          variants={headingVariants}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Servicios Logísticos Integrales
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-20 rounded-full bg-[#E41B13]" aria-hidden="true" />
          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed text-center">
            Soluciones logísticas integrales diseñadas para optimizar tu operación y acelerar el crecimiento de tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            >
              {/* Floating shadow layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/40 to-gray-300/40 rounded-3xl blur-2xl translate-y-3 group-hover:translate-y-6 group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              {/* Card container with gradient border */}
              <div className="relative rounded-3xl overflow-hidden">
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-[2px] bg-white rounded-3xl" />
                
                {/* Mesh gradient background */}
                <div className="absolute inset-[2px] rounded-3xl overflow-hidden">
                  <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${service.meshColor} to-transparent rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                  <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr ${service.meshColor} to-transparent rounded-full blur-2xl opacity-30`} />
                </div>
                
                {/* Content */}
                <div className="relative p-10 flex flex-col items-start text-left min-h-[280px]">
                  <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-[#E41B13] group-hover:to-[#FF6B6B] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  
                  <OutlineButton className="mt-auto px-6 py-2.5 group-hover:border-[#E41B13] group-hover:text-[#E41B13] transition-colors duration-300">
                    Ver detalles
                  </OutlineButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
