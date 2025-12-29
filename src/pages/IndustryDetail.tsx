import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Package, Clock, Shield, TrendingUp, Users, Globe, Sparkles, Zap, Target } from 'lucide-react';
import { OutlineButton } from '../components/UIButtons';
import { useEffect, useRef, useState } from 'react';

interface IndustryDetailData {
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

const industriesData: Record<string, IndustryDetailData> = {
  'retail': {
    id: 'retail',
    title: 'Retail y E-commerce',
    subtitle: 'Soluciones omnicanal para comercio moderno',
    heroImage: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1600&fm=webp',
    description: 'Operaciones logísticas end-to-end diseñadas específicamente para retail omnicanal y e-commerce de alto volumen. Desde recepción de inventario hasta entrega final al cliente, gestionamos cada etapa con tecnología avanzada, integración nativa con plataformas de venta y flexibilidad para adaptarnos a picos estacionales como Black Friday o lanzamientos de productos. Soportamos modelos B2B, B2C, marketplaces y ship-from-store con la misma excelencia operacional.',
    stats: [
      { value: '50k+', label: 'Órdenes procesadas/mes' },
      { value: '98%', label: 'Perfect Order Rate' },
      { value: '<24h', label: 'Fulfillment B2C' },
      { value: '300%', label: 'Capacidad flex en peaks' }
    ],
    features: [
      {
        icon: <Package className="h-8 w-8" />,
        title: 'Fulfillment Omnicanal',
        description: 'Gestión unificada de órdenes online, tiendas físicas y marketplaces con visibilidad real-time de stock disponible por canal'
      },
      {
        icon: <TrendingUp className="h-8 w-8" />,
        title: 'Escalabilidad Peak Season',
        description: 'Infraestructura flexible para manejar Black Friday, Cyber Monday y campañas promocionales con incrementos de hasta 10x el volumen base'
      },
      {
        icon: <Globe className="h-8 w-8" />,
        title: 'Integración E-commerce',
        description: 'Conectores nativos con Shopify, VTEX, WooCommerce, Magento para sincronización automática de órdenes, inventario y tracking'
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: 'Gestión de Devoluciones',
        description: 'Centro especializado de reverse logistics con inspección QA, clasificación automática y retorno a stock en menos de 48 horas'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Recepción y Almacenamiento Estratégico',
        description: 'Recibimos tu inventario con inspección de calidad, etiquetado inteligente con código de barras y ubicación por rotación ABC para optimizar picking'
      },
      {
        step: 2,
        title: 'Sincronización Multicanal',
        description: 'Conectamos con todas tus plataformas de venta (e-commerce, POS tiendas, marketplaces) para visibilidad unificada de stock disponible'
      },
      {
        step: 3,
        title: 'Procesamiento de Órdenes',
        description: 'Las órdenes se rutean automáticamente a nuestro WMS, se priorizan según SLA de canal y se asignan a pickers con tecnología RF'
      },
      {
        step: 4,
        title: 'Picking y Packing Personalizado',
        description: 'Preparación con verificación double-check, embalaje según especificaciones de marca, inserts promocionales y etiquetado de envío'
      },
      {
        step: 5,
        title: 'Despacho y Tracking',
        description: 'Coordinación con carriers (última milla, express, estándar) con generación automática de tracking y notificaciones al cliente final'
      },
      {
        step: 6,
        title: 'Reverse Logistics',
        description: 'Gestión integral de devoluciones con inspección, clasificación (re-stock/liquidación/descarte) y analytics de motivos de retorno'
      }
    ],
    benefits: [
      'Reducción de costos de fulfillment hasta 35% vs operación in-house',
      'Time-to-market acelerado: launch en nuevos canales en 2-3 semanas',
      'Perfect Order Rate >98% con doble verificación obligatoria',
      'Capacidad elástica para picos sin inversión en infraestructura ociosa',
      'Visibilidad omnicanal: un solo dashboard para todos los canales de venta',
      'Integración nativa con top 15 plataformas e-commerce más usadas',
      'Devoluciones procesadas <48h desde recepción hasta disponibilidad en stock',
      'Ship-from-store enablement para retailers con red de tiendas físicas',
      'Analytics avanzados: rotación por SKU, obsolescencia, fill rate por canal',
      'Soporte para promociones especiales: gift wrapping, kitting, inserts personalizados'
    ],
    gallery: [
      { image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&fm=webp', caption: 'Centro de fulfillment e-commerce con tecnología WMS avanzada' },
      { image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&fm=webp', caption: 'Zona de picking optimizada para high-velocity SKUs' },
      { image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&fm=webp', caption: 'Packing station con verificación QA pre-despacho' }
    ]
  },
  'aerospace': {
    id: 'aerospace',
    title: 'Aerospace',
    subtitle: 'Logística de precisión para componentes críticos',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&fm=webp',
    description: 'Soluciones logísticas especializadas para la industria aeroespacial con máxima seguridad y cumplimiento normativo.',
    stats: [
      { value: 'AOG', label: 'Respuesta <2h' },
      { value: '100%', label: 'Compliance FAA/EASA' },
      { value: '24/7', label: 'Operación continua' },
      { value: '$50M', label: 'Cobertura seguro' }
    ],
    features: [],
    process: [],
    benefits: ['Respuesta AOG Aircraft On Ground en menos de 2 horas', 'Certificaciones aeronáuticas FAA y EASA', 'Handling especializado componentes sensibles'],
    gallery: []
  },
  'alimentaria': {
    id: 'alimentaria',
    title: 'Industria Alimentaria',
    subtitle: 'Cadena de frío y frescura garantizada',
    heroImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&fm=webp',
    description: 'Gestión integral de temperatura controlada para productos perecederos con trazabilidad completa.',
    stats: [
      { value: '<3%', label: 'Merma total' },
      { value: '2-8°C', label: 'Rango temperatura' },
      { value: '100%', label: 'Trazabilidad HACCP' },
      { value: '<24h', label: 'Tiempo almacén frescos' }
    ],
    features: [],
    process: [],
    benefits: ['Cadena de frío certificada con sensores IoT', 'Cumplimiento HACCP y normativas sanitarias', 'Trazabilidad completa por lote y vencimiento'],
    gallery: []
  },
  'industrial': {
    id: 'industrial',
    title: 'Sector Industrial',
    subtitle: 'Logística para maquinaria y proyectos complejos',
    heroImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&fm=webp',
    description: 'Transporte especializado de maquinaria pesada, equipos industriales y project cargo sobredimensionado.',
    stats: [
      { value: '500T', label: 'Capacidad max' },
      { value: '200+', label: 'Proyectos ejecutados' },
      { value: '35+', label: 'Países experiencia' },
      { value: '99%', label: 'Éxito entrega' }
    ],
    features: [],
    process: [],
    benefits: ['Planificación de ruta crítica con estudios de gálibo', 'Gestión integral de permisos especiales', 'Equipos certificados: grúas, lowboys, SPMT'],
    gallery: []
  },
  'automotriz': {
    id: 'automotriz',
    title: 'Sector Automotriz',
    subtitle: 'Just-in-time para componentes automotrices',
    heroImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&fm=webp',
    description: 'Gestión JIT sincronizada con líneas de producción para plantas OEM y proveedores Tier 1.',
    stats: [
      { value: '>98%', label: 'On-Time Delivery' },
      { value: '8x/día', label: 'Milk runs' },
      { value: '±30min', label: 'Ventana entrega' },
      { value: '<100', label: 'PPM defectos' }
    ],
    features: [],
    process: [],
    benefits: ['Sincronización EDI con sistemas MES de planta', 'Milk runs programados con rutas optimizadas', 'Entregas secuenciadas según orden producción'],
    gallery: []
  },
  'pharmaceutical': {
    id: 'pharmaceutical',
    title: 'Farmacéutica',
    subtitle: 'Alta sensibilidad y cumplimiento regulatorio',
    heroImage: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&fm=webp',
    description: 'Soluciones GDP compliant para productos farmacéuticos con temperatura controlada y trazabilidad serial.',
    stats: [
      { value: '2-8°C', label: 'Control térmico' },
      { value: '100%', label: 'GDP compliance' },
      { value: '<12h', label: 'Recall execution' },
      { value: '24/7', label: 'Monitoreo continuo' }
    ],
    features: [],
    process: [],
    benefits: ['Certificación GDP Good Distribution Practices', 'Data loggers con registro continuo temperatura', 'Cadena custodia digital para productos controlados'],
    gallery: []
  },
  'tecnologia': {
    id: 'tecnologia',
    title: 'Tecnología',
    subtitle: 'Transporte seguro equipos y componentes alto valor',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&fm=webp',
    description: 'Logística especializada para equipos tecnológicos de alto valor con máxima seguridad.',
    stats: [
      { value: '$5M', label: 'Cobertura max' },
      { value: '100%', label: 'Validación IMEI/Serial' },
      { value: '<12h', label: 'Express delivery' },
      { value: '24/7', label: 'GPS tracking' }
    ],
    features: [],
    process: [],
    benefits: ['Bóveda certificada con escolta para alto valor', 'Protección ESD para componentes sensibles', 'Validación automática IMEI/serial antes entrega'],
    gallery: []
  },
  'otras': {
    id: 'otras',
    title: 'Otras Industrias',
    subtitle: 'Soluciones adaptadas a sectores especializados',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&fm=webp',
    description: 'Capacidad para adaptar soluciones logísticas a industrias con requerimientos específicos: química, construcción, agricultura, textil, editorial.',
    stats: [
      { value: '2-4sem', label: 'Diseño solución' },
      { value: '100%', label: 'Compliance sectorial' },
      { value: '24/7', label: 'Account manager' },
      { value: 'Custom', label: 'KPIs personalizados' }
    ],
    features: [],
    process: [],
    benefits: ['Workshop inicial para entender operación y pain points', 'Diseño de solución custom con KPIs relevantes', 'Compliance automático según regulación sectorial'],
    gallery: []
  }
};

const IndustryDetail = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const industry = industryId ? industriesData[industryId] : null;

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industria no encontrada</h1>
          <Link to="/" state={{ scrollTo: 'industries' }}>
            <OutlineButton>Volver a industrias</OutlineButton>
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
          src={industry.heroImage}
          alt={industry.title}
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
            <span>Volver a industrias</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {industry.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              {industry.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industry.stats.map((stat, index) => (
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
            {industry.description}
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
            {industry.features.map((feature, index) => (
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
            {industry.process.map((step, index) => (
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
            {industry.benefits.map((benefit, index) => (
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
            {industry.gallery.map((item, index) => (
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

export default IndustryDetail;
