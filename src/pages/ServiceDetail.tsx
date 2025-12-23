import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Package, Clock, Shield, TrendingUp, Users, Globe, Sparkles, Zap, Target, Download } from 'lucide-react';
import { OutlineButton } from '../components/UIButtons';
import { useRef, useState } from 'react';

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
  'freight-forwarding': {
    id: 'freight-forwarding',
    title: 'Freight Forwarding',
    subtitle: 'Gestión integral de tu cadena de suministro internacional',
    heroImage: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1600&fm=webp',
    description: 'El servicio de Freight Forwarding incluye una amplia gama de actividades logísticas que van desde la planificación del envío hasta la entrega final. En lugar de solo transportar la mercancía, actuamos como intermediario y gestor integral de toda tu cadena de suministro internacional, coordinando cada etapa para garantizar tiempos competitivos y máxima seguridad.',
    stats: [
      { value: '150+', label: 'Destinos Globales' },
      { value: '98%', label: 'Entregas Puntuales' },
      { value: '24/7', label: 'Tracking en Tiempo Real' },
      { value: '15K+', label: 'Envíos Anuales' }
    ],
    features: [
      {
        icon: <Globe className="h-8 w-8" />,
        title: 'Transporte Aéreo',
        description: 'Envíos urgentes y productos de alto valor con tiempos de tránsito reducidos y máxima seguridad'
      },
      {
        icon: <Package className="h-8 w-8" />,
        title: 'Transporte Marítimo',
        description: 'Solución económica para grandes volúmenes, FCL y LCL con consolidación optimizada'
      },
      {
        icon: <TrendingUp className="h-8 w-8" />,
        title: 'Transporte Terrestre',
        description: 'Conexiones terrestres eficientes para rutas regionales y cross-border'
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: 'Seguro de Carga',
        description: 'Protección integral all-risk para tu mercancía durante todo el trayecto internacional'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Cotización Multimodal',
        description: 'Analizamos tu carga y comparamos opciones aéreas, marítimas y terrestres para la mejor solución costo-tiempo'
      },
      {
        step: 2,
        title: 'Booking y Coordinación',
        description: 'Reservamos espacio con carriers certificados y coordinamos recolección en origen'
      },
      {
        step: 3,
        title: 'Gestión Documental y Aduanera',
        description: 'Tramitamos certificados de origen, permisos especiales y desaduanización completa'
      },
      {
        step: 4,
        title: 'Transporte Internacional',
        description: 'Supervisamos el tránsito con tracking GPS y alertas proactivas ante cualquier incidencia'
      },
      {
        step: 5,
        title: 'Entrega y Confirmación',
        description: 'Distribución final con prueba de entrega (POD) y cierre documental completo'
      }
    ],
    benefits: [
      'Optimización de costos mediante selección de rutas y modos de transporte',
      'Visibilidad completa con plataforma de tracking en tiempo real',
      'Cumplimiento normativo en exportación e importación',
      'Flexibilidad para cambiar de modalidad según urgencia o presupuesto',
      'Gestión de seguros de carga internacional',
      'Asesoría en INCOTERMS y regulaciones aduaneras',
      'Consolidación LCL para cargas de menor volumen',
      'Account manager dedicado para seguimiento personalizado'
    ],
    gallery: [
      { image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=800&fm=webp', caption: 'Transporte Aéreo - Envíos urgentes y alto valor' },
      { image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=800&fm=webp', caption: 'Transporte Marítimo - FCL y LCL' },
      { image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&fm=webp', caption: 'Transporte Terrestre - Rutas regionales' }
    ]
  },
  'transporte-internacional': {
    id: 'transporte-internacional',
    title: 'Freight Forwarding',
    subtitle: 'Gestión integral de tu cadena de suministro internacional',
    heroImage: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1600&fm=webp',
    description: 'Redirigiendo a Freight Forwarding...',
    stats: [
      { value: '150+', label: 'Destinos Globales' },
      { value: '98%', label: 'Entregas Puntuales' },
      { value: '24/7', label: 'Soporte Continuo' },
      { value: '15K+', label: 'Envíos Anuales' }
    ],
    features: [],
    process: [],
    benefits: [],
    gallery: []
  },
  'contract-logistics': {
    id: 'contract-logistics',
    title: 'Contract Logistics',
    subtitle: 'Soluciones integrales de almacenamiento y distribución',
    heroImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&fm=webp',
    description: 'El Contract Logistics es una solución completamente adaptada que integra almacenamiento, gestión de inventario SKU y distribución estratégica. Va más allá del simple warehousing tradicional: diseñamos operaciones logísticas end-to-end que se ajustan a tus procesos de negocio, volúmenes estacionales y necesidades específicas. Con tecnología WMS avanzada, ofrecemos visibilidad total de tu cadena de suministro desde un solo partner.',
    stats: [
      { value: '50K+', label: 'm² Instalaciones' },
      { value: '99.8%', label: 'Precisión Inventario' },
      { value: '24/7', label: 'Operación Continua' },
      { value: '15K+', label: 'SKUs Gestionados' }
    ],
    features: [
      {
        icon: <Package className="h-8 w-8" />,
        title: 'Warehousing Estratégico',
        description: 'Almacenamiento en ubicaciones clave con racks selectivos, drive-in, y zonas climatizadas para productos sensibles'
      },
      {
        icon: <TrendingUp className="h-8 w-8" />,
        title: 'Distribución Multicanal',
        description: 'Operación integrada para B2B, B2C, retail y e-commerce con fulfillment personalizado y cross-docking'
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: 'Control de Inventario SKU',
        description: 'Trazabilidad completa por lote, serial, fecha de vencimiento con WMS VULCANO y reportes en tiempo real'
      },
      {
        icon: <Clock className="h-8 w-8" />,
        title: 'Value-Added Services',
        description: 'Kitting, etiquetado, reempaque, control de calidad, co-packing y servicios especializados'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Diseño de Solución',
        description: 'Análisis de tu operación actual, volúmenes proyectados y diseño de layout óptimo adaptado a tus SKUs'
      },
      {
        step: 2,
        title: 'Recepción y Almacenamiento',
        description: 'Ingreso con inspección de calidad, etiquetado inteligente, ubicación estratégica según rotación ABC'
      },
      {
        step: 3,
        title: 'Gestión Dinámica de Stock',
        description: 'Monitoreo continuo con alertas automáticas de reorden, análisis de obsolescencia y optimización de espacio'
      },
      {
        step: 4,
        title: 'Fulfillment y Preparación',
        description: 'Picking por voz o RF, packing personalizado, control de calidad pre-despacho, generación de documentos'
      },
      {
        step: 5,
        title: 'Distribución Final',
        description: 'Coordinación de última milla, consolidación de rutas, entrega con POD digital y actualización de sistemas'
      }
    ],
    benefits: [
      'Reducción de costos operativos al no requerir infraestructura propia',
      'Escalabilidad flexible para picos estacionales',
      'Visibilidad de inventario con dashboards en tiempo real',
      'Fulfillment especializado con tiempos de respuesta competitivos',
      'Controles de calidad para reducción de mermas y pérdidas',
      'Procesos certificados ISO 9001:2015',
      'Integración con sistemas ERP/WMS',
      'Reportería de KPIs logísticos clave'
    ],
    gallery: [
      { image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&fm=webp', caption: 'Centro de distribución moderno con WMS VULCANO' },
      { image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&fm=webp', caption: 'Sistema de racks y almacenamiento estratégico' },
      { image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&fm=webp', caption: 'Zona de picking, packing y fulfillment e-commerce' }
    ]
  },
  'almacenaje-distribucion': {
    id: 'almacenaje-distribucion',
    title: 'Contract Logistics',
    subtitle: 'Soluciones integrales de almacenamiento y distribución',
    heroImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&fm=webp',
    description: 'Redirigiendo a Contract Logistics...',
    stats: [
      { value: '50K+', label: 'm² Instalaciones' },
      { value: '99.8%', label: 'Precisión Inventario' },
      { value: '24/7', label: 'Operación Continua' },
      { value: '15K+', label: 'SKUs Gestionados' }
    ],
    features: [],
    process: [],
    benefits: [],
    gallery: []
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
      'Prevención de multas con documentación correcta',
      'Agilización de tiempos de liberación',
      'Optimización de costos con clasificación arancelaria adecuada',
      'Cumplimiento de regulaciones internacionales',
      'Seguimiento de trámites en tiempo real',
      'Asesoría sobre normativas vigentes'
    ],
    gallery: [
      { image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&fm=webp', caption: 'Gestión documental aduanera' },
      { image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&fm=webp', caption: 'Equipo de agentes certificados' },
      { image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&fm=webp', caption: 'Consultoría especializada' }
    ]
  },
  'project-cargo': {
    id: 'project-cargo',
    title: 'Project Cargo',
    subtitle: 'Logística especializada para cargas complejas y proyectos industriales',
    heroImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&fm=webp',
    description: 'Cuando los proyectos a gran escala requieren mover cargas fuera de lo común, la logística convencional no es suficiente. El Project Cargo es un servicio especializado y de alta complejidad, diseñado para planificar, coordinar y ejecutar el transporte de mercancías sobredimensionadas, pesadas o de alto valor técnico en entornos desafiantes. Desde maquinaria industrial hasta componentes aeroespaciales, gestionamos cada etapa con ingeniería logística dedicada, permisos especiales, equipos de izaje certificados y coordinación intermodal. Nuestro equipo de expertos evalúa rutas críticas, riesgos de tránsito y soluciones customizadas para garantizar la integridad de tu inversión.',
    stats: [
      { value: '200+', label: 'Proyectos Ejecutados' },
      { value: '500T', label: 'Capacidad Máxima' },
      { value: '35+', label: 'Países con Experiencia' },
      { value: '99.2%', label: 'Éxito de Entrega' }
    ],
    features: [
      {
        icon: <Shield className="h-8 w-8" />,
        title: 'Cargas Sobredimensionadas',
        description: 'Manejo especializado de mercancía que excede dimensiones estándar de contenedores y requiere permisos de tránsito'
      },
      {
        icon: <Package className="h-8 w-8" />,
        title: 'Cargas Pesadas (Heavy Lift)',
        description: 'Equipos de izaje certificados, grúas especializadas y trailers reforzados para piezas de hasta 500 toneladas'
      },
      {
        icon: <TrendingUp className="h-8 w-8" />,
        title: 'Ingeniería Logística',
        description: 'Estudios de ruta crítica, análisis de puentes, túneles, despeje aéreo y planificación de contingencias'
      },
      {
        icon: <Users className="h-8 w-8" />,
        title: 'Gestión de Permisos',
        description: 'Tramitación de escoltas policiales, autorizaciones municipales, cierres de vías y coordinación con autoridades'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Análisis Técnico Inicial',
        description: 'Levantamiento de dimensiones, peso, centro de gravedad, fragilidad y requisitos especiales de la carga'
      },
      {
        step: 2,
        title: 'Estudio de Ruta y Factibilidad',
        description: 'Reconocimiento físico de ruta, medición de puentes, curvas cerradas, cables aéreos y restricciones viales'
      },
      {
        step: 3,
        title: 'Diseño de Solución Customizada',
        description: 'Selección de equipos especializados, embalaje reforzado, plan de carga y descarga con cálculos de ingeniería'
      },
      {
        step: 4,
        title: 'Tramitación de Permisos',
        description: 'Obtención de autorizaciones gubernamentales y coordinación con autoridades competentes'
      },
      {
        step: 5,
        title: 'Ejecución y Supervisión',
        description: 'Transporte con ingenieros en sitio, monitoreo GPS 24/7, comunicación constante y gestión de imprevistos'
      },
      {
        step: 6,
        title: 'Entrega e Instalación',
        description: 'Descarga con equipos especializados, posicionamiento final, documentación completa y cierre de proyecto'
      }
    ],
    benefits: [
      'Planificación detallada con análisis de ingeniería previo',
      'Experiencia en proyectos industriales y de gran escala',
      'Equipos especializados certificados para cargas pesadas',
      'Gestión de permisos y cumplimiento normativo',
      'Coordinación multimodal terrestre y marítima',
      'Seguros especializados para cargas de alto valor',
      'Seguimiento con reportes y comunicación directa',
      'Soluciones adaptadas a cada proyecto'
    ],
    gallery: [
      { image: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=800&fm=webp', caption: 'Maquinaria industrial de gran tonelaje' },
      { image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?q=80&w=800&fm=webp', caption: 'Equipos especializados de izaje heavy lift' },
      { image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&fm=webp', caption: 'Ingeniería logística para proyectos industriales complejos' }
    ]
  },
  'seguro-carga': {
    id: 'seguro-carga',
    title: 'Seguro de Carga Internacional',
    subtitle: 'Protección integral para tus envíos globales',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&fm=webp',
    description: 'El Seguro de Carga Internacional es una póliza especializada que protege tu mercancía contra pérdidas, daños o robos durante todo el tránsito internacional. A diferencia del seguro básico del transportista (que cubre responsabilidad limitada), nuestro seguro all-risk cubre el valor total declarado de la carga desde el momento que sale de tu almacén de origen hasta que llega al destino final. Trabajamos con aseguradoras de primer nivel para ofrecerte coberturas flexibles adaptadas al tipo de mercancía, modo de transporte y nivel de riesgo.',
    stats: [
      { value: '$50M+', label: 'Cobertura Anual' },
      { value: '48h', label: 'Procesamiento Reclamos' },
      { value: '99.5%', label: 'Satisfacción Clientes' },
      { value: '24/7', label: 'Asistencia Siniestros' }
    ],
    features: [
      {
        icon: <Shield className="h-8 w-8" />,
        title: 'Cobertura All-Risk',
        description: 'Protección amplia contra todo riesgo durante tránsito: daño, pérdida, robo, mojadura, contaminación y más'
      },
      {
        icon: <Package className="h-8 w-8" />,
        title: 'Pólizas Especializadas',
        description: 'Seguros adaptados por tipo de mercancía: perecederos, electrónicos, maquinaria, químicos, alto valor'
      },
      {
        icon: <Globe className="h-8 w-8" />,
        title: 'Alcance Global',
        description: 'Cobertura en cualquier origen/destino mundial con aseguradoras internacionales de primer nivel'
      },
      {
        icon: <TrendingUp className="h-8 w-8" />,
        title: 'Gestión de Siniestros',
        description: 'Asesoría completa en caso de reclamo: inspección, documentación, negociación y recuperación de valores'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Cotización Personalizada',
        description: 'Analizamos tipo de mercancía, valor, ruta, modo de transporte e INCOTERM para cotizar prima competitiva'
      },
      {
        step: 2,
        title: 'Emisión de Póliza',
        description: 'Certificado de seguro emitido en minutos con cobertura desde warehouse to warehouse'
      },
      {
        step: 3,
        title: 'Tracking y Monitoreo',
        description: 'Seguimiento de carga asegurada con alertas ante desviaciones o incidentes durante tránsito'
      },
      {
        step: 4,
        title: 'Gestión de Siniestro (si aplica)',
        description: 'Notificación inmediata, coordinación de inspección, recopilación de evidencias y documentación de reclamo'
      },
      {
        step: 5,
        title: 'Indemnización',
        description: 'Negociación con aseguradora y pago de indemnización por valor asegurado en plazos competitivos'
      }
    ],
    benefits: [
      'Protección del valor declarado de la carga',
      'Primas competitivas según volumen',
      'Cobertura flexible por embarque o anual',
      'Cumplimiento de requisitos bancarios',
      'Asesoría en INCOTERMS',
      'Gestión de siniestros especializada',
      'Certificados emitidos ágilmente',
      'Opciones de cobertura ampliada'
    ],
    gallery: [
      { image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&fm=webp', caption: 'Protección financiera para tus envíos' },
      { image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&fm=webp', caption: 'Asesoría especializada en seguros de carga' },
      { image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&fm=webp', caption: 'Gestión profesional de siniestros' }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : servicesData['freight-forwarding'];
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'process' | 'benefits'>('overview');
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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

  const tabs = [
    { id: 'overview', label: 'Descripción General', icon: <Target className="h-4 w-4" /> },
    { id: 'features', label: 'Características', icon: <Sparkles className="h-4 w-4" /> },
    { id: 'process', label: 'Proceso', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'benefits', label: 'Beneficios', icon: <Zap className="h-4 w-4" /> }
  ] as const;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Parallax */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-[#E41B13]/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Hero Image with Parallax */}
        <motion.div 
          className="absolute inset-0" 
          style={{ y }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-[#E41B13]/80" />
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="relative h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center"
          style={{ opacity }}
        >
          <Link 
            to="/"
            state={{ scrollTo: 'services' }}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group w-fit backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Volver a servicios</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-white/90 text-sm font-medium">Solución Profesional</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
              {service.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact-section');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative px-8 py-4 bg-[#E41B13] text-white rounded-full font-bold overflow-hidden hover:shadow-2xl hover:shadow-[#E41B13]/50 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Cotización
                  <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E41B13] to-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-bold border-2 border-white/40 hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Descargar Brochure
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Floating Stats Cards */}
      <section className="relative -mt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {service.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13] to-[#C41710] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/60 p-6 md:p-8 rounded-2xl shadow-xl">
                  <div className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-[#E41B13] to-[#C41710] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Navigation */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300
                  ${activeTab === tab.id 
                    ? 'bg-gradient-to-r from-[#E41B13] to-[#C41710] text-white shadow-lg shadow-[#E41B13]/30' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content: Overview */}
      {activeTab === 'overview' && (
        <motion.section 
          className="py-16 md:py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="relative">
              {/* Decorative Element */}
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#E41B13] to-transparent rounded-full" />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  ¿Qué es {service.title}?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </motion.div>

              {/* Gallery Grid */}
              {service.gallery.length > 0 && (
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  {service.gallery.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative group overflow-hidden rounded-2xl aspect-video cursor-pointer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white font-semibold text-sm">{item.caption}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Tab Content: Features */}
      {activeTab === 'features' && (
        <motion.section 
          className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Características Destacadas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubre todo lo que incluye nuestro servicio de {service.title.toLowerCase()}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#E41B13] to-blue-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  
                  {/* Card */}
                  <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/60 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E41B13] to-[#C41710] text-white flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E41B13] transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Corner Decoration */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#E41B13]/10 to-transparent rounded-full blur-2xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Tab Content: Process */}
      {activeTab === 'process' && (
        <motion.section 
          className="py-16 md:py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestro Proceso de Trabajo
              </h2>
              <p className="text-xl text-gray-600">
                Metodología probada paso a paso
              </p>
            </div>

            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[31px] md:left-[39px] top-8 md:top-10 bottom-8 md:bottom-10 w-1 bg-gradient-to-b from-[#E41B13] via-blue-500 to-green-500 rounded-full" />

              <div className="space-y-8 md:space-y-12">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative flex gap-6 md:gap-8 items-start"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Step Number Circle */}
                    <div className="relative flex-shrink-0 z-10">
                      <motion.div 
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#E41B13] to-[#C41710] text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-2xl shadow-[#E41B13]/40"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {step.step}
                      </motion.div>
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 rounded-full bg-[#E41B13] animate-ping opacity-20" />
                    </div>

                    {/* Content Card */}
                    <motion.div 
                      className="flex-1 bg-white/80 backdrop-blur-xl border border-gray-200/60 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      whileHover={{ x: 10 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E41B13] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                      
                      {/* Progress Indicator */}
                      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Paso {step.step} de {service.process.length}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Tab Content: Benefits */}
      {activeTab === 'benefits' && (
        <motion.section 
          className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-[#E41B13]/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Beneficios Clave para tu Negocio
              </h2>
              <p className="text-xl text-white/80">
                Ventajas competitivas que impulsan tus resultados
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E41B13] to-yellow-500 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <p className="text-white/90 leading-relaxed flex-1">
                        {benefit}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* CTA Section with Interactive Elements */}
      <section id="contact-section" className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E41B13] via-[#C41710] to-[#E41B13]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-white/90 text-sm font-medium">Comienza Hoy</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ¿Listo para optimizar tu logística?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Contáctanos y descubre cómo {service.title} puede transformar tu operación
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/" state={{ scrollTo: 'contact' }}>
                <motion.button 
                  className="group px-10 py-5 bg-white text-[#E41B13] rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar Cotización Gratis
                  <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </motion.button>
              </Link>
              
              <Link to="/" state={{ scrollTo: 'services' }}>
                <motion.button 
                  className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#E41B13] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explorar Otros Servicios
                </motion.button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-16 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-white/70 text-sm">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-white/70 text-sm">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-white/70 text-sm">Países Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/70 text-sm">Soporte Disponible</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
