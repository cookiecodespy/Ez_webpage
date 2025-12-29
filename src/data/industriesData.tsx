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
    subtitle: 'Fulfillment operacional para clientes retail omnicanal',
    tagline: 'Gestión logística que potencia la operación de retailers y e-commerce',
    description: 'Servicios de fulfillment B2B especializados para empresas retail que operan canales omnicanal (tiendas físicas + e-commerce + marketplaces). Gestionamos operaciones logísticas end-to-end para nuestros clientes: almacenamiento, gestión de inventario, preparación de órdenes, distribución a tiendas, despacho e-commerce y reverse logistics. Integramos con los sistemas de nuestros clientes (WMS, e-commerce, POS) para visibilidad total. Infraestructura escalable diseñada para manejar desde 1,000 hasta 100,000+ órdenes mensuales, con capacidad flex para peaks estacionales. Nuestros clientes incluyen retailers con operación omnicanal, marcas D2C, y sellers en marketplaces que requieren fulfillment profesional.',
    
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'Qué hacemos y por qué somos diferentes', icon: <Home className="h-5 w-5" /> },
      { id: 'operacion', title: 'Operación Retail', description: 'Flujos B2B, B2C y omnicanal detallados', icon: <Settings className="h-5 w-5" /> },
      { id: 'tecnologia', title: 'Stack Tecnológico', description: 'E-commerce, WMS, POS, APIs y más', icon: <Code className="h-5 w-5" /> },
      { id: 'slas-entregables', title: 'SLAs & Entregables', description: 'Compromisos medibles y reportes', icon: <FileText className="h-5 w-5" /> },
      { id: 'escenarios', title: 'Casos Retail', description: 'E-commerce, omnicanal, marketplaces', icon: <Target className="h-5 w-5" /> }
    ],

    scenarios: [
      { 
        pain: 'Cliente retail moda con 40 tiendas + e-commerce enfrentaba picos estacionales (CyberMonday, Black Friday) con volumen 10x normal sin capacidad operativa interna para procesar órdenes en SLA <24h comprometido a sus clientes finales', 
        solution: 'Implementamos bodega flex con módulos escalables, personal temporal capacitado 2 semanas pre-peak, turnos extendidos 24/7, ruteo optimizado multi-zona, pre-picking basado en forecast histórico del cliente, integración directa con plataforma e-commerce para sync automático órdenes', 
        outcome: 'Cliente procesó exitosamente peak estacional manteniendo SLA 24h en 94% órdenes. Reducción costo operacional 28% vs operación interna. Satisfacción clientes finales mejoró significativamente por cumplimiento entregas', 
        icon: <ShoppingCart className="h-6 w-6" /> 
      },
      { 
        pain: 'Retailer omnicanal (electrónica) con 25 tiendas + e-commerce sin visibilidad unificada de stock cross-canal: quiebres de stock online con producto disponible en tiendas, pérdida de ventas, inventario duplicado inmovilizado', 
        solution: 'Integramos nuestro WMS con su sistema POS para visibilidad real-time, sincronización stock cada 15 min, habilitamos ship-from-store automático cuando bodega sin stock, portal unificado para su equipo comercial consultar disponibilidad total', 
        outcome: 'Quiebres de stock online redujeron 58% en trimestre. Conversión e-commerce aumentó 19% al mostrar stock real. Rotación inventario mejoró 35% al optimizar distribución cross-canal. Cliente redujo capital inmovilizado en inventario significativamente', 
        icon: <Package className="h-6 w-6" /> 
      },
      { 
        pain: 'Marca D2C moda/calzado online con devoluciones >22% del volumen despachado, sin proceso estructurado: productos devueltos sin inspeccionar por semanas, sin data de motivos, pérdida de margen al no poder revender rápidamente', 
        solution: 'Implementamos centro reverse logistics dedicado: inspección QA en 3 niveles (restock/outlet/descarte), re-etiquetado y fotografía, reingreso a WMS en <48h, dashboard analytics motivos devolución por SKU para cliente, políticas dinámicas según histórico producto', 
        outcome: 'Tiempo retorno a stock vendible: <48h (antes 12-15 días). Tasa recuperación vendible: 76% (antes 51%). Cliente identificó patterns (ej: modelo X talla 40 siempre devuelto por pequeño) y ajustó ficha producto, reduciendo devoluciones 6% en 4 meses', 
        icon: <TrendingUp className="h-6 w-6" /> 
      },
      { 
        pain: 'Seller multi-marketplace con SKUs en múltiples plataformas simultáneas, cada una con SLAs diferentes (<24h, <48h), sin capacidad interna de priorizar correctamente ni actualizar stock real-time cross-plataforma', 
        solution: 'Integramos vía API con las plataformas de venta para sync automático órdenes cada 5min, motor de priorización por SLA y penalidades, wave picking diferenciado, empaque con branding de cada canal, tracking pushed automáticamente a cada plataforma', 
        outcome: 'Cumplimiento SLAs contractuales: >97% en todos los canales (evitó penalidades). Rating seller mejoró consistentemente en todas las plataformas. Cliente aumentó ventas al poder crecer sin límite operativo interno', 
        icon: <Globe className="h-6 w-6" /> 
      },
      { 
        pain: 'Retailer con 30 tiendas lanzó click-and-collect (compra online, retiro tienda) pero tiempo preparación >4h causaba abandono: clientes no retiraban pedidos, devoluciones automáticas, pérdida ventas y frustración cliente final', 
        solution: 'Implementamos proceso dedicado click-collect: picking priorizado en nuestra bodega, preparación express, integración con POS tiendas cliente, notificación SMS automática cuando pedido ready para retiro (promedio 45min desde orden), lockers inteligentes en tiendas principales', 
        outcome: 'Tiempo preparación promedio: 42min (antes 4+ horas). 96% órdenes ready <1h. Tasa retiro: 94% (antes 67%). Adopción click-collect del cliente creció 180% en 6 meses. Costos logísticos -31% vs envío a domicilio tradicional', 
        icon: <Clock className="h-6 w-6" /> 
      },
      { 
        pain: 'Retailer electrodomésticos con reposición tiendas ineficiente: solicitudes manuales por email, sin visibilidad stock bodega central, tiempos >5 días causando quiebres en tiendas y ventas perdidas en punto de venta', 
        solution: 'Portal B2B para tiendas solicitar reposición con visibilidad stock disponible real-time, aprobación automática bajo umbrales, picking dedicado B2B, ruteo optimizado para entregas consolidadas por zona, POD digital con tracking por pedido', 
        outcome: 'Tiempo reposición promedio: 36h (antes 5+ días). Quiebres de stock en tiendas -64%. Ventas perdidas por quiebre -72%. Satisfacción gerentes tienda aumentó significativamente. Costos transporte -22% por consolidación', 
        icon: <Truck className="h-6 w-6" /> 
      }
    ],

    deliverables: [
      { name: 'Dashboard Operacional Cliente', description: 'Panel web personalizado con visibilidad 24/7 de órdenes procesadas, estado inventario, KPIs cumplimiento (fill rate, perfect order rate, tiempos fulfillment), actualización cada 15min. Acceso multi-usuario para equipo del cliente', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Integración Bidireccional Sistemas Cliente', description: 'Conectores con plataformas e-commerce del cliente, sistemas POS tiendas, ERP corporativo vía APIs REST/EDI. Sync automático órdenes nuevas, actualización stock real-time, tracking pushed a plataforma, webhooks eventos críticos', type: 'integration', icon: <Code className="h-5 w-5" /> },
      { name: 'Reportes Ejecutivos Mensuales', description: 'Informe consolidado con KPIs operacionales: fill rate por SKU, perfect order rate, tiempos promedio fulfillment, top 10 motivos devoluciones, análisis rotación inventario, comparativas mes a mes. Formato PDF ejecutivo + Excel con data raw + API consulta', type: 'report', icon: <FileText className="h-5 w-5" /> },
      { name: 'API REST Inventario & Órdenes', description: 'Endpoints para sistemas del cliente: consultar stock disponible real-time por SKU/ubicación/canal, crear órdenes programáticas, consultar tracking, gestionar reservas/cancelaciones. Documentación OpenAPI completa, ambiente sandbox para testing', type: 'integration', icon: <Code className="h-5 w-5" /> },
      { name: 'Dashboard Reverse Logistics', description: 'Portal dedicado devoluciones con analytics: motivos devolución por categoría/SKU/período, tiempo procesamiento promedio, valor recuperado vs descarte, insights accionables (ej: productos con alta tasa devolución + motivo recurrente)', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Certificaciones & Auditorías', description: 'Documentación mensual: inventarios auditados (conteo físico vs sistema WMS), reportes cumplimiento SLAs acordados, certificados vigencia seguros de mercadería, fotos condiciones almacenamiento, trazabilidad lote si aplica', type: 'document', icon: <FileText className="h-5 w-5" /> }
    ],

    integrations: [
      { system: 'Plataformas E-commerce Clientes', description: 'Integración con las plataformas e-commerce de nuestros clientes mediante APIs REST/GraphQL. Sincronización bidireccional automática de órdenes nuevas, actualización stock disponible, envío tracking a plataforma cliente, webhooks para eventos operacionales', technologies: ['REST API', 'GraphQL', 'Webhooks', 'OAuth 2.0'], icon: <Globe className="h-5 w-5" /> },
      { system: 'Sistemas POS Retail', description: 'Conexión con sistemas POS de tiendas físicas del cliente para visibilidad stock cross-canal, habilitar ship-from-store, click-and-collect, reservas omnicanal, reposición automática tiendas', technologies: ['API REST', 'SQL Direct', 'SOAP Web Services', 'EDI'], icon: <Database className="h-5 w-5" /> },
      { system: 'Marketplaces (Fulfillment para Sellers)', description: 'Gestión operacional para clientes que venden en marketplaces regionales e internacionales. Sincronización órdenes, actualización inventarios, cumplimiento SLAs específicos por canal de venta', technologies: ['REST API', 'FTP/SFTP', 'EDI X12/EDIFACT', 'Webhooks'], icon: <Network className="h-5 w-5" /> },
      { system: 'Carriers & Última Milla', description: 'Red de carriers integrados: Chilexpress, Starken, Correos Chile, Blue Express, 99Minutos, couriers regionales. Cotización automática por envío, generación etiquetas batch, tracking unificado, manifiestos digitales, gestión claims', technologies: ['API REST', 'Webhooks', 'FTP Labels', 'Manifiestos EDI'], icon: <Truck className="h-5 w-5" /> },
      { system: 'ERP Corporativos Clientes', description: 'Integración con ERP corporativo del cliente para sincronización órdenes de compra, transferencias entre bodegas, facturación automática, maestros de productos, trazabilidad contable. Soportamos protocolos EDI, APIs REST y conexiones directas SQL', technologies: ['EDI', 'REST API', 'SOAP', 'SQL'], icon: <Server className="h-5 w-5" /> },
      { system: 'Herramientas Analytics & BI', description: 'Integración con herramientas de Business Intelligence del cliente (Power BI y otras plataformas) para incorporar data operacional en dashboards corporativos. Export data automático vía API o conectores directos', technologies: ['REST API', 'SQL Connectors', 'Power BI', 'Data Export'], icon: <BarChart3 className="h-5 w-5" /> },
    ],

    slas: [
      { metric: 'Fulfillment E-commerce B2C (órdenes online cliente final)', commitment: '< 24 horas laborables desde orden confirmada hasta despacho', notes: 'Stock disponible, zona metropolitana Santiago. Órdenes recibidas antes 14:00 despachan mismo día. Excluye fines de semana y festivos' },
      { metric: 'Exactitud Inventario (WMS vs auditoría física)', commitment: '≥ 98.5% exactitud mensual', notes: 'Medición por conteo cíclico semanal (muestra 5% SKUs). Auditoría completa anual con cliente. Reportes discrepancias >0.5% investigados en 48h' },
      { metric: 'Perfect Order Rate (SKU + cantidad + condición + tiempo)', commitment: '≥ 96% mensual', notes: 'Órdenes sin errores de SKU, cantidad correcta, sin daños, despachadas en SLA. Medición end-to-end incluyendo confirmación recepción cliente final' },
      { metric: 'Reposición Tiendas B2B (transferencias cliente)', commitment: '< 48 horas laborables desde solicitud hasta entrega tienda', notes: 'Santiago y regiones principales (cobertura 90% puntos venta). Solicitudes consolidadas por tienda. POD digital con fotografía recepción' },
      { metric: 'Procesamiento Devoluciones (Reverse Logistics)', commitment: '< 72 horas desde recepción hasta actualización stock disponible', notes: 'Productos aptos para reventa según QA. Incluye inspección 3 niveles, re-etiquetado, fotografías, ingreso WMS. Reportes motivos devolución semanales' },
      { metric: 'Disponibilidad Sistemas (uptime WMS, APIs, Portal)', commitment: '≥ 99.5% uptime mensual', notes: 'Excluye ventanas mantenimiento programadas (notificadas 72h antes, máx 4h/mes). Medición 24/7. Compensación por downtime no programado >2h consecutivas' },
      { metric: 'Tiempo Respuesta Incidencias Críticas', commitment: '< 30 minutos respuesta inicial, < 4h resolución', notes: 'Incidencias críticas: quiebre stock crítico, error sistema bloqueante, desvío SLA masivo. Soporte 24/7 vía WhatsApp/Email/Teléfono. Escalamiento gerencial automático' }
    ],

    faqs: [
      { question: '¿Cómo manejan picos estacionales extremos como Black Friday o Cyber Monday?', answer: 'Iniciamos planificación 60 días antes del peak: contratación y capacitación de personal temporal, habilitación de espacios de bodega adicionales (módulos flex), turnos extendidos 24/7 con supervisión reforzada, pre-picking de SKUs top basado en forecast ML, carriers backup adicionales precontratados. Nuestra capacidad flex permite escalar hasta +300% volumen base sin degradar SLAs. Casos reales: procesamos 50k órdenes en 48h (Black Friday cliente retail moda) vs 5k órdenes diarias normales.' },
      { question: '¿Qué plataformas de e-commerce integran y cuánto demora el setup?', answer: 'Contamos con conectores para las principales plataformas e-commerce del mercado (API REST/GraphQL estándar). Setup típico 2-4 semanas: incluye configuración sync órdenes, mapeo SKUs, testing ambiente de pruebas, capacitación equipo cliente, go-live asistido. Sincronización bidireccional: órdenes nuevas cada 5 min, stock real-time, tracking pushed a plataforma automáticamente. Para plataformas customizadas del cliente, desarrollamos integración a medida vía API.' },
      { question: '¿Cómo funciona el proceso de devoluciones (reverse logistics)?', answer: 'Centro dedicado reverse logistics: recepción con QA en 3 niveles (condición: nuevo/usado leve/descarte), clasificación automática (re-stock vendible / liquidación / descarte), re-etiquetado y retorno a ubicación WMS, actualización disponibilidad online inmediata, analytics dashboard motivos devolución por SKU/categoría. Tiempo promedio: <72h desde recepción hasta disponible para venta nuevamente. Además entregamos insights accionables: ej. "Zapato X talla 42 siempre devuelto por pequeño → sugerir ajustar tabla tallas".' },
      { question: '¿Soportan ship-from-store para pedidos online cumplidos desde tiendas físicas?', answer: 'Sí, totalmente. Integramos sistemas POS de tiendas con nuestro WMS para visibilidad omnicanal real-time. Cuando pedido online llega, algoritmo rutea automáticamente a la ubicación óptima (bodega central vs tienda más cercana al cliente con stock). Tienda recibe picking list, prepara pedido, genera etiqueta courier. Beneficios: reduce tiempo entrega (tienda más cerca que bodega), optimiza inventario distribuido, reduce costos transporte. Caso ejemplo: cliente con 40 tiendas redujo entrega promedio de 3.2 días a 1.8 días habilitando ship-from-store.' },
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
    title: 'Aerospace & Aviación',
    subtitle: 'Logística crítica para componentes aeronáuticos',
    tagline: 'Respuesta AOG 24/7 y cumplimiento regulatorio total',
    description: 'Servicios logísticos especializados para la industria aeronáutica con certificaciones internacionales (IATA, OACI). Gestión de componentes críticos bajo estrictas regulaciones, respuesta AOG (Aircraft on Ground) 24/7, almacenamiento controlado con trazabilidad total, transporte especializado con seguros all-risk. Experiencia manejando desde consumibles aeronáuticos hasta componentes rotables de alto valor. Cadena de custodia documentada, temperatura/humedad controlada, protección ESD, segregación por aerolínea/operador. Capacidad para respuesta urgente <4h en AOG críticos.',
    
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'Qué hacemos y por qué somos diferentes', icon: <Home className="h-5 w-5" /> },
      { id: 'operacion', title: 'Operación Aerospace', description: 'Flujos AOG, componentes rotables, materiales peligrosos', icon: <Settings className="h-5 w-5" /> },
      { id: 'tecnologia', title: 'Stack Tecnológico', description: 'Trazabilidad, WMS aeronáutico, tracking satelital', icon: <Code className="h-5 w-5" /> },
      { id: 'slas-entregables', title: 'SLAs & Entregables', description: 'Compromisos críticos y certificaciones', icon: <FileText className="h-5 w-5" /> },
      { id: 'escenarios', title: 'Casos Aerospace', description: 'AOG, rotables, materiales regulados', icon: <Target className="h-5 w-5" /> }
    ],

    scenarios: [
      { 
        pain: 'Aerolínea regional con AOG (Aircraft on Ground) en Punta Arenas: necesitaba componente crítico motor desde Santiago en <8h para evitar cancelación vuelos y pérdidas >US$50k/día por aeronave inmovilizada', 
        solution: 'Activación protocolo AOG: validación certificados componente en 15min, preparación urgente con embalaje certificado, coordinación vuelo comercial prioritario Santiago-Punta Arenas, courier dedicado aeropuerto-hangar, documentación aduanera express, tracking GPS tiempo real, comunicación cada 30min con cliente', 
        outcome: 'Componente entregado en hangar en 6h 20min desde llamada inicial. Aeronave retornó servicio mismo día. Cliente evitó cancelación 4 vuelos programados. Certificación completa chain of custody sin observaciones. Cliente renovó contrato anual servicios AOG', 
        icon: <Plane className="h-6 w-6" /> 
      },
      { 
        pain: 'Operador helicópteros minería con 12 componentes rotables (alto valor US$200k+) sin trazabilidad adecuada: problemas auditorías DGAC, riesgo certificación operacional, sin visibilidad ubicación/condición componentes en overhaul vs disponibles', 
        solution: 'Implementamos WMS aeronáutico especializado: registro componentes con P/N, S/N, certificados vigentes, condición (serviceable/unserviceable/overhaul), alertas vencimiento TBO/calendar limits, trazabilidad movimientos 100%, integración con MRO para componentes en mantenimiento, reportes compliance DGAC formato requerido', 
        outcome: 'Trazabilidad 100% componentes críticos con auditoría DGAC aprobada sin observaciones. Reducción tiempo localización componentes de 4h promedio a <5min. Alertas proactivas evitaron 3 vencimientos TBO. Valor inventario verificado redujo prima seguro 18%. Cliente expandió contrato a gestión total rotables', 
        icon: <Shield className="h-6 w-6" /> 
      },
      { 
        pain: 'Distribuidor partes aeronáuticas importando componentes Europa/USA enfrentaba demoras aduaneras >10 días por documentación incompleta, clasificaciones incorrectas, sin agente especializado en normativa aeronáutica (Form 1, EASA Form 1, FAA 8130-3)', 
        solution: 'Agenciamiento aduanero especializado aerospace: validación pre-embarque documentación técnica (certificados aeronavegabilidad, trazabilidad fabricante), clasificación arancelaria específica componentes, gestión permisos DGAC anticipados, presentación DIN con documentación completa, coordinación inspecciones si requerido, liberación express', 
        outcome: 'Tiempo promedio despacho aduanero: 48h (antes 10-15 días). 100% embarques con documentación aprobada primer intento. Cero observaciones DGAC en 12 meses. Cliente redujo stock seguridad 40% al confiar en tiempos predecibles. Costos financieros inventario en tránsito -US$45k anuales', 
        icon: <Globe className="h-6 w-6" /> 
      },
      { 
        pain: 'MRO (Maintenance Repair Overhaul) necesitaba almacenar 500+ SKUs componentes aeronáuticos con diferentes requerimientos: temperatura controlada, humedad <50%, protección ESD, segregación químicos peligrosos (baterías litio, pinturas, solventes), sin instalaciones certificadas', 
        solution: 'Bodega certificada aerospace: zona temperatura controlada 15-25°C, humedad monitoreada 24/7 con alarmas, piso ESD con grounding, segregación materiales peligrosos clase 3/8/9 IATA, estanterías certificadas carga, iluminación LED sin UV, CCTV 24/7, acceso restringido biométrico, auditorías mensuales compliance', 
        outcome: 'Certificación bodega aprobada por auditor externo (ISO 9001 + AS9120 en proceso). Cero incidentes componentes sensibles en 18 meses operación. Cliente MRO aprobó EZ como proveedor preferente almacenaje. Inventario protegido bajo póliza all-risk US$2M. Auditoría cliente semestral: 100% conformidad requerimientos técnicos', 
        icon: <Package className="h-6 w-6" /> 
      },
      { 
        pain: 'Fabricante equipos aviónica exportando a Latinoamérica con logística inadecuada: 12% productos llegaban con daño por embalaje insuficiente, vibraciones transporte, manipulación incorrecta. Reclamos clientes, re-envíos costosos, reputación dañada', 
        solution: 'Ingeniería embalaje aerospace: análisis vulnerabilidad producto (drop test, vibration test), diseño packaging custom con foam anti-shock, protección ESD, cajas certificadas IATA, etiquetado "Fragile - Avionics", instrucciones handling, seguro all-risk, carriers certificados manejo carga delicada, tracking con sensores impacto', 
        outcome: 'Tasa daño transporte: 0.8% (antes 12%, reducción 93%). Cliente recuperó confianza clientes internacionales. Re-envíos bajaron de US$80k a US$6k anuales. NPS clientes finales subió de 6.2 a 8.7. Fabricante ganó contrato regional con aerolínea mayor gracias a confiabilidad logística mejorada', 
        icon: <TrendingUp className="h-6 w-6" /> 
      }
    ],

    deliverables: [
      { name: 'Trazabilidad Componentes 100%', description: 'Sistema tracking con P/N, S/N, certificados vigentes (Form 1, 8130-3), historial movimientos, condición (serviceable/unserviceable), alertas TBO/calendar limits, chain of custody documentada para auditorías DGAC/FAA', type: 'document', icon: <FileText className="h-5 w-5" /> },
      { name: 'Certificados Almacenamiento', description: 'Documentación mensual: condiciones temperatura/humedad registradas 24/7, inspecciones visuales componentes, segregación materiales peligrosos, cumplimiento normativa IATA DGR, póliza seguro vigente all-risk, fotos instalaciones', type: 'document', icon: <Shield className="h-5 w-5" /> },
      { name: 'Dashboard Inventario Aeronáutico', description: 'Portal web con visibilidad: ubicación física cada componente, estado certificados, componentes en overhaul vs disponibles, alertas vencimientos, valor inventario actualizado, reportes compliance para auditorías regulatorias', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Respuesta AOG Documentada', description: 'Para cada evento AOG: timeline completo desde activación hasta entrega, tracking GPS tiempo real, fotografías embalaje/condición producto, certificados expeditos, POD firmado técnico aeronáutico, facturación express', type: 'report', icon: <Clock className="h-5 w-5" /> },
      { name: 'Reportes Compliance Regulatorio', description: 'Informes mensuales/trimestrales formato DGAC/FAA: trazabilidad componentes críticos, materiales peligrosos manejados, incidentes/no-conformidades (si aplica), auditorías internas realizadas, certificaciones vigentes personal handling', type: 'report', icon: <FileText className="h-5 w-5" /> }
    ],

    integrations: [
      { system: 'Software MRO Clientes', description: 'Integración con sistemas gestión mantenimiento (Ramco, IFS, AMOS) para sincronización componentes en overhaul, órdenes trabajo, estimados retorno servicio, actualización estado rotables', technologies: ['REST API', 'SOAP', 'EDI'], icon: <Server className="h-5 w-5" /> },
      { system: 'Aduanas & Reguladores', description: 'Conexión sistemas DGAC Chile para permisos importación/exportación material aeronáutico, SICEX para despachos, coordinación con FAA/EASA para certificaciones internacionales', technologies: ['SOAP', 'XML', 'Portales Web'], icon: <Globe className="h-5 w-5" /> },
      { system: 'Carriers Aéreos Especializados', description: 'Red carriers certificados carga aeronáutica: LATAM Cargo, FedEx Priority, DHL Aviation, couriers AOG 24/7. Cotización express, reservas prioritarias, tracking dedicado', technologies: ['API REST', 'EDI', 'Email/Phone'], icon: <Plane className="h-5 w-5" /> },
      { system: 'Aseguradoras Aerospace', description: 'Integración con brokers seguros especializados aviación (Marsh, Aon) para pólizas all-risk componentes alto valor, certificados automáticos por embarque, gestión claims técnicos', technologies: ['API REST', 'Email Integration'], icon: <Shield className="h-5 w-5" /> }
    ],

    slas: [
      { metric: 'Respuesta AOG Crítico (Aircraft on Ground)', commitment: '< 4 horas movilización componente desde alerta hasta despacho', notes: 'Stock disponible Santiago, componente certificado ready-to-install. Incluye coordinación vuelo comercial/charter. Cobertura 24/7/365. Cargos AOG según tarifa urgencia' },
      { metric: 'Exactitud Trazabilidad Componentes', commitment: '100% componentes con P/N, S/N, certificados vigentes trazables', notes: 'Sistema WMS aeronáutico con validación cada movimiento. Auditorías aleatorias semanales. Cero tolerancia discrepancias' },
      { metric: 'Condiciones Almacenamiento Controlado', commitment: 'Temperatura 15-25°C, Humedad <50%, monitoreo 24/7', notes: 'Alarmas automáticas fuera rango con escalamiento inmediato. Registro continuo para auditorías. Backup sistemas climatización' },
      { metric: 'Despacho Aduanero Componentes Importados', commitment: '< 48 horas laborables liberación DGAC + Aduanas', notes: 'Documentación completa (Form 1, facturas, certificados). Coordinación pre-embarque. Excluye inspecciones extraordinarias no previstas' },
      { metric: 'Certificación Handling Personal', commitment: '100% personal operativo con capacitación materiales peligrosos IATA DGR', notes: 'Renovación anual certificaciones. Registro training actualizado disponible para auditorías cliente/regulador' }
    ],

    faqs: [
      { question: '¿Están certificados para manejar materiales peligrosos aeronáuticos (baterías litio, químicos)?', answer: '100% personal operativo certificado IATA DGR (Dangerous Goods Regulations) con renovación anual obligatoria. Instalaciones con segregación física materiales clase 3, 8, 9 según IATA. Embalaje certified para transporte aéreo, etiquetado reglamentario, documentación DGD (Dangerous Goods Declaration). Experiencia manejando baterías litio (UN3480/3481), pinturas aeronáuticas, solventes, fluidos hidráulicos. Auditorías compliance semestrales con cero no-conformidades últimos 24 meses.' },
      { question: '¿Cómo funciona el protocolo de respuesta AOG 24/7?', answer: 'Línea directa AOG 24/7/365 (+56 9 XXXX XXXX). Activación: (1) Recepción alerta con P/N componente, matrícula aeronave, ubicación AOG, (2) Validación stock/certificados en 15 min, (3) Coordinación logística urgente (courier dedicado, vuelo comercial prioritario o charter si crítico), (4) Embalaje certificado express, (5) Documentación expedita, (6) Tracking GPS tiempo real con updates cada 30min al cliente, (7) Entrega directa hangar/técnico con POD. Casos reales: promedio 4-8h Santiago a regiones, 12-18h internacional Sudamérica. Facturación tarifa AOG separada de servicios regulares.' },
      { question: '¿Qué certificaciones tienen sus instalaciones de almacenamiento?', answer: 'Instalaciones certificadas bajo ISO 9001:2015 (gestión calidad). En proceso certificación AS9120B (aerospace logistics). Bodega con: (a) Temperatura controlada 15-25°C con backup, (b) Humedad monitoreada <50% con deshumidificadores automáticos, (c) Piso ESD con grounding certificado para componentes electrónicos sensibles, (d) Segregación materiales peligrosos IATA compliant, (e) CCTV 24/7 con retención 90 días, (f) Acceso biométrico restringido con log auditable, (g) Alarmas intrusión conectadas central monitoreo. Auditorías internas mensuales + auditorías cliente aceptadas cuando requerido.' },
      { question: '¿Pueden gestionar componentes rotables de alto valor (>US$100k)?', answer: 'Sí, experiencia gestionando rotables hasta US$500k unitario (motores, APUs, landing gears, avionics). Póliza seguro all-risk con cobertura hasta US$5M agregado. Trazabilidad individual con S/N único, fotografías estado recepción, certificados aeronavegabilidad (Form 1, FAA 8130-3, EASA Form 1), cadena custodia documentada cada movimiento, almacenamiento zona seguridad reforzada, alertas automáticas TBO/calendar limits, coordinación con MRO para componentes en overhaul, reportes valor inventario actualizado mensual para pólizas seguro cliente. Segregación por operador/aerolínea si múltiples clientes.' },
      { question: '¿Qué documentación entregan para cumplir auditorías DGAC/FAA?', answer: 'Reportes compliance customizados: (1) Trazabilidad componentes: listado P/N, S/N, certificados vigentes, ubicación física, condición, movimientos período, (2) Condiciones almacenamiento: registros temperatura/humedad 24/7 con gráficos, (3) Materiales peligrosos: inventario clase IATA, certificados handling personal, incidentes (si aplica), (4) Chain of custody: documentación completa recepción-almacenamiento-despacho con PODs firmados, (5) Certificaciones vigentes: seguros, capacitaciones, instalaciones. Formato según requerimientos auditor (Excel, PDF, acceso directo sistema). Disponibilidad inmediata ante solicitudes urgentes auditoría.' },
      { question: '¿Cubren logística internacional para exportaciones/importaciones aerospace?', answer: 'Sí, freight forwarding especializado aeronáutico: (1) Coordinación carriers certificados (LATAM Cargo, FedEx, DHL), (2) Documentación técnica completa (certificados aeronavegabilidad, shipper declaration DG si aplica, facturas comerciales), (3) Gestión aduanera origen/destino con agentes especializados aerospace, (4) Permisos DGAC/FAA/EASA según país, (5) Embalaje certificado IATA, (6) Seguros internacionales all-risk, (7) Tracking puerta-a-puerta con milestones, (8) Gestión claims si incidentes. Cobertura Sudamérica, Norteamérica, Europa. Tiempos típicos: USA 4-7 días, Europa 7-10 días.' }
    ],

    relatedSolutions: [
      { name: 'Industrial', link: 'industrial' },
      { name: 'Tecnología', link: 'tecnologia' }
    ]
  },

  'alimentaria': {
    id: 'alimentaria',
    title: 'Industria Alimentaria',
    subtitle: 'Cadena de frío y trazabilidad total',
    tagline: 'Temperatura controlada HACCP con frescura garantizada',
    description: 'Logística especializada productos alimenticios con certificación HACCP y trazabilidad lote completa. Gestión cadena de frío 2-8°C (refrigerados) y -18°C (congelados) con monitoreo 24/7. Almacenamiento segregado por tipo producto (secos, refrigerados, congelados), control FIFO/FEFO riguroso, manejo productos perecederos con vida útil corta. Experiencia con distribuidores alimentos, retailers supermercados, horeca, food service. Cumplimiento normativa sanitaria, inspecciones SEREMI Salud, control plagas certificado. Flota refrigerada última milla con registro temperatura continuo.',
    
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'Qué hacemos y por qué somos diferentes', icon: <Home className="h-5 w-5" /> },
      { id: 'operacion', title: 'Operación Alimentaria', description: 'Flujos cadena frío, trazabilidad, FIFO/FEFO', icon: <Settings className="h-5 w-5" /> },
      { id: 'tecnologia', title: 'Stack Tecnológico', description: 'Sensores temperatura, WMS FEFO, tracking refrigerado', icon: <Code className="h-5 w-5" /> },
      { id: 'slas-entregables', title: 'SLAs & Entregables', description: 'Compromisos temperatura y trazabilidad', icon: <FileText className="h-5 w-5" /> },
      { id: 'escenarios', title: 'Casos Alimentaria', description: 'Perecederos, cadena frío, trazabilidad', icon: <Target className="h-5 w-5" /> }
    ],

    scenarios: [
      { 
        pain: 'Distribuidor lácteos con 200 SKUs perecederos (yogurt, leche, quesos) enfrentaba vencimientos 8-12% inventario mensual por gestión FIFO manual deficiente, rotación ineficiente, sin alertas próximos a vencer. Pérdidas US$15k/mes producto descartado', 
        solution: 'Implementamos WMS con FEFO automático (First Expired First Out): registro lote + fecha vencimiento en recepción, ubicación inteligente por fecha (más próximos a vencer en zona picking prioritario), alertas automáticas productos <7 días vencimiento, reportes diarios slow-movers, picking forzado FEFO con validación scanner', 
        outcome: 'Vencimientos reducidos a 1.2% mensual (reducción 85%). Ahorro US$12.5k/mes. Rotación inventario mejoró de 15 días a 8 días promedio. Cliente negoció mejores términos con supermercados al garantizar vida útil mínima 15 días en entrega. NPS clientes B2B subió significativamente', 
        icon: <UtensilsCrossed className="h-6 w-6" /> 
      },
      { 
        pain: 'Retailer supermercados regional con 18 tiendas + centro distribución, cadena frío refrigerados 2-8°C quebrada: sin monitoreo continuo temperatura, producto llegaba 10-12°C a tiendas (zona peligro), reclamos SEREMI Salud, riesgo sanitario, mermas por deterioro acelerado', 
        solution: 'Infraestructura cadena frío completa: cámaras refrigeradas 2-8°C con redundancia equipos, sensores temperatura IoT cada 5min con alarmas automáticas, puertas rápidas minimizar pérdida frío, flota refrigerada certificada con registro continuo temperatura, capacitación personal manipulación, pre-enfriamiento producto antes carga, entregas programadas ventanas horarias mínimo tiempo tránsito', 
        outcome: 'Temperatura tránsito mantenida 2-8°C en 98.7% trayectos (antes 65%). Cero observaciones SEREMI Salud en 14 meses. Mermas producto por deterioro temperatura bajaron 72%. Vida útil productos en góndola cliente aumentó 2-3 días. Ventas cliente refrigerados +18% al reducir quiebres stock por descartes', 
        icon: <Package className="h-6 w-6" /> 
      },
      { 
        pain: 'Importador productos gourmet congelados (-18°C) enfrentaba descongelaciones parciales transporte internacional (contenedores reefer sin monitoreo), producto llegaba re-congelado (cristales hielo, pérdida calidad), reclamos clientes gourmet, rechazos carga', 
        solution: 'Gestión integral cadena frío internacional: coordinación contenedores reefer certificados con carriers (Maersk, MSC), sensores temperatura data-logger continuo durante tránsito marítimo (15-30 días), alertas temperatura fuera rango, inspección pre-stuffing contenedor, desconsolidación en cámara fría -18°C, transporte local flota congelados certificada, certificados temperatura end-to-end para cliente', 
        outcome: 'Trazabilidad temperatura 100% trayecto origen-destino con gráficos por embarque. Incidentes descongelación: cero en 22 contenedores (18 meses). Tasa rechazo cliente bajó de 15% a 0%. Cliente expandió portafolio importado 40% al confiar en cadena frío confiable. Certificación auditor externo cadena frío aprobada', 
        icon: <TrendingUp className="h-6 w-6" /> 
      },
      { 
        pain: 'Productor salmón fresco requería distribución express <24h desde planta Pto Montt a restaurantes/pescaderías Santiago (900km) manteniendo 0-4°C, sin logística propia capable, intentos anteriores con transportistas genéricos resultaron en producto 8-10°C llegada (zona peligro)', 
        solution: 'Operación dedicada productos ultra-perecederos: recolección planta con flota refrigerada 0-4°C, pre-enfriamiento con hielo gel si requerido, transporte nocturno directo (sin transbordo), monitoreo GPS + temperatura real-time, entregas madrugada directo cámaras frías clientes, POD con validación temperatura recepción, certificados sanitarios expeditos', 
        outcome: 'Tiempo tránsito Pto Montt-Santiago: 14h promedio. Temperatura llegada: 1-3°C en 96% entregas. Producto con 4-5 días vida útil restante vs 2 días con logística anterior. Cliente aumentó volumen 65% al poder servir mercado Santiago confiablemente. Cero reclamos sanitarios. Precio premium producto fresco justificado', 
        icon: <Clock className="h-6 w-6" /> 
      },
      { 
        pain: 'Food service (catering eventos) con brote alimentario trazado a lote ingrediente contaminado, sin trazabilidad granular lote en bodega, imposibilidad identificar qué otros productos afectados, recall masivo costoso, daño reputacional severo', 
        solution: 'Sistema trazabilidad HACCP completa: registro lote fabricante en recepción con foto etiqueta, WMS con trazabilidad forward (lote X usado en qué órdenes cliente) + backward (orden Y contenía qué lotes), segregación física por lote si crítico, certificados análisis laboratorio archivados, mock recalls trimestrales (simulacro retiro producto en <2h), reportes SEREMI instantáneos si requerido', 
        outcome: 'Trazabilidad lote granular 100% productos críticos. En siguiente incidente (lote queso contaminado menor), identificación productos afectados en 35min (antes imposible). Recall focalizado solo 12 órdenes vs 200+ con sistema anterior. Costo recall 88% menor. Certificación HACCP auditor externo aprobada. Cliente recuperó confianza autoridad sanitaria', 
        icon: <Shield className="h-6 w-6" /> 
      }
    ],

    deliverables: [
      { name: 'Certificados Temperatura Continua', description: 'Registro automático temperatura cada 5min durante almacenamiento y transporte. Gráficos por producto/lote/ruta. Certificados firmados digitalmente para auditorías SEREMI Salud. Alarmas automáticas desviaciones con log eventos', type: 'document', icon: <FileText className="h-5 w-5" /> },
      { name: 'Trazabilidad Lote HACCP', description: 'Sistema trazabilidad forward/backward por lote fabricante: qué lotes recibidos, dónde almacenados, a qué clientes despachados, fechas movimientos. Capacidad mock recall <2h. Reportes formato autoridad sanitaria', type: 'dashboard', icon: <Shield className="h-5 w-5" /> },
      { name: 'Reportes Rotación FIFO/FEFO', description: 'Dashboard con inventario por fecha vencimiento, alertas productos <7 días expirar, análisis slow-movers, proyección vencimientos próximos 30 días, recomendaciones acciones (promociones, descuentos, donaciones)', type: 'report', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Certificación Instalaciones SEREMI', description: 'Documentación compliance sanitario: certificados fumigación mensual, control plagas, limpieza/sanitización áreas, capacitaciones manipuladores alimentos, inspecciones SEREMI (si aplica), fotos instalaciones actualizadas, procedimientos HACCP implementados', type: 'document', icon: <FileText className="h-5 w-5" /> },
      { name: 'Dashboard Cadena Frío Real-Time', description: 'Visibilidad 24/7 temperatura cámaras refrigeradas/congeladas, vehículos en tránsito, alertas inmediatas fuera rango, histórico 12 meses para auditorías, exportación data para análisis cliente', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> }
    ],

    integrations: [
      { system: 'WMS con FEFO Automático', description: 'Sistema gestión bodega con priorización automática First Expired First Out, validación lote+fecha en picking, bloqueo productos vencidos, alertas próximos a vencer, integración con ERP cliente para sincronización maestro productos', technologies: ['WMS VULCANO', 'SQL', 'REST API'], icon: <Database className="h-5 w-5" /> },
      { system: 'Sensores IoT Temperatura', description: 'Red sensores inalámbricos temperatura/humedad en cámaras frías, gateways LoRaWAN, plataforma cloud monitoreo 24/7, alarmas automáticas vía SMS/Email/WhatsApp si fuera rango, data-loggers transporte', technologies: ['IoT Sensors', 'LoRaWAN', 'MQTT', 'Cloud Platform'], icon: <Radio className="h-5 w-5" /> },
      { system: 'Flota Refrigerada Tracking', description: 'Vehículos con sistemas refrigeración certificados + GPS tracking + sensores temperatura. Monitoreo real-time ruta y temperatura carga. Alertas apertura puertas no autorizada, desvío ruta, temperatura crítica', technologies: ['GPS Teltonika', 'Temp Sensors', 'Telematics'], icon: <Truck className="h-5 w-5" /> },
      { system: 'ERP Clientes Alimentarios', description: 'Integración con ERP retail/distribuidores (SAP, Softland, sistemas propios) para órdenes compra, maestro productos con especificaciones sanitarias, trazabilidad lotes, devoluciones con motivo', technologies: ['EDI', 'REST API', 'SQL Integration'], icon: <Server className="h-5 w-5" /> }
    ],

    slas: [
      { metric: 'Temperatura Almacenamiento Refrigerados', commitment: '2-8°C mantenida 99.5% del tiempo', notes: 'Medición continua cada 5min. Alarmas automáticas fuera rango. Backup refrigeración. Registro auditable 12 meses. Excluye aperturas puertas operación normal' },
      { metric: 'Temperatura Almacenamiento Congelados', commitment: '-18°C a -22°C mantenida 99.8% del tiempo', notes: 'Cámaras congelación con redundancia. Monitoreo 24/7. Protocolo emergencia falla equipo. Certificados temperatura disponibles inmediatamente' },
      { metric: 'Rotación FIFO/FEFO', commitment: '100% picking respeta orden FEFO automático', notes: 'Validación sistema impide picking lote posterior si hay anterior disponible. Auditorías aleatorias diarias. Cero excepciones no autorizadas' },
      { metric: 'Trazabilidad Lote Crítico', commitment: 'Identificación productos afectados <2 horas en mock recall', notes: 'Pruebas trimestrales simulacro retiro producto. Reportes forward/backward trazabilidad instantáneos. Formato SEREMI Salud' },
      { metric: 'Transporte Cadena Frío', commitment: 'Temperatura objetivo ±2°C durante 95% trayecto', notes: 'Flota refrigerada certificada. Registro continuo temperatura. Pre-enfriamiento vehículos. Entregas ventanas horarias minimizar exposición' },
      { metric: 'Vencimientos Inventario', commitment: '< 2% valor inventario vencido mensual', notes: 'Con FEFO automático y alertas proactivas. Excluye productos ingresados con vida útil <30% restante. Recomendaciones acciones productos slow-moving' }
    ],

    faqs: [
      { question: '¿Tienen certificación HACCP y autorización sanitaria vigente?', answer: 'Instalaciones autorizadas Autoridad Sanitaria Regional (SEREMI Salud) para almacenamiento productos alimenticios refrigerados, congelados y secos. Implementación sistema HACCP con puntos críticos control documentados: recepción (validación temperatura llegada), almacenamiento (monitoreo continuo), despacho (verificación condiciones producto). Personal manipuladores con carnet vigente curso manipulación alimentos. Certificado fumigación mensual empresa certificada. Control plagas trimestral con registro. Inspecciones internas semanales + auditorías externas semestrales. Última inspección SEREMI: aprobada sin observaciones (documentación disponible).' },
      { question: '¿Cómo garantizan la cadena de frío sin interrupciones?', answer: 'Infraestructura redundante: (1) Cámaras refrigeradas 2-8°C y congeladas -18°C con equipos backup automáticos, (2) Sensores IoT temperatura cada 5min con alarmas SMS/Email inmediatas si fuera rango, (3) Generador eléctrico emergencia activación automática <60 segundos, (4) Puertas rápidas apertura/cierre minimizar pérdida frío, (5) Flota refrigerada certificada con pre-enfriamiento pre-carga, (6) Registro temperatura continuo almacenamiento + transporte con gráficos auditables, (7) Protocolo emergencia falla: transferencia producto a cámara backup <30min, notificación cliente inmediata, evaluación producto por responsable QA. Histórico: 99.7% uptime cadena frío últimos 24 meses.' },
      { question: '¿Qué pasa si un producto vence en su bodega?', answer: 'Sistema FEFO automático minimiza vencimientos (<2% valor mensual): (1) Alertas automáticas productos <7 días vencer con listado cliente, (2) Recomendación acciones: promociones, descuentos, donación bancos alimentos, (3) Cliente decide: retiro para liquidación propia, destrucción certificada por EZ (con cargo), o donación gestionada. Si producto vence sin acción cliente: segregación inmediata inventario bloqueado, imposibilidad picking sistema, notificación cliente + cargo almacenamiento vencido. Destrucción: certificada con empresa autorizada (acta destrucción firmada, fotos, factura). Importante: responsabilidad vencimiento es compartida (cliente debe gestionar alertas proactivamente, EZ garantiza FEFO correcto).' },
      { question: '¿Pueden manejar productos con diferentes temperaturas simultáneamente?', answer: 'Sí, instalaciones multi-temperatura: (1) Zona seca ambiente (15-25°C): productos no perecederos, conservas, granos, (2) Zona refrigerada (2-8°C): lácteos, carnes frescas, frutas/verduras, comidas preparadas, (3) Zona congelada (-18°C a -22°C): congelados, helados, pescados. Segregación física total entre zonas. Personal capacitado por zona. Equipos manipulación dedicados (no cross-contaminación). Casos operando: distribuidor con 300 SKUs secos + 150 refrigerados + 80 congelados simultáneos. WMS gestiona ubicaciones por requerimiento temperatura automáticamente.' },
      { question: '¿Cómo funciona la trazabilidad por lote para recalls?', answer: 'Trazabilidad granular lote fabricante: (1) Recepción: escaneo código barras lote + foto etiqueta + validación fecha vencimiento, registro proveedor, (2) Almacenamiento: ubicación WMS por lote (segregación física si múltiples lotes mismo SKU), (3) Despacho: picking por lote específico, registro qué lote fue a qué cliente/orden, (4) Reportes: Forward tracing (lote X → a qué clientes fue), Backward tracing (orden cliente Y ← de qué lotes vino). Mock recalls trimestrales: simulacro retiro producto contaminado, meta <2h identificar todos destinos. Formato reportes compatible SEREMI Salud para recall oficial. Sistema permite bloqueo instantáneo lote específico sin afectar otros lotes mismo producto.' },
      { question: '¿Qué tan rápido pueden distribuir productos perecederos a regiones?', answer: 'Logística express perecederos: (1) Santiago → regiones principales (Valparaíso, Concepción, Temuco, Pto Montt): <24h con flota refrigerada propia nocturna, (2) Regiones extremas (Arica, Iquique, Pta Arenas): 48-72h vía carriers refrigerados certificados (Chilexpress Frío, Blue Express Refrigerado), (3) Monitoreo temperatura continuo con data-loggers, (4) Coordinación ventanas entrega cliente para minimizar exposición, (5) Productos ultra-perecederos (ej: salmón fresco): servicio dedicado express <18h con sobre-costo. Certificados temperatura trayecto completo. Casos: distribuidor lácteos Santiago abastece 45 clientes regiones semanalmente con 98% entregas en temperatura objetivo.' }
    ],

    relatedSolutions: [
      { name: 'Retail', link: 'retail' },
      { name: 'Pharmaceutical', link: 'pharmaceutical' }
    ]
  },

  'industrial': {
    id: 'industrial',
    title: 'Sector Industrial',
    subtitle: 'Project cargo y transporte especializado',
    tagline: 'Logística para maquinaria pesada y proyectos complejos',
    description: 'Servicios logísticos especializados para sector industrial: transporte project cargo (maquinaria pesada, equipos sobredimensionados), gestión repuestos industriales críticos, almacenamiento componentes alto valor. Experiencia moviendo equipos 5-150 toneladas, cargas sobredimensionadas que requieren permisos especiales, escoltas, estudios de ruta. Servicio JIT (Just-in-Time) para plantas industriales con entregas programadas sincronizadas con líneas producción. Almacenamiento controlado para repuestos sensibles (rodamientos, motores, electrónica industrial). Respuesta urgente <24h para piezas críticas que detengan producción.',
    
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'Qué hacemos y por qué somos diferentes', icon: <Home className="h-5 w-5" /> },
      { id: 'operacion', title: 'Operación Industrial', description: 'Project cargo, JIT, repuestos críticos', icon: <Settings className="h-5 w-5" /> },
      { id: 'tecnologia', title: 'Stack Tecnológico', description: 'GPS tracking, WMS industrial, planificación rutas', icon: <Code className="h-5 w-5" /> },
      { id: 'slas-entregables', title: 'SLAs & Entregables', description: 'Compromisos entregas JIT y project cargo', icon: <FileText className="h-5 w-5" /> },
      { id: 'escenarios', title: 'Casos Industrial', description: 'Maquinaria pesada, urgencias producción', icon: <Target className="h-5 w-5" /> }
    ],

    scenarios: [
      { 
        pain: 'Planta procesamiento minero requería transportar chancador 45 toneladas (4m alto x 5m ancho) desde puerto San Antonio a faena Copiapó (800km) en ventana 72h para no detener expansión proyecto US$8M. Ruta con restricciones: túneles, puentes, curvas cerradas', 
        solution: 'Project cargo integral: (1) Estudio ingeniería ruta con levantamiento topográfico completo, (2) Tramitación permisos MOP circulación sobredimensionada + escoltas, (3) Cama baja especializada 60 ton, (4) Refuerzos estructurales equipo, (5) Transporte nocturno con cierres temporales tramos críticos, (6) Escolta policial + apoyo tránsito, (7) Monitoreo GPS satelital 24/7, (8) Seguro all-risk US$2M', 
        outcome: 'Equipo entregado faena en 68h según cronograma (dentro ventana 72h). Cero incidentes ruta. Cero daños equipo (validación técnica cliente en destino). Proyecto minero continuó según plan sin retrasos. Cliente ahorrólisis US$200k+ en penalidades contractuales por demora. Renovó contrato EZ para siguientes 3 equipos similares', 
        icon: <Factory className="h-6 w-6" /> 
      },
      { 
        pain: 'Planta embotelladora con parada línea producción por falla rodamiento crítico motor principal. Repuesto específico solo disponible proveedor Alemania, lead time estándar 15-20 días. Pérdidas producción US$30k/día parada', 
        solution: 'Logística urgente repuesto crítico: (1) Coordinación proveedor Alemania envío mismo día vía DHL Priority, (2) Agenciamiento aduanero express pre-cleared (documentación anticipada), (3) Courier dedicado aeropuerto-planta directo, (4) Seguimiento 24/7 con updates cada 2h cliente, (5) Contingencia: identificación proveedores alternativos paralelo', 
        outcome: 'Rodamiento entregado planta en 52h desde orden (vs 15-20 días estándar). Línea producción retornó operación en 56h total (incluye instalación). Cliente evitó pérdidas ~US$150k en producción parada. Ahorro vs pérdida justificó 5x costo logística urgente. Cliente implementó inventario seguridad repuestos críticos con almacenamiento EZ', 
        icon: <Zap className="h-6 w-6" /> 
      },
      { 
        pain: 'Fabricante maquinaria industrial implementando sistema JIT (Just-in-Time) con planta ensamblaje: necesitaba entregas sincronizadas 3 ventanas diarias (8am, 1pm, 6pm) de componentes desde 4 proveedores, sin capacidad coordinación logística interna', 
        solution: 'Servicio milk-run JIT: (1) Recolección programada componentes 4 proveedores en ruta optimizada, (2) Consolidación bodega EZ con cross-docking <4h, (3) Entregas planta cliente en ventanas exactas (tolerancia ±15min), (4) Validación cantidades con checklist digital, (5) Portal visibilidad tiempo real ETAs, (6) Inventario buffer mínimo (2-4h producción) en bodega EZ para emergencias', 
        outcome: 'Cumplimiento ventanas horarias: 98.2% (tolerancia ±15min). Inventario WIP planta cliente redujo 60% al confiar en JIT confiable. Costos almacenamiento cliente -US$25k/mes. Reducción lead time producción 18%. Planta aumentó output 12% al eliminar cuellos botella espera componentes. Expansión servicio a 6 proveedores adicionales', 
        icon: <Clock className="h-6 w-6" /> 
      },
      { 
        pain: 'Distribuidor repuestos industriales (rodamientos, correas, motores) con 1,200 SKUs críticos para mantención plantas clientes, sin trazabilidad serial números repuestos originales vs genéricos, reclamos garantía rechazados por fabricantes', 
        solution: 'WMS industrial con trazabilidad: (1) Registro serial number individual cada repuesto en recepción, (2) Certificados originalidad fabricante digitalizados y linkados a SKU, (3) Trazabilidad qué SN fue a qué cliente/orden, (4) Segregación física originales vs aftermarket, (5) Portal cliente con consulta certificados por SN, (6) Reportes garantía automáticos con evidencia trazabilidad', 
        outcome: 'Trazabilidad 100% repuestos críticos con SN. Cero rechazos claims garantía por falta documentación (antes 15-20% rechazados). Cliente recuperó US$45k en warranties año 1. Diferenciación comercial vs competencia sin trazabilidad. Expansión a 2,400 SKUs con mismo sistema. NPS clientes industriales +23 puntos', 
        icon: <Package className="h-6 w-6" /> 
      },
      { 
        pain: 'Empresa construcción con proyecto obra 15 meses requería almacenaje 200 toneladas materiales/equipos (generadores, compresores, herramientas) cerca obra Antofagasta, sin bodega propia, robos frecuentes en arriendo bodegas inseguras', 
        solution: 'Almacenamiento industrial seguro dedicado: (1) Zona bodega segregada proyecto cliente con cerco perimetral, (2) Seguridad 24/7: guardias, CCTV, alarmas, control acceso biométrico, (3) Inventario detallado con fotografías cada ítem, (4) Despachos programados a obra según avance (coordinación con jefe obra), (5) Seguro all-risk equipos alto valor, (6) Reportes inventario semanal actualizado', 
        outcome: 'Cero robos/pérdidas en 15 meses proyecto (vs 8 incidentes en intentos anteriores arriendo bodegas). Ahorro seguros cliente US$18k al tener bodega certificada. Inventario trazable simplificó auditorías proyecto. Devolución equipos post-proyecto 98% match inventario inicial. Cliente replicó modelo en siguientes 3 proyectos similares regionales', 
        icon: <Shield className="h-6 w-6" /> 
      }
    ],

    deliverables: [
      { name: 'Estudios Ingeniería Rutas (Project Cargo)', description: 'Análisis topográfico detallado con levantamiento en terreno: restricciones altura (puentes, cables, túneles), ancho (curvas, calzadas), peso (puentes, pavimentos). Simulación 3D trayecto. Identificación puntos críticos. Recomendaciones refuerzos/modificaciones temporales ruta', type: 'document', icon: <FileText className="h-5 w-5" /> },
      { name: 'Dashboard Entregas JIT Real-Time', description: 'Portal visibilidad entregas programadas Just-in-Time: ETAs actualizados GPS cada 5min, cumplimiento ventanas horarias por entrega, alertas proactivas retrasos, historial performance proveedor logístico, exportación data para integración MRP cliente', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Certificados Trazabilidad SN Repuestos', description: 'Documentación serial numbers repuestos industriales: qué SN recibido cuándo, certificados originalidad fabricante, qué SN despachado a qué cliente/orden, disponibilidad consulta SN específico, reportes garantía con trazabilidad completa', type: 'document', icon: <Shield className="h-5 w-5" /> },
      { name: 'Reportes Project Cargo Post-Transporte', description: 'Documentación completa movimiento: timeline ejecución vs planificado, tracking GPS completo, fotografías carga/descarga/tránsito, incidentes (si aplica) + acciones tomadas, POD firmado responsable destino, cierre administrativo', type: 'report', icon: <FileText className="h-5 w-5" /> },
      { name: 'Inventario Equipos Industrial Actualizado', description: 'Reporte semanal/mensual: inventario completo ítems almacenados con fotografías, movimientos período (ingresos/salidas), valor total actualizado para seguros, alertas ítems sin movimiento >90 días, forecast necesidades basado en consumo histórico', type: 'report', icon: <BarChart3 className="h-5 w-5" /> }
    ],

    integrations: [
      { system: 'MRP/ERP Industrial Clientes', description: 'Integración con sistemas planificación producción (SAP PP, Oracle Manufacturing, sistemas propios) para sincronizar entregas JIT con schedule producción, forecast componentes, órdenes reposición automáticas basadas en kanban', technologies: ['SAP RFC/BAPI', 'REST API', 'EDI'], icon: <Server className="h-5 w-5" /> },
      { system: 'Portales Permisos MOP/MTT', description: 'Conexión sistemas Ministerio Obras Públicas y Ministerio Transportes para tramitación permisos circulación cargas sobredimensionadas, escoltas, cierres temporales vías. Seguimiento estado tramitación online', technologies: ['Web Portals', 'Email Integration'], icon: <Globe className="h-5 w-5" /> },
      { system: 'GPS Tracking Cargas Especiales', description: 'Rastreo satelital tiempo real project cargo con geofencing ruta autorizada, alertas desvío, velocidad excesiva, paradas no programadas. Acceso cliente a tracking en vivo. Histórico completo trayectos', technologies: ['GPS Satellite', 'Iridium', 'Telematics APIs'], icon: <MapPin className="h-5 w-5" /> },
      { system: 'Proveedores Industriales (Milk-run)', description: 'Coordinación con múltiples proveedores componentes para recolecciones programadas milk-run JIT. Visibilidad forecast recolecciones próximas 7 días. Validación calidad/cantidad en origen', technologies: ['Portal B2B', 'API REST', 'EDI'], icon: <Truck className="h-5 w-5" /> }
    ],

    slas: [
      { metric: 'Cumplimiento Ventanas JIT (Just-in-Time)', commitment: '≥ 95% entregas en ventana horaria acordada (±15 min)', notes: 'Medición mensual. Ventanas típicas 2-4 horas. Alertas proactivas si riesgo incumplimiento. Excluye fuerza mayor (cortes ruta, desastres naturales)' },
      { metric: 'Project Cargo: Timeline vs Plan', commitment: 'Ejecución dentro timeline comprometido (±10%)', notes: 'Plan incluye holguras razonables. Comunicación proactiva si factores externos (clima, permisos) afectan schedule. Updates diarios durante ejecución' },
      { metric: 'Respuesta Urgencias Repuestos Críticos', commitment: '< 24h movilización pieza crítica disponible stock Chile', notes: 'Servicio express con cargo diferenciado. Coordinación inmediata proveedores. Tracking tiempo real. Si requiere importación urgente: mejor esfuerzo con updates frecuentes' },
      { metric: 'Exactitud Inventario Industrial', commitment: '≥ 99% exactitud física vs sistema', notes: 'Conteo cíclico semanal. Trazabilidad serial numbers componentes críticos. Fotografías ítems alto valor. Auditoría anual completa con cliente' },
      { metric: 'Seguridad Project Cargo (cero incidentes)', commitment: 'Cero daños carga atribuibles a transporte', notes: 'Inspección pre-carga con checklist. Refuerzos/amarres certificados. Monitoreo continuo. Fotografías antes/durante/después. Seguro all-risk obligatorio' }
    ],

    faqs: [
      { question: '¿Qué es su capacidad máxima para project cargo (toneladas y dimensiones)?', answer: 'Capacidad project cargo hasta 150 toneladas con equipos propios (camas bajas hidráulicas, dollies modulares). Dimensiones: hasta 6m ancho, 5m alto, 25m largo (configuraciones especiales). Para cargas >150 ton: coordinación con partners especializados (grúas 200-400 ton, transportes especiales). Casos ejecutados: transformadores 85 ton, chancadores 45 ton, estructuras metálicas 30m largo, equipos mineros sobredimensionados. Incluye ingeniería transporte, permisos, escoltas, seguros. Cobertura nacional con enfoque minería norte, industrial centro-sur.' },
      { question: '¿Cómo funciona el servicio JIT (Just-in-Time) para plantas industriales?', answer: 'JIT sincronizado con producción cliente: (1) Integración con MRP/ERP cliente para forecast componentes basado en plan producción, (2) Milk-run programado: recolección múltiples proveedores en ruta optimizada, (3) Cross-docking express bodega EZ (<4h), (4) Entregas ventanas exactas planta (ej: 8am ±15min, 1pm ±15min, 6pm ±15min), (5) Validación digital cantidades/calidad, (6) Buffer stock mínimo bodega EZ para contingencias, (7) Tracking tiempo real con alertas proactivas retrasos. Beneficios cliente: reducción inventario WIP 50-70%, liberación espacio planta, sincronización perfecta producción. Casos: ensambladoras maquinaria, plantas procesamiento, fabricación equipos.' },
      { question: '¿Pueden almacenar equipos/repuestos industriales sensibles o alto valor?', answer: 'Sí, almacenamiento industrial especializado: (1) Zona segregada con acceso restringido biométrico para ítems alto valor (>US$10k), (2) Condiciones controladas: temperatura/humedad para electrónica industrial, protección ESD si requerido, (3) Trazabilidad granular: serial number individual, fotografías, certificados originalidad, (4) Seguridad 24/7: guardias, CCTV retención 90 días, alarmas conectadas central, (5) Seguro all-risk con cobertura personalizada según valor declarado, (6) Inventario actualizado semanal con reportes cliente, (7) Picking validado con escáner para prevenir errores. Categorías manejando: rodamientos industriales, motores, variadores frecuencia, instrumentación, repuestos maquinaria pesada, equipos electrónicos.' },
      { question: '¿Qué permisos y coordinaciones gestionan para transporte sobredimensionado?', answer: 'Gestión integral permisos project cargo: (1) Permiso circulación MOP (Ministerio Obras Públicas) para sobredimensionados: presentación estudio ruta, planos carga, especificaciones vehículo, (2) Escoltas oficiales si requerido (Carabineros, seguridad privada certificada), (3) Coordinación cierres temporales con municipios si crítico (puentes angostos, curvas), (4) Permisos especiales túneles/viaductos (coordinación concesionarias), (5) Notificaciones empresa eléctrica si altura cables riesgo, (6) Seguros específicos carga/ruta. Tiempos tramitación: 15-30 días según complejidad. Mantenemos relación directa MOP regiones para expeditar casos urgentes. Experiencia: 200+ movimientos sobredimensionados ejecutados últimos 5 años sin incidentes permisos.' },
      { question: '¿Qué pasa si hay una urgencia por paro producción cliente?', answer: 'Protocolo urgencias 24/7: (1) Línea directa emergencias +56 9 XXXX XXXX activación inmediata, (2) Evaluación criticidad: validación si repuesto disponible stock Chile o requiere importación, (3) Si stock Chile: movilización <24h con courier dedicado directo proveedor-planta, (4) Si importación: coordinación express con proveedores internacionales (DHL Priority, FedEx International Priority), agenciamiento aduanero pre-cleared, courier dedicado aeropuerto-planta, (5) Tracking tiempo real con updates cada 2h, (6) Contingencia paralela: búsqueda proveedores alternativos/repuestos usados certificados. Cargos servicio urgente diferenciados según nivel criticidad. Casos reales: rodamiento crítico Alemania-Chile 52h, válvula hidráulica USA-Antofagasta 68h. Justificación: costo logística urgente típicamente 5-10% del costo paro producción evitado.' },
      { question: '¿Ofrecen almacenamiento temporal para proyectos de construcción/montaje?', answer: 'Sí, almacenamiento proyectos con flexibilidad: (1) Zona dedicada proyecto cliente (segregación física), (2) Duración flexible: desde 3 meses hasta 24+ meses según ciclo proyecto, (3) Inventario detallado con fotografías cada ítem (herramientas, equipos, materiales), (4) Despachos programados a obra según avance (coordinación con jefe obra vía WhatsApp/portal), (5) Seguridad reforzada: guardias 24/7, CCTV, cercado perímetro, control acceso, (6) Seguros all-risk equipos, (7) Reportes inventario semanal actualizado, (8) Devolución post-proyecto con conciliación vs inventario inicial. Casos: proyectos minería, infraestructura, plantas industriales. Beneficios: evita robos obra, optimiza logística ingreso materiales, disponibilidad inmediata cuando obra requiere sin almacenar en sitio inseguro.' }
    ],

    relatedSolutions: [
      { name: 'Aerospace', link: 'aerospace' },
      { name: 'Automotriz', link: 'automotriz' }
    ]
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
