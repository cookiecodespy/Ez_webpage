import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Package, TrendingUp, Users, Shield, Zap, Clock, Globe, Award, FileText, Sparkles, ArrowDown } from 'lucide-react';
import { OutlineButton } from '../components/UIButtons';
import { useRef, useState, useEffect } from 'react';

// Hook para contador animado
const useCountUp = (end: number, duration: number = 2000, suffix: string = '') => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    
    const isPercentage = suffix.includes('%');
    const isTemperature = suffix.includes('°');
    const endValue = isPercentage || isTemperature ? parseFloat(end.toString()) : parseInt(end.toString());
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * endValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration, suffix]);

  return { count, start: () => setHasStarted(true), hasStarted };
};

interface IndustryDetailData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  stats: { value: string; label: string }[];
  useCases: { icon: JSX.Element; title: string; description: string }[];
  certifications: string[];
  benefits: string[];
  gallery: { image: string; caption: string }[];
}

const IndustryDetail = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const heroRef = useRef(null);

  const industries: Record<string, IndustryDetailData> = {
    'retail': {
      id: 'retail',
      title: 'Retail',
      subtitle: 'Optimización logística end-to-end para el comercio minorista',
      heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&fm=webp',
      description: 'Nuestro servicio de logística para el retail está diseñado para optimizar su cadena de suministro de principio a fin, garantizando que sus productos lleguen a la tienda o directamente al consumidor final, en el momento preciso y en perfectas condiciones. Con tecnología avanzada y un equipo de expertos, le ayudamos a reducir costos, minimizar errores y construir la lealtad de sus clientes.',
      stats: [
        { value: '99.8%', label: 'Puntualidad' },
        { value: '48h', label: 'Tiempo Medio' },
        { value: '500+', label: 'Tiendas Servidas' },
        { value: '24/7', label: 'Operación' }
      ],
      useCases: [
        {
          icon: <Package className="h-6 w-6" />,
          title: 'Gestión de Inventario',
          description: 'Control en tiempo real de stock en múltiples ubicaciones'
        },
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: 'Distribución Eficiente',
          description: 'Red optimizada de centros de distribución regionales'
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: 'Fulfillment E-commerce',
          description: 'Preparación y envío de pedidos online en tiempo récord'
        },
        {
          icon: <Clock className="h-6 w-6" />,
          title: 'Logística Inversa',
          description: 'Gestión eficiente de devoluciones y cambios'
        },
        {
          icon: <Shield className="h-6 w-6" />,
          title: 'Control de Calidad',
          description: 'Inspección y verificación de mercancía'
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: 'Cross-Docking',
          description: 'Reducción de tiempos de almacenamiento'
        }
      ],
      certifications: ['ISO 9001:2015', 'Almacenes Certificados', 'WMS Integrado'],
      benefits: [
        'Reducción de costos operativos mediante centralización',
        'Visibilidad completa de inventario multi-tienda',
        'Entregas programadas según demanda de cada punto de venta',
        'Escalabilidad para temporadas altas (Black Friday, Navidad)',
        'Integración con sistemas ERP y POS',
        'Picking y packing especializado para e-commerce'
      ],
      gallery: [
        { image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&fm=webp', caption: 'Centro de distribución retail' },
        { image: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?q=80&w=800&fm=webp', caption: 'Fulfillment e-commerce' },
        { image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?q=80&w=800&fm=webp', caption: 'Control de inventario' }
      ]
    },
    'aerospace': {
      id: 'aerospace',
      title: 'Aerospace',
      subtitle: 'Logística de precisión para la industria aeroespacial',
      heroImage: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1600&fm=webp',
      description: 'La industria aeroespacial exige una logística de máxima precisión y seguridad, donde cada componente es crítico. Ofrecemos soluciones logísticas especializadas para este sector, coordinando el transporte de piezas sensibles y de alto valor en un entorno global de estrictas regulaciones. Desde la gestión de piezas AOG hasta componentes para ensamblaje de aeronaves.',
      stats: [
        { value: '99.9%', label: 'Precisión' },
        { value: '12h', label: 'AOG Response' },
        { value: '100%', label: 'Trazabilidad' },
        { value: '$50M+', label: 'Carga Asegurada' }
      ],
      useCases: [
        {
          icon: <Zap className="h-6 w-6" />,
          title: 'AOG (Aircraft on Ground)',
          description: 'Respuesta urgente para piezas críticas en menos de 12h'
        },
        {
          icon: <Shield className="h-6 w-6" />,
          title: 'Componentes Certificados',
          description: 'Manejo especializado con documentación completa'
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: 'Transporte Multimodal',
          description: 'Aéreo prioritario y terrestre para componentes de gran tamaño'
        },
        {
          icon: <FileText className="h-6 w-6" />,
          title: 'Cumplimiento Normativo',
          description: 'IATA, FAA, EASA y regulaciones internacionales'
        },
        {
          icon: <Package className="h-6 w-6" />,
          title: 'Embalaje Especializado',
          description: 'Protección para componentes sensibles y de alto valor'
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: 'Almacenamiento Controlado',
          description: 'Bodegas con temperatura y humedad reguladas'
        }
      ],
      certifications: ['ISO 9001:2015', 'IATA Certified', 'Handling Certification'],
      benefits: [
        'Respuesta inmediata para situaciones AOG críticas',
        'Trazabilidad completa con documentación aeronáutica',
        'Seguros especializados para componentes de alto valor',
        'Personal capacitado en handling aeroespacial',
        'Red global de partners certificados',
        'Visibilidad en tiempo real de envíos críticos'
      ],
      gallery: [
        { image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&fm=webp', caption: 'Componentes aeroespaciales' },
        { image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=800&fm=webp', caption: 'Almacenamiento certificado' },
        { image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&fm=webp', caption: 'Logística aeronáutica' }
      ]
    },
    'alimentaria': {
      id: 'alimentaria',
      title: 'Alimentaria',
      subtitle: 'Cadena de frío y seguridad alimentaria garantizada',
      heroImage: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1600&fm=webp',
      description: 'En la industria alimentaria, la logística es una promesa de calidad y seguridad. Entendemos que la frescura y la integridad de los alimentos son fundamentales, por lo que ofrecemos una cadena de suministro perfectamente controlada desde el origen hasta el destino final, con estrictos protocolos de temperatura y manipulación.',
      stats: [
        { value: '100%', label: 'Trazabilidad' },
        { value: '-18°C', label: 'Temperatura Control' },
        { value: '0.1%', label: 'Merma' },
        { value: 'HACCP', label: 'Certificación' }
      ],
      useCases: [
        {
          icon: <Package className="h-6 w-6" />,
          title: 'Cadena de Frío',
          description: 'Control de temperatura en todo el trayecto'
        },
        {
          icon: <Shield className="h-6 w-6" />,
          title: 'Seguridad Alimentaria',
          description: 'Protocolos HACCP y BRC implementados'
        },
        {
          icon: <Clock className="h-6 w-6" />,
          title: 'Productos Perecibles',
          description: 'Entregas express para máxima frescura'
        },
        {
          icon: <FileText className="h-6 w-6" />,
          title: 'Certificación Sanitaria',
          description: 'Gestión de permisos y documentos sanitarios'
        },
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: 'Trazabilidad Lote',
          description: 'Seguimiento por lote y fecha de vencimiento'
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: 'Almacenes Refrigerados',
          description: 'Instalaciones con certificación sanitaria'
        }
      ],
      certifications: ['HACCP', 'BRC Global Standards', 'ISO 9001:2015'],
      benefits: [
        'Bodegas refrigeradas con monitoreo 24/7',
        'Transporte con unidades frigoríficas certificadas',
        'Trazabilidad completa desde origen hasta consumidor',
        'Cumplimiento de normativas sanitarias nacionales',
        'Gestión de fechas de vencimiento y rotación FIFO',
        'Protocolos de limpieza y desinfección constantes'
      ],
      gallery: [
        { image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&fm=webp', caption: 'Almacén refrigerado' },
        { image: 'https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=800&fm=webp', caption: 'Control de calidad' },
        { image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=800&fm=webp', caption: 'Distribución alimentaria' }
      ]
    },
    'industrial': {
      id: 'industrial',
      title: 'Industrial',
      subtitle: 'Logística robusta para manufactura e industria pesada',
      heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&fm=webp',
      description: 'Desde el transporte especializado de maquinaria pesada hasta la gestión de proyectos complejos y el almacenamiento de inventarios, nuestra experiencia asegura que cada operación se realice con la máxima eficiencia, seguridad y precisión. Mantenemos su producción en constante funcionamiento y crecimiento.',
      stats: [
        { value: '500T', label: 'Capacidad Máxima' },
        { value: '98.5%', label: 'On-Time Delivery' },
        { value: '50+', label: 'Proyectos/Año' },
        { value: '24/7', label: 'Operación' }
      ],
      useCases: [
        {
          icon: <Package className="h-6 w-6" />,
          title: 'Maquinaria Pesada',
          description: 'Transporte de equipos industriales de gran tonelaje'
        },
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: 'Just-in-Time',
          description: 'Entregas sincronizadas con líneas de producción'
        },
        {
          icon: <Shield className="h-6 w-6" />,
          title: 'Project Cargo',
          description: 'Coordinación de cargas sobredimensionadas'
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: 'Almacenamiento Industrial',
          description: 'Bodegas con equipos de izaje especializados'
        },
        {
          icon: <FileText className="h-6 w-6" />,
          title: 'Inventario Técnico',
          description: 'Gestión de repuestos y componentes críticos'
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: 'Cadena de Suministro',
          description: 'Coordinación con proveedores globales'
        }
      ],
      certifications: ['ISO 9001:2015', 'Heavy Lift Certified', 'Safety Protocols'],
      benefits: [
        'Equipos de transporte para cargas pesadas y sobredimensionadas',
        'Almacenes con capacidad para maquinaria industrial',
        'Coordinación de permisos especiales para transporte',
        'Seguros especializados para equipos de alto valor',
        'Personal capacitado en manejo industrial',
        'Planificación logística para proyectos complejos'
      ],
      gallery: [
        { image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&fm=webp', caption: 'Maquinaria industrial' },
        { image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&fm=webp', caption: 'Almacén industrial' },
        { image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=800&fm=webp', caption: 'Transporte pesado' }
      ]
    },
    'automotriz': {
      id: 'automotriz',
      title: 'Automotriz',
      subtitle: 'Cadena de suministro just-in-time para la industria automotriz',
      heroImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&fm=webp',
      description: 'Ofrecemos soluciones especializadas para gestionar la compleja cadena de suministro de piezas y componentes automotrices, asegurando entregas just-in-time a las plantas de fabricación. Manejo delicado de partes sensibles, sincronización perfecta con líneas de ensamblaje y trazabilidad total para cumplir con los exigentes estándares de la industria.',
      stats: [
        { value: '99.5%', label: 'JIT Compliance' },
        { value: '4h', label: 'Ventana Entrega' },
        { value: '1000+', label: 'SKUs Activos' },
        { value: '0.05%', label: 'Tasa de Error' }
      ],
      useCases: [
        {
          icon: <Clock className="h-6 w-6" />,
          title: 'Just-in-Time (JIT)',
          description: 'Entregas sincronizadas con líneas de producción'
        },
        {
          icon: <Package className="h-6 w-6" />,
          title: 'Secuenciación de Partes',
          description: 'Orden exacto según ensamblaje de vehículos'
        },
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: 'Cross-Docking Automotriz',
          description: 'Consolidación rápida de componentes'
        },
        {
          icon: <Shield className="h-6 w-6" />,
          title: 'Control de Calidad',
          description: 'Inspección de partes según estándares OEM'
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: 'Importación de Componentes',
          description: 'Gestión aduanera especializada automotriz'
        },
        {
          icon: <FileText className="h-6 w-6" />,
          title: 'Trazabilidad VIN',
          description: 'Seguimiento por número de serie de vehículo'
        }
      ],
      certifications: ['ISO 9001:2015', 'OEM Approved', 'JIT Certified'],
      benefits: [
        'Entregas en ventanas horarias de 2-4 horas',
        'Almacenamiento con sistemas Kanban',
        'Gestión de inventario consignado',
        'Integración EDI con plantas automotrices',
        'Embalaje retornable y eco-friendly',
        'Respuesta rápida ante cambios de producción'
      ],
      gallery: [
        { image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&fm=webp', caption: 'Componentes automotrices' },
        { image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&fm=webp', caption: 'Almacén JIT' },
        { image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=800&fm=webp', caption: 'Distribución automotriz' }
      ]
    },
    'pharmaceutical': {
      id: 'pharmaceutical',
      title: 'Pharmaceutical',
      subtitle: 'Logística regulada para productos farmacéuticos y dispositivos médicos',
      heroImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1600&fm=webp',
      description: 'En la industria farmacéutica, la precisión, la seguridad y el cumplimiento de las normativas son vitales. Ofrecemos soluciones logísticas especializadas para gestionar productos de alta sensibilidad con la máxima rigurosidad. Garantizamos la integridad de medicamentos y dispositivos médicos en cada etapa, con cadena de frío validada y visibilidad total.',
      stats: [
        { value: '100%', label: 'Trazabilidad GDP' },
        { value: '2-8°C', label: 'Control Temperatura' },
        { value: '99.9%', label: 'Integridad Producto' },
        { value: 'GMP', label: 'Certificación' }
      ],
      useCases: [
        {
          icon: <Shield className="h-6 w-6" />,
          title: 'Cadena de Frío Validada',
          description: 'Control 2-8°C con validación térmica completa'
        },
        {
          icon: <FileText className="h-6 w-6" />,
          title: 'Cumplimiento GDP',
          description: 'Good Distribution Practices implementadas'
        },
        {
          icon: <Package className="h-6 w-6" />,
          title: 'Productos Controlados',
          description: 'Manejo de estupefacientes y psicotrópicos'
        },
        {
          icon: <Clock className="h-6 w-6" />,
          title: 'Entregas Urgentes',
          description: 'Distribución prioritaria para casos críticos'
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: 'Serialización',
          description: 'Trazabilidad por lote y número de serie'
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: 'Importación Regulada',
          description: 'Gestión de permisos sanitarios ISP/ANAMED'
        }
      ],
      certifications: ['GDP Certified', 'GMP Compliance', 'ISO 9001:2015', 'ISP Authorized'],
      benefits: [
        'Almacenes con certificación sanitaria vigente',
        'Equipos de transporte validados térmicamente',
        'Personal capacitado en manejo farmacéutico',
        'Trazabilidad lote por lote según normativa',
        'Gestión de productos con temperatura controlada',
        'Protocolos de seguridad para medicamentos controlados'
      ],
      gallery: [
        { image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800&fm=webp', caption: 'Almacén farmacéutico' },
        { image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&fm=webp', caption: 'Control de temperatura' },
        { image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&fm=webp', caption: 'Distribución farmacéutica' }
      ]
    }
  };

  const industry = industryId ? industries[industryId] : null;

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Industria no encontrada</h2>
          <Link to="/">
            <OutlineButton>Volver al inicio</OutlineButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Ultra Modern with Parallax */}
      <motion.div 
        ref={heroRef}
        className="relative h-screen min-h-[800px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0"
          style={{
            scale: useTransform(
              useScroll({ target: heroRef }).scrollYProgress,
              [0, 1],
              [1, 1.2]
            )
          }}
        >
          <img 
            src={industry.heroImage} 
            alt={industry.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/85 to-[#E41B13]/40" />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Decorative Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#E41B13]/30 rounded-full blur-3xl animate-pulse-ring" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />

        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center">
          {/* Back Button - Modern */}
          <Link to="/" className="mb-8 group">
            <motion.button 
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
              whileHover={{ x: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Volver</span>
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge with Glow */}
            <div className="inline-block">
              <motion.div
                className="relative px-6 py-3 rounded-full bg-gradient-to-r from-[#E41B13] to-[#C41710] text-white font-bold shadow-lg shadow-[#E41B13]/50"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(228, 27, 19, 0.5)',
                    '0 0 40px rgba(228, 27, 19, 0.8)',
                    '0 0 20px rgba(228, 27, 19, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-wider">Industria Especializada</span>
                </div>
              </motion.div>
            </div>

            {/* Title - Massive and Dramatic */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {industry.title}
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p 
              className="text-2xl md:text-3xl text-white/90 max-w-3xl font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {industry.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link to="/" state={{ scrollTo: 'contact' }}>
                <motion.button
                  className="group relative px-8 py-4 bg-white text-[#E41B13] rounded-full font-bold text-lg overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Solicitar Consultoría</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  />
                </motion.button>
              </Link>
              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Casos de Éxito
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2 text-white/70">
              <span className="text-sm font-medium">Scroll para explorar</span>
              <ArrowDown className="h-6 w-6" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Cards - Animated Counter with 3D Effects */}
      <section className="relative -mt-32 pb-20 px-6 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industry.stats.map((stat, index) => {
              const StatCard = () => {
                const { count, start, hasStarted } = useCountUp(
                  parseFloat(stat.value.replace(/[^\d.-]/g, '')) || 0,
                  2000,
                  stat.value
                );
                const [isVisible, setIsVisible] = useState(false);

                useEffect(() => {
                  if (isVisible && !hasStarted) {
                    start();
                  }
                }, [isVisible, hasStarted, start]);

                const displayValue = stat.value.replace(/[\d.]+/, count.toString());

                return (
                  <motion.div
                    className="group relative perspective-1000"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    onViewportEnter={() => setIsVisible(true)}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    whileHover={{ 
                      rotateY: 5,
                      rotateX: 5,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Glow Effect - Enhanced */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#E41B13] via-[#FF6B6B] to-[#C41710] rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                        backgroundSize: '24px 24px'
                      }} />
                    </div>

                    {/* Card Content */}
                    <div className="relative bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-2xl overflow-hidden"
                         style={{ transform: 'translateZ(20px)' }}>
                      
                      {/* Animated Background Gradient */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E41B13]/10 to-transparent rounded-bl-full" />
                      
                      {/* Value */}
                      <div className="relative">
                        <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-[#E41B13] via-[#FF4444] to-[#C41710] bg-clip-text text-transparent mb-3">
                          {hasStarted ? displayValue : stat.value}
                        </div>
                        <div className="text-sm md:text-base text-gray-600 font-semibold uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>

                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 5,
                          ease: "easeInOut"
                        }}
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </div>
                  </motion.div>
                );
              };

              return <StatCard key={index} />;
            })}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {industry.description}
          </motion.p>
        </div>
      </section>

      {/* Use Cases Grid - 3D Hover Effects */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E41B13]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#E41B13]/10 text-[#E41B13] rounded-full text-sm font-bold mb-4">
                Soluciones Especializadas
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Casos de Uso
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#E41B13] to-[#C41710] mx-auto rounded-full" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Gradient Background */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E41B13] via-[#FF6B6B] to-[#E41B13] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 animate-gradient" />
                
                <div className="relative bg-white p-8 rounded-2xl border-2 border-gray-100 group-hover:border-transparent transition-all duration-300 overflow-hidden h-full">
                  {/* Icon Container with Modern Design */}
                  <div className="relative mb-6">
                    {/* Animated Background Circle */}
                    <motion.div
                      className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#E41B13]/20 to-purple-500/20 blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Icon with Gradient Background */}
                    <motion.div 
                      className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-[#E41B13] via-[#FF4444] to-[#C41710] flex items-center justify-center text-white shadow-2xl"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1 
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="transform scale-125">
                        {useCase.icon}
                      </div>
                    </motion.div>
                    
                    {/* Decorative Dots */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  </div>

                  {/* Content with Better Spacing */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E41B13] transition-colors duration-300 leading-tight">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {useCase.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#E41B13] to-transparent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications - Animated Badges with Shine */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-[#E41B13]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-bold mb-4">
                Calidad Garantizada
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Certificaciones y Cumplimiento
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Respaldados por los más altos estándares de la industria
              </p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {industry.certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, rotateY: -90, scale: 0.5 }}
                whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#E41B13] to-[#FF6B6B] rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />
                
                <div className="relative px-8 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl overflow-hidden">
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut"
                    }}
                    style={{ transform: 'skewX(-20deg)' }}
                  />

                  {/* Content */}
                  <div className="flex items-center gap-3 relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Award className="h-6 w-6 text-white" />
                    </motion.div>
                    <span className="text-white font-bold text-lg">{cert}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Enhanced with Shine Effects */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#E41B13]/10 text-[#E41B13] rounded-full text-sm font-bold mb-4">
                Ventajas Competitivas
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Beneficios para tu Operación
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#E41B13] to-[#C41710] mx-auto rounded-full" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute -inset-1 bg-gradient-to-br from-green-400/50 to-emerald-500/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                
                {/* Card */}
                <motion.div
                  className="relative h-full p-6 bg-white rounded-2xl border border-gray-200 hover:border-green-400/50 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl"
                  whileHover={{ y: -8 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 via-emerald-50/0 to-teal-50/0 group-hover:from-green-50/50 group-hover:via-emerald-50/30 group-hover:to-teal-50/20 transition-all duration-500" />

                  <div className="relative flex items-start gap-4">
                    {/* Modern Check Icon */}
                    <motion.div
                      className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-green-500/50 transition-all duration-300"
                      whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <CheckCircle2 className="h-7 w-7 text-white" />
                      
                      {/* Glow Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-green-400"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                    </motion.div>

                    {/* Text */}
                    <p className="flex-1 text-gray-700 leading-relaxed pt-3 group-hover:text-gray-900 transition-colors">
                      {benefit}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-green-100/0 to-transparent group-hover:from-green-100/30 rounded-tl-full transition-all duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - 3D Effects with Progress Bar */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#E41B13]/10 text-[#E41B13] rounded-full text-sm font-bold mb-4">
                Nuestras Instalaciones
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Galería Visual
              </h2>
              {/* Decorative Progress Bar */}
              <motion.div 
                className="w-32 h-1.5 bg-gradient-to-r from-[#E41B13] to-[#C41710] mx-auto rounded-full mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industry.gallery.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#E41B13] via-purple-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-70 blur-2xl transition-all duration-500" />
                
                {/* Card Container */}
                <motion.div
                  className="relative overflow-hidden rounded-3xl aspect-video shadow-2xl"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Image with Zoom */}
                  <motion.img 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Modern Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500">
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      {/* Caption with Animation */}
                      <motion.p 
                        className="text-white font-bold text-lg mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {item.caption}
                      </motion.p>
                      
                      {/* Animated Accent Bar */}
                      <motion.div 
                        className="h-1.5 bg-gradient-to-r from-[#E41B13] via-purple-500 to-blue-500 rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: '100%', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.4, duration: 0.8 }}
                      />
                      
                      {/* View Details Link */}
                      <motion.div
                        className="mt-3 flex items-center gap-2 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <span className="font-medium">Ver detalles</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#E41B13]/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Ultra Modern with Floating Shapes */}
      <section className="relative py-32 px-6 md:px-8 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13] via-[#FF4444] to-[#C41710] animate-gradient" />
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-4 border-white/20 rounded-3xl"
          animate={{
            rotate: [0, 180, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 border-4 border-white/20 rounded-full"
          animate={{
            rotate: [360, 180, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl"
          animate={{
            rotate: [0, 90, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Pulsating Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Soluciones Personalizadas', 'Respuesta 24/7', 'Cobertura Global'].map((badge, i) => (
                <motion.div
                  key={i}
                  className="px-5 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-semibold"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                >
                  {badge}
                </motion.div>
              ))}
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              ¿Listo para transformar tu
              <br />
              <span className="inline-block bg-white text-[#E41B13] px-6 py-2 rounded-2xl mt-2">
                cadena de suministro?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contáctanos y descubre cómo podemos impulsar tu operación en la industria <span className="font-bold">{industry.title.toLowerCase()}</span> con soluciones innovadoras y eficientes
            </p>

            {/* CTA Buttons with Shine */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/" state={{ scrollTo: 'contact' }}>
                <motion.button
                  className="group relative px-10 py-5 bg-white text-[#E41B13] rounded-full font-bold text-lg overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Solicitar Cotización
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E41B13]/20 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut"
                    }}
                    style={{ transform: 'skewX(-20deg)' }}
                  />
                </motion.button>
              </Link>
              <motion.button
                className="px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/40 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-xl"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Casos de Éxito
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 text-white/80 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: <Users className="h-5 w-5" />, text: '500+ Clientes Satisfechos' },
                { icon: <Shield className="h-5 w-5" />, text: 'Certificaciones Internacionales' },
                { icon: <Zap className="h-5 w-5" />, text: 'Respuesta en 24h' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1, color: '#ffffff' }}
                >
                  {item.icon}
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
