import { Boxes, Truck, ClipboardList, MonitorSmartphone, Route, BarChart3, Workflow, MapPin } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

const Technology = () => {
  const prefersReducedMotion = useReducedMotion();

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const platforms = [
    {
      icon: <Boxes className="h-10 w-10" aria-hidden="true" />,
      title: 'WMS',
      description: 'Gestión de bodegas con precisión y trazabilidad en tiempo real.',
      href: 'https://www.blue-box.cl/wms/a_login.php',
      ariaLabel: 'Ingresar a WMS (se abre en nueva pestaña)'
    },
    {
      icon: <Truck className="h-10 w-10" aria-hidden="true" />,
      title: 'TMS',
      description: 'Planifica rutas, costos y entregas con control de punta a punta.',
      href: 'https://www.blue-box.cl/zlogistic/views/login/login.php',
      ariaLabel: 'Ingresar a TMS (se abre en nueva pestaña)'
    },
    {
      icon: <ClipboardList className="h-10 w-10" aria-hidden="true" />,
      title: 'Proyectos',
      description: 'Coordina y controla proyectos logísticos de inicio a fin.',
      href: 'https://easylogisticz.cl/login/',
      ariaLabel: 'Ingresar a Plataforma de Proyectos (se abre en nueva pestaña)'
    }
  ];

  const features = [
    {
      icon: <MonitorSmartphone className="h-11 w-11" aria-hidden="true" />,
      title: 'Monitoreo en tiempo real',
      description: 'Supervisa tus envíos 24/7 con precisión GPS'
    },
    {
      icon: <Route className="h-11 w-11" aria-hidden="true" />,
      title: 'Optimización de rutas',
      description: 'Logística impulsada por IA para máxima eficiencia'
    },
    {
      icon: <BarChart3 className="h-11 w-11" aria-hidden="true" />,
      title: 'Analítica avanzada',
      description: 'Insights basados en datos para mejores decisiones'
    },
    {
      icon: <Workflow className="h-11 w-11" aria-hidden="true" />,
      title: 'Flujos automatizados',
      description: 'Operaciones fluidas de principio a fin'
    }
  ];

  return (
    <section
      id="technology"
      className="py-16 md:py-20 bg-gray-50"
      role="region"
      aria-labelledby="technology-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={prefersReducedMotion ? undefined : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.4 }}
            variants={headingVariants}
          >
            <h2 id="technology-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center lg:text-left">
              Tecnología y trazabilidad
            </h2>
            <div className="mt-2 h-0.5 w-20 rounded-full bg-[#E41B13] lg:ml-0 mx-auto" aria-hidden="true" />
            <p className="mt-6 max-w-3xl text-base md:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
              Accede a nuestras plataformas de gestión logística
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
              {platforms.map((platform, index) => (
                <motion.a
                  key={platform.title}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.ariaLabel}
                  className="group relative flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13] focus-visible:ring-offset-2"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                >
                  <span
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E41B13]/0 via-[#E41B13]/10 to-[#E41B13]/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white shadow">
                    {platform.icon}
                  </div>
                  <div className="relative space-y-1">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {platform.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto space-y-6"
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
              <div className="flex items-center space-x-2 bg-gray-700 px-4 py-3">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 flex justify-center text-sm font-medium text-gray-400">
                  EZ Ship WMS Dashboard
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 rounded-lg bg-gray-800 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-gray-400">Shipment ID: ES-2025-10384</span>
                    <span className="rounded-full bg-green-500 px-3 py-1 text-xs text-white">In Transit</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E41B13]">
                        <MapPin className="h-4 w-4 text-white" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white">Santiago, Chile</div>
                        <div className="text-sm text-gray-400">Origin</div>
                      </div>
                    </div>
                    <div className="ml-4 h-8 border-l-2 border-gray-700" />
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                        <MapPin className="h-4 w-4 text-white" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white">Buenos Aires, Argentina</div>
                        <div className="text-sm text-gray-400">Destination</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg bg-gray-800 p-4">
                    <div className="text-2xl font-bold text-white">245</div>
                    <div className="text-xs text-gray-400">Active Shipments</div>
                  </div>
                  <div className="rounded-lg bg-gray-800 p-4">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-xs text-gray-400">On Time</div>
                  </div>
                  <div className="rounded-lg bg-gray-800 p-4">
                    <div className="text-2xl font-bold text-white">15</div>
                    <div className="text-xs text-gray-400">Countries</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative space-y-4 p-6 rounded-2xl bg-white/60 border border-gray-100">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Funcionalidades Clave</div>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white shadow-sm flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[#E41B13] opacity-20 blur-3xl" />
            <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-blue-500 opacity-20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
