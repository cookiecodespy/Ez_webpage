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
      icon: <Plane className="h-11 w-11" aria-hidden="true" />,
      title: 'Transporte Internacional',
      description: 'Coordinamos soluciones aéreas, marítimas y terrestres según tu operación para que cada carga llegue segura y puntualmente a su destino.',
      offset: false
    },
    {
      icon: <Warehouse className="h-11 w-11" aria-hidden="true" />,
      title: 'Almacenaje y Distribución',
      description: 'Centros de distribución con tecnología WMS, inventario en línea y redes estratégicas para optimizar cada eslabón de tu cadena.',
      offset: true
    },
    {
      icon: <ScrollText className="h-11 w-11" aria-hidden="true" />,
      title: 'Agenciamiento de Aduanas',
      description: 'Equipo experto en normativa internacional que gestiona documentación, permisos y compliance para liberar tus cargas sin contratiempos.',
      offset: false
    },
    {
      icon: <Truck className="h-11 w-11" aria-hidden="true" />,
      title: 'Distribución de Última Milla',
      description: 'Red de transporte capilar con seguimiento en tiempo real para entregar a tus clientes finales de forma rápida y confiable.',
      offset: true
    }
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-20 bg-white"
      role="region"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header asimétrico, alineado a la izquierda */}
        <motion.div
          className="mb-16"
          variants={headingVariants}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Servicios Logísticos Integrales
          </h2>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
            Soluciones diseñadas para optimizar tu operación y acelerar el crecimiento de tu negocio
          </p>
        </motion.div>

        {/* Grid con stagger offset en desktop */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`group relative flex h-full min-h-[280px] flex-col rounded-xl bg-white border-l-4 border-[#E41B13] shadow-[4px_0_20px_rgba(228,27,19,0.1)] transition-all duration-300 ease-out hover:shadow-[6px_0_30px_rgba(228,27,19,0.15)] ${service.offset ? 'md:mt-6' : ''}`}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            >
              <div className="relative flex h-full flex-col gap-6 p-8">
                {/* Icono outline sin fondo */}
                <div className="flex h-14 w-14 items-center justify-center text-[#E41B13] transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <OutlineButton className="mt-auto self-start px-6 py-2.5">
                  Ver detalles
                </OutlineButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
