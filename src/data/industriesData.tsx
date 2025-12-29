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
    description: 'Soluciones logísticas especializadas para la compleja cadena de suministro automotriz. Gestión just-in-time (JIT) de piezas y componentes con sincronización exacta a líneas de producción, almacenamiento secuenciado, milk-run optimizado, trazabilidad total por lote/serie, cross-docking para componentes urgentes. Experiencia en autopartes OEM y aftermarket: desde tornillería hasta sistemas complejos (motores, transmisiones, electrónica). Infraestructura preparada para variabilidad de modelos, cambios de ingeniería (ECN), gestión FIFO estricta, embalaje retornable (racks, contenedores), sincronización con programas de producción del cliente vía EDI.',
    
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'Qué hacemos y por qué somos diferentes', icon: <Home className="h-5 w-5" /> },
      { id: 'operacion', title: 'Operación Automotriz', description: 'Flujos JIT, milk-run, secuenciado', icon: <Settings className="h-5 w-5" /> },
      { id: 'tecnologia', title: 'Stack Tecnológico', description: 'EDI, WMS automotriz, tracking real-time', icon: <Code className="h-5 w-5" /> },
      { id: 'slas-entregables', title: 'SLAs & Entregables', description: 'Compromisos JIT y reportes', icon: <FileText className="h-5 w-5" /> },
      { id: 'escenarios', title: 'Casos Automotriz', description: 'JIT, milk-run, componentes críticos', icon: <Target className="h-5 w-5" /> }
    ],

    scenarios: [
      { 
        pain: 'Ensabladora automotriz con línea de producción detenida por falta de componente crítico (módulo electrónico motor) desde proveedor asiático con retraso aduanero. Pérdida estimada US$80k/día por línea parada + penalidades contractuales con concesionarios por retraso entregas vehículos', 
        solution: 'Activación protocolo urgencia: coordinación directa con proveedor y agente aduanal para liberación express componente, transporte aéreo prioritario, nacionalización exprés (24h vs 5-7 días estándar), entrega directa línea producción con escolta, documentación trazabilidad completa para auditoría QA del cliente', 
        outcome: 'Componente entregado en línea producción en 36h desde alerta. Línea retomó operación con downtime total <2 días (vs 7-10 días proyectados). Cliente evitó penalidades contractuales y cumplió entregas a concesionarios. Implementamos stock de seguridad estratégico para componentes críticos identificados', 
        icon: <Car className="h-6 w-6" /> 
      },
      { 
        pain: 'Proveedor Tier 1 automotriz con 5 plantas ensambladoras clientes en Chile con ventanas entrega JIT muy estrechas (2-4h) y sin capacidad logística propia para sincronizar milk-runs multi-planta + gestionar embalajes retornables + cumplir requisitos EDI de cada ensambladora', 
        solution: 'Diseñamos sistema milk-run optimizado: rutas dinámicas basadas en programas producción de cada planta (recibidos vía EDI automático), consolidación multi-planta en nuestra bodega, ventanas entrega exactas (±15min), gestión circuito cerrado embalajes retornables (recogida/limpieza/devolución), tracking GPS tiempo real de cada ruta', 
        outcome: 'Cumplimiento ventanas JIT: 98.7% entregas en ventana ±15min. Cliente cerró 2 bodegas satélite propias (ahorro fijo US$45k/mes). Reducción 34% costos transporte por optimización rutas. Tasa retorno embalajes retornables >99%. Penalidades por entregas fuera ventana: 0 en último trimestre', 
        icon: <Truck className="h-6 w-6" /> 
      },
      { 
        pain: 'Fabricante autopartes aftermarket con 180 SKUs de alta rotación (frenos, filtros, lubricantes) sin visibilidad real-time de stock en centros distribución regionales, causando quiebres de stock frecuentes (15-20% pedidos con backorder) y pérdida ventas en talleres/distribuidores', 
        solution: 'Implementamos WMS multi-ubicación con sincronización real-time entre bodega central y 4 centros distribución regionales. Portal B2B para distribuidores con visibilidad stock total red, pedidos online, reposición automática basada en mínimos/máximos por ubicación, analytics predictivo demanda por región/temporada', 
        outcome: 'Quiebres stock redujeron de 18% a 3.2% en 4 meses. Fill rate mejoró de 82% a 96.8%. Rotación inventario aumentó 41% al optimizar distribución geográfica. Tiempo respuesta pedidos: <24h en 94% casos (antes 3-5 días). Ventas distribuidores crecieron 22% al mejorar disponibilidad producto', 
        icon: <Package className="h-6 w-6" /> 
      },
      { 
        pain: 'Ensambladora con nuevo modelo vehículo eléctrico requería secuenciado exacto de baterías (componente 40% costo vehículo) según configuración específica cada unidad en línea, sin margen error ni espacio físico en planta para almacenar múltiples variantes batería', 
        solution: 'Implementamos bodega satélite adyacente a planta con sistema secuenciado: recepción programa producción del cliente vía EDI cada 2h con orden exacto vehículos, preparación secuencia baterías según VIN (número serie vehículo), entrega just-in-sequence en racks especiales cada 90min sincronizado con velocidad línea, trazabilidad 100% VIN↔Batería para garantías', 
        outcome: 'Sincronización perfecta línea-batería: 99.4% entregas en secuencia correcta. Cliente eliminó necesidad de bodega intermedia en planta (ganó 600m² espacio productivo). Cero paradas línea por error secuenciado batería. Trazabilidad completa para cumplimiento regulatorio vehículos eléctricos. Modelo replicado para otros componentes de alto valor', 
        icon: <Target className="h-6 w-6" /> 
      },
      { 
        pain: 'Importador multi-marca autopartes con contenedores consolidados de 15-20 proveedores asiáticos diferentes llegando cada semana, requiriendo desconsolidación, QA, clasificación, reempaque y distribución a 60+ clientes talleres en <48h para mantener competitividad vs locales con stock', 
        solution: 'Diseñamos centro cross-docking especializado: desconsolidación contenedor en <4h, inspección QA por muestreo (fotos daños, faltantes), clasificación automática por cliente final, reempaque con branding personalizado por taller, despacho consolidado por zona geográfica, portal clientes para tracking órdenes desde origen hasta entrega', 
        outcome: 'Tiempo total contenedor→clientes finales: 36h promedio (antes 5-7 días). Reducción 67% costos almacenaje al minimizar inventario estático. Tasa rechazo por daños/errores: 1.8% (detección temprana en QA). Satisfacción clientes talleres aumentó significativamente por rapidez. Cliente amplió catálogo de 400 a 850 SKUs sin aumentar bodega propia', 
        icon: <Clock className="h-6 w-6" /> 
      }
    ],

    deliverables: [
      { name: 'Dashboard JIT Real-Time', description: 'Panel web con visibilidad 24/7 de entregas programadas vs realizadas, cumplimiento ventanas JIT, stock disponible por componente, órdenes en tránsito, alertas automáticas de riesgos (retrasos, quiebres), actualización cada 5min sincronizada con programas producción', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Integración EDI Automotriz', description: 'Conectores con sistemas de gestión de producción del cliente (MRP/ERP automotriz). Mensajes EDI estándar industria: Forecast (DELFOR), Órdenes JIT (DELJIT), Avisos Despacho (DESADV), Recepción (RECADV). Sincronización automática schedules producción, actualización continua', type: 'integration', icon: <Code className="h-5 w-5" /> },
      { name: 'Reportes Cumplimiento JIT', description: 'Informe semanal/mensual con KPIs automotriz: OTIF (On-Time In-Full) por proveedor/componente, cumplimiento ventanas entrega (±15min/±30min), incidencias y root-cause, trazabilidad lote/serie, gestión embalajes retornables (enviados/retornados/pérdidas). Dashboard ejecutivo + data granular Excel/API', type: 'report', icon: <FileText className="h-5 w-5" /> },
      { name: 'API Trazabilidad Componentes', description: 'Endpoints para sistemas del cliente: consultar ubicación componente por lote/serie/P/N, historial movimientos (recepción→almacén→producción), alertas calidad, gestión recalls, vinculación VIN vehículo↔componentes para garantías. Cumple requisitos trazabilidad OEM', type: 'integration', icon: <Code className="h-5 w-5" /> },
      { name: 'Portal Gestión Embalajes Retornables', description: 'Sistema web para tracking circuito cerrado: racks/contenedores enviados, recibidos, pendientes retorno, ubicación actual, estado (limpieza/reparación/disponible), balance por tipo embalaje, alertas reposición. Reduce pérdidas y optimiza ciclo retorno', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Certificaciones & Auditorías Calidad', description: 'Documentación periódica: certificados inspección QA entrada (fotos/reportes defectos), cumplimiento FIFO/FEFO, auditorías inventario (físico vs sistema), trazabilidad completa para auditorías OEM/Tier1, certificaciones almacenamiento según estándares automotriz (limpieza, temperatura, segregación)', type: 'document', icon: <FileText className="h-5 w-5" /> }
    ],

    integrations: [
      { system: 'Sistemas MRP/ERP Automotriz Clientes', description: 'Integración con sistemas de planificación producción (MRP) y ERP de ensambladoras/Tier1 mediante EDI estándar industria automotriz. Sincronización automática programas producción, forecasts, órdenes JIT, avisos despacho, confirmaciones recepción. Soporta múltiples estándares EDI', technologies: ['EDI DELFOR/DELJIT', 'DESADV/RECADV', 'ANSI X12', 'EDIFACT'], icon: <Database className="h-5 w-5" /> },
      { system: 'WMS Secuenciado Automotriz', description: 'Sistema WMS especializado para operaciones JIT/JIS (Just-in-Sequence): gestión secuenciado componentes por orden producción, preparación kits según VIN, trazabilidad lote/serie/P/N, gestión embalajes retornables, alertas cambios ingeniería (ECN), FIFO estricto', technologies: ['WMS Custom', 'RFID', 'Barcode', 'EDI'], icon: <Server className="h-5 w-5" /> },
      { system: 'Tracking GPS Milk-Run', description: 'Plataforma GPS para tracking real-time de rutas milk-run multi-planta. Geofencing en puntos entrega, alertas automáticas retrasos, optimización dinámica rutas, POD (Proof of Delivery) digital con firma + timestamp + geolocalización, histórico cumplimiento ventanas', technologies: ['GPS/GNSS', 'Geofencing', 'API REST', 'Mobile Apps'], icon: <MapPin className="h-5 w-5" /> },
      { system: 'Sistemas Proveedores Tier 2/3', description: 'Integración con proveedores upstream cadena suministro automotriz para visibilidad end-to-end. Recepción ASN (Advanced Shipping Notice), sincronización entregas, colaboración en forecasts, alertas tempranas retrasos. Mejora planificación y reduce safety stock', technologies: ['EDI', 'API REST', 'FTP/SFTP', 'Portales Web'], icon: <Network className="h-5 w-5" /> },
      { system: 'Herramientas Analytics & BI', description: 'Integración con plataformas BI del cliente (Power BI y otros) para dashboards corporativos con data logística automotriz. KPIs personalizados: OTIF, PPM (defectos por millón), costos logísticos por vehículo, rotación inventario, performance proveedores', technologies: ['Power BI', 'SQL Connectors', 'REST API', 'Data Export'], icon: <BarChart3 className="h-5 w-5" /> }
    ],

    slas: [
      { metric: 'Cumplimiento Ventanas JIT (±15 minutos)', commitment: '≥ 98% entregas dentro ventana horaria comprometida', notes: 'Medición por punto entrega (planta/línea producción). Ventanas típicas: ±15min para componentes críticos línea, ±30min para consumibles. Excluye casos fuerza mayor (clima extremo, cortes ruta). Reporte diario cumplimiento por ruta' },
      { metric: 'OTIF (On-Time In-Full) Automotriz', commitment: '≥ 97% pedidos completos en tiempo comprometido', notes: 'Medición estándar industria automotriz: cantidad correcta + SKU correcto + empaque adecuado + en ventana horaria. Sin entregas parciales. Trazabilidad completa por lote/serie. Análisis root-cause para incumplimientos' },
      { metric: 'Exactitud Inventario JIT (WMS vs físico)', commitment: '≥ 99.5% exactitud mensual componentes críticos', notes: 'Conteo cíclico diario para componentes línea producción (clase A). Auditoría completa semanal. Trazabilidad lote/serie/P/N para 100% componentes rastreables. Cero tolerancia en componentes seguridad (frenos, airbags, electrónica crítica)' },
      { metric: 'Tasa Retorno Embalajes Retornables', commitment: '≥ 98% embalajes retornados en <72h desde entrega', notes: 'Racks automotriz, contenedores KLT, pallets específicos. Tracking individual por ID embalaje. Circuito cerrado: entrega→recogida→limpieza→devolución. Reportes mensuales pérdidas y estado embalajes. Costos pérdidas a cargo del responsable identificado' },
      { metric: 'Tiempo Respuesta Incidencias Críticas JIT', commitment: '< 15 minutos respuesta inicial, plan acción <1h', notes: 'Incidencias críticas: riesgo parada línea producción, componente faltante, error secuenciado, retraso milk-run. Soporte 24/7 con escalamiento automático a gerencia. Protocolo alternativas: stock emergencia, transporte urgente, componente sustituto temporal' }
    ],

    faqs: [
      { question: '¿Cómo funciona el sistema just-in-time (JIT) y qué beneficios tiene para mi planta?', answer: 'JIT elimina inventario estático en tu planta: nosotros almacenamos tus componentes y los entregamos exactamente cuando los necesitas en línea producción (ventanas típicas ±15-30min). Recibimos tu programa producción vía EDI, preparamos secuencias correctas, ejecutamos milk-runs sincronizados. Beneficios: reduces hasta 70% inventario en planta (liberas espacio + capital), eliminas obsolescencia por cambios ingeniería, optimizas flujo materiales, reduces handling interno. Casos reales: plantas automotriz redujeron de 15 días inventario a 2-4 horas con nuestro JIT.' },
      { question: '¿Qué es just-in-sequence (JIS) y cómo lo implementan para componentes de alto valor?', answer: 'JIS va más allá de JIT: entregamos componentes en el orden exacto que los necesitas según secuencia producción (ej: batería específica para VIN XYZ123 que entrará a línea en 90 minutos). Recibimos tu programa producción con secuencia VIN cada 1-2h, preparamos componentes en racks secuenciados, entregamos sincronizados con velocidad línea. Crítico para componentes caros/variados (asientos tapizados, baterías EV, módulos electrónicos customizados). Elimina inventario intermedio en planta, reduce riesgo error instalación, optimiza trazabilidad VIN↔componente para garantías/recalls.' },
      { question: '¿Cómo gestionan los cambios de ingeniería (ECN) y evitan usar componentes obsoletos?', answer: 'Sistema integrado gestión ECN: recibimos notificaciones cambios ingeniería vía EDI/portal, identificamos stock afectado en WMS (P/N antiguo), segregamos físicamente componentes obsoletos, actualizamos forecasts con P/N nuevo, coordinamos fase-out/fase-in con tu equipo planificación, trazabilidad completa para evitar mezclas. Alertas automáticas si se intenta usar componente obsoleto. Gestión de stock residual: devolución a proveedor, reubicación a otra planta, disposición controlada. Cero incidencias instalación componentes obsoletos en últimos 18 meses operando.' },
      { question: '¿Qué pasa si hay un retraso en un milk-run y se pone en riesgo la línea de producción?', answer: 'Protocolo escalamiento automático: tracking GPS detecta retraso >10min de ventana comprometida → alerta automática a supervisor logístico + cliente → evaluación impacto (¿cuánto tiempo hasta parada línea?) → activación plan contingencia según criticidad: 1) Re-ruteo camión desde otra ruta cercana, 2) Despacho urgente desde bodega con vehículo backup, 3) Uso stock seguridad estratégico si disponible, 4) Comunicación proactiva a planificación cliente para ajuste secuencia. Commitment: 100% incidencias críticas con plan acción <15min. En 2024: cero paradas línea atribuibles a nuestras operaciones en clientes automotriz.' },
      { question: '¿Soportan integración EDI con nuestro sistema MRP/ERP automotriz?', answer: 'Sí, totalmente. Soportamos mensajes EDI estándar industria automotriz: DELFOR (forecast entregas), DELJIT (instrucciones JIT), DESADV (aviso despacho), RECADV (confirmación recepción), INVRPT (reporte inventario). También ANSI X12 y EDIFACT según tu preferencia. Setup típico 4-6 semanas: mapeo campos, ambiente testing, sincronización schedules, go-live asistido. Una vez operando, sincronización automática cada 15min-2h según tu programa. Además, API REST para sistemas no-EDI. Tenemos conectores pre-configurados para ERPs automotriz principales.' },
      { question: '¿Cómo manejan la trazabilidad lote/serie para cumplir requisitos de recalls y garantías?', answer: 'Trazabilidad 100% automática: cada componente ingresa con lote/serie/P/N escaneado, WMS registra toda la cadena (proveedor→recepción→ubicación→picking→entrega→VIN vehículo), reportes trazabilidad forward (lote X → ¿en qué VINs se instaló?) y backward (VIN Y → ¿qué lotes tiene instalados?). Cumple requisitos recalls: en <4h podemos identificar todos los VINs afectados por lote problemático. Documentación auditada para certificaciones OEM. Portal web para consultas trazabilidad 24/7. Esencial para componentes seguridad y cumplimiento regulatorio.' }
    ],

    relatedSolutions: [
      { name: 'Industrial', link: 'industrial' },
      { name: 'Aerospace', link: 'aerospace' },
      { name: 'Tecnología & Software', link: 'tecnologia' }
    ]
  },

  'pharmaceutical': {
    id: 'pharmaceutical',
    title: 'Farmacéutica',
    subtitle: 'Alta sensibilidad y cumplimiento regulatorio',
    tagline: 'GDP compliance y cadena custodia',
    description: 'Soluciones logísticas especializadas para la industria farmacéutica con cumplimiento estricto Good Distribution Practices (GDP). Gestión productos alta sensibilidad: medicamentos, dispositivos médicos, insumos hospitalarios, vacunas, productos biológicos. Almacenamiento temperatura controlada (2-8°C cadena frío, 15-25°C ambiente controlado), monitoreo continuo 24/7, trazabilidad completa por lote/serie, cadena custodia documentada, validación térmica transporte, certificaciones sanitarias vigentes. Experiencia manejando productos éticos, OTC, dispositivos clase II/III, reactivos diagnóstico. Cumplimiento normativa ISP/MINSAL/ANVISA, protocolos destrucción productos vencidos/dañados.',
    
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'Qué hacemos y por qué somos diferentes', icon: <Home className="h-5 w-5" /> },
      { id: 'operacion', title: 'Operación Farmacéutica', description: 'Flujos GDP, cadena frío, trazabilidad', icon: <Settings className="h-5 w-5" /> },
      { id: 'tecnologia', title: 'Stack Tecnológico', description: 'Monitoreo temperatura, WMS farmacéutico', icon: <Code className="h-5 w-5" /> },
      { id: 'slas-entregables', title: 'SLAs & Entregables', description: 'Compromisos GDP y certificaciones', icon: <FileText className="h-5 w-5" /> },
      { id: 'escenarios', title: 'Casos Farmacéuticos', description: 'Cadena frío, trazabilidad, regulatorio', icon: <Target className="h-5 w-5" /> }
    ],

    scenarios: [
      { 
        pain: 'Laboratorio farmacéutico multinacional con lanzamiento vacuna COVID-19 requiriendo almacenamiento -70°C y distribución nacional con cadena frío ultra-fría sin quiebres, sin infraestructura propia para ultracongelación ni capacidad logística para rollout simultáneo 16 regiones en <10 días', 
        solution: 'Habilitamos cámara ultra-congelación -80°C con respaldo eléctrico dual, monitoreo temperatura IoT cada 5min con alertas 24/7, preparación kits distribución en contenedores térmicos validados (mantienen -70°C por 120h), coordinación simultánea despachos 16 regiones vía aérea/terrestre con tracking GPS, cadena custodia documentada punto a punto, certificaciones térmicas cada envío', 
        outcome: 'Distribución exitosa nacional en 8 días sin excursiones térmicas. 100% lotes entregados en rango -80°C/-60°C certificado. Trazabilidad completa: 47,000 dosis rastreables lote por lote hasta punto aplicación. Cliente cumplió compromiso gobierno plazo crítico. Infraestructura replicada para futuros productos biológicos ultra-fríos', 
        icon: <Heart className="h-6 w-6" /> 
      },
      { 
        pain: 'Distribuidora farmacéutica con 2,400 SKUs medicamentos sin trazabilidad automática lote/vencimiento causando: dispensación manual propensa a errores, imposibilidad gestionar recalls rápidamente, riesgo despachar productos vencidos, pérdida margen por mermas no detectadas a tiempo, auditorías ISP con observaciones recurrentes', 
        solution: 'Implementamos WMS farmacéutico con gestión automática FEFO (First-Expired First-Out): ingreso con escaneo lote+vencimiento obligatorio, ubicaciones segregadas por temperatura (frío/ambiente), alertas automáticas productos próximos vencer (60/30/15 días), bloqueo automático vencidos, reportes trazabilidad backward/forward para recalls, portal farmacias clientes con consulta vencimientos', 
        outcome: 'Mermas por vencimiento redujeron 73% (de 2.1% a 0.57% del inventario). Tiempo respuesta recalls: <2h para identificar lotes afectados + clientes que recibieron (antes 2-3 días manual). Auditoría ISP sin observaciones por primera vez en 3 años. Tasa error despacho lote incorrecto: <0.1%. ROI sistema WMS en 11 meses por reducción mermas', 
        icon: <Shield className="h-6 w-6" /> 
      },
      { 
        pain: 'Cadena farmacias 85 locales con quiebres stock frecuentes (18% SKUs críticos) por reposición reactiva, sin visibilidad demanda real-time, causando ventas perdidas en productos éticos de alta rotación y recetas no despachadas (frustración pacientes + pérdida fidelización)', 
        solution: 'Implementamos sistema reposición predictiva: integración POS todas las farmacias para captura ventas real-time, algoritmos ML predicción demanda por farmacia/día/hora, reposición automática multi-frecuencia (diaria farmacias alto tráfico, 3x/semana bajo tráfico), ruteo optimizado por zona geográfica, portal farmacias para solicitudes urgentes same-day', 
        outcome: 'Quiebres stock productos críticos redujeron de 18% a 4.3%. Fill rate farmacias aumentó de 82% a 94%. Ventas crecieron 16% al mejorar disponibilidad producto. Satisfacción pacientes mejoró significativamente (encuestas NPS +22 puntos). Rotación inventario red farmacias optimizada en 38%', 
        icon: <TrendingUp className="h-6 w-6" /> 
      },
      { 
        pain: 'Importador dispositivos médicos clase III (implantes, stents cardíacos, prótesis) con productos ultra-alto valor (hasta US$15k/unidad) sin trazabilidad individual unidad por unidad, imposibilitando cumplir normativa ISP de trazabilidad obligatoria dispositivos implantables, riesgo bloqueo importaciones', 
        solution: 'Implementamos sistema trazabilidad unitaria: ingreso con escaneo obligatorio número serie único cada dispositivo, vinculación serie↔lote↔certificado conformidad, almacenamiento zona seguridad reforzada (acceso restringido + videovigilancia), auditoría perpetua (inventario sistema=físico 100%), cadena custodia documentada con firma digital cada transferencia, portal hospitales para registro paciente↔dispositivo implantado', 
        outcome: 'Trazabilidad 100% dispositivos desde importación hasta implante paciente. Cumplimiento normativa ISP: cero observaciones auditorías (antes riesgo sanción). Tiempo respuesta consultas trazabilidad: <30min cualquier dispositivo. Reducción 100% pérdidas/extravíos (antes 2-3 unidades/año = US$40k). Cliente amplió portfolio dispositivos de 47 a 120 SKUs con confianza sistema robusto', 
        icon: <Target className="h-6 w-6" /> 
      },
      { 
        pain: 'Hospital público con gestión manual inventario farmacia interna: stock-outs frecuentes medicamentos críticos (oncológicos, antibióticos especiales) causando retrasos tratamientos, exceso inventario otros productos (capital inmovilizado >US$800k), vencimientos no detectados hasta auditorías anuales (pérdidas US$60k/año)', 
        solution: 'Implementamos sistema consignación inteligente: stock de propiedad del proveedor en farmacia hospital, hospital paga solo lo consumido (facturación automática al dispensar), WMS con FEFO automático, monitoreo niveles mínimos/máximos por medicamento, reposición diaria automatizada, analytics consumo real para optimizar mix productos, alertas vencimientos cercanos para rotación', 
        outcome: 'Stock-outs medicamentos críticos redujeron 91% (de 23 episodios/mes a 2). Capital inmovilizado hospital en inventario farmacéutico: -68% (liberó US$540k para otras inversiones). Mermas vencimiento: -84% (ahorro US$50k/año). Tiempo equipo farmacia en gestión inventario: -60% (reasignado a atención pacientes). Proveedor fidelizó contrato 5 años', 
        icon: <Clock className="h-6 w-6" /> 
      }
    ],

    deliverables: [
      { name: 'Dashboard Cumplimiento GDP', description: 'Panel web 24/7 con KPIs Good Distribution Practices: temperatura min/max/avg por zona almacenamiento (gráficos históricos), excursiones térmicas y acciones correctivas, auditorías internas programadas vs realizadas, vencimientos próximos, estado certificaciones vigentes, incidencias calidad. Exportable para auditorías ISP', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Trazabilidad Lote/Serie Farmacéutica', description: 'Sistema web para trazabilidad completa productos farmacéuticos: consulta forward (lote X → ¿a qué clientes se despachó?), backward (cliente Y → ¿qué lotes recibió?), gestión recalls en <2h, vinculación lote↔certificados análisis↔temperatura almacenamiento, histórico movimientos auditado. Cumple normativa ISP/ANVISA', type: 'dashboard', icon: <Shield className="h-5 w-5" /> },
      { name: 'Reportes Temperatura Cadena Frío', description: 'Documentación automática cumplimiento cadena frío: certificados térmicos cada despacho (gráficos temperatura durante transporte), validaciones cámaras frío (mapeo térmico trimestral), calibraciones equipos medición (dataloggers/termómetros), reportes excursiones térmicas + análisis impacto producto + disposición. Formato PDF ejecutivo + data raw exportable', type: 'report', icon: <FileText className="h-5 w-5" /> },
      { name: 'Integración Sistemas Hospitalarios/Farmacias', description: 'Conectores con sistemas gestión farmacia hospitalaria y software farmacias retail: sync automático pedidos, actualización stock disponible, consulta vencimientos antes dispensar, facturación automática (modelo consignación), trazabilidad prescripción médica↔lote despachado. APIs REST + HL7 FHIR para interoperabilidad', type: 'integration', icon: <Code className="h-5 w-5" /> },
      { name: 'Portal Regulatorio & Certificaciones', description: 'Repositorio digital con toda la documentación regulatoria actualizada: certificados GDP vigentes, habilitaciones sanitarias, pólizas seguros productos, protocolos destrucción (vencidos/dañados), registros auditorías internas/externas, capacitaciones personal (BPD). Acceso 24/7 para auditorías o consultas cliente', type: 'document', icon: <FileText className="h-5 w-5" /> },
      { name: 'Analytics Farmacéutico Predictivo', description: 'Dashboards avanzados con ML/IA: predicción vencimientos (optimiza rotación antes mermas), forecast demanda por SKU farmacéutico (estacionalidad, brotes epidemiológicos), análisis ABC/VEN (valor terapéutico + económico), detección anomalías consumo (posibles errores o fraudes), optimización niveles stock por criticidad producto', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> }
    ],

    integrations: [
      { system: 'Monitoreo Temperatura IoT 24/7', description: 'Red sensores inalámbricos en todas las zonas almacenamiento (frío 2-8°C, ambiente controlado 15-25°C, ultra-congelación -80°C). Medición continua cada 5min, alertas automáticas excursiones vía SMS/email/WhatsApp, dataloggers calibrados anualmente, gráficos históricos exportables para auditorías. Redundancia: sensores backup + alarmas locales', technologies: ['IoT Sensors', 'Cloud Platform', 'Alerting API', 'Data Export'], icon: <Radio className="h-5 w-5" /> },
      { system: 'WMS Farmacéutico GDP-Compliant', description: 'Sistema WMS certificado para operaciones farmacéuticas: gestión FEFO automático por lote+vencimiento, segregación física por temperatura, bloqueos automáticos productos vencidos/retenidos/cuarentena, trazabilidad completa movimientos, auditoría perpetua inventario, cumplimiento 21 CFR Part 11 (firma electrónica)', technologies: ['WMS Pharma', 'Barcode/RFID', 'E-signature', 'Audit Trail'], icon: <Server className="h-5 w-5" /> },
      { system: 'Sistemas Hospitalarios (HIS/Farmacia)', description: 'Integración con software gestión hospitalaria y farmacias clínicas: pedidos automáticos basados en consumo, dispensación con validación lote/vencimiento, trazabilidad prescripción→paciente, facturación automática modelo consignación, estadísticas consumo por servicio/patología. Soporta HL7 FHIR estándar salud', technologies: ['HL7 FHIR', 'REST API', 'EDI ANSI X12', 'SOAP'], icon: <Database className="h-5 w-5" /> },
      { system: 'Plataformas E-commerce Farmacias', description: 'Conectores con plataformas venta online farmacias (recetas digitales, venta OTC): sync stock disponible real-time con validación vencimientos, bloqueo productos receta sin prescripción escaneada, fulfillment órdenes online <4h zona urbana, tracking paciente, cumplimiento normativa venta online medicamentos', technologies: ['REST API', 'Webhooks', 'OAuth 2.0', 'Prescription Validation'], icon: <Globe className="h-5 w-5" /> },
      { system: 'Herramientas BI & Analytics Salud', description: 'Integración con Power BI y plataformas analytics del sector salud para dashboards ejecutivos: consumo medicamentos por patología/servicio, costos farmacéuticos, adherencia protocolos terapéuticos, rotación inventario farmacéutico, benchmarking vs hospitales similares, forecast epidemiológico (demand planning)', technologies: ['Power BI', 'SQL Connectors', 'REST API', 'Healthcare APIs'], icon: <BarChart3 className="h-5 w-5" /> }
    ],

    slas: [
      { metric: 'Cumplimiento Cadena Frío (2-8°C)', commitment: '100% tiempo en rango temperatura sin excursiones >30min', notes: 'Monitoreo continuo 24/7 con dataloggers calibrados. Alertas automáticas si temperatura sale de rango. Protocolo: excursión <30min→revalidación producto por QA, >30min→evaluación estabilidad+posible descarte. Certificados térmicos cada despacho. Auditoría ISP sin observaciones' },
      { metric: 'Exactitud Inventario Farmacéutico (WMS vs físico)', commitment: '≥ 99.8% exactitud mensual con trazabilidad lote/serie', notes: 'Conteo cíclico semanal productos alto valor/criticidad (clase A). Auditoría completa trimestral con cliente. Trazabilidad 100% lotes: ingreso, ubicación, movimientos, salida. Investigación inmediata cualquier discrepancia >0.2%. Cumplimiento normativa ISP Art. 117' },
      { metric: 'Gestión Vencimientos FEFO (First-Expired First-Out)', commitment: '0% despachos productos vencidos, <0.5% mermas por vencimiento', notes: 'Algoritmo FEFO automático en WMS: siempre despacha lote más próximo vencer (con margen mínimo 90 días vencimiento para cliente). Alertas 60/30/15 días previos vencimiento para rotación proactiva. Bloqueo automático productos vencidos. Reportes semanales vencimientos próximos' },
      { metric: 'Tiempo Respuesta Recalls Farmacéuticos', commitment: '< 2 horas identificación + notificación clientes afectados', notes: 'Sistema trazabilidad permite identificar en <2h: todos los clientes que recibieron lote problemático + cantidades exactas + fechas despacho. Notificación automática vía email/SMS. Bloqueo stock residual lote afectado. Documentación completa para ISP. Protocolo devolución/destrucción según criticidad recall' },
      { metric: 'Disponibilidad Sistemas Críticos GDP', commitment: '≥ 99.7% uptime mensual (WMS + Monitoreo Temperatura)', notes: 'Sistemas críticos con redundancia: servidores backup, internet dual, energía UPS+generador. Monitoreo temperatura con dataloggers independientes (no dependen de internet). Downtime programado <2h/mes en horario no operativo. Plan contingencia manual para operación sin sistema' },
      { metric: 'Cumplimiento Documentación Regulatoria', commitment: '100% certificaciones vigentes (GDP, sanitarias, seguros)', notes: 'Certificaciones GDP renovadas anualmente, habilitación sanitaria vigente ISP/SEREMI, pólizas seguros productos actualizadas, calibraciones equipos al día, capacitaciones personal BPD documentadas. Portal acceso 24/7 con toda documentación para auditorías cliente o autoridad sanitaria' }
    ],

    faqs: [
      { question: '¿Cuentan con certificaciones Good Distribution Practices (GDP) y cómo aseguran cumplimiento normativo?', answer: 'Sí, contamos con certificación GDP vigente y habilitación sanitaria ISP (Instituto Salud Pública). Cumplimiento normativo mediante: infraestructura diseñada según normas GDP (segregación temperatura, accesos controlados, trazabilidad completa), personal capacitado anualmente en Buenas Prácticas Distribución, procedimientos operativos estándar (SOPs) documentados, auditorías internas trimestrales + externas anuales, gestión integral cadena frío con validación térmica, sistema calidad con mejora continua. Documentación completa disponible para auditorías clientes o autoridad sanitaria.' },
      { question: '¿Cómo funcionan las cámaras de frío y qué pasa si hay una falla eléctrica o de temperatura?', answer: 'Cámaras frío 2-8°C con redundancia total: sistema refrigeración principal + backup automático, monitoreo temperatura IoT cada 5min (alertas instantáneas si sale rango), energía UPS + generador diesel (autonomía 72h), dataloggers independientes calibrados. Protocolo falla: 1) Alerta automática 24/7 a supervisor + equipo técnico, 2) Activación refrigeración backup, 3) Si falla persiste >30min: traslado productos a cámara alternativa, 4) Evaluación impacto: excursión térmica documentada + análisis estabilidad producto + decisión QA (liberar/rechazar). Histórico: cero pérdidas producto por falla temperatura en últimos 3 años operando.' },
      { question: '¿Cómo manejan la trazabilidad lote/serie para cumplir recalls farmacéuticos?', answer: 'Trazabilidad 100% automática desde ingreso hasta despacho: escaneo obligatorio lote+vencimiento+serie en cada transacción (recepción, ubicación, picking, despacho), WMS registra toda la cadena custodia, reportes trazabilidad forward (lote X → ¿a qué clientes?) y backward (cliente Y → ¿qué lotes recibió?), vinculación lote↔certificados análisis↔condiciones almacenamiento. En caso recall: identificación <2h de todos los clientes afectados + cantidades exactas + fechas, notificación automática multi-canal, bloqueo stock residual, documentación completa para ISP. Casos reales: ejecutamos 4 recalls en 2024 con tiempo promedio respuesta 1.4h.' },
      { question: '¿Pueden manejar productos ultra-fríos como vacunas COVID-19 (-70°C)?', answer: 'Sí, contamos con cámara ultra-congelación -80°C con capacidad 12 pallet positions. Infraestructura especializada: equipo ultra-congelación grado médico, monitoreo temperatura continuo cada 5min, energía redundante (UPS + generador), alarmas locales + remotas, acceso restringido (solo personal certificado). Para distribución: contenedores térmicos validados (mantienen -70°C por 120h), dataloggers en cada envío, certificaciones térmicas, tracking GPS tiempo real, cadena custodia documentada. Experiencia real: distribución vacunas COVID-19 nivel nacional sin excursiones térmicas. Capacidad escalar según demanda cliente.' },
      { question: '¿Qué hacen con productos vencidos o dañados (destrucción de medicamentos)?', answer: 'Protocolo estricto conforme normativa sanitaria: segregación inmediata productos vencidos/dañados en zona específica (no mezcla con stock vendible), registro detallado en sistema (lote, cantidad, motivo, fecha), notificación a cliente para autorización destrucción, coordinación con empresa certificada destrucción residuos peligrosos (Autorización Sanitaria SEREMI), acta destrucción con testigos + fotografías + certificado oficial, trazabilidad completa para auditorías. Disponemos de convenio con gestores autorizados para destrucción rápida (<15 días desde vencimiento). Clientes reciben documentación completa para justificar mermas ante SII y auditorías.' },
      { question: '¿Soportan modelo de consignación para hospitales o farmacias?', answer: 'Sí, operamos modelo consignación exitosamente con varios hospitales/farmacias: nosotros mantenemos stock de propiedad del proveedor en instalaciones del cliente (farmacia hospital/bodega farmacia retail), cliente paga solo lo que consume (facturación automática al dispensar/vender), WMS integrado con sistema dispensación cliente para sync consumo real-time, reposición automática según niveles min/max, beneficios cliente: cero capital inmovilizado en inventario + siempre disponibilidad + gestión FEFO automática (evita vencimientos). Modelo especialmente exitoso para productos alto costo o baja rotación predecible. ROI típico: hospital libera 40-60% capital inventario farmacéutico.' }
    ],

    relatedSolutions: [
      { name: 'Alimentaria', link: 'alimentaria' },
      { name: 'Aerospace', link: 'aerospace' },
      { name: 'Retail y E-commerce', link: 'retail' }
    ]
  },

  'tecnologia': {
    id: 'tecnologia',
    title: 'Tecnología & Electrónica',
    subtitle: 'Transporte seguro equipos y componentes alto valor',
    tagline: 'Protección máxima para electrónica sensible',
    description: 'Soluciones logísticas especializadas para equipos tecnológicos y componentes electrónicos de alto valor. Gestión de laptops, servidores, smartphones, tablets, componentes IT, semiconductores, equipos telecomunicaciones, hardware data centers. Almacenamiento con protección ESD (electro-static discharge), embalaje anti-estático certificado, zona seguridad reforzada (acceso restringido + videovigilancia 24/7), seguros all-risk por valor declarado, transporte con tracking GPS tiempo real, manipulación especializada para productos frágiles. Experiencia en proyectos rollout nacional (despliegue equipos IT a sucursales), logística inversa dispositivos (retiro equipos obsoletos + data wiping), gestión garantías RMA (Return Merchandise Authorization).',
    
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'Qué hacemos y por qué somos diferentes', icon: <Home className="h-5 w-5" /> },
      { id: 'operacion', title: 'Operación Tecnología', description: 'Flujos ESD, rollout, RMA', icon: <Settings className="h-5 w-5" /> },
      { id: 'tecnologia', title: 'Stack Tecnológico', description: 'Tracking, WMS alto valor, seguridad', icon: <Code className="h-5 w-5" /> },
      { id: 'slas-entregables', title: 'SLAs & Entregables', description: 'Compromisos seguridad y reportes', icon: <FileText className="h-5 w-5" /> },
      { id: 'escenarios', title: 'Casos Tecnología', description: 'Rollout IT, RMA, data centers', icon: <Target className="h-5 w-5" /> }
    ],

    scenarios: [
      { 
        pain: 'Corporativo financiero con proyecto rollout nacional: despliegue 3,500 laptops + 850 smartphones a 120 sucursales en 8 regiones en <45 días (migración tecnológica mandatoria), sin capacidad logística interna para coordinar masivo simultáneo + gestión retiro equipos obsoletos + destrucción data sensible', 
        solution: 'Diseñamos operación rollout integrada: recepción masiva equipos nuevos con inspección QA (encendido + verificación specs), kitting por sucursal (laptop + accesorios + manual), embalaje individual anti-estático, despachos programados por oleadas regionales (coordinado con equipo IT cliente), instalación on-site opcional, retiro simultáneo equipos obsoletos, data wiping certificado (sobreescritura 7 veces estándar DoD), certificados destrucción data', 
        outcome: 'Rollout completado en 38 días (7 días antes deadline). 100% equipos entregados sin daños (0% DOA = Dead on Arrival). Certificación data wiping 3,500 equipos obsoletos para auditoría. Cliente ahorró 42% vs cotización logística tradicional. Satisfacción sucursales: 96% (encuesta post-rollout). Relación comercial continuó con soporte IT ongoing', 
        icon: <Cpu className="h-6 w-6" /> 
      },
      { 
        pain: 'Distribuidor IT con 2,800 SKUs tecnológicos (notebooks, tablets, periféricos, componentes) sin segregación por valor causando: hurtos internos estimados US$80k/año, seguros con primas altas por riesgo, auditorías con faltantes frecuentes, imposibilidad rastrear responsables', 
        solution: 'Implementamos zona ultra-segura para productos alto valor (>US$500/unidad): acceso biométrico restringido (solo 4 personas autorizadas), videovigilancia 24/7 con grabación 90 días, escaneo obligatorio entrada/salida con registro timestamp + usuario, auditorías perpetuas (inventario sistema=físico diario), trazabilidad unitaria por número serie, seguros diferenciados por zona (reduce primas 35%)', 
        outcome: 'Hurtos/pérdidas: 0 incidentes en últimos 18 meses (antes 15-20 unidades/año). Reducción primas seguro: 37% anual (ahorro US$28k/año). Auditorías inventario: exactitud 99.9% productos clase A. Trazabilidad completa permite identificar responsable en <15min cualquier movimiento. Cliente amplió catálogo productos alto valor con confianza sistema robusto', 
        icon: <Shield className="h-6 w-6" /> 
      },
      { 
        pain: 'Fabricante smartphones con 18-22% unidades con defectos detectados en garantía por usuarios finales (pantallas, baterías, software), requiriendo gestión RMA (Return Merchandise Authorization) compleja: retiro unidades defectuosas desde service centers, evaluación técnica, reemplazo/reparación, devolución usuario, sin trazabilidad causando reclamos recurrentes', 
        solution: 'Implementamos centro RMA especializado: coordinación retiro desde 45 service centers partners, recepción con inspección técnica QA nivel 1 (clasificación: DOA/defecto real/mal uso/sin problema), derivación a taller técnico cliente para reparación según diagnóstico, gestión unidades reemplazo (nuevo o refurbished según política), despacho retorno usuario en <5 días, portal web usuario para tracking estado RMA 24/7', 
        outcome: 'Tiempo ciclo RMA promedio: 4.2 días (antes 12-18 días). Tasa satisfacción usuarios RMA: 87% (antes 54% por demoras). Reducción 34% reclamos "RMA nunca llegó" por trazabilidad completa. Identificación 12% RMAs fraudulentos (usuarios sin defecto real) = ahorro significativo costos garantía. Cliente mejoró NPS +18 puntos en categoría postventa', 
        icon: <Target className="h-6 w-6" /> 
      },
      { 
        pain: 'Proveedor soluciones IT con proyecto data center: entrega 140 servidores rack + 28 switches core + 6 storage arrays (valor total >US$2.2M) a sitio data center con ventana instalación crítica 72h (migración producción), cero tolerancia daños/retrasos, embalaje fabricante inadecuado para transporte terrestre nacional (diseño exportación marítima)', 
        solution: 'Gestión proyecto crítico: inspección pre-embarque con técnico cliente (verificar embalaje + accesorios), re-embalaje especializado para transporte terrestre (refuerzo espuma anti-vibración + esquineros), camiones suspensión neumática (reducen impactos), seguro all-risk por valor declarado (US$2.2M), escolta GPS 24/7, coordinación ventana entrega exacta con equipo instalación cliente, descarga supervisada con check visual', 
        outcome: '100% equipos entregados en ventana 72h sin daños. Instalación data center completada on-time (cero retrasos por logística). Cliente evitó penalidades contractuales por delay migración. Trazabilidad completa + seguro all-risk dio tranquilidad CFO. Relación comercial: cliente nos designó proveedor logístico oficial para futuros proyectos IT críticos', 
        icon: <Clock className="h-6 w-6" /> 
      },
      { 
        pain: 'Retailer tecnología con temporada alta (back-to-school, navidad, cyber) con picos demanda 8-10x volumen normal en productos tecnológicos (notebooks educación, gaming, tablets), sin capacidad bodega propia para stock pre-temporada + fulfillment peak, arriesgando quiebres stock en momento crítico ventas', 
        solution: 'Modelo bodega flex pre-temporada: cliente almacena stock 60 días antes del peak en nuestras instalaciones, zona segregada por categoría (notebooks/tablets/accesorios), WMS integrado con su e-commerce para sync stock real-time, fulfillment escalable durante peak (aumentamos personal +200% temporada), preparación órdenes <4h (mismo día despacho si orden antes 14:00), devoluciones post-temporada express', 
        outcome: 'Cliente vendió todo el stock pre-cargado sin quiebres (96% sell-through vs 78% año anterior). Reducción 51% costos almacenaje vs bodega propia anual. Fulfillment peak: procesamos 15k órdenes en 5 días (Black Friday + Cyber Monday) manteniendo SLA <24h. Devoluciones enero procesadas en 48h (re-stock para siguiente temporada). Modelo replicado 3 años consecutivos con crecimiento volumen +40% anual', 
        icon: <TrendingUp className="h-6 w-6" /> 
      }
    ],

    deliverables: [
      { name: 'Dashboard Tracking Alto Valor', description: 'Panel web 24/7 para productos tecnológicos alto valor: ubicación real-time cada unidad (por número serie), trazabilidad movimientos (recepción→almacén→picking→despacho→entrega), alertas automáticas eventos críticos (salida zona segura, demora >30min en checkpoint), auditoría perpetua inventario, exportable para seguros/auditorías', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Certificados Data Wiping & Destrucción', description: 'Documentación oficial destrucción data en equipos IT retirados: sobreescritura segura 7 pasadas estándar DoD 5220.22-M, certificado individual por número serie dispositivo, fotografías proceso destrucción física (discos/SSDs), cumplimiento normativas protección datos personales (Ley 19.628 Chile), auditable para compliance', type: 'document', icon: <FileText className="h-5 w-5" /> },
      { name: 'Reportes Gestión RMA (Return Merchandise Authorization)', description: 'Informe detallado operación garantías/devoluciones tecnológicos: volumen RMAs por motivo (defecto pantalla/batería/software/otro), tiempos ciclo RMA (retiro→diagnóstico→resolución→retorno), tasa reparación vs reemplazo, análisis defectos recurrentes por modelo/lote (early warning calidad), satisfacción usuarios RMA. Dashboard + Excel exportable', type: 'report', icon: <FileText className="h-5 w-5" /> },
      { name: 'Integración Sistemas Service Desk IT', description: 'Conectores con plataformas service desk / ticketing del cliente (ServiceNow, Jira Service Management, Zendesk): creación automática ticket logístico desde incidencia IT, sync estado RMA, actualización tracking envíos, cierre automático ticket al completar entrega. Mejora experiencia usuario final con visibilidad integrada', type: 'integration', icon: <Code className="h-5 w-5" /> },
      { name: 'Portal Autoservicio Rollout Proyectos IT', description: 'Plataforma web para gestión proyectos despliegue masivo equipos: carga programación despliegues por sucursal/fecha, tracking estado preparación/despacho/instalación, reportes progreso vs plan, gestión excepciones (sucursal no recibió, equipo DOA), descarga PODs (Proof of Delivery) digitales, analytics post-proyecto', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Certificaciones Seguridad & Seguros', description: 'Documentación compliance seguridad equipos alto valor: certificados vigencia seguros all-risk (coberturas por valor declarado), protocolos acceso zonas ultra-seguras (biometría + videovigilancia), auditorías seguridad trimestral, planes contingencia (robo/incendio/desastre natural), certificaciones embalaje anti-estático ESD para componentes sensibles', type: 'document', icon: <Shield className="h-5 w-5" /> }
    ],

    integrations: [
      { system: 'Plataformas Service Desk / Ticketing IT', description: 'Integración con sistemas gestión incidencias IT del cliente (ServiceNow, Jira Service Desk, Zendesk, Freshservice): creación automática órdenes logísticas desde tickets soporte, sync estado RMAs, tracking envíos pushed a ticket, cierre automático al completar entrega. Mejora SLAs IT y experiencia usuario', technologies: ['REST API', 'Webhooks', 'OAuth 2.0', 'ITSM Integration'], icon: <Code className="h-5 w-5" /> },
      { system: 'WMS Alto Valor + Trazabilidad Serial', description: 'Sistema WMS especializado productos tecnológicos alto valor: trazabilidad unitaria por número serie (no solo SKU), zona ultra-segura con accesos restringidos, auditoría perpetua (inventario físico=sistema 24/7), alertas anomalías (unidad sin movimiento >X días, salida no autorizada), reportes trazabilidad forward/backward para investigaciones', technologies: ['WMS Custom', 'Barcode Serial', 'RFID', 'Biometric Access'], icon: <Server className="h-5 w-5" /> },
      { system: 'Tracking GPS + Geofencing Envíos Críticos', description: 'Plataforma tracking real-time para envíos tecnológicos alto valor: GPS vehicular actualización cada 5min, geofencing con alertas si se desvía de ruta planificada, sensor impactos/vibraciones durante transporte, temperatura/humedad si aplica, POD digital con geolocalización + fotografía + firma. Portal cliente acceso 24/7', technologies: ['GPS/GNSS', 'Geofencing', 'IoT Sensors', 'Mobile Apps'], icon: <MapPin className="h-5 w-5" /> },
      { system: 'Sistemas Asset Management Clientes', description: 'Integración con plataformas gestión activos IT corporativos: sync automático movimientos equipos (asignación empleado, transferencia sucursal, retiro por obsolescencia), actualización ubicación física asset, vinculación asset tag ↔ número serie logístico, reportes inventario IT para auditorías, alertas equipos no localizados', technologies: ['REST API', 'CMDB Integration', 'Asset Sync', 'LDAP'], icon: <Database className="h-5 w-5" /> },
      { system: 'Herramientas BI & Analytics', description: 'Integración con Power BI y plataformas analytics del cliente para dashboards ejecutivos logística IT: costos logísticos por proyecto rollout, performance RMAs (tiempos, satisfacción), rotación inventario tecnológico, analytics defectos productos (early warning calidad), optimización stock vs demanda forecast', technologies: ['Power BI', 'SQL Connectors', 'REST API', 'Data Export'], icon: <BarChart3 className="h-5 w-5" /> }
    ],

    slas: [
      { metric: 'Exactitud Inventario Productos Alto Valor (>US$500/unidad)', commitment: '100% exactitud con trazabilidad unitaria por número serie', notes: 'Auditoría perpetua: inventario sistema debe igualar físico 24/7. Trazabilidad completa cada unidad: recepción → ubicación → picking → despacho. Conteo cíclico diario productos clase A (alto valor). Investigación inmediata cualquier discrepancia. Zona ultra-segura con acceso biométrico + videovigilancia 90 días' },
      { metric: 'Tasa DOA Logística (Dead on Arrival por daños transporte)', commitment: '< 0.3% unidades dañadas atribuibles a manipulación logística', notes: 'Embalaje anti-estático + refuerzos anti-vibración. Manipulación especializada productos frágiles. Inspección QA recepción + pre-despacho con fotografías. Transporte dedicado para equipos críticos (no consolidado). Seguro all-risk cubre 100% valor en caso daños. Medición mensual con análisis root-cause' },
      { metric: 'Tiempo Ciclo RMA (Return Merchandise Authorization)', commitment: '< 5 días laborables desde retiro hasta entrega reemplazo/reparado', notes: 'Ciclo completo: retiro desde usuario/service center → recepción bodega → diagnóstico QA → reparación/reemplazo → despacho retorno. Tracking 24/7 para usuario. Priorización RMAs críticos (equipos corporativos productivos) en <72h. Comunicación proactiva si demoras imprevistas' },
      { metric: 'Cumplimiento Proyectos Rollout IT (deadline comprometido)', commitment: '≥ 95% sucursales/usuarios reciben equipos en fecha comprometida', notes: 'Planificación detallada pre-proyecto: oleadas despliegue, coordinación sucursales, contingencias. Despachos programados con confirmación 48h antes. Tracking real-time progreso vs plan. Escalamiento inmediato si riesgos (retrasos carrier, equipo DOA). Reporte post-proyecto: % on-time, excepciones, lecciones aprendidas' },
      { metric: 'Seguridad Zona Ultra-Segura (hurtos/pérdidas productos alto valor)', commitment: '0% pérdidas/hurtos en zona seguridad reforzada', notes: 'Acceso biométrico restringido (max 5 personas autorizadas). Videovigilancia 24/7 con grabación 90 días cloud. Escaneo obligatorio entrada/salida con trazabilidad usuario + timestamp. Auditoría perpetua inventario. Alarmas intrusión conectadas central monitoreo. Investigación inmediata cualquier anomalía. Seguro all-risk complementario' }
    ],

    faqs: [
      { question: '¿Cómo protegen equipos tecnológicos de alto valor contra hurtos y daños?', answer: 'Múltiples capas seguridad: 1) Zona ultra-segura con acceso biométrico restringido (solo personal autorizado), 2) Videovigilancia 24/7 con grabación 90 días en cloud, 3) Trazabilidad unitaria por número serie (escaneo obligatorio cada movimiento), 4) Auditoría perpetua (inventario sistema=físico verificado diariamente), 5) Embalaje especializado anti-estático + anti-vibración, 6) Seguros all-risk por valor declarado. Resultados: 0 hurtos en últimos 18 meses operando con clientes tecnología. Tasa daños logísticos <0.3% (vs 2-4% industria).' },
      { question: '¿Pueden gestionar proyectos de rollout masivo de equipos IT (laptops, smartphones) a nivel nacional?', answer: 'Sí, experiencia comprobada en rollouts masivos: recibimos equipos en nuestra bodega, inspección QA inicial (encendido + specs), kitting por usuario/sucursal (equipo + accesorios + manuales), embalaje individual, despachos programados por oleadas geográficas, coordinación con equipos IT locales para instalación, tracking real-time progreso vs plan, retiro simultáneo equipos obsoletos si aplica, data wiping certificado. Casos reales: rollout 3,500 laptops en 38 días a 120 sucursales sin DOAs. Portal web autoservicio para cliente monitorear progreso 24/7.' },
      { question: '¿Qué es RMA (Return Merchandise Authorization) y cómo lo gestionan?', answer: 'RMA es proceso garantías/devoluciones tecnológicos cuando usuario detecta defecto. Gestionamos ciclo completo: 1) Coordinación retiro desde usuario/service center, 2) Recepción con inspección técnica QA (clasificamos: defecto real/DOA/mal uso/fraude), 3) Derivación a reparación o emisión equipo reemplazo según política cliente, 4) Despacho retorno a usuario, 5) Tracking 24/7 con portal autoservicio usuario. Tiempo ciclo promedio: 4-5 días (vs 12-18 días manual). Beneficios: mejora satisfacción usuario, detecta RMAs fraudulentos (ahorra costos garantía), analytics defectos recurrentes (early warning calidad producto).' },
      { question: '¿Cuentan con embalaje anti-estático (ESD protection) para componentes electrónicos sensibles?', answer: 'Sí, infraestructura completa protección ESD: bolsas antiestáticas certificadas (Faraday bags), espuma conductiva, wrist straps para manipulación, zona ESD-safe con piso antiestático, personal capacitado en handling componentes sensibles (semiconductores, tarjetas PCB, discos duros). Crítico para: componentes IT, servidores, equipos telecomunicaciones, dispositivos médicos electrónicos. Certificamos cumplimiento estándar ANSI/ESD S20.20. Casos uso: transporte servidores data center, componentes semiconductores, equipos telecom 5G sin daños electrostáticos.' },
      { question: '¿Cómo funciona el data wiping (borrado seguro datos) en equipos retirados?', answer: 'Protocolo destrucción data certificado: 1) Retiro equipos obsoletos desde usuario/sucursal, 2) Recepción con registro número serie, 3) Data wiping software con sobreescritura 7 pasadas (estándar DoD 5220.22-M), 4) Destrucción física discos/SSDs si requerido (trituración), 5) Certificado oficial por equipo (número serie + fecha + método + técnico responsable), 6) Fotografías proceso para auditoría. Cumple normativas protección datos personales (Ley 19.628 Chile, GDPR Europa). Esencial para: equipos financieros, salud, gobierno, cualquier dato sensible. Auditado por compliance cliente + autoridades si aplica.' },
      { question: '¿Manejan seguros all-risk para equipos de alto valor y qué cobertura tienen?', answer: 'Sí, todos los productos tecnológicos están cubiertos por seguros all-risk: cobertura 100% valor declarado (hasta US$5M por proyecto), incluye robo, daños accidentales, incendio, desastres naturales, durante almacenamiento + transporte. Proceso claims simplificado: detección incidente → notificación aseguradora <24h → peritaje rápido → reposición/reembolso en <15 días. Primas optimizadas por nuestras medidas seguridad (zona ultra-segura, tracking GPS, embalaje especializado). Cliente puede solicitar cobertura extendida o pólizas específicas proyecto. Casos reales: proyecto data center US$2.2M asegurado sin incidentes.' }
    ],

    relatedSolutions: [
      { name: 'Retail y E-commerce', link: 'retail' },
      { name: 'Automotriz', link: 'automotriz' },
      { name: 'Aerospace', link: 'aerospace' }
    ]
  },

  'otras': {
    id: 'otras',
    title: 'Otras Industrias',
    subtitle: 'Soluciones adaptadas a sectores especializados',
    tagline: 'Flexibilidad para necesidades únicas',
    description: 'Capacidad demostrada para adaptar soluciones logísticas a industrias con requerimientos específicos y regulaciones particulares. Experiencia en sectores diversos: química (materiales peligrosos MSDS), construcción (materiales voluminosos, proyectos obra), agricultura (insumos agrícolas, semillas certificadas), textil (temporadas moda, tallas/colores), minería (repuestos equipos pesados, campamentos remotos), cosmética (productos regulados ISP), editorial (libros/revistas distribución nacional), deportes (equipamiento especializado). Flexibilidad operativa para customizar procesos según particularidades de cada industria: cumplimiento normativo sectorial, manipulación especializada, empaque específico, distribución capilar, trazabilidad regulada.',
    
    subpages: [
      { id: 'overview', title: 'Panorama General', description: 'Qué hacemos y por qué somos diferentes', icon: <Home className="h-5 w-5" /> },
      { id: 'operacion', title: 'Operación Multi-Industria', description: 'Casos química, construcción, agricultura, textil', icon: <Settings className="h-5 w-5" /> },
      { id: 'tecnologia', title: 'Stack Tecnológico', description: 'WMS flexible, tracking, integraciones custom', icon: <Code className="h-5 w-5" /> },
      { id: 'slas-entregables', title: 'SLAs & Entregables', description: 'Compromisos adaptados por sector', icon: <FileText className="h-5 w-5" /> },
      { id: 'escenarios', title: 'Casos Multi-Industria', description: 'Química, construcción, agricultura, textil', icon: <Target className="h-5 w-5" /> }
    ],

    scenarios: [
      { 
        pain: 'Fabricante productos químicos industriales (limpieza profesional, tratamiento aguas) con 85 SKUs clasificados materiales peligrosos (corrosivos, tóxicos, inflamables) sin bodega certificada para almacenamiento MSDS, causando restricciones distribución + riesgo sanciones autoridad sanitaria + seguros con primas altísimas por almacenamiento inadecuado', 
        solution: 'Habilitamos zona segregada materiales peligrosos: certificación MSDS vigente autoridad sanitaria, piso impermeabilizado con contención derrames, ventilación forzada, ducha emergencia + lavaojos, extintores específicos por clase fuego, personal capacitado manipulación peligrosos con EPP, segregación por incompatibilidad química (ácidos separados de bases), hojas seguridad disponibles 24/7, plan respuesta emergencias', 
        outcome: 'Cliente obtuvo certificación para vender productos químicos industriales (antes limitado). Reducción primas seguro: 48% por bodega certificada (ahorro US$36k/año). Cero incidentes manipulación peligrosos en 24 meses operando. Auditorías autoridad sanitaria sin observaciones. Cliente amplió catálogo de 85 a 140 SKUs químicos con confianza infraestructura compliance', 
        icon: <AlertCircle className="h-6 w-6" /> 
      },
      { 
        pain: 'Constructora con 15 proyectos obra simultáneos (edificios, infraestructura) sin gestión centralizada materiales construcción: cemento, fierros, cerámicas, sanitarios, pinturas comprados disperso por cada obra, sin visibilidad stock cross-proyecto (sobrantes obra A no se reúsan en obra B), capital inmovilizado >US$400k en materiales parados, mermas por obsolescencia/robo', 
        solution: 'Implementamos bodega centralizada materiales construcción: recepción consolidada compras todas las obras, WMS con asignación dinámica stock a proyectos según necesidad real-time, despachos programados a obra según cronograma construcción, gestión sobrantes (retorno bodega central para reasignación), inventario perpetuo para detectar faltantes/hurtos, reportes consumo real vs presupuestado por proyecto', 
        outcome: 'Reducción 52% inventario inmovilizado (de US$420k a US$200k = liberó US$220k capital). Reutilización sobrantes entre obras: 78% materiales retornados se reasignan (antes se perdían). Mermas/hurtos redujeron 64% por trazabilidad. Tiempo compras: -35% al consolidar negociación proveedores. ROI: constructora ahorró US$180k primer año en costos materiales + optimización compras', 
        icon: <Package className="h-6 w-6" /> 
      },
      { 
        pain: 'Distribuidor insumos agrícolas (semillas certificadas, fertilizantes, agroquímicos) con temporada peak siembra (agosto-octubre) concentrando 70% ventas anuales, sin capacidad bodega para stock pre-temporada + distribución capilar a 240 agrotiendas rurales en regiones con acceso difícil (caminos tierra, distancias >300km), causando quiebres stock en momento crítico agricultores', 
        solution: 'Diseñamos solución temporada agrícola: ampliación bodega modular 3 meses antes peak (capacidad +150%), pre-carga stock semillas/fertilizantes según forecast histórico por zona geográfica, ruteo optimizado multi-drop (hasta 12 agrotiendas por ruta consolidada), camiones preparados caminos rurales, despachos programados sincronizados con calendario siembra regional, stock consignación en agrotiendas principales', 
        outcome: 'Quiebres stock peak siembra: 3.2% (antes 22% perdían ventas). Fill rate agrotiendas: 96% (antes 78%). Costos transporte: -28% por consolidación rutas rurales. Ventas distribuidor crecieron 31% al capturar demanda antes insatisfecha. Agricultores satisfechos: reciben insumos justo para fechas siembra óptimas. Modelo replicado 4 temporadas con crecimiento sostenido', 
        icon: <TrendingUp className="h-6 w-6" /> 
      },
      { 
        pain: 'Marca textil moda rápida con 6 colecciones/año (fast fashion) y complejidad SKU exponencial (1 modelo × 5 tallas × 8 colores = 40 SKUs por modelo, catálogo 120 modelos = 4,800 SKUs activos), sin WMS preparado para tallas/colores causando: errores picking frecuentes (enviar talla M cuando cliente pidió L), imposibilidad ubicar SKU específico rápidamente, inventarios descuadrados', 
        solution: 'Implementamos WMS textil con matriz talla-color: ingreso con escaneo obligatorio modelo+talla+color, ubicaciones organizadas por colección+modelo (todas las variantes juntas pero identificadas), picking dirigido con validación talla-color, reportes disponibilidad por matriz completa (detecta "tengo modelo X en negro talla S pero quiebres en M/L"), analytics rotación por talla/color para optimizar compras futuras', 
        outcome: 'Errores picking talla/color: reducidos 87% (de 4.3% a 0.6%). Tiempo ubicar SKU específico: -72% (antes 8min buscar manual, ahora WMS indica ubicación exacta en 90seg). Rotación inventario: mejoró 43% al detectar tallas/colores baja rotación temprano. Quiebres stock colores/tallas populares: -58% con analytics predictivo. Cliente redujo devoluciones "envío talla incorrecta" en 41%', 
        icon: <Target className="h-6 w-6" /> 
      },
      { 
        pain: 'Operador minero con 3 faenas remotas (Antofagasta, Copiapó, Chuquicamata) requiriendo repuestos críticos maquinaria pesada (cargadores, camiones mineros, perforadoras) con urgencia extrema: parada máquina = pérdida US$50-80k/día producción, sin stock estratégico en faenas (bodega limitada), tiempo respuesta tradicional 5-7 días Santiago→faena incompatible con costo parada', 
        solution: 'Implementamos hub logístico minero: stock consignación repuestos críticos identificados con cliente (alto costo parada + largo lead-time proveedor), bodega staging en Antofagasta (reduce distancia a faenas), protocolo urgencia 24/7 (activación con llamada gerente operaciones), despacho aéreo charter si crítico (costo justificado vs parada producción), tracking GPS tiempo real, técnico nuestro puede viajar con repuesto para instalación si cliente requiere', 
        outcome: 'Tiempo respuesta repuestos críticos: 18h promedio (antes 5-7 días). Paradas maquinaria por falta repuesto: reducidas 76%. Cliente evitó pérdidas estimadas US$2.4M/año en producción detenida. Costo logístico urgencias: compensado 8× por ahorro evitar paradas. Stock consignación optimizado: solo mantener repuestos realmente críticos (análisis histórico fallas). Relación comercial: contrato marco 3 años renovado', 
        icon: <Clock className="h-6 w-6" /> 
      }
    ],

    deliverables: [
      { name: 'Soluciones Logísticas Customizadas', description: 'Diseño de soluciones a medida según particularidades de tu industria: análisis requerimientos específicos (normativa, manipulación, empaque, distribución), propuesta operativa detallada, pilotos prueba concepto antes rollout completo, ajustes iterativos basados en feedback, documentación procesos operativos estándar (SOPs) personalizados', type: 'document', icon: <FileText className="h-5 w-5" /> },
      { name: 'Dashboard Multi-Industria Configurable', description: 'Panel web adaptado a KPIs relevantes para tu sector: químicos (cumplimiento MSDS, vencimientos peligrosos), construcción (consumo materiales vs presupuesto obra), agrícola (stock por temporada/zona geográfica), textil (matriz disponibilidad talla-color), minería (tiempo respuesta urgencias). Configuración flexible según necesidades', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Reportes Cumplimiento Normativo Sectorial', description: 'Documentación específica según regulación de tu industria: químicos (certificaciones MSDS, hojas seguridad, capacitaciones manipulación), farmacéutico (GDP, trazabilidad lote), alimentos (HACCP, cadena frío), construcción (certificados materiales, trazabilidad proyecto), agricultura (semillas certificadas, registros SAG). Auditable para compliance', type: 'report', icon: <Shield className="h-5 w-5" /> },
      { name: 'Integraciones Custom con Sistemas Cliente', description: 'Conectores a medida con sistemas particulares de tu industria: ERPs especializados (construcción, minería, agrícola), software gestión proyectos (Primavera, MS Project), plataformas sectoriales, APIs propietarias. Desarrollamos integración específica si no existe conector estándar. Setup personalizado por proyecto', type: 'integration', icon: <Code className="h-5 w-5" /> },
      { name: 'Analytics Sector-Específico', description: 'Dashboards con insights accionables para tu industria: textil (rotación por talla/color, forecast temporadas), construcción (varianza consumo vs presupuesto, optimización compras), agrícola (demanda por calendario siembra, zonas geográficas), química (rotación productos peligrosos, vencimientos), minería (criticidad repuestos, tiempo respuesta urgencias)', type: 'dashboard', icon: <BarChart3 className="h-5 w-5" /> }
    ],

    integrations: [
      { system: 'ERPs Especializados por Industria', description: 'Integración con ERPs verticales especializados: construcción (Primavera, Procore), minería (Ellipse, Maximo), agrícola (AgroGestión, FarmERP), textil (Infor Fashion PLM), química (BatchMaster). Sincronización órdenes compra, consumos proyecto, facturación, maestros productos. APIs REST o conectores directos según sistema', technologies: ['REST API', 'SOAP', 'EDI', 'SQL Direct'], icon: <Database className="h-5 w-5" /> },
      { system: 'Software Gestión Proyectos (Construcción/Minería)', description: 'Conectores con herramientas gestión proyectos: Primavera P6, MS Project, Procore, Aconex. Sincronización cronogramas obra/proyecto, despachos materiales alineados a hitos construcción, consumo real vs presupuestado, alertas retrasos entregas que impactan ruta crítica. Mejora coordinación logística-proyecto', technologies: ['API REST', 'MS Project Integration', 'Webhooks', 'Data Export'], icon: <Network className="h-5 w-5" /> },
      { system: 'WMS Configurable Multi-Industria', description: 'Sistema WMS con módulos adaptables según sector: textil (matriz talla-color), construcción (asignación dinámica materiales a proyectos), química (segregación incompatibilidades, MSDS), agrícola (lotes certificados, trazabilidad SAG), genérico (configuración custom). Workflows personalizables por tipo producto', technologies: ['WMS Modular', 'Custom Workflows', 'Barcode/RFID', 'API Plugins'], icon: <Server className="h-5 w-5" /> },
      { system: 'Plataformas Sectoriales Específicas', description: 'Integración con plataformas propias de cada industria: agrícola (marketplaces insumos, portales SAG), construcción (licitaciones públicas, portales proveedores), química (sistemas gestión MSDS), textil (plataformas mayoristas moda). Desarrollamos conectores custom según necesidad cliente', technologies: ['Custom API', 'FTP/SFTP', 'Webhooks', 'Scraping si necesario'], icon: <Globe className="h-5 w-5" /> },
      { system: 'Herramientas BI & Analytics', description: 'Integración con Power BI y plataformas analytics para dashboards ejecutivos multi-industria. KPIs configurables según sector: costos logísticos por proyecto/obra, rotación inventario por temporada, cumplimiento regulatorio, performance proveedores, forecast demanda sector-específico', technologies: ['Power BI', 'SQL Connectors', 'REST API', 'Data Export'], icon: <BarChart3 className="h-5 w-5" /> }
    ],

    slas: [
      { metric: 'Flexibilidad Operativa (adaptación requerimientos específicos)', commitment: 'Diseño solución customizada en <4 semanas desde kick-off proyecto', notes: 'Proceso: reuniones diagnóstico con expertos cliente, análisis requerimientos técnicos/regulatorios, propuesta operativa detallada, piloto prueba concepto, ajustes iterativos, go-live asistido. SLAs específicos se definen por proyecto según naturaleza industria. Compromiso: diseñar solución viable que cumpla particularidades de tu sector' },
      { metric: 'Cumplimiento Normativo Sectorial', commitment: '100% compliance con regulaciones específicas de tu industria', notes: 'Nos adaptamos a: química (MSDS, autorización sanitaria materiales peligrosos), alimentos (HACCP, cadena frío), farmacéutico (GDP, ISP), construcción (certificaciones materiales), agricultura (semillas certificadas SAG), otros. Documentación actualizada disponible para auditorías. Capacitación continua personal en normativas sectoriales' },
      { metric: 'Exactitud Inventario Multi-Industria', commitment: '≥ 98% exactitud mensual adaptada a complejidad productos', notes: 'Medición ajustada por tipo producto: textil (por talla-color), construcción (por proyecto asignado), química (lote+vencimiento+MSDS), agrícola (lote certificado), genérico (SKU estándar). Conteo cíclico frecuencia según criticidad. Auditorías con cliente según periodicidad acordada proyecto a proyecto' },
      { metric: 'Tiempo Respuesta Urgencias Críticas', commitment: 'Protocolo escalamiento 24/7 con respuesta <30min para industrias críticas', notes: 'Activación urgencia para: minería (repuesto crítico parada producción), construcción (material faltante bloquea obra), agricultura (insumo urgente temporada siembra), química (reposición urgente cliente industrial). Plan contingencia: stock estratégico, despachos express, coordinación proveedores. Soporte 24/7 sectores que lo requieren' }
    ],

    faqs: [
      { question: '¿Pueden adaptarse a industrias muy específicas que no sean las mencionadas (retail, aerospace, etc.)?', answer: 'Absolutamente. Nuestra fortaleza es la flexibilidad operativa: analizamos requerimientos particulares de tu industria, diseñamos solución logística customizada, implementamos pilotos prueba concepto, ajustamos según feedback. Casos reales operando: química (materiales peligrosos MSDS), construcción (materiales obra multi-proyecto), agricultura (insumos temporada siembra), textil (matriz talla-color fast fashion), minería (repuestos urgentes faenas remotas), cosmética (regulación ISP), editorial (libros distribución nacional). Si tu industria tiene particularidades específicas, podemos diseñar una solución. Contáctanos para evaluar viabilidad.' },
      { question: '¿Cómo manejan productos químicos o materiales peligrosos (MSDS)?', answer: 'Infraestructura certificada materiales peligrosos: zona segregada con autorización sanitaria MSDS vigente, piso impermeabilizado + contención derrames, ventilación forzada, extintores específicos por clase fuego, ducha emergencia + lavaojos, segregación por incompatibilidad química (ácidos separados de bases/oxidantes), personal capacitado manipulación peligrosos con EPP certificado, hojas seguridad (MSDS) disponibles 24/7, plan respuesta emergencias coordinado con bomberos. Cumplimiento normativa NCh382 Chile + estándares internacionales. Experiencia: 85 SKUs químicos industriales sin incidentes en 24 meses.' },
      { question: '¿Soportan logística para proyectos de construcción u obras con múltiples ubicaciones?', answer: 'Sí, especialidad en logística construcción: bodega centralizada materiales (cemento, fierros, cerámicas, sanitarios, pinturas), asignación dinámica stock a proyectos según cronogramas obra, despachos programados sincronizados con hitos construcción (coordinación con jefe obra), gestión sobrantes (retorno a bodega central para reasignación cross-proyecto), reportes consumo real vs presupuestado por partida, trazabilidad materiales por obra (esencial para auditorías/certificaciones). Casos reales: constructora con 15 obras simultáneas redujo 52% capital inmovilizado en materiales + reutilizó 78% sobrantes entre proyectos.' },
      { question: '¿Pueden gestionar productos agrícolas o insumos con temporadas muy marcadas (siembra/cosecha)?', answer: 'Sí, experiencia en logística agrícola estacional: ampliación bodega modular pre-temporada peak (capacidad flex +150%), pre-carga stock según forecast histórico por zona geográfica, distribución capilar a agrotiendas rurales (caminos tierra, distancias >300km), ruteo optimizado multi-drop (hasta 12 puntos por ruta), despachos sincronizados con calendario siembra/cosecha regional, stock consignación en distribuidores estratégicos. Productos: semillas certificadas (trazabilidad SAG), fertilizantes, agroquímicos, maquinaria agrícola. Caso real: distribuidor insumos agrícolas redujo quiebres stock peak siembra de 22% a 3.2% y creció ventas 31%.' },
      { question: '¿Manejan logística textil con complejidad tallas y colores (fast fashion)?', answer: 'Sí, WMS especializado textil: matriz talla-color por modelo (1 modelo × 5 tallas × 8 colores = 40 SKUs, tracking individual cada variante), ubicaciones organizadas por colección+modelo (todas las variantes agrupadas pero identificadas), picking dirigido con validación talla-color obligatoria (evita errores), reportes disponibilidad por matriz completa (detecta quiebres tallas/colores específicos), analytics rotación por talla-color para optimizar compras futuras. Crítico para: moda rápida (6+ colecciones/año), ropa deportiva (tallas XS-XXL múltiples colores), calzado (numeración 35-46). Caso real: marca fast fashion redujo errores picking talla/color en 87% + mejoró rotación 43%.' },
      { question: '¿Pueden dar soporte logístico a faenas mineras remotas con urgencias críticas?', answer: 'Sí, logística minera especializada: hub staging en zonas mineras (Antofagasta, Copiapó) reduce distancia a faenas, stock consignación repuestos críticos identificados con cliente (análisis histórico fallas + costo parada), protocolo urgencia 24/7 (activación con llamada gerente operaciones), despacho aéreo charter si crítico (costo justificado vs US$50-80k/día pérdida producción por parada máquina), tracking GPS tiempo real, técnico nuestro puede viajar con repuesto para soporte instalación. Casos reales: operador 3 faenas redujo tiempo respuesta repuestos críticos de 5-7 días a 18h promedio, evitó US$2.4M/año pérdidas producción, paradas por falta repuesto -76%.' }
    ],

    relatedSolutions: [
      { name: 'Industrial', link: 'industrial' },
      { name: 'Retail y E-commerce', link: 'retail' },
      { name: 'Tecnología & Electrónica', link: 'tecnologia' }
    ]
  }
};
