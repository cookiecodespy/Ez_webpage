import { MonitorSmartphone, Route, BarChart3, Workflow, MapPin } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { PrimaryButton } from './UIButtons';

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
              Nuestro WMS de última generación garantiza precisión, visibilidad y eficiencia en cada etapa de tu cadena de suministro.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative flex min-h-[220px] flex-col gap-4 rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                >
                  <span
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E41B13]/0 via-[#E41B13]/10 to-[#E41B13]/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gray-900 text-white shadow-lg">
                    {feature.icon}
                  </div>
                  <div className="relative space-y-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
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
            <div className="flex justify-center">
              <PrimaryButton 
                as="a"
                href="https://www.blue-box.cl/wms"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5"
              >
                Explora nuestro WMS
              </PrimaryButton>
            </div>

            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
              <div className="flex items-center space-x-2 bg-gray-700 px-4 py-3">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center text-sm font-medium text-gray-400">
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

            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[#E41B13] opacity-20 blur-3xl" />
            <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-blue-500 opacity-20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
