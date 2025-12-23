import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Package, TrendingUp, Users, Shield, Zap, Clock, Globe, Award, FileText } from 'lucide-react';
import { OutlineButton } from '../components/UIButtons';
import { useRef } from 'react';

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
      {/* Hero Section - Shorter and cleaner */}
      <motion.div 
        ref={heroRef}
        className="relative h-[50vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0">
          <img 
            src={industry.heroImage} 
            alt={industry.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center">
          <Link to="/" className="mb-6">
            <button className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Volver a Inicio</span>
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-[#E41B13]/20 backdrop-blur-md text-[#E41B13] border border-[#E41B13]/30 text-sm font-semibold">
                Industria
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {industry.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              {industry.subtitle}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Cards - Floating */}
      <section className="relative -mt-16 pb-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industry.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13] to-[#C41710] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-white border border-gray-200 p-6 rounded-2xl shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-[#E41B13] to-[#C41710] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
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

      {/* Use Cases Grid - 3 columns */}
      <section className="py-16 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de Uso Especializados
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#E41B13] to-[#C41710] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg border border-gray-200 hover:border-[#E41B13]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E41B13] to-[#C41710] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E41B13] transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications - Badge style */}
      <section className="py-16 px-6 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Certificaciones y Cumplimiento
            </h2>
            <p className="text-white/80">Respaldados por los más altos estándares de la industria</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {industry.certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  {cert}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Small cards 2x3 grid */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios para tu Operación
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#E41B13] to-[#C41710] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industry.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-[#E41B13]/20 transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {industry.gallery.map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-video"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold">{item.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-br from-[#E41B13] to-[#C41710]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para optimizar tu cadena de suministro?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contáctanos y descubre cómo podemos impulsar tu operación en la industria {industry.title.toLowerCase()}
            </p>
            <Link to="/" state={{ scrollTo: 'contact' }}>
              <motion.button
                className="px-10 py-5 bg-white text-[#E41B13] rounded-full font-bold text-lg hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Cotización
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
