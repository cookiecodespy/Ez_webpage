import { ShoppingCart, Plane, UtensilsCrossed, Factory, Car, Heart, Cpu, Package, Globe, Shield, TrendingUp, Clock, Zap, Target, Settings, Code, FileText, Home, BarChart3, Users, MapPin, Truck, AlertCircle, Network, Database, Server, Radio } from 'lucide-react';

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

export interface IndustryDetailData {
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
  relatedSolutions?: { name: string; link: string }[];
}

export const industriesData: Record<string, IndustryDetailData> = {
  'retail': {
    id: 'retail',
    title: 'Retail y E-commerce',
    subtitle: 'Soluciones omnicanal para comercio moderno',
    tagline: 'Fulfillment ágil y experiencia superior',
    description: 'Operaciones logísticas end-to-end diseñadas específicamente para retail omnicanal y e-commerce de alto volumen. Desde recepción de inventario hasta entrega final al cliente, gestionamos cada etapa con tecnología avanzada, integración nativa con plataformas de venta y flexibilidad para adaptarnos a picos estacionales. Soportamos modelos B2B, B2C, marketplaces y ship-from-store.',
    
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'Qué hacemos y cómo', icon: <Home className="h-5 w-5" /> },
      { id: 'operacion', title: 'Operación Retail', description: 'Flujos B2B y B2C', icon: <Settings className="h-5 w-5" /> },
      { id: 'tecnologia', title: 'Stack Tecnológico', description: 'E-commerce, WMS, POS', icon: <Code className="h-5 w-5" /> },
      { id: 'slas-entregables', title: 'SLAs & Entregables', description: 'Compromisos omnicanal', icon: <FileText className="h-5 w-5" /> },
      { id: 'escenarios', title: 'Casos Retail', description: 'E-commerce, tiendas', icon: <Target className="h-5 w-5" /> }
    ],

    scenarios: [
      { 
        pain: 'E-commerce con picos Black Friday 10x volumen sin capacidad', 
        solution: 'Bodega escalable + personal temporal + turnos extendidos + ruteo optimizado', 
        outcome: 'Procesamiento 50k órdenes en 48h vs 5k diarias', 
        icon: <ShoppingCart className="h-6 w-6" /> 
      },
      { 
        pain: 'Retail omnicanal sin visibilidad cross-canal (tienda vs online)', 
        solution: 'WMS integrado con POS + disponibilidad real-time + ship-from-store', 
        outcome: 'Reducción quiebres 65%, conversión online +22%', 
        icon: <Package className="h-6 w-6" /> 
      },
      { 
        pain: 'Devoluciones >25% por tallas sin proceso', 
        solution: 'Centro reverse logistics + inspección QA + re-stock automático + analytics', 
        outcome: 'Retorno a stock <48h, patterns identificados por SKU', 
        icon: <TrendingUp className="h-6 w-6" /> 
      }
    ],

    deliverables: [
      { name: 'Dashboard Omnicanal', description: 'Visibilidad unificada órdenes online/tiendas/marketplaces real-time', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Integración E-commerce', description: 'Sync bidireccional con Shopify, VTEX, WooCommerce, Magento', type: 'integration', icon: <Code className="h-5 w-5" /> },
      { name: 'Reportes Performance', description: 'KPIs: fill rate, perfect order, tiempo fulfillment, devoluciones', type: 'report', icon: <FileText className="h-5 w-5" /> },
      { name: 'API Inventario', description: 'Endpoints REST stock disponible por canal y ubicación', type: 'integration', icon: <Code className="h-5 w-5" /> }
    ],

    integrations: [
      { system: 'Plataformas E-commerce', description: 'Shopify, VTEX, WooCommerce, Magento con sync órdenes y stock', technologies: ['REST API', 'Webhooks', 'OAuth'], icon: <Globe className="h-5 w-5" /> },
      { system: 'Sistemas POS', description: 'Integración POS tiendas para ship-from-store y omnicanal', technologies: ['API REST', 'SQL', 'Web Services'], icon: <Database className="h-5 w-5" /> },
      { system: 'Marketplaces', description: 'MercadoLibre, Amazon, Falabella para fulfillment centralizado', technologies: ['API REST', 'FTP', 'EDI'], icon: <Network className="h-5 w-5" /> },
      { system: 'Carriers', description: 'Multi-carrier: Chilexpress, Starken, Correos, couriers locales', technologies: ['API REST', 'Webhooks'], icon: <Truck className="h-5 w-5" /> }
    ],

    slas: [
      { metric: 'Fulfillment B2C', commitment: '< 24h orden a despacho (stock disponible)', notes: 'Zona metropolitana' },
      { metric: 'Precisión inventario', commitment: '> 98% exactitud sistema vs físico', notes: 'Auditorías semanales' },
      { metric: 'Perfect Order Rate', commitment: '> 95% (SKU/cantidad/sin daños correcto)', notes: 'Medición mensual' },
      { metric: 'Reposición tiendas', commitment: '< 48h solicitud a entrega tienda', notes: 'Santiago y regiones principales' },
      { metric: 'Procesamiento devoluciones', commitment: '< 72h recepción a stock disponible', notes: 'Productos sin daño' }
    ],

    faqs: [
      { question: '¿Cómo manejan picos como Black Friday?', answer: 'Planificación 60 días antes: personal temporal, espacios adicionales, turnos extendidos, pre-picking. Capacidad flex +300%.' },
      { question: '¿Integran con mi e-commerce actual?', answer: 'Sí. Conectores nativos Shopify, VTEX, WooCommerce, Magento. Otras vía API REST/EDI. Setup 2-4 semanas.' },
      { question: '¿Qué pasa con devoluciones?', answer: 'Centro reverse logistics con QA, clasificación (re-stock/liquidación/descarte), actualización auto, analytics motivos.' },
      { question: '¿Ship-from-store para pedidos online?', answer: 'Sí, si tiendas tienen stock. Visibilidad omnicanal rutea a tienda cercana al cliente. Reduce tiempos y costos.' },
      { question: '¿Cómo evitan mezcla de productos?', answer: 'Zonas dedicadas, SKUs únicos con barcode, escaneo obligatorio cada paso, auditorías cruzadas. Segregación 100%.' }
    ],

    relatedSolutions: [
      { name: 'Tecnología', link: 'tecnologia' },
      { name: 'Alimentaria', link: 'alimentaria' }
    ]
  },

  'aerospace': {
    id: 'aerospace',
    title: 'Aerospace',
    subtitle: 'Logística de precisión para componentes críticos',
    tagline: 'Máxima seguridad y respuesta AOG',
    description: 'Soluciones logísticas especializadas para componentes aeronáuticos sensibles bajo regulaciones internacionales. Respuesta AOG 24/7, certificación completa.',
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'En construcción', icon: <Home className="h-5 w-5" /> }
    ],
    scenarios: [],
    deliverables: [],
    integrations: [],
    slas: [],
    faqs: [],
    relatedSolutions: [{ name: 'Industrial', link: 'industrial' }]
  },

  'alimentaria': {
    id: 'alimentaria',
    title: 'Industria Alimentaria',
    subtitle: 'Cadena de frío y frescura garantizada',
    tagline: 'Temperatura controlada y trazabilidad HACCP',
    description: 'Gestión integral temperatura para productos perecederos con trazabilidad completa desde origen hasta consumidor.',
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'En construcción', icon: <Home className="h-5 w-5" /> }
    ],
    scenarios: [],
    deliverables: [],
    integrations: [],
    slas: [],
    faqs: [],
    relatedSolutions: [{ name: 'Retail', link: 'retail' }]
  },

  'industrial': {
    id: 'industrial',
    title: 'Sector Industrial',
    subtitle: 'Logística para maquinaria y proyectos complejos',
    tagline: 'Project cargo y transporte especializado',
    description: 'Transporte especializado maquinaria pesada, equipos industriales, proyectos sobredimensionados.',
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'En construcción', icon: <Home className="h-5 w-5" /> }
    ],
    scenarios: [],
    deliverables: [],
    integrations: [],
    slas: [],
    faqs: [],
    relatedSolutions: [{ name: 'Aerospace', link: 'aerospace' }]
  },

  'automotriz': {
    id: 'automotriz',
    title: 'Sector Automotriz',
    subtitle: 'Just-in-time para componentes automotrices',
    tagline: 'Sincronización perfecta con líneas producción',
    description: 'Gestión just-in-time para piezas y componentes automotrices con sincronización líneas producción.',
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'En construcción', icon: <Home className="h-5 w-5" /> }
    ],
    scenarios: [],
    deliverables: [],
    integrations: [],
    slas: [],
    faqs: [],
    relatedSolutions: [{ name: 'Industrial', link: 'industrial' }]
  },

  'pharmaceutical': {
    id: 'pharmaceutical',
    title: 'Farmacéutica',
    subtitle: 'Alta sensibilidad y cumplimiento regulatorio',
    tagline: 'GDP compliance y cadena custodia',
    description: 'Soluciones especializadas productos farmacéuticos alta sensibilidad con temperatura controlada 2-8°C.',
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'En construcción', icon: <Home className="h-5 w-5" /> }
    ],
    scenarios: [],
    deliverables: [],
    integrations: [],
    slas: [],
    faqs: [],
    relatedSolutions: [{ name: 'Alimentaria', link: 'alimentaria' }]
  },

  'tecnologia': {
    id: 'tecnologia',
    title: 'Tecnología',
    subtitle: 'Transporte seguro equipos y componentes alto valor',
    tagline: 'Protección máxima para electrónica sensible',
    description: 'Logística especializada equipos tecnológicos alto valor con embalaje anti-estático y seguros all-risk.',
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'En construcción', icon: <Home className="h-5 w-5" /> }
    ],
    scenarios: [],
    deliverables: [],
    integrations: [],
    slas: [],
    faqs: [],
    relatedSolutions: [{ name: 'Retail', link: 'retail' }]
  },

  'otras': {
    id: 'otras',
    title: 'Otras Industrias',
    subtitle: 'Soluciones adaptadas a sectores especializados',
    tagline: 'Flexibilidad para necesidades únicas',
    description: 'Capacidad para adaptar soluciones logísticas a industrias con requerimientos específicos: química, construcción, agricultura, textil.',
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'En construcción', icon: <Home className="h-5 w-5" /> }
    ],
    scenarios: [],
    deliverables: [],
    integrations: [],
    slas: [],
    faqs: [],
    relatedSolutions: [{ name: 'Industrial', link: 'industrial' }]
  }
};
