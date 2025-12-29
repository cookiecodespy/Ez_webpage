import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ChevronRight, Package, Clock, Shield, TrendingUp, 
  Users, Globe, Zap, Target, AlertCircle, FileText, Settings,
  BarChart3, Radio, Check, HelpCircle, ExternalLink, Home,
  Layers, Server, Code, Database, Truck, MapPin, Calendar
} from 'lucide-react';
import { useState, useEffect } from 'react';

// ========== INTERFACES ==========
interface Scenario {
  pain: string;
  solution: string;
  outcome: string;
  icon: JSX.Element;
}

interface Deliverable {
  name: string;
  description: string;
  type: 'report' | 'dashboard' | 'integration' | 'document';
  icon: JSX.Element;
}

interface Integration {
  system: string;
  description: string;
  technologies: string[];
  icon: JSX.Element;
}

interface SLA {
  metric: string;
  commitment: string;
  notes?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Subpage {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

interface ServiceDetailData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  subpages: Subpage[];
  scenarios: Scenario[];
  deliverables: Deliverable[];
  integrations: Integration[];
  slas: SLA[];
  faqs: FAQ[];
  relatedServices?: { name: string; link: string }[];
}

// ========== DATA ==========
const servicesData: Record<string, ServiceDetailData> = {
  'ultima-milla': {
    id: 'ultima-milla',
    title: 'Última Milla',
    tagline: 'Entrega final que define tu experiencia de cliente',
    description: 'Gestión end-to-end del tramo final: desde hub hasta destino. Tecnología de ruteo, tracking real-time, y prueba de entrega digital para B2B y B2C.',
    
    subpages: [
      {
        id: 'operacion',
        title: 'Cómo Operamos',
        description: 'Workflow, tecnología y procesos diarios',
        icon: <Settings className="h-5 w-5" />
      },
      {
        id: 'tecnologia',
        title: 'Stack Tecnológico',
        description: 'Herramientas, integraciones y APIs',
        icon: <Code className="h-5 w-5" />
      },
      {
        id: 'slas-entregables',
        title: 'SLAs & Entregables',
        description: 'Compromisos y qué recibes',
        icon: <FileText className="h-5 w-5" />
      },
      {
        id: 'escenarios',
        title: 'Escenarios Reales',
        description: 'Casos operacionales típicos',
        icon: <Target className="h-5 w-5" />
      }
    ],

    scenarios: [
      {
        pain: 'E-commerce con devoluciones >20% por cliente ausente',
        solution: 'Ventanas horarias flexibles + SMS pre-entrega + punto de retiro alternativo',
        outcome: 'Reducción de devoluciones a <8% en 3 meses',
        icon: <Package className="h-6 w-6" />
      },
      {
        pain: 'Retail necesita reabastecimiento urgente sin planificación',
        solution: 'Entregas express same-day desde hub con priorización dinámica',
        outcome: 'Cobertura 95% en zonas urbanas en <6h',
        icon: <Truck className="h-6 w-6" />
      },
      {
        pain: 'Farmacia requiere trazabilidad completa por regulación',
        solution: 'POD con foto, geolocalización, firma digital y temperatura si aplica',
        outcome: 'Cumplimiento 100% auditorías ISP',
        icon: <Shield className="h-6 w-6" />
      }
    ],

    deliverables: [
      {
        name: 'Dashboard de Entregas',
        description: 'Panel web con métricas en tiempo real: entregas exitosas/fallidas, tiempos, excepciones',
        type: 'dashboard',
        icon: <BarChart3 className="h-5 w-5" />
      },
      {
        name: 'POD Digital',
        description: 'Prueba de entrega con foto, geolocalización, firma electrónica y timestamp',
        type: 'document',
        icon: <FileText className="h-5 w-5" />
      },
      {
        name: 'API de Tracking',
        description: 'Webhooks para estados de envío y ubicación GPS en tiempo real',
        type: 'integration',
        icon: <Code className="h-5 w-5" />
      },
      {
        name: 'Reportes Mensuales',
        description: 'KPIs de desempeño: puntualidad, intentos, motivos de falla, tendencias',
        type: 'report',
        icon: <FileText className="h-5 w-5" />
      }
    ],

    integrations: [
      {
        system: 'Shopify / WooCommerce',
        description: 'Plugin directo: sincronización automática de órdenes y tracking',
        technologies: ['REST API', 'Webhooks', 'OAuth 2.0'],
        icon: <Globe className="h-5 w-5" />
      },
      {
        system: 'ERPs (SAP, Odoo, BSALE)',
        description: 'Integración bidireccional: órdenes de venta → envíos → POD automático',
        technologies: ['SOAP/REST', 'EDI', 'FTP/SFTP'],
        icon: <Database className="h-5 w-5" />
      },
      {
        system: 'WMS Propietario',
        description: 'Sincronización de inventario y órdenes de preparación para despacho',
        technologies: ['API REST', 'WebSockets'],
        icon: <Server className="h-5 w-5" />
      },
      {
        system: 'Notificaciones (SMS/Email)',
        description: 'Alertas automatizadas al cliente: despacho, en ruta, entregado',
        technologies: ['Twilio', 'SendGrid', 'Push notifications'],
        icon: <Radio className="h-5 w-5" />
      }
    ],

    slas: [
      {
        metric: 'Cobertura',
        commitment: 'Zonas urbanas Santiago: 100% | Regiones: consultar',
        notes: 'Validamos cobertura en onboarding'
      },
      {
        metric: 'Tiempo de entrega',
        commitment: '24-48h según zona | Express same-day disponible',
        notes: 'Depende de hora de corte en hub'
      },
      {
        metric: 'Horario de entregas',
        commitment: 'L-V: 9:00-18:00 | Sábados: 9:00-13:00',
        notes: 'Horarios especiales coordinables'
      },
      {
        metric: 'Intentos de entrega',
        commitment: '2 intentos incluidos | Gestión de excepciones por caso',
        notes: 'Punto de retiro o reprogramación'
      },
      {
        metric: 'POD disponible',
        commitment: 'Máximo 2h post-entrega en dashboard',
        notes: 'Tiempo real vía webhook'
      }
    ],

    faqs: [
      {
        question: '¿Cómo se calcula el costo por envío?',
        answer: 'Modelo por zona + peso/volumen. Tarifa fija para e-commerce estándar (<5kg). Volúmenes >500 envíos/mes: tarifa negociada.'
      },
      {
        question: '¿Qué pasa si el cliente no está al momento de entrega?',
        answer: 'Primer intento: se deja aviso. Segundo intento coordinar ventana horaria o punto de retiro cercano. Cliente puede reprogramar vía link en SMS.'
      },
      {
        question: '¿Cómo se integra con mi plataforma e-commerce?',
        answer: 'Plugin nativo para Shopify/WooCommerce. Otras plataformas: API REST documentada. Tiempo implementación: 1-2 semanas con soporte técnico incluido.'
      },
      {
        question: '¿Qué visibilidad tengo del estado del envío?',
        answer: 'Dashboard web + API/webhooks en tiempo real. Estados: recibido en hub → en ruta → entregado/fallido. GPS activo durante transporte.'
      },
      {
        question: '¿Manejan productos refrigerados o especiales?',
        answer: 'Sí, flota con temperatura controlada disponible. Aplica tarifa adicional. Requiere coordinación previa y validación de requerimientos.'
      }
    ],

    relatedServices: [
      { name: 'Contract Logistics', link: 'almacenaje-distribucion' },
      { name: 'Transporte Terrestre', link: 'transporte-terrestre' }
    ]
  },

  'almacenaje-distribucion': {
    id: 'almacenaje-distribucion',
    title: 'Contract Logistics',
    tagline: 'Operación de bodega como servicio',
    description: 'Almacenamiento + gestión SKU + fulfillment multicanal. Tecnología WMS integrada a tu operación sin inversión en infraestructura.',
    
    subpages: [
      {
        id: 'operacion',
        title: 'Cómo Operamos',
        description: 'Procesos desde recepción hasta despacho',
        icon: <Settings className="h-5 w-5" />
      },
      {
        id: 'tecnologia',
        title: 'WMS & Tecnología',
        description: 'Sistema VULCANO y stack técnico',
        icon: <Code className="h-5 w-5" />
      },
      {
        id: 'slas-entregables',
        title: 'SLAs & Reportes',
        description: 'Compromisos operacionales',
        icon: <FileText className="h-5 w-5" />
      },
      {
        id: 'escenarios',
        title: 'Casos Operacionales',
        description: 'Retail, e-commerce, industrial',
        icon: <Target className="h-5 w-5" />
      }
    ],

    scenarios: [
      {
        pain: 'E-commerce sin capacidad para gestionar picos (Black Friday)',
        solution: 'Bodega escalable + personal flexible + picking priorizado + despacho urgente',
        outcome: 'Procesamiento de 10x volumen normal en 48h',
        icon: <Package className="h-6 w-6" />
      },
      {
        pain: 'Retail con quiebres de stock por falta de visibilidad',
        solution: 'WMS con alertas automáticas + reportes de rotación + reposición programada',
        outcome: 'Disponibilidad >98% en tiendas críticas',
        icon: <BarChart3 className="h-6 w-6" />
      },
      {
        pain: 'Industrial con productos de alta rotación y baja caducidad',
        solution: 'FEFO automático + zonas controladas + trazabilidad por lote/vencimiento',
        outcome: 'Merma por vencimiento <0.5%',
        icon: <Shield className="h-6 w-6" />
      }
    ],

    deliverables: [
      {
        name: 'Acceso WMS VULCANO',
        description: 'Dashboard web para consultar stock, movimientos, órdenes en tiempo real',
        type: 'dashboard',
        icon: <BarChart3 className="h-5 w-5" />
      },
      {
        name: 'API de Inventario',
        description: 'Endpoints REST para consultar/actualizar stock programáticamente',
        type: 'integration',
        icon: <Code className="h-5 w-5" />
      },
      {
        name: 'Reportes Operacionales',
        description: 'Semanales/mensuales: rotación ABC, obsolescencia, picking accuracy, mermas',
        type: 'report',
        icon: <FileText className="h-5 w-5" />
      },
      {
        name: 'Documentación de Movimientos',
        description: 'Ingresos/egresos con fotos, guías, certificados si aplica',
        type: 'document',
        icon: <FileText className="h-5 w-5" />
      }
    ],

    integrations: [
      {
        system: 'ERP (SAP, Odoo, Priority)',
        description: 'Sincronización bidireccional: órdenes de compra/venta, ajustes de inventario',
        technologies: ['EDI', 'REST API', 'SFTP'],
        icon: <Database className="h-5 w-5" />
      },
      {
        system: 'E-commerce (todas las plataformas)',
        description: 'Fulfillment automatizado: orden → picking → packing → despacho → tracking',
        technologies: ['Webhooks', 'REST API'],
        icon: <Globe className="h-5 w-5" />
      },
      {
        system: 'Transportistas (última milla)',
        description: 'Generación automática de órdenes de transporte y seguimiento',
        technologies: ['API propias', 'CSV/EDI'],
        icon: <Truck className="h-5 w-5" />
      }
    ],

    slas: [
      {
        metric: 'Precisión de inventario',
        commitment: 'Target >99.5% medido mensualmente con inventarios cíclicos',
        notes: 'Auditorías trimestrales'
      },
      {
        metric: 'Tiempo de ingreso',
        commitment: 'Recepción y ubicación: <24h desde llegada a bodega',
        notes: 'Productos estándar'
      },
      {
        metric: 'Fulfillment e-commerce',
        commitment: 'Picking + packing <4h para órdenes antes de corte (14:00)',
        notes: 'Volúmenes <500 órdenes/día'
      },
      {
        metric: 'Disponibilidad WMS',
        commitment: '99.5% uptime | Soporte L-V 8:30-18:00',
        notes: 'SLA monitoreado'
      }
    ],

    faqs: [
      {
        question: '¿Cuál es el modelo de pricing?',
        answer: 'Tarifa mensual por m² ocupado + handling fee por movimiento (ingresos/egresos). Value-added services (kitting, etiquetado) con tarifa adicional.'
      },
      {
        question: '¿Cuánto espacio necesito contratar inicialmente?',
        answer: 'Mínimo 100m². Evaluamos tu proyección de stock y picos estacionales. Contrato escalable: puedes aumentar espacio con 30 días de anticipación.'
      },
      {
        question: '¿Cómo accedo al inventario en tiempo real?',
        answer: 'WMS VULCANO vía web + API REST. Credenciales de acceso en onboarding. Capacitación incluida.'
      },
      {
        question: '¿Qué pasa si hay diferencias de inventario?',
        answer: 'Protocolo de investigación inmediata. Si es error nuestro: compensación según valor. Inventarios cíclicos mensuales para prevenir.'
      }
    ],

    relatedServices: [
      { name: 'Última Milla', link: 'ultima-milla' },
      { name: 'Transporte Terrestre', link: 'transporte-terrestre' }
    ]
  },

  'transporte-terrestre': {
    id: 'transporte-terrestre',
    title: 'Transporte Terrestre',
    tagline: 'FTL & LTL con seguimiento GPS',
    description: 'Distribución nacional con flota propia y aliados estratégicos. Cargas completas (FTL) y consolidadas (LTL) con tracking 24/7.',
    
    subpages: [
      {
        id: 'operacion',
        title: 'Cómo Operamos',
        description: 'Planificación de rutas y despacho',
        icon: <Settings className="h-5 w-5" />
      },
      {
        id: 'tecnologia',
        title: 'Fleet Management',
        description: 'GPS, telemetría y optimización',
        icon: <Code className="h-5 w-5" />
      },
      {
        id: 'slas-entregables',
        title: 'Tiempos & Compromisos',
        description: 'Cobertura y SLAs por zona',
        icon: <FileText className="h-5 w-5" />
      },
      {
        id: 'escenarios',
        title: 'Casos de Uso',
        description: 'Industrial, retail, construcción',
        icon: <Target className="h-5 w-5" />
      }
    ],

    scenarios: [
      {
        pain: 'Retail con reabastecimiento a 50+ sucursales sin coordinación',
        solution: 'Planificación de milk runs semanales + ventanas horarias por tienda + POD',
        outcome: 'Reducción de costos logísticos 30% vs envíos individuales',
        icon: <Truck className="h-6 w-6" />
      },
      {
        pain: 'Industrial con despachos urgentes fuera de horario',
        solution: 'Flota 24/7 + priorización dinámica + coordinación en tiempo real',
        outcome: 'Disponibilidad para emergencias <2h respuesta',
        icon: <Zap className="h-6 w-6" />
      },
      {
        pain: 'Construcción con materiales pesados sin equipamiento especial',
        solution: 'Camiones con pluma/grúa + coordinación de descarga + seguro especializado',
        outcome: 'Entregas seguras sin necesidad de equipos propios',
        icon: <Shield className="h-6 w-6" />
      }
    ],

    deliverables: [
      {
        name: 'Tracking GPS',
        description: 'Ubicación en tiempo real del camión durante tránsito',
        type: 'dashboard',
        icon: <MapPin className="h-5 w-5" />
      },
      {
        name: 'POD con foto',
        description: 'Prueba de entrega digital con firma y foto de descarga',
        type: 'document',
        icon: <FileText className="h-5 w-5" />
      },
      {
        name: 'Alertas automáticas',
        description: 'Notificaciones: despacho, en ruta, arribo, entregado',
        type: 'integration',
        icon: <Radio className="h-5 w-5" />
      }
    ],

    integrations: [
      {
        system: 'TMS (Transport Management)',
        description: 'Integración con sistemas de gestión de transporte corporativos',
        technologies: ['EDI', 'API REST'],
        icon: <Server className="h-5 w-5" />
      },
      {
        system: 'ERP Cliente',
        description: 'Sincronización de órdenes de transporte y confirmación automática',
        technologies: ['SOAP/REST', 'CSV'],
        icon: <Database className="h-5 w-5" />
      }
    ],

    slas: [
      {
        metric: 'Cobertura nacional',
        commitment: 'Todas las regiones | Tiempos según origen-destino',
        notes: 'Zonas extremas: consultar'
      },
      {
        metric: 'Santiago - Regiones',
        commitment: '24-72h según destino | Express disponible',
        notes: 'Depende de disponibilidad'
      },
      {
        metric: 'Tracking activo',
        commitment: '100% de envíos con GPS durante tránsito',
        notes: 'Actualización cada 15min'
      }
    ],

    faqs: [
      {
        question: '¿Cuál es la diferencia entre FTL y LTL?',
        answer: 'FTL (Full Truck Load): camión completo para ti, más rápido. LTL (Less Than Truckload): compartes camión con otros clientes, más económico para volúmenes menores.'
      },
      {
        question: '¿Cómo se cotiza el servicio?',
        answer: 'FTL: tarifa por ruta + tipo de camión. LTL: por peso/volumen + distancia. Contratos con volumen garantizado: tarifa preferencial.'
      },
      {
        question: '¿Qué pasa si la carga llega dañada?',
        answer: 'Seguro de carga incluido básico. Daños por mal embalaje: no cubiertos. Recomendamos seguro all-risk para cargas de alto valor.'
      }
    ],

    relatedServices: [
      { name: 'Contract Logistics', link: 'almacenaje-distribucion' },
      { name: 'Última Milla', link: 'ultima-milla' }
    ]
  }
};

export default function ServiceDetail() {
  const { serviceId, subpage } = useParams<{ serviceId: string; subpage?: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const service = serviceId ? servicesData[serviceId] : null;
  
  const [activeScenario, setActiveScenario] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>(subpage || 'overview');

  const fromIndustries = location.state?.from === 'industries' || document.referrer.includes('/industrias/');

  useEffect(() => {
    if (subpage) {
      setActiveTab(subpage);
    } else {
      setActiveTab('overview');
    }
  }, [subpage]);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center text-white">
          <AlertCircle className="h-16 w-16 text-[#E41B13] mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Servicio no encontrado</h1>
          <p className="text-gray-400 mb-6">El servicio que buscas no existe</p>
          <Link
            to="/"
            state={{ scrollTo: fromIndustries ? 'industries' : 'services' }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-xl font-bold hover:scale-105 transition-transform"
          >
            <Home className="h-5 w-5" />
            Volver a {fromIndustries ? 'industrias' : 'servicios'}
          </Link>
        </div>
      </div>
    );
  }

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'overview') {
      navigate(`/servicios/${service.id}`);
    } else {
      navigate(`/servicios/${service.id}/${tabId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Background Effects */}
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

      {/* Hero Compacto - Max 40vh */}
      <div className="relative max-h-[40vh] py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6 text-gray-400">
            <Link to="/" className="hover:text-white transition-colors flex items-center gap-2">
              <Home className="h-4 w-4" />
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              to="/"
              state={{ scrollTo: fromIndustries ? 'industries' : 'services' }}
              className="hover:text-white transition-colors"
            >
              {fromIndustries ? 'Industrias' : 'Servicios'}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">{service.title}</span>
            {activeTab !== 'overview' && (
              <>
                <ChevronRight className="h-4 w-4" />
                <span className="text-[#E41B13] font-medium">
                  {service.subpages.find(s => s.id === activeTab)?.title}
                </span>
              </>
            )}
          </nav>

          {/* Title + Description */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {service.title}
            </h1>
            <p className="text-2xl text-[#E41B13] font-bold mb-4">
              {service.tagline}
            </p>
            <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Navigation Pills */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleTabChange('overview')}
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-[#E41B13] to-[#8B0000] text-white shadow-lg shadow-red-500/30'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Visión General
            </button>
            
            {service.subpages.map(sub => (
              <button
                key={sub.id}
                onClick={() => handleTabChange(sub.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all ${
                  activeTab === sub.id
                    ? 'bg-gradient-to-r from-[#E41B13] to-[#8B0000] text-white shadow-lg shadow-red-500/30'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {sub.icon}
                {sub.title}
              </button>
            ))}

            <Link
              to="/"
              state={{ scrollTo: 'contact' }}
              className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-red-500/50 group"
            >
              Solicitar Info
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content Area - Continues in next file due to length */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <OverviewContent service={service} activeScenario={activeScenario} setActiveScenario={setActiveScenario} expandedFAQ={expandedFAQ} setExpandedFAQ={setExpandedFAQ} />
        )}
        {activeTab === 'operacion' && <OperacionContent service={service} />}
        {activeTab === 'tecnologia' && <TecnologiaContent service={service} />}
        {activeTab === 'slas-entregables' && <SLAsContent service={service} />}
        {activeTab === 'escenarios' && <EscenariosContent service={service} />}
      </AnimatePresence>

      {/* CTA Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-16 mt-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#E41B13] via-[#B81710] to-[#8B0000]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            ¿Listo para implementar?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Conversemos sobre tus necesidades específicas
          </p>
          <Link
            to="/"
            state={{ scrollTo: 'contact' }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:scale-105 transition-all shadow-2xl group"
          >
            Agendar Consultoría
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// ========== CONTENT COMPONENTS ==========

function OverviewContent({ service, activeScenario, setActiveScenario, expandedFAQ, setExpandedFAQ }: any) {
  return (
    <motion.div
      key="overview"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="relative max-w-7xl mx-auto px-6 py-12 space-y-16"
    >
      {/* Qué Resuelve - Scenarios */}
      <section>
        <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-lg">
            <Target className="h-6 w-6" />
          </div>
          ¿Qué problemas resuelve?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {service.scenarios.map((scenario: Scenario, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActiveScenario(index)}
              className={`relative group cursor-pointer ${activeScenario === index ? 'ring-2 ring-[#E41B13]' : ''}`}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-300`} />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all h-full">
                <div className="text-[#E41B13] mb-4">{scenario.icon}</div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Dolor</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{scenario.pain}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#E41B13] font-semibold mb-1">Solución</p>
                    <p className="text-sm text-white font-medium leading-relaxed">{scenario.solution}</p>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <p className="text-xs uppercase tracking-wide text-green-500 font-semibold mb-1">Resultado</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{scenario.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Qué Recibes - Deliverables */}
      <section>
        <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-lg">
            <FileText className="h-6 w-6" />
          </div>
          ¿Qué recibes exactamente?
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {service.deliverables.map((deliverable: Deliverable, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-xl blur opacity-0 group-hover:opacity-30 transition" />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  deliverable.type === 'dashboard' ? 'bg-blue-500/20 text-blue-400' :
                  deliverable.type === 'integration' ? 'bg-purple-500/20 text-purple-400' :
                  deliverable.type === 'report' ? 'bg-green-500/20 text-green-400' :
                  'bg-orange-500/20 text-orange-400'
                }`}>
                  {deliverable.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1">{deliverable.name}</h4>
                  <p className="text-sm text-gray-400">{deliverable.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integraciones - Bento Grid */}
      <section>
        <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-lg">
            <Layers className="h-6 w-6" />
          </div>
          ¿Con qué se integra?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {service.integrations.map((integration: Integration, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-2xl blur opacity-20 group-hover:opacity-40 transition" />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-[#E41B13]/20 to-[#8B0000]/20 rounded-xl text-[#E41B13]">
                    {integration.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{integration.system}</h4>
                    <p className="text-sm text-gray-400">{integration.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {integration.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-lg">
            <HelpCircle className="h-6 w-6" />
          </div>
          Preguntas Frecuentes
        </h2>

        <div className="space-y-3">
          {service.faqs.map((faq: FAQ, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative"
            >
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                className="w-full text-left backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all flex items-center justify-between gap-4"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronRight className={`h-5 w-5 text-[#E41B13] transition-transform ${expandedFAQ === index ? 'rotate-90' : ''}`} />
              </button>
              
              <AnimatePresence>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section>
          <h3 className="text-2xl font-bold mb-6">Servicios Relacionados</h3>
          <div className="flex flex-wrap gap-4">
            {service.relatedServices.map((related: any, index: number) => (
              <Link
                key={index}
                to={`/servicios/${related.link}`}
                state={{ from: 'services' }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 hover:border-[#E41B13] transition-all group"
              >
                {related.name}
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
}

// Subpage Components (simplified for now)
function OperacionContent({ service }: any) {
  return (
    <motion.div
      key="operacion"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative max-w-7xl mx-auto px-6 py-12"
    >
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Cómo Operamos - {service.title}</h2>
        <p className="text-gray-400">
          Contenido detallado sobre workflows diarios, herramientas operacionales, y procesos específicos.
          (Por implementar con contenido real)
        </p>
      </div>
    </motion.div>
  );
}

function TecnologiaContent({ service }: any) {
  return (
    <motion.div
      key="tecnologia"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative max-w-7xl mx-auto px-6 py-12"
    >
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Stack Tecnológico - {service.title}</h2>
        <div className="space-y-4">
          <p className="text-gray-400">Herramientas, APIs, y stack técnico usado en este servicio.</p>
          {service.integrations.map((int: Integration, i: number) => (
            <div key={i} className="border-l-2 border-[#E41B13] pl-4">
              <h4 className="font-bold">{int.system}</h4>
              <p className="text-sm text-gray-400">{int.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SLAsContent({ service }: any) {
  return (
    <motion.div
      key="slas"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative max-w-7xl mx-auto px-6 py-12"
    >
      <div className="space-y-6">
        <h2 className="text-3xl font-black mb-6">SLAs & Compromisos</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {service.slas.map((sla: SLA, index: number) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#E41B13]/20 rounded-lg">
                  <Check className="h-5 w-5 text-[#E41B13]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1">{sla.metric}</h4>
                  <p className="text-sm text-gray-300 mb-2">{sla.commitment}</p>
                  {sla.notes && (
                    <p className="text-xs text-gray-500 italic">{sla.notes}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Entregables</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {service.deliverables.map((del: Deliverable, i: number) => (
              <div
                key={i}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all flex items-start gap-4"
              >
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                  {del.icon}
                </div>
                <div>
                  <h5 className="font-bold mb-1">{del.name}</h5>
                  <p className="text-sm text-gray-400">{del.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EscenariosContent({ service }: any) {
  return (
    <motion.div
      key="escenarios"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative max-w-7xl mx-auto px-6 py-12"
    >
      <h2 className="text-3xl font-black mb-8">Escenarios Operacionales Reales</h2>
      
      <div className="space-y-8">
        {service.scenarios.map((scenario: Scenario, index: number) => (
          <div
            key={index}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-r from-[#E41B13]/20 to-[#8B0000]/20 rounded-xl text-[#E41B13]">
                {scenario.icon}
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h4 className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">Situación</h4>
                  <p className="text-lg text-gray-200">{scenario.pain}</p>
                </div>

                <div className="border-l-4 border-[#E41B13] pl-4">
                  <h4 className="text-xs uppercase tracking-wide text-[#E41B13] font-semibold mb-2">Nuestra Solución</h4>
                  <p className="text-white font-medium">{scenario.solution}</p>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <h4 className="text-xs uppercase tracking-wide text-green-400 font-semibold mb-2">Resultado Medible</h4>
                  <p className="text-green-300">{scenario.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
