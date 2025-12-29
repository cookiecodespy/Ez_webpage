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
    tagline: 'Fulfillment ágil que impulsa ventas y fideliza clientes',
    description: 'Operaciones logísticas end-to-end diseñadas específicamente para retail omnicanal y e-commerce de alto volumen. Desde recepción de inventario hasta entrega final al cliente, gestionamos cada etapa con tecnología avanzada, integración nativa con plataformas de venta y flexibilidad para adaptarnos a picos estacionales. Soportamos modelos B2B, B2C, marketplaces, ship-from-store, click-and-collect, y reverse logistics completo. Nuestra infraestructura escalable permite procesar desde 1,000 hasta 100,000+ órdenes mensuales sin comprometer calidad ni tiempos.',
    
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'Qué hacemos y por qué somos diferentes', icon: <Home className="h-5 w-5" /> },
      { id: 'operacion', title: 'Operación Retail', description: 'Flujos B2B, B2C y omnicanal detallados', icon: <Settings className="h-5 w-5" /> },
      { id: 'tecnologia', title: 'Stack Tecnológico', description: 'E-commerce, WMS, POS, APIs y más', icon: <Code className="h-5 w-5" /> },
      { id: 'slas-entregables', title: 'SLAs & Entregables', description: 'Compromisos medibles y reportes', icon: <FileText className="h-5 w-5" /> },
      { id: 'escenarios', title: 'Casos Retail', description: 'E-commerce, omnicanal, marketplaces', icon: <Target className="h-5 w-5" /> }
    ],

    scenarios: [
      { 
        pain: 'E-commerce con picos estacionales (Black Friday, Cyber Monday, Navidad) donde el volumen aumenta 10-15x sin capacidad operativa para procesarlo en tiempos normales', 
        solution: 'Bodega flex con espacios modulares escalables, contratación personal temporal capacitado 2 semanas antes, turnos extendidos 24/7, algoritmos de ruteo optimizado multi-zona, pre-picking basado en forecast ML, carriers backup precontratados', 
        outcome: 'Procesamiento exitoso de 50,000 órdenes en 48 horas (vs capacidad base 5,000/día). Entregas pico con 92% puntualidad. Rotación stock 3.5x vs 1.8x normal', 
        icon: <ShoppingCart className="h-6 w-6" /> 
      },
      { 
        pain: 'Retail omnicanal sin visibilidad real-time cross-canal (stock tienda física vs bodega vs online), causando quiebres de stock con inventario disponible en otra ubicación y ventas perdidas', 
        solution: 'WMS centralizado integrado con POS de todas las tiendas, sync inventario cada 15 minutos, disponibilidad mostrada en tiempo real al cliente online, ship-from-store automático si bodega sin stock, reservas cross-canal', 
        outcome: 'Reducción quiebres de stock 65%, conversión online +22%, NPS tienda +18 puntos. Rotación inventario mejoró 40% al evitar duplicación', 
        icon: <Package className="h-6 w-6" /> 
      },
      { 
        pain: 'Devoluciones >25% (especialmente en categorías moda/calzado) sin proceso estructurado: productos sin re-stockear por semanas, sin data de motivos, pérdida de margen', 
        solution: 'Centro reverse logistics dedicado con inspección QA en 3 niveles (re-stock/liquidación/descarte), re-etiquetado automático, integración WMS para disponibilidad inmediata, analytics dashboard motivos por SKU/categoría, políticas dinámicas basadas en histórico', 
        outcome: 'Retorno a stock vendible <48h (antes 15 días), identificación patterns (ej: talla XL zapato X siempre pequeña → ajuste tabla), recuperación 78% vs 45% antes. Reducción devoluciones totales a 18% en 6 meses', 
        icon: <TrendingUp className="h-6 w-6" /> 
      },
      { 
        pain: 'Marketplaces (MercadoLibre, Amazon, Falabella) con diferentes SLAs (24h, 48h, same-day) y sin capacidad de priorizar órdenes correctamente', 
        solution: 'Motor de orquestación con reglas de prioridad configurable por canal/SLA/cliente, wave picking inteligente, empaque diferenciado por marketplace, integración API directa con cada plataforma para tracking automático', 
        outcome: 'Cumplimiento SLA MercadoLibre Full 98.5% (requisito 97%), Amazon Prime 96% entregas <24h. Rating vendedor 4.9/5 en todos los canales', 
        icon: <Globe className="h-6 w-6" /> 
      },
      { 
        pain: 'Click-and-collect (compra online, retiro en tienda) con tiempos de preparación >4 horas y clientes abandonando compras', 
        solution: 'Proceso dedicado click-collect con picking priorizado, lockers smart en tiendas con código QR, notificación SMS cuando ready (promedio 45 min), integración POS para entrega sin fila', 
        outcome: 'Tiempo preparación promedio 38 minutos, 94% órdenes ready <1h. Adopción click-collect creció 240%, abandono post-compra bajó a 3%', 
        icon: <Clock className="h-6 w-6" /> 
      }
    ],

    deliverables: [
      { name: 'Dashboard Omnicanal Real-Time', description: 'Panel web con visibilidad unificada de órdenes online/tiendas/marketplaces actualizado en tiempo real. KPIs: órdenes procesadas, fulfillment rate, tiempo promedio picking-pack-ship, quiebres de stock, devoluciones por canal', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Integración E-commerce Full', description: 'Conectores nativos bidireccionales con Shopify, VTEX, WooCommerce, Magento, Prestashop. Sync automático órdenes nuevas cada 5 min, actualización stock real-time, tracking enviado a plataforma, webhooks status', type: 'integration', icon: <Code className="h-5 w-5" /> },
      { name: 'Reportes Performance Semanal/Mensual', description: 'KPIs ejecutivos: fill rate por SKU, perfect order rate, tiempo fulfillment promedio/p95, motivos devoluciones top 10, forecast vs real, comparativa MoM/YoY. Formato PDF + Excel + API', type: 'report', icon: <FileText className="h-5 w-5" /> },
      { name: 'API Inventario & Órdenes', description: 'Endpoints REST para consultar stock disponible en tiempo real por SKU/ubicación/canal, crear órdenes programáticas, tracking status, reservas, cancelaciones. Documentación OpenAPI, sandbox testing', type: 'integration', icon: <Code className="h-5 w-5" /> },
      { name: 'Analytics Devoluciones', description: 'Dashboard dedicado reverse logistics: motivos por categoría/SKU, tendencias temporales, tiempo procesamiento, valor recuperado vs pérdida, recomendaciones acciones (ej: ajustar ficha producto)', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Certificaciones Mensuales', description: 'Documentación compliance: inventarios auditados físico vs sistema, reportes SLA cumplimiento, certificados calidad procesos (ISO 9001 si aplica), seguros vigentes', type: 'document', icon: <FileText className="h-5 w-5" /> }
    ],

    integrations: [
      { system: 'Plataformas E-commerce', description: 'Shopify, VTEX, WooCommerce, Magento, Prestashop, Jumpseller con sincronización bidireccional automática de órdenes, stock, tracking y webhooks eventos', technologies: ['REST API', 'GraphQL', 'Webhooks', 'OAuth 2.0'], icon: <Globe className="h-5 w-5" /> },
      { system: 'Sistemas POS Retail', description: 'Integración con POS tiendas (Softland, SAP Retail, sistemas propietarios) para habilitar ship-from-store, visibilidad omnicanal, click-and-collect, reservas cross-canal', technologies: ['API REST', 'SQL Direct', 'SOAP Web Services', 'EDI'], icon: <Database className="h-5 w-5" /> },
      { system: 'Marketplaces Latam', description: 'MercadoLibre (Full, Flex), Amazon (FBA, Seller), Falabella.com, Ripley, Paris para fulfillment centralizado multi-canal con SLAs diferenciados', technologies: ['REST API', 'FTP/SFTP', 'EDI X12/EDIFACT', 'Webhooks'], icon: <Network className="h-5 w-5" /> },
      { system: 'Carriers & Última Milla', description: 'Integración multi-carrier: Chilexpress, Starken, Correos Chile, Blue Express, 99Minutos, couriers locales. Cotización automática, generación etiquetas, tracking unificado', technologies: ['API REST', 'Webhooks', 'FTP Labels', 'Manifiestos EDI'], icon: <Truck className="h-5 w-5" /> },
      { system: 'Pasarelas de Pago', description: 'Visibilidad estados pago (aprobado/rechazado/pending) desde Webpay, MercadoPago, PayPal, Stripe para coordinar fulfillment solo con pago confirmado', technologies: ['Webhooks', 'API REST', 'IPN'], icon: <Shield className="h-5 w-5" /> },
      { system: 'ERP Corporativos', description: 'SAP, Oracle, Microsoft Dynamics, Softland para sincronización contable, órdenes de compra, facturas, maestros de productos, clientes B2B', technologies: ['RFC/BAPI', 'SOAP', 'REST', 'ODBC/SQL'], icon: <Server className="h-5 w-5" /> }
    ],

    slas: [
      { metric: 'Fulfillment B2C (e-commerce)', commitment: '< 24 horas desde orden confirmada hasta despacho', notes: 'Stock disponible, zona metropolitana, pago aprobado. Corte diario 18:00' },
      { metric: 'Precisión Inventario (exactitud WMS)', commitment: '> 98% exactitud sistema vs auditoría física', notes: 'Medición semanal por muestreo aleatorio 5% SKUs. Ciclo completo mensual' },
      { metric: 'Perfect Order Rate', commitment: '> 95% (SKU correcto + cantidad + sin daños + a tiempo)', notes: 'Medición mensual. Incluye validación cliente (NPS post-entrega)' },
      { metric: 'Reposición Tiendas (B2B omnicanal)', commitment: '< 48 horas desde solicitud hasta entrega en tienda', notes: 'Santiago y regiones principales (cobertura 85% tiendas)' },
      { metric: 'Procesamiento Devoluciones', commitment: '< 72 horas desde recepción hasta stock disponible vendible', notes: 'Productos sin daño. QA completo con fotografías' },
      { metric: 'Disponibilidad Plataforma (uptime API/WMS)', commitment: '> 99.5% uptime mensual', notes: 'Excluye mantenimientos programados notificados 72h antes' },
      { metric: 'Time-to-Ship Marketplaces', commitment: 'MercadoLibre Full <24h, Amazon Prime <24h, Standard <48h', notes: 'Desde confirmación pago. Tracking actualizado cada 4h' }
    ],

    faqs: [
      { question: '¿Cómo manejan picos estacionales extremos como Black Friday o Cyber Monday?', answer: 'Iniciamos planificación 60 días antes del peak: contratación y capacitación de personal temporal, habilitación de espacios de bodega adicionales (módulos flex), turnos extendidos 24/7 con supervisión reforzada, pre-picking de SKUs top basado en forecast ML, carriers backup adicionales precontratados. Nuestra capacidad flex permite escalar hasta +300% volumen base sin degradar SLAs. Casos reales: procesamos 50k órdenes en 48h (Black Friday cliente retail moda) vs 5k órdenes diarias normales.' },
      { question: '¿Qué plataformas de e-commerce integran nativamente y cuánto demora el setup?', answer: 'Conectores nativos para Shopify, VTEX, WooCommerce, Magento, Prestashop, Jumpseller. Otras plataformas vía API REST genérica o webhooks. Setup típico 2-4 semanas: incluye configuración sync órdenes, mapeo SKUs, testing sandbox, capacitación equipo cliente, go-live asistido. Sincronización bidireccional: órdenes nuevas cada 5 min, stock real-time, tracking pushed a plataforma automáticamente.' },
      { question: '¿Cómo funciona el proceso de devoluciones (reverse logistics)?', answer: 'Centro dedicado reverse logistics: recepción con QA en 3 niveles (condición: nuevo/usado leve/descarte), clasificación automática (re-stock vendible / liquidación / descarte), re-etiquetado y retorno a ubicación WMS, actualización disponibilidad online inmediata, analytics dashboard motivos devolución por SKU/categoría. Tiempo promedio: <72h desde recepción hasta disponible para venta nuevamente. Además entregamos insights accionables: ej. "Zapato X talla 42 siempre devuelto por pequeño → sugerir ajustar tabla tallas".' },
      { question: '¿Soportan ship-from-store para pedidos online cumplidos desde tiendas físicas?', answer: 'Sí, totalmente. Integramos POS de tiendas con nuestro WMS para visibilidad omnicanal real-time. Cuando pedido online llega, algoritmo rutea automáticamente a la ubicación óptima (bodega central vs tienda más cercana al cliente con stock). Tienda recibe picking list, prepara pedido, genera etiqueta courier. Beneficios: reduce tiempo entrega (tienda más cerca que bodega), optimiza inventario distribuido, reduce costos transporte. Ejemplo real: cliente con 40 tiendas redujo entrega promedio de 3.2 días a 1.8 días habilitando ship-from-store.' },
      { question: '¿Cómo garantizan que no se mezclen productos de diferentes clientes (si operan multi-cliente)?', answer: 'Segregación total por cliente mediante: zonas físicas dedicadas en bodega (muros/rejas si requerido), SKUs únicos con prefijo cliente, códigos de barras propios, escaneo obligatorio en cada paso operacional (recepción/picking/packing/despacho), auditorías cruzadas aleatorias diarias, personal asignado por cliente cuando volumen lo justifica. Sistema WMS imposibilita asignar orden de cliente A a stock de cliente B. Certificamos segregación 100% mediante auditorías independientes trimestrales.' },
      { question: '¿Qué visibilidad tendré sobre el estado de mis órdenes e inventario?', answer: 'Acceso 24/7 a dashboard web real-time con: estado cada orden (received/picking/packed/shipped/delivered), ubicación física de tu inventario (rack/posición), stock disponible vs reservado vs en tránsito, KPIs operacionales (fill rate, tiempo fulfillment, devoluciones), tracking unificado multi-carrier. Además: API REST para integrar con tus sistemas, reportes automatizados semanales/mensuales, alertas configurables (ej: stock bajo, SLA en riesgo), exportación data Excel/CSV para análisis propio.' },
      { question: '¿Pueden manejar productos de diferentes categorías (ej: ropa + electrónica + cosméticos)?', answer: 'Sí, somos multi-categoría. Tenemos zonas especializadas según necesidades: temperatura controlada (cosméticos/alimentos), seguridad reforzada (electrónica de alto valor), colgado (ropa/textil), productos sensibles (fragilidad). Empaques diferenciados por tipo producto, personal capacitado por categoría. Casos reales operando: moda/calzado, electrónica/tech, hogar/deco, belleza/cuidado personal, alimentos no perecibles, juguetes. Cada categoría con procesos optimizados según sus particularidades.' },
      { question: '¿Qué pasa si hay un quiebre de stock o problema con una orden?', answer: 'Protocolo de excepciones: detección automática (ej: SKU sin stock físico pero sistema dice disponible), alerta inmediata a supervisor + cliente vía email/WhatsApp, opciones: esperar reposición (ETA comunicado), sustituir por SKU similar si cliente acepta, cancelar parcial/total con reembolso inmediato. Tracking de todas las excepciones con análisis root-cause semanal para evitar recurrencia. Commitment: 100% excepciones resueltas <4 horas con comunicación proactiva cliente.' }
    ],

    relatedSolutions: [
      { name: 'Tecnología & Software', link: 'tecnologia' },
      { name: 'Industria Alimentaria', link: 'alimentaria' },
      { name: 'Farmacéutica', link: 'pharmaceutical' }
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
