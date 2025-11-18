import { Boxes, Truck, ClipboardList, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
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
      icon: <Boxes className="h-12 w-12" aria-hidden="true" />,
      title: 'WMS',
      subtitle: 'Sistema de Gestión de Almacenes',
      description: 'Nuestra plataforma VULCANO optimiza y controla todas las operaciones dentro del almacén, aumentando la eficiencia, reduciendo errores y mejorando el uso del espacio y los recursos. Ofrece trazabilidad completa desde la recepción hasta el despacho.',
      href: 'https://www.blue-box.cl/wms/a_login.php',
      ariaLabel: 'Ingresar a WMS (se abre en nueva pestaña)',
      gradient: 'from-blue-500/20 via-indigo-500/20 to-purple-500/20',
      glowColor: 'shadow-blue-500/20',
      badge: 'VULCANO',
      features: ['Trazabilidad 100%', 'Control en Tiempo Real', 'Optimización de Espacio']
    },
    {
      icon: <Truck className="h-12 w-12" aria-hidden="true" />,
      title: 'TMS',
      subtitle: 'Sistema de Gestión de Transporte',
      description: 'Nuestra plataforma TMS permite planificar, ejecutar y optimizar rutas, flotas y entregas en tiempo real. Garantiza eficiencia, control de costos y trazabilidad en toda la cadena logística.',
      href: 'https://www.blue-box.cl/zlogistic/views/login/login.php',
      ariaLabel: 'Ingresar a TMS (se abre en nueva pestaña)',
      gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
      glowColor: 'shadow-emerald-500/20',
      badge: 'SMART ROUTES',
      features: ['Optimización de Rutas', 'Gestión de Flotas', 'Reducción de Costos']
    },
    {
      icon: <ClipboardList className="h-12 w-12" aria-hidden="true" />,
      title: 'Proyectos',
      subtitle: 'Gestión Integral de Proyectos',
      description: 'Nuestra plataforma coordina, supervisa y optimiza cada fase del proceso logístico, desde la planificación hasta la entrega final. Asegura eficiencia, trazabilidad y control total de recursos en todas las operaciones.',
      href: 'https://easylogisticz.cl/login/',
      ariaLabel: 'Ingresar a Plataforma de Proyectos (se abre en nueva pestaña)',
      gradient: 'from-orange-500/20 via-red-500/20 to-pink-500/20',
      glowColor: 'shadow-orange-500/20',
      badge: 'END-TO-END',
      features: ['Control Total', 'Supervisión 24/7', 'Eficiencia Garantizada']
    }
  ];

  return (
    <section
      id="technology"
      className="relative py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
      role="region"
      aria-labelledby="technology-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#E41B13]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.4 }}
          variants={headingVariants}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E41B13]/10 border border-[#E41B13]/20 mb-6">
            <Sparkles className="h-4 w-4 text-[#E41B13]" aria-hidden="true" />
            <span className="text-sm font-semibold text-[#E41B13]">Plataformas Inteligentes</span>
          </div>
          <h2 id="technology-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Tecnología y trazabilidad
          </h2>
          <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#E41B13] to-orange-500 mx-auto" aria-hidden="true" />
          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
            Accede a nuestras plataformas de gestión logística diseñadas para optimizar cada aspecto de tu operación
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.title}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform.ariaLabel}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200/50 bg-white/90 backdrop-blur-sm p-8 shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl ${platform.glowColor} focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13] focus-visible:ring-offset-2`}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden="true" />
              
              {/* Animated shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
              
              {/* Badge */}
              <div className="relative mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-900 text-white text-xs font-bold tracking-wider">
                  <Zap className="h-3 w-3" aria-hidden="true" />
                  {platform.badge}
                </span>
              </div>

              {/* Icon with glow effect */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" aria-hidden="true" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative space-y-4 flex-1">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#E41B13] transition-colors">
                    {platform.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {platform.subtitle}
                  </p>
                </div>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  {platform.description}
                </p>

                {/* Features list */}
                <div className="pt-4 space-y-2">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <Shield className="h-4 w-4 text-[#E41B13] flex-shrink-0" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Arrow */}
              <div className="relative mt-6 flex items-center gap-2 text-[#E41B13] font-semibold text-sm group-hover:gap-3 transition-all">
                <span>Acceder a la plataforma</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div 
          className="mt-16 text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-sm text-gray-500">
            Potenciadas con tecnología de última generación para resultados excepcionales
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
