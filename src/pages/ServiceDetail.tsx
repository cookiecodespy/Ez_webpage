import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Package, Clock, Shield, TrendingUp, Users, Globe, Sparkles, Zap, Target, ChevronRight, Star, AlertCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface ServiceDetailData {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  heroGradient: string;
  description: string;
  stats: { value: string; label: string; icon: JSX.Element }[];
  features: { icon: JSX.Element; title: string; description: string; color: string }[];
  process: { step: number; title: string; description: string; icon: JSX.Element }[];
  benefits: { title: string; description: string }[];
  useCases: { title: string; description: string; icon: JSX.Element }[];
}

const servicesData: Record<string, ServiceDetailData> = {
  'almacenaje-distribucion': {
    id: 'almacenaje-distribucion',
    title: 'Contract Logistics',
    subtitle: 'Almacenamiento inteligente',
    tagline: 'Tu inventario optimizado 24/7',
    heroGradient: 'from-[#E41B13] via-[#B81710] to-[#8B0000]',
    description: 'Solución integral que integra almacenamiento, gestión de inventario SKU y distribución estratégica. Tecnología WMS con visibilidad total desde un solo partner.',
    stats: [
      { value: '50K+', label: 'm² Instalaciones', icon: <Package className="h-5 w-5" /> },
      { value: '99.8%', label: 'Precisión', icon: <Target className="h-5 w-5" /> },
      { value: '24/7', label: 'Operación', icon: <Clock className="h-5 w-5" /> },
      { value: '15K+', label: 'SKUs', icon: <TrendingUp className="h-5 w-5" /> }
    ],
    features: [
      {
        icon: <Package className="h-6 w-6" />,
        title: 'Warehousing Estratégico',
        description: 'Ubicaciones clave con racks selectivos y zonas climatizadas',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        icon: <TrendingUp className="h-6 w-6" />,
        title: 'Distribución Multicanal',
        description: 'B2B, B2C, retail y e-commerce con fulfillment personalizado',
        color: 'from-purple-500 to-pink-500'
      },
      {
        icon: <Shield className="h-6 w-6" />,
        title: 'Control SKU',
        description: 'Trazabilidad completa con WMS VULCANO',
        color: 'from-orange-500 to-red-500'
      },
      {
        icon: <Sparkles className="h-6 w-6" />,
        title: 'Value-Added Services',
        description: 'Kitting, etiquetado, reempaque y control de calidad',
        color: 'from-green-500 to-emerald-500'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Diseño',
        description: 'Análisis y diseño de layout óptimo',
        icon: <Target className="h-5 w-5" />
      },
      {
        step: 2,
        title: 'Recepción',
        description: 'Ingreso con inspección de calidad',
        icon: <Package className="h-5 w-5" />
      },
      {
        step: 3,
        title: 'Gestión',
        description: 'Monitoreo continuo con alertas',
        icon: <TrendingUp className="h-5 w-5" />
      },
      {
        step: 4,
        title: 'Fulfillment',
        description: 'Picking, packing y control',
        icon: <CheckCircle2 className="h-5 w-5" />
      },
      {
        step: 5,
        title: 'Distribución',
        description: 'Entrega con POD digital',
        icon: <Zap className="h-5 w-5" />
      }
    ],
    benefits: [
      { title: 'Reducción de Costos', description: 'Sin inversión en infraestructura propia' },
      { title: 'Escalabilidad', description: 'Flexible para picos estacionales' },
      { title: 'Visibilidad', description: 'Dashboards en tiempo real' },
      { title: 'Certificación', description: 'Procesos ISO 9001:2015' }
    ],
    useCases: [
      { title: 'E-commerce', description: 'Fulfillment para tiendas online', icon: <Globe className="h-5 w-5" /> },
      { title: 'Retail', description: 'Distribución a sucursales', icon: <Package className="h-5 w-5" /> },
      { title: 'Industrial', description: 'Almacenaje de insumos', icon: <Shield className="h-5 w-5" /> }
    ]
  },
  'ultima-milla': {
    id: 'ultima-milla',
    title: 'Última Milla',
    subtitle: 'Entrega final perfecta',
    tagline: 'Del hub a tu cliente en 24h',
    heroGradient: 'from-[#E41B13] via-[#B81710] to-[#8B0000]',
    description: 'El tramo final donde se define la experiencia del consumidor. Entregas B2B y B2C con tecnología de ruteo, tracking real-time y POD digital.',
    stats: [
      { value: '15K+', label: 'Entregas/mes', icon: <Package className="h-5 w-5" /> },
      { value: '98.5%', label: 'Éxito', icon: <Star className="h-5 w-5" /> },
      { value: '24h', label: 'Promedio', icon: <Clock className="h-5 w-5" /> },
      { value: '100%', label: 'Tracking', icon: <Zap className="h-5 w-5" /> }
    ],
    features: [
      {
        icon: <Users className="h-6 w-6" />,
        title: 'Entrega B2C',
        description: 'Directo al consumidor con notificaciones SMS/email',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        icon: <Package className="h-6 w-6" />,
        title: 'Entregas B2B',
        description: 'Programadas a sucursales con documentación',
        color: 'from-purple-500 to-pink-500'
      },
      {
        icon: <Zap className="h-6 w-6" />,
        title: 'Same-Day Express',
        description: 'Urgentes en el mismo día',
        color: 'from-orange-500 to-red-500'
      },
      {
        icon: <Shield className="h-6 w-6" />,
        title: 'Logística Inversa',
        description: 'Gestión de devoluciones simplificada',
        color: 'from-green-500 to-emerald-500'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Recepción',
        description: 'Ingreso al hub con escaneo',
        icon: <Package className="h-5 w-5" />
      },
      {
        step: 2,
        title: 'Ruteo',
        description: 'Optimización de rutas',
        icon: <Target className="h-5 w-5" />
      },
      {
        step: 3,
        title: 'Tracking',
        description: 'GPS activo y notificaciones',
        icon: <Globe className="h-5 w-5" />
      },
      {
        step: 4,
        title: 'Entrega',
        description: 'POD digital con foto/firma',
        icon: <CheckCircle2 className="h-5 w-5" />
      },
      {
        step: 5,
        title: 'Excepciones',
        description: 'Reprogramación ágil',
        icon: <AlertCircle className="h-5 w-5" />
      }
    ],
    benefits: [
      { title: 'Ventanas Horarias', description: 'Entregas programadas' },
      { title: 'Tracking Real-Time', description: 'Visibilidad completa' },
      { title: 'POD Digital', description: 'Prueba con geolocalización' },
      { title: 'Flota Propia', description: 'Cobertura urbana completa' }
    ],
    useCases: [
      { title: 'E-commerce', description: 'Entregas a domicilio', icon: <Globe className="h-5 w-5" /> },
      { title: 'Retail', description: 'Reabastecimiento tiendas', icon: <Package className="h-5 w-5" /> },
      { title: 'Farmacia', description: 'Entrega de medicamentos', icon: <Shield className="h-5 w-5" /> }
    ]
  },
  'transporte-terrestre': {
    id: 'transporte-terrestre',
    title: 'Transporte Terrestre',
    subtitle: 'Rutas optimizadas',
    tagline: 'FTL y LTL con GPS 24/7',
    heroGradient: 'from-[#E41B13] via-[#B81710] to-[#8B0000]',
    description: 'Distribución nacional e internacional con flota moderna. Coordinamos FTL (carga completa) y LTL (consolidada) con seguimiento GPS.',
    stats: [
      { value: '200+', label: 'Camiones', icon: <Package className="h-5 w-5" /> },
      { value: '99%', label: 'Puntualidad', icon: <Clock className="h-5 w-5" /> },
      { value: '24/7', label: 'Monitoreo', icon: <Globe className="h-5 w-5" /> },
      { value: '10K+', label: 'Envíos/mes', icon: <TrendingUp className="h-5 w-5" /> }
    ],
    features: [
      {
        icon: <Package className="h-6 w-6" />,
        title: 'FTL - Carga Completa',
        description: 'Camiones dedicados para capacidad total',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        icon: <TrendingUp className="h-6 w-6" />,
        title: 'LTL - Consolidado',
        description: 'Optimización compartiendo espacio',
        color: 'from-purple-500 to-pink-500'
      },
      {
        icon: <Shield className="h-6 w-6" />,
        title: 'Flota Especializada',
        description: 'Refrigerados, plataformas, furgones',
        color: 'from-orange-500 to-red-500'
      },
      {
        icon: <Globe className="h-6 w-6" />,
        title: 'Cross-Border',
        description: 'Internacional con gestión aduanera',
        color: 'from-green-500 to-emerald-500'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Cotización',
        description: 'Evaluación de carga y ruta',
        icon: <Target className="h-5 w-5" />
      },
      {
        step: 2,
        title: 'Recolección',
        description: 'Retiro coordinado',
        icon: <Package className="h-5 w-5" />
      },
      {
        step: 3,
        title: 'Transporte',
        description: 'Seguimiento GPS',
        icon: <Globe className="h-5 w-5" />
      },
      {
        step: 4,
        title: 'Entrega',
        description: 'Descarga con POD',
        icon: <CheckCircle2 className="h-5 w-5" />
      }
    ],
    benefits: [
      { title: 'Flota Moderna', description: 'Mantenimiento preventivo' },
      { title: 'GPS Real-Time', description: 'Seguimiento continuo' },
      { title: 'Flexible', description: 'FTL y LTL según volumen' },
      { title: 'Seguro Incluido', description: 'Protección de carga' }
    ],
    useCases: [
      { title: 'Industrial', description: 'Transporte de insumos', icon: <Shield className="h-5 w-5" /> },
      { title: 'Retail', description: 'Distribución nacional', icon: <Package className="h-5 w-5" /> },
      { title: 'Construcción', description: 'Materiales pesados', icon: <Target className="h-5 w-5" /> }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const location = useLocation();
  const service = serviceId ? servicesData[serviceId] : servicesData['almacenaje-distribucion'];
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const fromIndustries = location.state?.from === 'industries' || document.referrer.includes('/industrias/');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Servicio no encontrado</h1>
          <Link to="/" state={{ scrollTo: fromIndustries ? 'industries' : 'services' }}>
            <button className="px-6 py-3 bg-gradient-to-r from-[#E41B13] to-[#8B0000] text-white rounded-xl font-bold hover:scale-105 transition-transform">
              Volver a {fromIndustries ? 'industrias' : 'servicios'}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(228,27,19,0.15),transparent_50%)]" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E41B13]/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B0000]/10 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Compact Hero Section */}
      <div className="relative min-h-[50vh] flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              state={{ scrollTo: fromIndustries ? 'industries' : 'services' }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 hover:bg-white/20 transition-all mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Volver a {fromIndustries ? 'industrias' : 'servicios'}
            </Link>
          </motion.div>

          {/* Hero Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#E41B13]/20 to-[#8B0000]/20 border border-[#E41B13]/30 rounded-full text-sm font-semibold mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {service.subtitle}
              </motion.span>
              
              <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {service.title}
              </h1>
              
              <p className="text-2xl text-[#E41B13] font-bold mb-4">
                {service.tagline}
              </p>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {service.description}
              </p>

              <Link
                to="/"
                state={{ scrollTo: 'contact' }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-red-500/50 group"
              >
                Solicitar Cotización
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right: Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {service.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-2xl blur opacity-20 group-hover:opacity-40 transition" />
                  <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                    <div className="text-[#E41B13] mb-3">{stat.icon}</div>
                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features - Bento Grid Style */}
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black mb-8 text-center"
        >
          Características Clave
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {service.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveFeature(index)}
              className="relative group cursor-pointer"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`} />
              <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className={`inline-flex p-3 bg-gradient-to-r ${feature.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process - Interactive Stepper */}
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black mb-8 text-center"
        >
          Proceso
        </motion.h2>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-white/10 hidden md:block" />
          <motion.div
            className="absolute top-8 left-0 h-1 bg-gradient-to-r from-[#E41B13] to-[#8B0000] hidden md:block"
            initial={{ width: '0%' }}
            whileInView={{ width: `${(activeProcess / (service.process.length - 1)) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <div className="grid md:grid-cols-5 gap-6 relative">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveProcess(index)}
                className="relative group cursor-pointer"
              >
                {/* Step Number Circle */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center font-black text-xl transition-all ${
                  activeProcess >= index
                    ? 'bg-gradient-to-r from-[#E41B13] to-[#8B0000] text-white scale-110'
                    : 'bg-white/5 border border-white/20 text-gray-500'
                }`}>
                  <div className="text-white">{step.icon}</div>
                </div>

                <div className="text-center">
                  <h4 className="font-bold mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits - Card Grid */}
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black mb-8 text-center"
        >
          Beneficios
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-xl blur opacity-20 group-hover:opacity-40 transition" />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all h-full">
                <div className="w-2 h-2 bg-[#E41B13] rounded-full mb-3" />
                <h4 className="font-bold mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black mb-8 text-center"
        >
          Casos de Uso
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {service.useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-2xl blur opacity-0 group-hover:opacity-30 transition" />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="text-[#E41B13] mb-4">{useCase.icon}</div>
                <h4 className="font-bold mb-2 text-lg">{useCase.title}</h4>
                <p className="text-sm text-gray-400">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 mt-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#E41B13] via-[#B81710] to-[#8B0000]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            ¿Listo para optimizar tu logística?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Conversemos sobre cómo podemos ayudarte
          </p>
          <Link
            to="/"
            state={{ scrollTo: 'contact' }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 group"
          >
            Contactar Ahora
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;
