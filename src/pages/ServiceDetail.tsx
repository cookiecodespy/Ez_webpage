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
      'Reducción de costos logísticos hasta 30% mediante optimización de rutas y consolidación',
      'Visibilidad completa end-to-end con plataforma de tracking 24/7',
      'Cumplimiento normativo garantizado en exportación e importación',
      'Flexibilidad para cambiar de modalidad según urgencia o presupuesto',
      'Gestión integral de seguros de carga internacional',
      'Asesoría aduanera especializada en INCOTERMS y regulaciones',
      'Consolidación LCL para optimizar costos en cargas pequeñas',
      'Soporte multiidioma y account manager dedicado',
      'Integración API con tu sistema ERP/WMS',
      'Cobertura en más de 150 países con red de partners certificados'
    ],
    gallery: [
      { image: 'https://images.unsplash.com/photo-1520452112805-c6692c840af0?q=80&w=800&fm=webp', caption: 'Transporte Aéreo - Envíos urgentes y alto valor' },
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
      'Reducción de costos fijos hasta 40% al eliminar necesidad de infraestructura propia',
      'Escalabilidad flexible para manejar picos estacionales sin inversión en capacidad ociosa',
      'Visibilidad 360° de inventario con dashboards personalizados y acceso web/móvil',
      'Mejora de nivel de servicio con fulfillment especializado y tiempos de respuesta garantizados',
      'Reducción de mermas, roturas y obsolescencia con controles de calidad rigurosos',
      'Certificación ISO 9001:2015 para procesos estandarizados y mejora continua',
      'Integración bidireccional con tu ERP/WMS mediante EDI, API REST o archivos planos',
      'Reportería avanzada con KPIs logísticos: fill rate, perfect order, inventario promedio, rotación',
      'Soporte para productos especiales: control de temperatura, productos peligrosos, alto valor',
      'SLA contractuales con penalizaciones por incumplimiento y auditorías periódicas'
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
        description: 'Obtención de autorizaciones gubernamentales, escoltas, cierres temporales y coordinación interinstitucional'
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
      'Mitigación de riesgos con planificación exhaustiva y análisis de ingeniería previo',
      'Experiencia comprobada en proyectos mineros, energéticos, industriales y aeroespaciales',
      'Equipos especializados certificados: lowboys, modular trailers, SPMT, grúas de alto tonelaje',
      'Cumplimiento normativo en todas las jurisdicciones con trámites gestionados end-to-end',
      'Coordinación multimodal: transporte terrestre, marítimo de carga pesada, vuelos chárter',
      'Seguros all-risk especializados para cargas de alto valor técnico',
      'Visibilidad total con reportes fotográficos, GPS tracking y comunicación directa con PM dedicado',
      'Soluciones customizadas para cada proyecto: no hay dos iguales',
      'Red global de partners especializados en cargas Out of Gauge (OOG)',
      'Soporte 24/7 durante toda la ejecución del proyecto con escalamiento inmediato'
    ],
    gallery: [
      { image: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=800&fm=webp', caption: 'Maquinaria industrial de gran tonelaje' },
      { image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?q=80&w=800&fm=webp', caption: 'Equipos especializados de izaje heavy lift' },
      { image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&fm=webp', caption: 'Transporte OOG con escoltas y permisos especiales' }
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
      'Tranquilidad financiera: protección del 100% del valor de tu inversión en tránsito',
      'Primas competitivas con descuentos por volumen y frecuencia de envíos',
      'Cobertura flexible: pólizas anuales, por embarque, o declaraciones abiertas',
      'Cumplimiento de requisitos bancarios para cartas de crédito (L/C)',
      'Asesoría experta en términos INCOTERMS y transferencia de riesgo',
      'Gestión integral de siniestros con abogados especializados en seguros marítimos',
      'Acceso directo a inspectores de siniestros en principales puertos mundiales',
      'Cobertura ampliada opcional: huelgas, guerra, demoras, lucro cesante',
      'Certificados digitales emitidos en tiempo real para agilizar despachos aduaneros',
      'Histórico de siniestralidad para análisis de riesgos y mejora continua de packaging'
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
