import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Package, Clock, Shield, TrendingUp, Users, Globe, Zap, Target } from 'lucide-react';
import { OutlineButton } from '../components/UIButtons';
import { useEffect, useRef, useState } from 'react';

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
  subtitle?: string;
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
  },

  'freight-forwarding': {
    id: 'freight-forwarding',
    title: 'Freight Forwarding',
    subtitle: 'Gestión integral de envíos multimodales internacionales',
    tagline: 'Partner logístico internacional',
    description: 'Actuamos como tu partner logístico internacional, coordinando transporte aéreo, marítimo y terrestre con una red global de carriers y agentes.',
    
    subpages: [
      {
        id: 'overview',
        title: 'Panorama General',
        description: 'Qué hacemos y cómo',
        icon: <Home className="h-5 w-5" />
      },
      {
        id: 'operacion',
        title: 'Operación',
        description: 'Flujo paso a paso',
        icon: <Settings className="h-5 w-5" />
      },
      {
        id: 'tecnologia',
        title: 'Tecnología',
        description: 'Stack técnico',
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
        title: 'Casos Internacionales',
        description: 'Importación/exportación',
        icon: <Target className="h-5 w-5" />
      }
    ],

    scenarios: [
      {
        pain: 'Importador sin conocimiento de incoterms ni proceso aduanero',
        solution: 'Gestión door-to-door: reserva de espacio, documentación, despacho aduanero, entrega final',
        outcome: 'Carga liberada en <48h post-arribo, sin demoras',
        icon: <Globe className="h-6 w-6" />
      },
      {
        pain: 'Exportador con carga urgente y necesidad de cotizar múltiples rutas',
        solution: 'Cotización consolidada aéreo/marítimo en <2h, reserva inmediata, tracking end-to-end',
        outcome: 'Ahorro 30% vs cotización directa, visibilidad total',
        icon: <Plane className="h-6 w-6" />
      },
      {
        pain: 'E-commerce con volúmenes fluctuantes y necesidad de flexibilidad',
        solution: 'Contratos flexibles con carriers, consolidación LCL/LTL, fulfillment cross-border',
        outcome: 'Costos variables según volumen, sin mínimos',
        icon: <Package className="h-6 w-6" />
      }
    ],

    deliverables: [
      {
        name: 'Tracking Multimodal',
        description: 'Plataforma web/app con visibilidad de tus envíos en tránsito (aéreo, marítimo, terrestre)',
        type: 'dashboard',
        icon: <MapPin className="h-5 w-5" />
      },
      {
        name: 'Documentación Digital',
        description: 'BL, AWB, facturas, certificados de origen accesibles 24/7 en portal',
        type: 'document',
        icon: <FileText className="h-5 w-5" />
      },
      {
        name: 'API de Cotización',
        description: 'Endpoint para obtener tarifas en tiempo real según origen/destino/peso',
        type: 'integration',
        icon: <Code className="h-5 w-5" />
      },
      {
        name: 'Reportes Mensuales',
        description: 'Dashboard de costos por ruta, tiempos de tránsito, performance carriers',
        type: 'report',
        icon: <BarChart3 className="h-5 w-5" />
      }
    ],

    integrations: [
      {
        system: 'Carriers Globales',
        description: 'APIs con Maersk, MSC, Emirates SkyCargo, LATAM Cargo para bookings y tracking',
        technologies: ['EDI', 'API REST', 'SOAP'],
        icon: <Truck className="h-5 w-5" />
      },
      {
        system: 'Aduanas',
        description: 'Integración con sistemas SICEX (Chile), VUCE (Perú), VUCEM (México)',
        technologies: ['SOAP', 'XML', 'Certificados digitales'],
        icon: <Shield className="h-5 w-5" />
      },
      {
        system: 'ERP Clientes',
        description: 'Sincronización con SAP, Oracle, Dynamics para órdenes de compra/venta',
        technologies: ['EDI X12', 'IDOC', 'REST API'],
        icon: <Database className="h-5 w-5" />
      },
      {
        system: 'Plataformas E-commerce',
        description: 'Integración con Shopify, WooCommerce, VTEX para fulfillment cross-border',
        technologies: ['REST API', 'Webhooks'],
        icon: <Globe className="h-5 w-5" />
      }
    ],

    slas: [
      {
        metric: 'Cotización',
        commitment: '< 2 horas hábiles para rutas estándar',
        notes: 'Rutas complejas: 24h'
      },
      {
        metric: 'Booking confirmado',
        commitment: '< 4 horas desde aceptación cotización',
        notes: 'Sujeto a disponibilidad carrier'
      },
      {
        metric: 'Documentación pre-embarque',
        commitment: '48h antes de ETD (Estimated Time Departure)',
        notes: 'Cliente debe proveer docs comerciales'
      },
      {
        metric: 'Tracking actualizado',
        commitment: 'Actualización en cada milestone: salida, tránsito, arribo, liberación',
        notes: 'Email + notificación en plataforma'
      },
      {
        metric: 'Despacho aduanero',
        commitment: '< 48h desde arribo (sin aforos físicos)',
        notes: 'Chile: 24-48h | Perú: 48-72h'
      }
    ],

    faqs: [
      {
        question: '¿Qué incluye el servicio de freight forwarding?',
        answer: 'Cotización multimodal, reserva de espacio con carriers, gestión documental, coordinación de origen/destino, despacho aduanero (opcional), tracking end-to-end.'
      },
      {
        question: '¿Cuál es la diferencia entre LCL y FCL (marítimo)?',
        answer: 'LCL (Less than Container Load): compartes contenedor con otras cargas, pagas por m³/ton. FCL (Full Container Load): contenedor completo para ti, tarifa fija independiente del volumen usado.'
      },
      {
        question: '¿Cómo se calcula el flete aéreo?',
        answer: 'Por peso volumétrico vs peso real (el mayor). Fórmula: (largo x ancho x alto en cm) / 6000 = peso volumétrico en kg. Tarifa según ruta + fuel surcharge.'
      },
      {
        question: '¿Incluyen seguro de carga?',
        answer: 'No incluido por defecto. Podemos cotizar seguro all-risk con cobertura ICC A, B o C según necesidad.'
      },
      {
        question: '¿Qué documentos necesito para exportar/importar?',
        answer: 'Exportación: Factura comercial, packing list, certificado de origen (si aplica). Importación: + Conocimiento embarque (BL/AWB), declaración valor, permisos sectoriales (SAG, ISP, etc.).'
      }
    ],

    relatedServices: [
      { name: 'Agenciamiento Aduanas', link: 'agenciamiento-aduanas' },
      { name: 'Seguro de Carga', link: 'seguro-carga' },
      { name: 'Project Cargo', link: 'project-cargo' }
    ]
  },

  'project-cargo': {
    id: 'project-cargo',
    title: 'Project Cargo',
    subtitle: 'Transporte especializado de cargas sobredimensionadas y proyectos complejos',
    tagline: 'Soluciones para cargas complejas',
    description: 'Gestión integral de cargas out-of-gauge, equipos industriales, maquinaria pesada con planificación detallada y ejecución controlada.',
    
    subpages: [
      {
        id: 'overview',
        title: 'Panorama General',
        description: 'Qué hacemos y cómo',
        icon: <Home className="h-5 w-5" />
      },
      {
        id: 'operacion',
        title: 'Operación',
        description: 'Flujo paso a paso',
        icon: <Settings className="h-5 w-5" />
      },
      {
        id: 'tecnologia',
        title: 'Tecnología',
        description: 'Stack técnico',
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
        title: 'Casos Industriales',
        description: 'Minería, energía, construcción',
        icon: <Target className="h-5 w-5" />
      }
    ],

    scenarios: [
      {
        pain: 'Minera con equipos de 80 tons que no caben en contenedor estándar',
        solution: 'Transporte flat rack + cama baja especializada + permisos circulación + escolta policial',
        outcome: 'Entrega on-site en planta minera sin daños',
        icon: <Truck className="h-6 w-6" />
      },
      {
        pain: 'Proyecto eólico con palas de turbina de 60m de largo',
        solution: 'Planificación de ruta con estudios de gálibo, transporte modular, coordinación con autoridades viales',
        outcome: 'Instalación sin demoras en cronograma de obra',
        icon: <Zap className="h-6 w-6" />
      },
      {
        pain: 'Exportación de maquinaria industrial con embalaje especial',
        solution: 'Ingeniería de embalaje, fabricación de cuna de madera, seguro all-risk, transporte multimodal',
        outcome: 'Cero daños en tránsito internacional',
        icon: <Package className="h-6 w-6" />
      }
    ],

    deliverables: [
      {
        name: 'Estudio de Viabilidad',
        description: 'Análisis técnico de ruta, permisos, restricciones, costos estimados',
        type: 'document',
        icon: <FileText className="h-5 w-5" />
      },
      {
        name: 'Plan de Proyecto',
        description: 'Cronograma detallado, hitos críticos, recursos asignados, contingencias',
        type: 'document',
        icon: <Target className="h-5 w-5" />
      },
      {
        name: 'Tracking GPS Dedicado',
        description: 'Seguimiento satelital 24/7 con alertas de posición y velocidad',
        type: 'dashboard',
        icon: <MapPin className="h-5 w-5" />
      },
      {
        name: 'Reporte Post-Proyecto',
        description: 'Análisis de performance vs plan, lecciones aprendidas, fotos/videos',
        type: 'report',
        icon: <BarChart3 className="h-5 w-5" />
      }
    ],

    integrations: [
      {
        system: 'CAD/Engineering Tools',
        description: 'Importación de planos y dimensiones para validación de carga',
        technologies: ['AutoCAD', 'SolidWorks', 'DWG/DXF'],
        icon: <Code className="h-5 w-5" />
      },
      {
        system: 'Sistemas de Permisos Viales',
        description: 'Integración con MOP, MTT, gobiernos regionales para permisos circulación',
        technologies: ['Formularios web', 'PDF firmados'],
        icon: <Shield className="h-5 w-5" />
      },
      {
        system: 'GPS Tracking Avanzado',
        description: 'Rastreo satelital con geofencing y alertas de desvío',
        technologies: ['Iridium Satellite', 'GPRS'],
        icon: <MapPin className="h-5 w-5" />
      },
      {
        system: 'Gestión Documental',
        description: 'Repository centralizado para planos, permisos, certificados, fotos',
        technologies: ['SharePoint', 'Cloud Storage'],
        icon: <Database className="h-5 w-5" />
      }
    ],

    slas: [
      {
        metric: 'Estudio de viabilidad',
        commitment: '5-10 días hábiles desde recepción specs técnicas',
        notes: 'Incluye visita terreno si es necesario'
      },
      {
        metric: 'Plan de proyecto',
        commitment: '15 días hábiles desde aprobación estudio',
        notes: 'Con cronograma detallado y Gantt'
      },
      {
        metric: 'Permisos circulación',
        commitment: '30-45 días hábiles (depende de autoridades)',
        notes: 'Chile: 30-45 días | Perú: 45-60 días'
      },
      {
        metric: 'Ejecución según plan',
        commitment: '±5% variación en timeline (sin force majeure)',
        notes: 'Clima extremo puede impactar'
      },
      {
        metric: 'Comunicación proactiva',
        commitment: 'Reporte diario de avance + alertas en tiempo real',
        notes: 'Email + WhatsApp + plataforma'
      }
    ],

    faqs: [
      {
        question: '¿Qué se considera "project cargo"?',
        answer: 'Cargas sobredimensionadas (>40 pies, >80 tons), equipos industriales complejos, maquinaria no unitizable, cargas de alto valor que requieren planificación especial.'
      },
      {
        question: '¿Cuánto tiempo toma planificar un proyecto?',
        answer: 'Depende de complejidad. Proyectos estándar: 4-6 semanas. Proyectos complejos (permisos especiales, rutas nuevas): 2-3 meses.'
      },
      {
        question: '¿Qué incluye el servicio?',
        answer: 'Estudio de viabilidad, ingeniería de carga, gestión de permisos, transporte especializado, escolta/seguridad, seguro all-risk, supervisión on-site.'
      },
      {
        question: '¿Trabajan con cualquier tipo de carga?',
        answer: 'Sí, pero evaluamos caso a caso. No transportamos materiales peligrosos clase 1 (explosivos) ni radioactivos sin autorización especial.'
      },
      {
        question: '¿Cómo se cotiza un proyecto?',
        answer: 'Necesitamos: dimensiones exactas, peso, origen/destino, timeline deseado, restricciones especiales. Cotización personalizada en 5-10 días.'
      }
    ],

    relatedServices: [
      { name: 'Freight Forwarding', link: 'freight-forwarding' },
      { name: 'Seguro de Carga', link: 'seguro-carga' }
    ]
  },

  'agenciamiento-aduanas': {
    id: 'agenciamiento-aduanas',
    title: 'Agenciamiento de Aduanas',
    subtitle: 'Gestión experta de despachos aduaneros y compliance',
    tagline: 'Despachos rápidos y sin contratiempos',
    description: 'Liberamos tus cargas de importación/exportación con rapidez y cumplimiento normativo, minimizando demoras y costos adicionales.',
    
    subpages: [
      {
        id: 'overview',
        title: 'Panorama General',
        description: 'Qué hacemos y cómo',
        icon: <Home className="h-5 w-5" />
      },
      {
        id: 'operacion',
        title: 'Operación',
        description: 'Flujo paso a paso',
        icon: <Settings className="h-5 w-5" />
      },
      {
        id: 'tecnologia',
        title: 'Tecnología',
        description: 'Stack técnico',
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
        title: 'Casos Aduaneros',
        description: 'Importación/exportación/tránsito',
        icon: <Target className="h-5 w-5" />
      }
    ],

    scenarios: [
      {
        pain: 'Importador con carga retenida por documentación incompleta',
        solution: 'Revisión pre-embarque de docs, gestión de certificados faltantes, regularización express',
        outcome: 'Liberación en 24h vs 7-10 días promedio',
        icon: <FileText className="h-6 w-6" />
      },
      {
        pain: 'Exportador sin conocimiento de clasificación arancelaria correcta',
        solution: 'Análisis de producto, clasificación NCM/HTS, validación con aduanas, certificado origen',
        outcome: 'Despacho sin observaciones, cero multas',
        icon: <Shield className="h-6 w-6" />
      },
      {
        pain: 'Empresa con múltiples importaciones mensuales y proceso manual',
        solution: 'Automatización de DIN vía API, validación automática de docs, despacho anticipado',
        outcome: 'Tiempo de liberación reducido 60%',
        icon: <Zap className="h-6 w-6" />
      }
    ],

    deliverables: [
      {
        name: 'Portal Aduanero',
        description: 'Acceso web para consultar estado de tus DINs, documentación, liquidaciones',
        type: 'dashboard',
        icon: <BarChart3 className="h-5 w-5" />
      },
      {
        name: 'Declaraciones (DIN/DUS)',
        description: 'Tramitación de declaraciones de importación/exportación ante Aduana',
        type: 'document',
        icon: <FileText className="h-5 w-5" />
      },
      {
        name: 'API de Documentación',
        description: 'Endpoint para enviar/consultar docs requeridos programáticamente',
        type: 'integration',
        icon: <Code className="h-5 w-5" />
      },
      {
        name: 'Reportes de Compliance',
        description: 'Dashboard mensual con métricas de despachos, demoras, observaciones',
        type: 'report',
        icon: <BarChart3 className="h-5 w-5" />
      }
    ],

    integrations: [
      {
        system: 'SICEX (Aduanas Chile)',
        description: 'Integración directa con sistema aduanero para presentación DIN/DUS',
        technologies: ['SOAP', 'XML', 'Firma digital'],
        icon: <Shield className="h-5 w-5" />
      },
      {
        system: 'SAG/ISP/SERNAPESCA',
        description: 'Gestión de permisos sectoriales automáticos vía APIs',
        technologies: ['REST API', 'XML'],
        icon: <FileText className="h-5 w-5" />
      },
      {
        system: 'ERP Clientes',
        description: 'Sincronización de órdenes de compra para despacho anticipado',
        technologies: ['EDI', 'REST API'],
        icon: <Database className="h-5 w-5" />
      },
      {
        system: 'Carriers/Navieras',
        description: 'Obtención automática de BL/AWB, manifests, arribos',
        technologies: ['EDI', 'Email parsing'],
        icon: <Truck className="h-5 w-5" />
      }
    ],

    slas: [
      {
        metric: 'Presentación DIN/DUS',
        commitment: '< 4 horas desde recepción docs completos',
        notes: 'Horario hábil aduanero'
      },
      {
        metric: 'Liberación sin aforo',
        commitment: '< 24h desde arribo de carga',
        notes: 'Chile: 24h | Perú: 24-48h'
      },
      {
        metric: 'Liberación con aforo documental',
        commitment: '< 48h desde notificación aforo',
        notes: 'Requiere presentación docs físicos'
      },
      {
        metric: 'Respuesta consultas',
        commitment: '< 2 horas hábiles',
        notes: 'Email + WhatsApp + portal'
      },
      {
        metric: 'Gestión observaciones',
        commitment: 'Regularización en < 24h (si depende de nosotros)',
        notes: 'Si depende cliente: apoyamos pero no controlamos'
      }
    ],

    faqs: [
      {
        question: '¿Qué documentos necesito para importar?',
        answer: 'Mínimo: Factura comercial, packing list, conocimiento de embarque (BL/AWB). Según producto: certificado origen, permisos SAG/ISP/SERNAPESCA, homologaciones.'
      },
      {
        question: '¿Cuánto demora un despacho aduanero?',
        answer: 'Sin aforo: 24h. Con aforo documental: 48-72h. Con aforo físico: 3-5 días (depende de disponibilidad Aduana para inspección).'
      },
      {
        question: '¿Qué es un aforo y por qué me tocó?',
        answer: 'Aforo es revisión de Aduana (documental o física) para validar declaración. Se asigna por: perfil de riesgo, producto sensible, historial, o aleatorio.'
      },
      {
        question: '¿Puedo hacer despacho anticipado?',
        answer: 'Sí, si tienes documentación antes del arribo. Tramitamos DIN anticipada, liberación puede ser inmediata post-arribo (sin aforo).'
      },
      {
        question: '¿Cobran por gestión de observaciones?',
        answer: 'Primera gestión incluida. Si requiere múltiples idas/vueltas por docs faltantes del cliente, cobramos fee adicional por gestión.'
      }
    ],

    relatedServices: [
      { name: 'Freight Forwarding', link: 'freight-forwarding' },
      { name: 'Contract Logistics', link: 'almacenaje-distribucion' }
    ]
  },

  'seguro-carga': {
    id: 'seguro-carga',
    title: 'Seguro de Carga Internacional',
    subtitle: 'Protección integral para tus envíos internacionales',
    tagline: 'Protege tu inversión en tránsito',
    description: 'Pólizas de seguro all-risk con cobertura completa contra pérdida, daño o robo durante todo el trayecto logístico.',
    
    subpages: [
      {
        id: 'overview',
        title: 'Panorama General',
        description: 'Qué cubrimos y cómo',
        icon: <Home className="h-5 w-5" />
      },
      {
        id: 'operacion',
        title: 'Operación',
        description: 'Proceso de aseguramiento',
        icon: <Settings className="h-5 w-5" />
      },
      {
        id: 'tecnologia',
        title: 'Tecnología',
        description: 'Plataforma de gestión',
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
        title: 'Casos de Siniestros',
        description: 'Ejemplos reales',
        icon: <Target className="h-5 w-5" />
      }
    ],

    scenarios: [
      {
        pain: 'Importador con contenedor dañado por tormenta en mar',
        solution: 'Póliza all-risk ICC A cubre daño por agua, presentamos claim con fotos/peritaje',
        outcome: 'Indemnización 100% valor mercancía en 30 días',
        icon: <Shield className="h-6 w-6" />
      },
      {
        pain: 'Exportador con carga robada en puerto de destino',
        solution: 'Cobertura de robo total/parcial, coordinación con aseguradora local',
        outcome: 'Compensación 95% valor factura (deducible 5%)',
        icon: <AlertCircle className="h-6 w-6" />
      },
      {
        pain: 'Maquinaria dañada por mala manipulación en puerto',
        solution: 'Peritaje técnico, claim ante aseguradora + carrier, reparación cubierta',
        outcome: 'Equipo reparado sin costo adicional',
        icon: <Package className="h-6 w-6" />
      }
    ],

    deliverables: [
      {
        name: 'Certificado de Seguro',
        description: 'Póliza digital con número único, coberturas, suma asegurada',
        type: 'document',
        icon: <FileText className="h-5 w-5" />
      },
      {
        name: 'Portal de Claims',
        description: 'Plataforma web para reportar siniestros, subir evidencia, hacer seguimiento',
        type: 'dashboard',
        icon: <BarChart3 className="h-5 w-5" />
      },
      {
        name: 'API de Cotización',
        description: 'Endpoint para calcular prima según valor CIF, ruta, tipo mercancía',
        type: 'integration',
        icon: <Code className="h-5 w-5" />
      },
      {
        name: 'Reporte de Siniestralidad',
        description: 'Dashboard anual con histórico de claims, frecuencia, montos',
        type: 'report',
        icon: <BarChart3 className="h-5 w-5" />
      }
    ],

    integrations: [
      {
        system: 'Aseguradoras Globales',
        description: 'Alianzas con Zurich, Mapfre, HDI para emisión automática de pólizas',
        technologies: ['API REST', 'XML'],
        icon: <Shield className="h-5 w-5" />
      },
      {
        system: 'TMS/WMS',
        description: 'Integración para asegurar automáticamente envíos según regla de negocio',
        technologies: ['Webhooks', 'REST API'],
        icon: <Database className="h-5 w-5" />
      },
      {
        system: 'Freight Forwarders',
        description: 'Sincronización con datos de embarque para certificados automáticos',
        technologies: ['EDI', 'API'],
        icon: <Truck className="h-5 w-5" />
      },
      {
        system: 'Claims Management',
        description: 'Plataforma centralizada para gestión de siniestros y peritajes',
        technologies: ['Cloud Platform', 'Storage'],
        icon: <FileText className="h-5 w-5" />
      }
    ],

    slas: [
      {
        metric: 'Emisión de póliza',
        commitment: '< 2 horas desde solicitud con datos completos',
        notes: 'Horario hábil'
      },
      {
        metric: 'Respuesta a cotización',
        commitment: '< 1 hora para rutas estándar',
        notes: 'Mercancía peligrosa: 4-8h'
      },
      {
        metric: 'Registro de claim',
        commitment: 'Confirmación en < 24h desde reporte',
        notes: 'Asignación de ejecutivo de claims'
      },
      {
        metric: 'Resolución de claim',
        commitment: '30-45 días desde presentación docs completos',
        notes: 'Depende de complejidad y peritaje'
      },
      {
        metric: 'Pago indemnización',
        commitment: '< 10 días hábiles desde aprobación claim',
        notes: 'Transferencia bancaria directa'
      }
    ],

    faqs: [
      {
        question: '¿Qué cubre una póliza all-risk ICC A?',
        answer: 'Cubre todos los riesgos de pérdida o daño físico salvo exclusiones específicas (guerra, huelgas, vicio propio). Es la cobertura más amplia.'
      },
      {
        question: '¿Cuánto cuesta asegurar una carga?',
        answer: 'Prima típica: 0.3% - 0.8% del valor CIF. Depende de: ruta, modo transporte, tipo mercancía, historial. Mínimo: USD 50 por póliza.'
      },
      {
        question: '¿Qué es el valor CIF?',
        answer: 'Cost + Insurance + Freight. Valor de factura + flete + seguro. Base para calcular suma asegurada (típicamente CIF + 10%).'
      },
      {
        question: '¿Puedo asegurar mercancía usada o de segunda mano?',
        answer: 'Sí, pero suma asegurada será valor real/depreciado, no valor nuevo. Requiere declaración de estado y fotos.'
      },
      {
        question: '¿Qué hago si mi carga llega dañada?',
        answer: '1) Tomar fotos inmediatamente. 2) Hacer reserva escrita en BL/POD. 3) Reportar claim en portal < 72h. 4) No disponer de mercancía hasta peritaje.'
      }
    ],

    relatedServices: [
      { name: 'Freight Forwarding', link: 'freight-forwarding' },
      { name: 'Project Cargo', link: 'project-cargo' }
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
  const workflows = {
    'ultima-milla': [
      { step: '1. Planificación de Rutas', description: 'Algoritmo optimiza rutas basado en ventanas horarias, prioridades y capacidad vehicular', tools: ['TMS Blue-box', 'Google Maps API'], time: '30 min' },
      { step: '2. Picking & Preparación', description: 'WMS genera órdenes de preparación. Escaneo con handheld valida SKU y cantidad', tools: ['WMS VULCANO', 'Scanners Zebra'], time: '1-2 hrs' },
      { step: '3. Carga y Despacho', description: 'Validación de carga por escaneo, asignación a conductor con app móvil', tools: ['App Conductores', 'GPS Tracker'], time: '45 min' },
      { step: '4. Entrega al Cliente', description: 'Geolocalización en tiempo real, POD digital con firma/foto, notificaciones automáticas', tools: ['App Móvil', 'SMS/Email'], time: 'Variable' },
      { step: '5. Confirmación y Reporte', description: 'Dashboard actualizado en tiempo real, reportes diarios de performance', tools: ['Power BI', 'API Clientes'], time: 'Inmediato' }
    ],
    'almacenaje-distribucion': [
      { step: '1. Recepción de Mercadería', description: 'Validación contra OC, inspección de calidad, registro en WMS con ubicación asignada', tools: ['WMS VULCANO', 'QA Checklists'], time: '2-4 hrs' },
      { step: '2. Almacenamiento Inteligente', description: 'Slotting automático según rotación ABC, control de temperatura/humedad para productos sensibles', tools: ['WMS', 'Sensores IoT'], time: 'Continuo' },
      { step: '3. Gestión de Inventario', description: 'Ciclos de conteo programados, alertas de stock bajo, FEFO/FIFO automático', tools: ['WMS', 'Handhelds'], time: 'Diario' },
      { step: '4. Picking Multi-canal', description: 'Picking por olas, batch picking para e-commerce, validación de SKU por código de barras', tools: ['WMS', 'Put-to-Light'], time: '1-3 hrs' },
      { step: '5. Cross-docking Rápido', description: 'Transferencia directa sin almacenamiento para productos de alta rotación', tools: ['WMS', 'Sorters'], time: '<4 hrs' },
      { step: '6. Despacho y Tracking', description: 'Preparación de documentación, control de carga, tracking multi-carrier', tools: ['TMS', 'API Carriers'], time: '1-2 hrs' }
    ],
    'transporte-terrestre': [
      { step: '1. Solicitud y Cotización', description: 'Cliente solicita servicio vía portal/API, TMS calcula tarifa según ruta, peso, tipo de carga', tools: ['Portal Clientes', 'TMS'], time: '< 1 hr' },
      { step: '2. Planificación de Carga', description: 'Asignación de vehículo según capacidad, consolidación de cargas FTL/LTL, ruteo óptimo', tools: ['TMS', 'Fleet Management'], time: '2-6 hrs' },
      { step: '3. Carga y Documentación', description: 'Verificación de documentación (carta porte, factura, guía), sellado de unidad, checklist pre-viaje', tools: ['App Conductores', 'ERP'], time: '1-2 hrs' },
      { step: '4. Monitoreo en Tránsito', description: 'GPS tracking cada 5 min, alertas de desvío/parada no autorizada, comunicación bidireccional', tools: ['GPS Tracker', 'Control Tower'], time: 'Continuo' },
      { step: '5. Entrega y POD', description: 'Confirmación con firma digital, foto de descarga, notificación a cliente', tools: ['App Móvil', 'API Clientes'], time: 'Variable' },
      { step: '6. Cierre Operacional', description: 'Liquidación de viaje, documentación digital, facturación automática', tools: ['ERP', 'Billing System'], time: '24 hrs' }
    ],
    'freight-forwarding': [
      { step: '1. Cotización Multimodal', description: 'Cliente solicita cotización vía portal, sistema consulta tarifas de carriers (aéreo/marítimo/terrestre)', tools: ['TMS', 'Carrier APIs'], time: '< 2 hrs' },
      { step: '2. Booking & Reserva', description: 'Cliente acepta cotización, sistema hace booking automático con carrier, asigna contenedor/espacio', tools: ['API Carriers', 'EDI'], time: '2-4 hrs' },
      { step: '3. Documentación Pre-embarque', description: 'Cliente carga docs comerciales, validamos compliance, generamos BL/AWB preliminar', tools: ['Portal Docs', 'Validators'], time: '24-48 hrs' },
      { step: '4. Coordinación Origen', description: 'Arreglo de recolección, inspección pre-embarque, entrega a carrier/puerto/aeropuerto', tools: ['GPS Tracking', 'WhatsApp'], time: '1-3 días' },
      { step: '5. Tracking en Tránsito', description: 'Monitoreo de milestones: salida, tránsito, arribo. Notificaciones automáticas a cliente', tools: ['Tracking Platform', 'APIs'], time: 'Continuo' },
      { step: '6. Despacho Destino', description: 'Coordinación con agente aduanero, liberación, entrega final a cliente', tools: ['Aduanas APIs', 'Portal'], time: '2-5 días' }
    ],
    'project-cargo': [
      { step: '1. Estudio de Viabilidad', description: 'Análisis de dimensiones, peso, ruta, restricciones. Visita terreno si es necesario', tools: ['CAD Tools', 'Survey'], time: '5-10 días' },
      { step: '2. Planificación Detallada', description: 'Diseño de plan de carga, permisos necesarios, cronograma Gantt, presupuesto detallado', tools: ['MS Project', 'AutoCAD'], time: '10-15 días' },
      { step: '3. Gestión de Permisos', description: 'Tramitación de permisos circulación, escoltas, cierre temporal de vías si aplica', tools: ['MOP/MTT Portals'], time: '30-45 días' },
      { step: '4. Preparación de Carga', description: 'Ingeniería de embalaje, fabricación de cuna, inspección pre-carga, aseguramiento', tools: ['Rigging Tools', 'Sensors'], time: '5-10 días' },
      { step: '5. Transporte Ejecutado', description: 'Carga con grúas especializadas, transporte con escolta, monitoreo GPS 24/7', tools: ['GPS Satellite', 'Radio'], time: 'Variable' },
      { step: '6. Entrega & Reporte', description: 'Descarga supervisada, inspección final, cierre documental, reporte post-proyecto', tools: ['Cameras', 'Docs'], time: '2-3 días' }
    ],
    'agenciamiento-aduanas': [
      { step: '1. Recepción de Documentos', description: 'Cliente envía factura, BL/AWB, packing list vía portal. Sistema valida completitud', tools: ['Portal Aduanero', 'Validators'], time: '< 1 hr' },
      { step: '2. Clasificación Arancelaria', description: 'Análisis de producto, asignación de código NCM/HTS, validación con Aduana si es complejo', tools: ['Base NCM', 'IA Classifier'], time: '1-4 hrs' },
      { step: '3. Presentación DIN/DUS', description: 'Generación de declaración con firma digital, presentación ante Aduanas vía SICEX', tools: ['SICEX API', 'Firma Digital'], time: '2-4 hrs' },
      { step: '4. Gestión Aforos', description: 'Si hay aforo documental/físico: presentación de docs, coordinación inspección con Aduana', tools: ['Portal Aduana', 'WhatsApp'], time: '24-72 hrs' },
      { step: '5. Pago de Aranceles', description: 'Cálculo automático de derechos/IVA, gestión de pago por cliente o cuenta corriente', tools: ['SICEX', 'Banking API'], time: '< 2 hrs' },
      { step: '6. Liberación y Retiro', description: 'Obtención de levante, coordinación retiro desde puerto/aeropuerto, entrega a almacén/cliente', tools: ['GPS', 'Transport'], time: '4-24 hrs' }
    ],
    'seguro-carga': [
      { step: '1. Solicitud de Cotización', description: 'Cliente solicita seguro vía portal/API con datos: valor CIF, ruta, mercancía', tools: ['Portal Seguros', 'API'], time: '< 1 hr' },
      { step: '2. Análisis de Riesgo', description: 'Sistema evalúa riesgo según ruta, historial, tipo mercancía. Tarifa calculada automáticamente', tools: ['Risk Engine', 'Algorithms'], time: '15-30 min' },
      { step: '3. Emisión de Póliza', description: 'Cliente acepta cotización, sistema emite certificado digital con número único', tools: ['Insurance Platform', 'PDF Generator'], time: '< 2 hrs' },
      { step: '4. Envío de Documentación', description: 'Certificado enviado por email + disponible en portal. BL/AWB actualizados si se requiere', tools: ['Email', 'Portal'], time: 'Inmediato' },
      { step: '5. Monitoreo (opcional)', description: 'Tracking de envío para alertas proactivas de riesgo (desvío, demora, clima extremo)', tools: ['Tracking APIs', 'Weather'], time: 'Continuo' },
      { step: '6. Gestión de Claims', description: 'Si hay siniestro: cliente reporta en portal, adjunta evidencia, peritaje coordinado', tools: ['Claims Portal', 'Peritos'], time: '30-45 días' }
    ]
  };

  const currentWorkflow = workflows[service.id as keyof typeof workflows] || [];

  return (
    <motion.div
      key="operacion"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative max-w-7xl mx-auto px-6 py-12 space-y-8"
    >
      {/* Header */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <Settings className="w-8 h-8 text-[#E41B13]" />
          <h2 className="text-3xl font-bold">Flujo Operacional Diario</h2>
        </div>
        <p className="text-gray-400 text-lg">
          Así ejecutamos {service.title} desde la solicitud hasta la entrega. Cada paso integrado con tecnología y validaciones en tiempo real.
        </p>
      </div>

      {/* Workflow Steps */}
      <div className="space-y-4">
        {currentWorkflow.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#E41B13]/50 transition-all duration-300"
          >
            {/* Connector Line */}
            {index < currentWorkflow.length - 1 && (
              <div className="absolute left-8 top-full h-4 w-0.5 bg-gradient-to-b from-[#E41B13]/50 to-transparent" />
            )}
            
            <div className="flex gap-6">
              {/* Step Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E41B13] to-[#8B0000] flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white">{step.step}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{step.time}</span>
                  </div>
                </div>
                
                <p className="text-gray-300">{step.description}</p>
                
                {/* Tools Used */}
                <div className="flex flex-wrap gap-2">
                  {step.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* KPIs Operacionales */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-[#E41B13]" />
          Métricas de Performance
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#E41B13] mb-2">
              {service.id === 'ultima-milla' ? '98.5%' : service.id === 'transporte-terrestre' ? '96.2%' : '99.1%'}
            </div>
            <p className="text-sm text-gray-400">On-Time Delivery Rate</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#E41B13] mb-2">
              {service.id === 'ultima-milla' ? '<15 min' : service.id === 'transporte-terrestre' ? '<30 min' : '<5 min'}
            </div>
            <p className="text-sm text-gray-400">Tiempo Respuesta Incidencias</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#E41B13] mb-2">
              {service.id === 'ultima-milla' ? '99.7%' : service.id === 'transporte-terrestre' ? '99.3%' : '99.9%'}
            </div>
            <p className="text-sm text-gray-400">Exactitud Inventario</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TecnologiaContent({ service }: any) {
  const [activeCategory, setActiveCategory] = useState('all');

  const techStack = {
    'ultima-milla': {
      'Sistemas Core': [
        { name: 'TMS Blue-box', purpose: 'Gestión de transporte y ruteo dinámico', tech: 'Cloud-based, API REST' },
        { name: 'WMS VULCANO', purpose: 'Control de inventario y picking', tech: 'SQL Server, .NET' },
        { name: 'App Conductores', purpose: 'POD digital, geolocalización, comunicación', tech: 'React Native, Firebase' }
      ],
      'Integraciones': [
        { name: 'Google Maps API', purpose: 'Cálculo de rutas y tiempos estimados', tech: 'REST API, Directions/Distance Matrix' },
        { name: 'API Clientes', purpose: 'Notificaciones en tiempo real de entregas', tech: 'Webhooks, JSON REST' },
        { name: 'SMS/Email Gateway', purpose: 'Alertas automatizadas a destinatarios', tech: 'Twilio, SendGrid' }
      ],
      'Hardware': [
        { name: 'GPS Trackers', purpose: 'Rastreo vehicular en tiempo real', tech: 'Teltonika, GPRS' },
        { name: 'Scanners Zebra', purpose: 'Lectura de códigos de barra en preparación', tech: 'TC52, Android' },
        { name: 'Tablets Rugerizadas', purpose: 'Captura de firma digital y fotos', tech: 'Samsung Galaxy Tab Active' }
      ],
      'Analítica': [
        { name: 'Power BI', purpose: 'Dashboards de performance operacional', tech: 'Microsoft BI Suite' },
        { name: 'Google Analytics', purpose: 'Tracking de notificaciones y aberturas', tech: 'GA4, Event Tracking' }
      ]
    },
    'almacenaje-distribucion': {
      'Sistemas Core': [
        { name: 'WMS VULCANO', purpose: 'Gestión integral de almacén: recepción, ubicación, picking, despacho', tech: 'SQL Server, .NET Core, APIs REST' },
        { name: 'ERP SAP/Dynamics', purpose: 'Integración con gestión financiera y facturación', tech: 'SAP B1 / Microsoft Dynamics' },
        { name: 'Control Tower', purpose: 'Visibilidad end-to-end de toda la cadena', tech: 'Cloud Platform, Real-time Dashboard' }
      ],
      'Integraciones': [
        { name: 'E-commerce APIs', purpose: 'Sincronización de órdenes desde Shopify, VTEX, Magento', tech: 'REST/GraphQL APIs' },
        { name: 'Carrier APIs', purpose: 'Integración con UPS, FedEx, DHL para tracking', tech: 'SOAP/REST APIs' },
        { name: 'EDI Gateway', purpose: 'Intercambio de documentos con clientes enterprise (ASN, 856)', tech: 'EDI X12, EDIFACT' }
      ],
      'Hardware': [
        { name: 'Handhelds RF', purpose: 'Escaneo y validación en tiempo real', tech: 'Zebra MC9300, Android' },
        { name: 'Put-to-Light', purpose: 'Sistemas de luces para picking batch', tech: 'PTL Systems' },
        { name: 'Sensores IoT', purpose: 'Monitoreo de temperatura/humedad en zonas sensibles', tech: 'MQTT, LoRaWAN' },
        { name: 'Sorters Automáticos', purpose: 'Clasificación automática de paquetes', tech: 'Conveyor Systems' }
      ],
      'Analítica': [
        { name: 'Power BI', purpose: 'KPIs de almacén: rotación, productividad, exactitud', tech: 'Microsoft BI Suite' },
        { name: 'WMS Analytics', purpose: 'Reportes de slotting, heatmaps de picking', tech: 'Built-in Analytics' }
      ]
    },
    'transporte-terrestre': {
      'Sistemas Core': [
        { name: 'TMS Blue-box', purpose: 'Gestión de flota, ruteo, tracking, documentación digital', tech: 'Cloud SaaS, API REST' },
        { name: 'Fleet Management', purpose: 'Control de mantenimiento, combustible, conductores', tech: 'SQL Database, Web Portal' },
        { name: 'Control Tower', purpose: 'Monitoreo centralizado de unidades en tránsito', tech: 'Real-time Dashboard, Alerts' }
      ],
      'Integraciones': [
        { name: 'GPS Tracking Platform', purpose: 'Posicionamiento satelital cada 5 minutos', tech: 'Telemetry API, GPRS' },
        { name: 'Portal Clientes', purpose: 'Consulta de tracking, documentación, facturas', tech: 'React SPA, Auth0' },
        { name: 'Billing System', purpose: 'Facturación electrónica automática', tech: 'SAT CFDI, Web Services' }
      ],
      'Hardware': [
        { name: 'GPS Tracker Vehicular', purpose: 'Rastreo GPS + telemetría (velocidad, frenadas, combustible)', tech: 'Teltonika FMB920' },
        { name: 'Tablet Conductores', purpose: 'App móvil para POD, check-in/out, comunicación', tech: 'Samsung Galaxy Tab A8' },
        { name: 'Sensores Carga', purpose: 'Apertura de puertas, temperatura en carga refrigerada', tech: 'IoT Sensors, LoRa' }
      ],
      'Analítica': [
        { name: 'Power BI', purpose: 'Dashboard de performance: OTIF, costos por ruta, tiempos', tech: 'Microsoft BI Suite' },
        { name: 'Telematics Analytics', purpose: 'Análisis de comportamiento de conducción, consumo', tech: 'Telematics Platform' }
      ]
    },
    'freight-forwarding': {
      'Sistemas Core': [
        { name: 'TMS Multimodal', purpose: 'Gestión de bookings aéreo/marítimo/terrestre, cotización automática', tech: 'Cloud Platform, APIs REST' },
        { name: 'Tracking Platform', purpose: 'Visibilidad end-to-end de envíos internacionales', tech: 'Real-time Tracking, Webhooks' },
        { name: 'Portal Clientes', purpose: 'Plataforma web para cotizaciones, bookings, documentación, tracking', tech: 'React SPA, Node.js Backend' }
      ],
      'Integraciones': [
        { name: 'Carrier APIs', purpose: 'Integración con Maersk, MSC, Emirates, LATAM Cargo para bookings y tracking', tech: 'EDI, REST/SOAP APIs' },
        { name: 'Aduanas', purpose: 'Conexión con SICEX, VUCE, VUCEM para despachos', tech: 'SOAP, XML, Certificados' },
        { name: 'ERP Clientes', purpose: 'Sincronización con SAP, Oracle, Dynamics', tech: 'EDI X12, IDOC, REST' },
        { name: 'E-commerce', purpose: 'Fulfillment cross-border con Shopify, VTEX, WooCommerce', tech: 'REST API, Webhooks' }
      ],
      'Herramientas': [
        { name: 'Tariff Engines', purpose: 'Motores de cálculo de flete aéreo/marítimo según peso/volumen', tech: 'Proprietary Algorithms' },
        { name: 'Document Management', purpose: 'Gestión de BL, AWB, facturas, certificados origen', tech: 'Cloud Storage, OCR' },
        { name: 'Compliance Tools', purpose: 'Validación de incoterms, permisos, restricciones por país', tech: 'Rules Engine' }
      ],
      'Analítica': [
        { name: 'Power BI', purpose: 'Dashboards de costos por ruta, tiempos tránsito, performance carriers', tech: 'Microsoft BI' },
        { name: 'Reporting Engine', purpose: 'Reportes automáticos de shipments, delays, costs', tech: 'Custom Reports' }
      ]
    },
    'project-cargo': {
      'Sistemas Core': [
        { name: 'Project Management System', purpose: 'Gestión de cronograma, recursos, hitos críticos', tech: 'MS Project, Gantt Charts' },
        { name: 'GPS Tracking Avanzado', purpose: 'Rastreo satelital 24/7 con geofencing', tech: 'Iridium Satellite, GPRS' },
        { name: 'Document Repository', purpose: 'Almacenamiento centralizado de planos, permisos, certificados', tech: 'SharePoint, Cloud' }
      ],
      'Herramientas de Ingeniería': [
        { name: 'CAD Software', purpose: 'Importación y análisis de planos de carga', tech: 'AutoCAD, SolidWorks, DWG/DXF' },
        { name: 'Route Planning Tools', purpose: 'Simulación de rutas con estudios de gálibo', tech: 'GIS, Mapping Software' },
        { name: 'Load Calculation', purpose: 'Cálculo de centros de gravedad, ejes de carga', tech: 'Engineering Software' }
      ],
      'Integraciones': [
        { name: 'Permisos Viales', purpose: 'Conexión con MOP, MTT, gobiernos regionales', tech: 'Web Forms, PDF Digital' },
        { name: 'Cameras & Sensors', purpose: 'Captura de fotos/videos durante transporte', tech: 'IoT Cameras, Cloud Upload' }
      ],
      'Analítica': [
        { name: 'Performance Reports', purpose: 'Análisis post-proyecto: timeline, costos, lecciones aprendidas', tech: 'Custom Dashboards' }
      ]
    },
    'agenciamiento-aduanas': {
      'Sistemas Core': [
        { name: 'Portal Aduanero', purpose: 'Plataforma web para carga de docs, consulta DINs, liquidaciones', tech: 'React SPA, Node.js' },
        { name: 'Classifier NCM/HTS', purpose: 'Motor de clasificación arancelaria con IA', tech: 'Machine Learning, NLP' },
        { name: 'Firma Digital', purpose: 'Certificados digitales para presentación DIN/DUS', tech: 'PKI, Digital Signatures' }
      ],
      'Integraciones': [
        { name: 'SICEX (Chile)', purpose: 'Integración directa con Aduanas para presentación declaraciones', tech: 'SOAP, XML, Firma Digital' },
        { name: 'VUCE/VUCEM', purpose: 'Conexión con ventanillas únicas Perú/México', tech: 'SOAP/REST APIs' },
        { name: 'SAG/ISP/SERNAPESCA', purpose: 'Gestión automática de permisos sectoriales', tech: 'REST API, XML' },
        { name: 'ERP Clientes', purpose: 'Sincronización de órdenes de compra para despacho anticipado', tech: 'EDI, REST' }
      ],
      'Herramientas': [
        { name: 'OCR Documents', purpose: 'Extracción automática de datos de facturas, BL', tech: 'Tesseract, Cloud Vision' },
        { name: 'Validators', purpose: 'Validación de completitud y consistency documental', tech: 'Rules Engine' },
        { name: 'Payment Gateway', purpose: 'Integración con bancos para pago aranceles', tech: 'Banking APIs' }
      ],
      'Analítica': [
        { name: 'Compliance Dashboard', purpose: 'Métricas de despachos, demoras, observaciones, aforos', tech: 'Power BI' }
      ]
    },
    'seguro-carga': {
      'Sistemas Core': [
        { name: 'Portal de Seguros', purpose: 'Plataforma web/móvil para cotización, emisión, claims', tech: 'React Native, Node.js' },
        { name: 'Risk Engine', purpose: 'Motor de análisis de riesgo y cálculo de primas', tech: 'Actuarial Algorithms, ML' },
        { name: 'Claims Management', purpose: 'Gestión centralizada de siniestros y peritajes', tech: 'Workflow Engine, Cloud' }
      ],
      'Integraciones': [
        { name: 'Aseguradoras', purpose: 'APIs con Zurich, Mapfre, HDI para emisión automática', tech: 'REST API, XML' },
        { name: 'TMS/Freight', purpose: 'Sincronización con datos de embarque para certificados automáticos', tech: 'Webhooks, API REST' },
        { name: 'Tracking APIs', purpose: 'Monitoreo de envíos para alertas proactivas de riesgo', tech: 'Real-time APIs' }
      ],
      'Herramientas': [
        { name: 'PDF Generator', purpose: 'Generación automática de certificados de seguro', tech: 'Template Engine' },
        { name: 'Payment Gateway', purpose: 'Cobro de primas vía tarjeta/transferencia', tech: 'Stripe, PayPal' },
        { name: 'Document Storage', purpose: 'Almacenamiento seguro de pólizas, evidencia claims', tech: 'AWS S3, Encryption' }
      ],
      'Analítica': [
        { name: 'Siniestralidad Dashboard', purpose: 'Análisis de frecuencia, severidad, trends por ruta/producto', tech: 'Power BI' }
      ]
    }
  };

  const currentStack = techStack[service.id as keyof typeof techStack] || {};
  const categories = Object.keys(currentStack);
  const displayStack = activeCategory === 'all' 
    ? Object.entries(currentStack).flatMap(([cat, items]) => items.map(item => ({ ...item, category: cat })))
    : (currentStack as any)[activeCategory] || [];

  return (
    <motion.div
      key="tecnologia"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative max-w-7xl mx-auto px-6 py-12 space-y-8"
    >
      {/* Header */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <Cpu className="w-8 h-8 text-[#E41B13]" />
          <h2 className="text-3xl font-bold">Stack Tecnológico</h2>
        </div>
        <p className="text-gray-400 text-lg">
          Herramientas, plataformas e integraciones que potencian {service.title}. Tecnología moderna para operación en tiempo real.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeCategory === 'all'
              ? 'bg-gradient-to-r from-[#E41B13] to-[#8B0000] text-white'
              : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
          }`}
        >
          Todas las Categorías
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-[#E41B13] to-[#8B0000] text-white'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {displayStack.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#E41B13]/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E41B13]/20 to-[#8B0000]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6 text-[#E41B13]" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  {activeCategory === 'all' && (
                    <span className="text-xs px-2 py-1 bg-[#E41B13]/20 border border-[#E41B13]/30 rounded-full text-[#E41B13]">
                      {item.category}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-sm mb-3">{item.purpose}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Zap className="w-3 h-3" />
                  <span>{item.tech}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Architecture Diagram Section */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Network className="w-6 h-6 text-[#E41B13]" />
          Arquitectura de Integración
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <Server className="w-8 h-8 text-[#E41B13] mx-auto mb-3" />
            <h4 className="font-bold mb-2">Sistemas Core</h4>
            <p className="text-sm text-gray-400">TMS, WMS, ERP integrados vía APIs REST en tiempo real</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <Database className="w-8 h-8 text-[#E41B13] mx-auto mb-3" />
            <h4 className="font-bold mb-2">Data Layer</h4>
            <p className="text-sm text-gray-400">SQL Server, Redis cache, Event streaming con Kafka</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <Globe className="w-8 h-8 text-[#E41B13] mx-auto mb-3" />
            <h4 className="font-bold mb-2">APIs Externas</h4>
            <p className="text-sm text-gray-400">Carriers, e-commerce, geolocalización, notificaciones</p>
          </div>
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
      className="relative max-w-7xl mx-auto px-6 py-12 space-y-8"
    >
      {/* Header */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-[#E41B13]" />
          <h2 className="text-3xl font-bold">SLAs & Compromisos Operacionales</h2>
        </div>
        <p className="text-gray-400 text-lg">
          Nuestros compromisos de nivel de servicio para {service.title}. Métricas realistas y medibles, sin inflación de números.
        </p>
      </div>

      {/* SLA Table */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-white/10 border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-300">Métrica</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-300">Compromiso</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-300">Notas</th>
              </tr>
            </thead>
            <tbody>
              {service.slas.map((sla: SLA, index: number) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#E41B13]" />
                      <span className="font-medium text-white">{sla.metric}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#E41B13]/20 to-[#8B0000]/20 border border-[#E41B13]/30 rounded-lg text-[#E41B13] font-bold">
                      {sla.commitment}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {sla.notes || 'Medido mensualmente, reportes disponibles en portal cliente'}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Dashboard Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#E41B13]/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-[#E41B13]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Monitoreo en Tiempo Real</h3>
              <p className="text-gray-400 text-sm mb-3">
                Dashboard personalizado con visibilidad de KPIs operacionales actualizados cada 15 minutos.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Performance vs SLA acordado</li>
                <li>• Alertas proactivas de desvíos</li>
                <li>• Reportes históricos exportables</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#E41B13]/20 rounded-lg">
              <FileText className="w-6 h-6 text-[#E41B13]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Reportes Mensuales</h3>
              <p className="text-gray-400 text-sm mb-3">
                Informe ejecutivo con análisis de cumplimiento, tendencias y planes de acción.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Cumplimiento por métrica</li>
                <li>• Análisis de incidencias</li>
                <li>• Recomendaciones de mejora</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Escalation Matrix */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-[#E41B13]" />
          Matriz de Escalamiento
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-[#E41B13] font-bold text-lg mb-2">Nivel 1 - Operaciones</div>
            <p className="text-sm text-gray-400 mb-3">Soporte 24/7 para incidencias operacionales</p>
            <div className="text-xs text-gray-500">Respuesta: &lt; 15 minutos</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-[#E41B13] font-bold text-lg mb-2">Nivel 2 - Gerencia</div>
            <p className="text-sm text-gray-400 mb-3">Desvíos mayores de SLA o impacto crítico</p>
            <div className="text-xs text-gray-500">Respuesta: &lt; 1 hora</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-[#E41B13] font-bold text-lg mb-2">Nivel 3 - Dirección</div>
            <p className="text-sm text-gray-400 mb-3">Crisis operacionales o contractuales</p>
            <div className="text-xs text-gray-500">Respuesta: &lt; 2 horas</div>
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
