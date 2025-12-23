import { Plane, Warehouse, ScrollText, Shield, Package } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
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
      title: 'Freight Forwarding',
      description: 'Gestión integral de envíos multimodales (aéreo, marítimo, terrestre) actuando como intermediario y gestor completo de tu cadena de suministro internacional.',
      color: 'from-blue-500 to-blue-600',
      overlay: 'from-blue-500/0 via-blue-500/5 to-blue-500/30',
      slug: 'freight-forwarding'
    },
    {
      icon: <Warehouse className="h-11 w-11" aria-hidden="true" />,
      title: 'Contract Logistics',
      description: 'Solución completamente adaptada que integra almacenamiento, gestión de inventario hasta transporte, distribución y servicios de valor añadido.',
      color: 'from-green-500 to-green-600',
      overlay: 'from-green-500/0 via-green-500/5 to-green-500/30',
      slug: 'contract-logistics'
    },
    {
      icon: <Package className="h-11 w-11" aria-hidden="true" />,
      title: 'Project Cargo',
      description: 'Servicio especializado para planificar, coordinar y ejecutar transporte de mercancías sobredimensionadas, pesadas o de alto valor en entornos desafiantes.',
      color: 'from-red-500 to-red-600',
      overlay: 'from-red-500/0 via-red-500/5 to-red-500/30',
      slug: 'project-cargo'
    },
    {
      icon: <ScrollText className="h-11 w-11" aria-hidden="true" />,
      title: 'Agenciamiento de Aduanas',
      description: 'Gestión experta de documentación, permisos y compliance aduanero para liberar tus cargas sin contratiempos ni demoras.',
      color: 'from-purple-500 to-purple-600',
      overlay: 'from-purple-500/0 via-purple-500/5 to-purple-500/30',
      slug: 'agenciamiento-aduanas'
    },
    {
      icon: <Shield className="h-11 w-11" aria-hidden="true" />,
      title: 'Seguro de Carga Internacional',
      description: 'Protección integral para tus envíos internacionales con cobertura completa contra riesgos durante todo el trayecto.',
      color: 'from-orange-500 to-orange-600',
      overlay: 'from-orange-500/0 via-orange-500/5 to-orange-500/30',
      slug: 'seguro-carga'
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
          {services.slice(0, 2).map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ease-out"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              whileHover={prefersReducedMotion ? undefined : { y: -8 }}
            >
              <span
                className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${service.overlay} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                aria-hidden="true"
              />
              <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />
              <div className="relative flex h-full flex-col items-center justify-between gap-6 p-8 text-center">
                <div className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <Link to={`/servicios/${service.slug}`} className="mt-auto">
                  <OutlineButton className="px-6 py-2.5">
                    Ver detalles
                  </OutlineButton>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(2).map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ease-out"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              whileHover={prefersReducedMotion ? undefined : { y: -8 }}
            >
              <span
                className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${service.overlay} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                aria-hidden="true"
              />
              <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />
              <div className="relative flex h-full flex-col items-center justify-between gap-6 p-8 text-center">
                <div className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <Link to={`/servicios/${service.slug}`} className="mt-auto">
                  <OutlineButton className="px-6 py-2.5">
                    Ver detalles
                  </OutlineButton>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
