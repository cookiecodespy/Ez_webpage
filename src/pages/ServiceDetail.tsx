import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Package, Clock, Shield, TrendingUp, Users, Globe } from 'lucide-react';
import { OutlineButton } from '../components/UIButtons';

interface ServiceDetailData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  stats: { value: string; label: string }[];
  features: { icon: JSX.Element; title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  benefits: string[];
  gallery: { image: string; caption: string }[];
}

const servicesData: Record<string, ServiceDetailData> = {
  'transporte-internacional': {
    id: 'transporte-internacional',
    title: 'Transporte Internacional',
    subtitle: 'Conectamos tu negocio con el mundo',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&fm=webp',
    description: 'Ofrecemos soluciones integrales de transporte multimodal (aéreo, marítimo y terrestre) con cobertura global. Nuestro equipo especializado coordina cada detalle de tu operación internacional, desde la recolección hasta la entrega final, garantizando tiempos competitivos y seguridad en cada envío.',
    stats: [
      { value: '150+', label: 'Destinos Globales' },
      { value: '98%', label: 'Entregas Puntuales' },
      { value: '24/7', label: 'Soporte Continuo' },
      { value: '15K+', label: 'Envíos Anuales' }
    ],
    features: [
      {
        icon: <Globe className="h-8 w-8" />,
        title: 'Cobertura Global',
        description: 'Red de partners certificados en más de 150 países con servicio puerta a puerta'
      },
      {
        icon: <Clock className="h-8 w-8" />,
        title: 'Tracking en Tiempo Real',
        description: 'Plataforma digital con visibilidad completa de tu carga 24/7'
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: 'Seguros Integrales',
        description: 'Protección total para tu mercancía con cobertura all-risk'
      },
      {
        icon: <Users className="h-8 w-8" />,
        title: 'Account Manager Dedicado',
        description: 'Ejecutivo asignado para coordinar tus operaciones internacionales'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Cotización y Planificación',
        description: 'Analizamos tu carga, ruta y tiempos para diseñar la mejor solución logística'
      },
      {
        step: 2,
        title: 'Recolección y Consolidación',
        description: 'Coordinamos pickup en origen y consolidamos carga según destino'
      },
      {
        step: 3,
        title: 'Gestión Aduanera',
        description: 'Tramitamos toda la documentación de exportación e importación'
      },
      {
        step: 4,
        title: 'Transporte Internacional',
        description: 'Movemos tu carga vía aérea, marítima o terrestre según requerimientos'
      },
      {
        step: 5,
        title: 'Entrega Final',
        description: 'Distribución last-mile hasta la dirección final con confirmación'
      }
    ],
    benefits: [
      'Reducción de costos logísticos hasta 30% mediante optimización de rutas',
      'Mayor control con visibilidad end-to-end en plataforma web y móvil',
      'Cumplimiento normativo garantizado en todos los países de operación',
      'Flexibilidad para adaptar servicios según cambios en demanda',
      'Soporte multiidioma en español, inglés y portugués',
      'Integración API con tu sistema ERP/WMS'
    ],
    gallery: [
      { image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800&fm=webp', caption: 'Carga aérea internacional' },
      { image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&fm=webp', caption: 'Contenedores marítimos' },
      { image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&fm=webp', caption: 'Flota terrestre especializada' }
    ]
  },
  'almacenaje-distribucion': {
    id: 'almacenaje-distribucion',
    title: 'Almacenaje y Distribución',
    subtitle: 'Tu inventario, optimizado y seguro',
    heroImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&fm=webp',
    description: 'Centros de distribución de última generación equipados con tecnología WMS, inventario en línea y redes estratégicas. Optimizamos cada eslabón de tu cadena de suministro con procesos certificados y seguridad 24/7.',
    stats: [
      { value: '50K+', label: 'm² de Almacenaje' },
      { value: '99.8%', label: 'Precisión Inventario' },
      { value: '48h', label: 'Tiempo Respuesta' },
      { value: '10K+', label: 'SKUs Gestionados' }
    ],
    features: [
      {
        icon: <Package className="h-8 w-8" />,
        title: 'WMS Avanzado',
        description: 'Sistema de gestión de almacenes con control de stock en tiempo real'
      },
      {
        icon: <TrendingUp className="h-8 w-8" />,
        title: 'Cross-Docking',
        description: 'Reducción de tiempos con transferencia directa sin almacenamiento'
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: 'Seguridad 24/7',
        description: 'Vigilancia, control de acceso y cámaras de seguridad constantes'
      },
      {
        icon: <Clock className="h-8 w-8" />,
        title: 'Fulfillment E-commerce',
        description: 'Preparación de pedidos y despacho same-day para tiendas online'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Recepción de Mercancía',
        description: 'Ingreso con inspección de calidad, etiquetado y registro en WMS'
      },
      {
        step: 2,
        title: 'Almacenamiento Estratégico',
        description: 'Ubicación optimizada según rotación, peso y características del producto'
      },
      {
        step: 3,
        title: 'Gestión de Inventario',
        description: 'Control permanente con alertas de stock mínimo y reportes automáticos'
      },
      {
        step: 4,
        title: 'Preparación de Pedidos',
        description: 'Picking, packing y etiquetado con validación de calidad'
      },
      {
        step: 5,
        title: 'Distribución',
        description: 'Despacho coordinado según ventanas horarias y rutas optimizadas'
      }
    ],
    benefits: [
      'Reducción de costos operativos al eliminar infraestructura propia',
      'Escalabilidad inmediata según temporadas y picos de demanda',
      'Visibilidad total de inventario desde cualquier dispositivo',
      'Reducción de mermas y pérdidas con controles de seguridad',
      'Reportes personalizados de KPIs logísticos',
      'Certificaciones ISO para manejo de productos sensibles'
    ],
    gallery: [
      { image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&fm=webp', caption: 'Centro de distribución moderno' },
      { image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&fm=webp', caption: 'Sistema de racks automatizado' },
      { image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&fm=webp', caption: 'Zona de picking y packing' }
    ]
  },
  'agenciamiento-aduanas': {
    id: 'agenciamiento-aduanas',
    title: 'Agenciamiento de Aduanas',
    subtitle: 'Expertos en comercio exterior',
    heroImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&fm=webp',
    description: 'Equipo especializado en normativa internacional que gestiona toda la documentación, permisos y compliance necesarios para liberar tus cargas sin contratiempos. Agilizamos trámites aduaneros en importación y exportación.',
    stats: [
      { value: '5K+', label: 'Despachos Anuales' },
      { value: '48h', label: 'Promedio Liberación' },
      { value: '100%', label: 'Compliance Normativo' },
      { value: '20+', label: 'Años Experiencia' }
    ],
    features: [
      {
        icon: <Shield className="h-8 w-8" />,
        title: 'Clasificación Arancelaria',
        description: 'Determinación correcta de partidas y cálculo de impuestos'
      },
      {
        icon: <Package className="h-8 w-8" />,
        title: 'Gestión Documental',
        description: 'Preparación completa de carpeta aduanera y certificados'
      },
      {
        icon: <Users className="h-8 w-8" />,
        title: 'Agentes Certificados',
        description: 'Equipo acreditado ante autoridades aduaneras'
      },
      {
        icon: <TrendingUp className="h-8 w-8" />,
        title: 'Consultoría Aduanera',
        description: 'Asesoría estratégica para optimizar costos de importación'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Análisis de Carga',
        description: 'Revisión de productos, origen y regulaciones aplicables'
      },
      {
        step: 2,
        title: 'Preparación Documental',
        description: 'Generación de facturas, packing list, certificados y permisos'
      },
      {
        step: 3,
        title: 'Presentación Aduana',
        description: 'Transmisión electrónica de declaración aduanera y pago de tributos'
      },
      {
        step: 4,
        title: 'Inspección y Validación',
        description: 'Coordinación con autoridades para revisión física si aplica'
      },
      {
        step: 5,
        title: 'Liberación de Carga',
        description: 'Retiro autorizado y coordinación de transporte interno'
      }
    ],
    benefits: [
      'Evita multas y rechazos por documentación incorrecta',
      'Acelera tiempos de liberación con experiencia técnica',
      'Reduce costos con correcta clasificación arancelaria',
      'Garantiza cumplimiento de regulaciones internacionales',
      'Portal web para seguimiento de trámites en tiempo real',
      'Asesoría proactiva sobre cambios normativos'
    ],
    gallery: [
      { image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&fm=webp', caption: 'Gestión documental aduanera' },
      { image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&fm=webp', caption: 'Equipo de agentes certificados' },
      { image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&fm=webp', caption: 'Consultoría especializada' }
    ]
  },
  'ultima-milla': {
    id: 'ultima-milla',
    title: 'Distribución de Última Milla',
    subtitle: 'Conectando productos con clientes finales',
    heroImage: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1600&fm=webp',
    description: 'Red de transporte capilar con seguimiento en tiempo real para entregar a tus clientes finales de forma rápida y confiable. Soluciones flexibles para e-commerce, retail y distribución urbana.',
    stats: [
      { value: '10K+', label: 'Entregas Mensuales' },
      { value: '95%', label: 'First-Time Delivery' },
      { value: '2h', label: 'Ventanas Entrega' },
      { value: '4.8/5', label: 'Satisfacción Cliente' }
    ],
    features: [
      {
        icon: <Clock className="h-8 w-8" />,
        title: 'Same-Day Delivery',
        description: 'Entregas el mismo día en zonas urbanas principales'
      },
      {
        icon: <Globe className="h-8 w-8" />,
        title: 'Tracking en Vivo',
        description: 'Tu cliente ve en tiempo real la ubicación del repartidor'
      },
      {
        icon: <Package className="h-8 w-8" />,
        title: 'Proof of Delivery',
        description: 'Foto, firma digital y geolocalización de cada entrega'
      },
      {
        icon: <Users className="h-8 w-8" />,
        title: 'Gestión de Devoluciones',
        description: 'Proceso ágil de reverse logistics y reintegro a stock'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Integración de Pedidos',
        description: 'Conexión automática con tu plataforma e-commerce o ERP'
      },
      {
        step: 2,
        title: 'Ruteo Inteligente',
        description: 'Algoritmo optimiza rutas según tráfico, distancia y ventanas horarias'
      },
      {
        step: 3,
        title: 'Asignación de Repartidor',
        description: 'Dispatcher coordina carga de vehículos por zona geográfica'
      },
      {
        step: 4,
        title: 'Entrega al Cliente',
        description: 'Repartidor entrega con protocolo de servicio y captura evidencia'
      },
      {
        step: 5,
        title: 'Confirmación y Cierre',
        description: 'Notificación automática al cliente y actualización de estados'
      }
    ],
    benefits: [
      'Mejora experiencia del cliente con entregas rápidas y confiables',
      'Reduce costos logísticos con ruteo optimizado por IA',
      'Aumenta tasa de conversión al ofrecer envío express',
      'Visibilidad completa con dashboard de métricas operativas',
      'Flexibilidad para manejar picos estacionales',
      'Integración API plug-and-play con principales plataformas'
    ],
    gallery: [
      { image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800&fm=webp', caption: 'Flota de última milla' },
      { image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&fm=webp', caption: 'Entrega urbana rápida' },
      { image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&fm=webp', caption: 'Centro de despacho' }
    ]
  },
  'project-cargo': {
    id: 'project-cargo',
    title: 'Project Cargo',
    subtitle: 'Logística para proyectos de gran escala',
    heroImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&fm=webp',
    description: 'Cuando los proyectos a gran escala requieren mover cargas fuera de lo común, la logística convencional no es suficiente. El Project Cargo es un servicio especializado y de alta complejidad, diseñado para planificar, coordinar y ejecutar el transporte de mercancías sobredimensionadas, pesadas o de alto valor en entornos desafiantes.',
    stats: [
      { value: '200+', label: 'Proyectos Ejecutados' },
      { value: '500T', label: 'Carga Máxima' },
      { value: '35+', label: 'Países Atendidos' },
      { value: '99.2%', label: 'Éxito de Entrega' }
    ],
    features: [
      {
        icon: <Shield className="h-8 w-8" />,
        title: 'Planificación Detallada',
        description: 'Ingeniería logística y estudios de viabilidad para cada proyecto'
      },
      {
        icon: <TrendingUp className="h-8 w-8" />,
        title: 'Transporte Multimodal',
        description: 'Coordinación de rutas especiales por tierra, mar y aire'
      },
      {
        icon: <Package className="h-8 w-8" />,
        title: 'Carga Pesada',
        description: 'Manejo de mercancía sobredimensionada con equipos especializados'
      },
      {
        icon: <Users className="h-8 w-8" />,
        title: 'Gestión de Permisos',
        description: 'Tramitación de autorizaciones especiales y cumplimiento normativo'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Análisis y Planificación',
        description: 'Evaluación técnica de la carga, rutas posibles y requisitos especiales'
      },
      {
        step: 2,
        title: 'Ingeniería Logística',
        description: 'Diseño de solución personalizada con estudios de factibilidad y riesgo'
      },
      {
        step: 3,
        title: 'Obtención de Permisos',
        description: 'Gestión de autorizaciones, escoltas y cumplimiento normativo'
      },
      {
        step: 4,
        title: 'Ejecución del Transporte',
        description: 'Coordinación multimodal con equipos especializados y seguimiento 24/7'
      },
      {
        step: 5,
        title: 'Instalación y Entrega',
        description: 'Descarga, posicionamiento y entrega final con documentación completa'
      }
    ],
    benefits: [
      'Reducción de riesgos con planificación exhaustiva y equipos especializados',
      'Experiencia en manejo de cargas complejas, pesadas y sobredimensionadas',
      'Soluciones personalizadas adaptadas a cada proyecto específico',
      'Cumplimiento normativo garantizado en todas las jurisdicciones',
      'Coordinación end-to-end desde origen hasta instalación final',
      'Seguimiento en tiempo real con reportes detallados de avance',
      'Seguro especializado para cargas de alto valor'
    ],
    gallery: [
      { image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&fm=webp', caption: 'Carga industrial pesada' },
      { image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&fm=webp', caption: 'Transporte especializado' },
      { image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&fm=webp', caption: 'Logística de proyectos' }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Servicio no encontrado</h1>
          <Link to="/" state={{ scrollTo: 'services' }}>
            <OutlineButton>Volver a servicios</OutlineButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center">
          <Link 
            to="/"
            state={{ scrollTo: 'services' }}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group w-fit"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Volver a servicios</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {service.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#E41B13] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Características Clave
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#E41B13] to-[#C41710] text-white flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Proceso de Trabajo
          </h2>
          <div className="space-y-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#E41B13] to-[#C41710] text-white flex items-center justify-center font-bold text-xl">
                  {step.step}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Beneficios para tu Negocio
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 className="h-6 w-6 text-[#E41B13] flex-shrink-0 mt-1" />
                <p className="text-white/90 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Galería
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.gallery.map((item, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl aspect-video"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{item.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#E41B13]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para optimizar tu logística?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contáctanos hoy y descubre cómo podemos impulsar tu operación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" state={{ scrollTo: 'contact' }}>
              <button className="px-8 py-4 bg-white text-[#E41B13] rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-xl">
                Solicitar Cotización
              </button>
            </Link>
            <Link to="/" state={{ scrollTo: 'services' }}>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#E41B13] transition-all duration-300">
                Ver Otros Servicios
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
