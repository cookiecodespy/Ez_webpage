import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Package, Clock, Shield, TrendingUp, Users, Globe, Zap, Target, Home, ChevronRight, FileText, Layers, HelpCircle, Settings, AlertCircle, Cpu, Network, Server, Database } from 'lucide-react';
import { OutlineButton } from '../components/UIButtons';
import { useEffect, useRef, useState } from 'react';
import { industriesData } from '../data/industriesData';

// ========== INTERFACES (kept for component) ==========
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

interface IndustryDetailData {
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

// ========== DATA ==========

export default function IndustryDetail() {
  const {industryId, subpage} = useParams<{ industryId: string; subpage?: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const industry = industryId ? industriesData[industryId] : null;
  
  const [activeScenario, setActiveScenario] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>(subpage || 'overview');

  const fromIndustries = location.state?.from === 'industries' || document.referrer.includes('/industrias/');

  // Scroll to top when subpage changes
  useEffect(() => {
    if (subpage) {
      setActiveTab(subpage);
    } else {
      setActiveTab('overview');
    }
    // Scroll to content area with offset for header - increased to 200px for more space
    const timer = setTimeout(() => {
      const contentArea = document.getElementById('industry-content');
      if (contentArea) {
        const elementPosition = contentArea.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 200; // 200px offset for better spacing
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [subpage]);

  // Initial scroll on mount to show hero properly
  useEffect(() => {
    // Small delay to ensure page is rendered
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 100);
    return () => clearTimeout(timer);
  }, [industryId]);

  if (!industry) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center text-white">
          <AlertCircle className="h-16 w-16 text-[#E41B13] mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Industria no encontrada</h1>
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
      navigate(`/industrias/${industry.id}`);
    } else {
      navigate(`/industrias/${industry.id}/${tabId}`);
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

      {/* Hero Section - Better Spacing */}
      <div className="relative pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title + Description */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <Link
                to="/"
                state={{ scrollTo: fromIndustries ? 'industries' : 'services' }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Ver Otras {fromIndustries ? 'Industrias' : 'Soluciones'}
              </Link>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {industry.title}
            </h1>
            <p className="text-2xl text-[#E41B13] font-bold mb-4">
              {industry.tagline}
            </p>
            <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
              {industry.description}
            </p>
          </div>

          {/* Navigation Pills - Sticky with glass effect */}
          <div className="sticky top-20 z-40 bg-gradient-to-r from-gray-900/80 via-gray-950/90 to-gray-900/80 backdrop-blur-xl -mx-8 px-8 py-3 border-b border-white/5 shadow-lg">
            <div className="flex flex-wrap gap-2 items-center">
              {industry.subpages.map((sub: any) => (
                <button
                  key={sub.id}
                  onClick={() => handleTabChange(sub.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === sub.id
                      ? 'bg-gradient-to-r from-[#E41B13] to-[#8B0000] text-white shadow-lg shadow-red-500/30'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {sub.icon}
                  <span>{sub.title}</span>
                </button>
              ))}

              <Link
                to="/"
                state={{ scrollTo: 'contact' }}
                className="ml-auto inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#E41B13] to-[#8B0000] rounded-lg text-sm font-bold hover:scale-105 transition-all shadow-lg shadow-red-500/50"
              >
                <span>Solicitar Info</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area - with margin for sticky nav */}
      <div id="industry-content" className="mt-8">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <OverviewContent industry={industry} activeScenario={activeScenario} setActiveScenario={setActiveScenario} expandedFAQ={expandedFAQ} setExpandedFAQ={setExpandedFAQ} />
          )}
          {activeTab === 'operacion' && <OperacionContent industry={industry} />}
          {activeTab === 'tecnologia' && <TecnologiaContent industry={industry} />}
          {activeTab === 'slas-entregables' && <SLAsContent industry={industry} />}
          {activeTab === 'escenarios' && <EscenariosContent industry={industry} />}
        </AnimatePresence>
      </div>

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

function OverviewContent({ industry, activeScenario, setActiveScenario, expandedFAQ, setExpandedFAQ }: any) {
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
          {industry.scenarios.map((scenario: Scenario, index: number) => (
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
          {industry.deliverables.map((deliverable: Deliverable, index: number) => (
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
          {industry.integrations.map((integration: Integration, index: number) => (
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
          {industry.faqs.map((faq: FAQ, index: number) => (
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
      {industry.relatedSolutions && industry.relatedSolutions.length > 0 && (
        <section>
          <h3 className="text-2xl font-bold mb-6">Explora Otras Industrias</h3>
          <div className="flex flex-wrap gap-4">
            {industry.relatedSolutions.slice(0, 2).map((related: any, index: number) => (
              <Link
                key={index}
                to={`/industrias/${related.link}`}
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
function OperacionContent({ industry }: any) {
  const workflows = {
    'retail': [
      { step: '1. Recepción de Inventario', description: 'Descarga de contenedores/pallets, validación contra OC, inspección QA, registro WMS con ubicación asignada por rotación ABC', tools: ['WMS', 'Scanners RF', 'QA Checklists'], time: '2-6 hrs' },
      { step: '2. Almacenamiento Inteligente', description: 'Slotting automático según velocidad de rotación, zona temperatura controlada si aplica, reserva automática para órdenes pre-vendidas', tools: ['WMS VULCANO', 'Sensores IoT'], time: 'Continuo' },
      { step: '3. Procesamiento Órdenes E-commerce', description: 'Sincronización automática órdenes desde plataformas, wave picking batch, validación SKU por escaneo, empaque según canal (marketplace vs marca propia)', tools: ['API E-commerce', 'WMS', 'Empaque automático'], time: '1-4 hrs' },
      { step: '4. Ship-from-Store (Omnicanal)', description: 'Orden online ruteada a tienda con stock más cercana al cliente, tienda recibe picking list, preparación local, etiqueta courier generada', tools: ['POS Integration', 'Ruteo inteligente'], time: '30-90 min' },
      { step: '5. Reposición Tiendas B2B', description: 'Solicitudes tiendas vía portal, picking con validación multi-SKU, carga paletizada, entrega con POD digital', tools: ['Portal B2B', 'WMS'], time: '24-48 hrs' },
      { step: '6. Reverse Logistics', description: 'Recepción devoluciones con QA en 3 niveles, clasificación (re-stock/liquidación/descarte), re-etiquetado, disponibilidad actualizada automáticamente', tools: ['QA Station', 'WMS', 'Analytics'], time: '<72 hrs' },
      { step: '7. Despacho Multi-carrier', description: 'Selección carrier óptimo por zona/costo/SLA, generación etiquetas batch, manifiesto digital, tracking pushed a plataforma e-commerce', tools: ['TMS', 'Carrier APIs', 'Label Printer'], time: '2-4 hrs' }
    ],
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

  const currentWorkflow = workflows[industry.id as keyof typeof workflows] || [];

  if (currentWorkflow.length === 0) {
    return (
      <motion.div
        key="operacion"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="relative max-w-7xl mx-auto px-6 py-12"
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
          <Settings className="w-16 h-16 text-[#E41B13] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Contenido en Desarrollo</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos preparando información detallada sobre el flujo operacional de {industry.title}. Contáctanos para conocer más.
          </p>
        </div>
      </motion.div>
    );
  }

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
          Así ejecutamos {industry.title} desde la solicitud hasta la entrega. Cada paso integrado con tecnología y validaciones en tiempo real.
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
              {industry.id === 'ultima-milla' ? '98.5%' : industry.id === 'transporte-terrestre' ? '96.2%' : '99.1%'}
            </div>
            <p className="text-sm text-gray-400">On-Time Delivery Rate</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#E41B13] mb-2">
              {industry.id === 'ultima-milla' ? '<15 min' : industry.id === 'transporte-terrestre' ? '<30 min' : '<5 min'}
            </div>
            <p className="text-sm text-gray-400">Tiempo Respuesta Incidencias</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#E41B13] mb-2">
              {industry.id === 'ultima-milla' ? '99.7%' : industry.id === 'transporte-terrestre' ? '99.3%' : '99.9%'}
            </div>
            <p className="text-sm text-gray-400">Exactitud Inventario</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TecnologiaContent({ industry }: any) {
  const [activeCategory, setActiveCategory] = useState('all');

  const techStack = {
    'retail': {
      'Sistemas Core': [
        { name: 'WMS VULCANO', purpose: 'Gestión integral bodega: recepción, ubicación inteligente, picking multi-canal, inventario real-time', tech: 'SQL Server, .NET Core, REST API' },
        { name: 'OMS (Order Management)', purpose: 'Orquestación órdenes cross-canal: e-commerce, tiendas, marketplaces con priorización dinámica', tech: 'Cloud Platform, Microservicios' },
        { name: 'Portal Omnicanal', purpose: 'Dashboard unificado para visibilidad stock, órdenes, KPIs por canal', tech: 'React SPA, Node.js, WebSockets' }
      ],
      'E-commerce & POS': [
        { name: 'API Gateway E-commerce', purpose: 'Conectores con plataformas e-commerce del cliente: sync bidireccional órdenes y stock cada 5 min', tech: 'REST API, Webhooks, OAuth 2.0' },
        { name: 'POS Integration Hub', purpose: 'Integración sistemas POS retail: ship-from-store, click-and-collect, stock omnicanal unificado', tech: 'SQL Direct, API REST, SOAP Web Services' },
        { name: 'Channel Orchestration', purpose: 'Orquestación multi-canal: priorización órdenes, ruteo inteligente, consolidación inventario cross-canal', tech: 'Event-driven Architecture, Microservicios' }
      ],
      'Marketplaces': [
        { name: 'Marketplace Integration Hub', purpose: 'Gestión centralizada multi-marketplace: sync órdenes, inventario, tracking automático por canal', tech: 'REST API, OAuth, Webhooks' },
        { name: 'Seller Central Connector', purpose: 'Integración con marketplaces regionales/internacionales: actualización stock real-time, fulfillment SLA compliance', tech: 'API REST, FTP/SFTP, EDI' },
        { name: 'Channel Performance Analytics', purpose: 'Analytics por marketplace: OTIF, rating seller, costos fulfillment, rentabilidad por canal', tech: 'Custom BI, Data Warehouse' }
      ],
      'Logística & Carriers': [
        { name: 'TMS Multi-carrier', purpose: 'Integración Chilexpress, Starken, Blue Express, 99Minutos con cotización y etiquetado auto', tech: 'API REST, SOAP, FTP' },
        { name: 'Shipping Optimizer', purpose: 'Selección carrier óptimo por costo/tiempo/zona con algoritmos ML', tech: 'Python, TensorFlow' },
        { name: 'Tracking Aggregator', purpose: 'Consolidación tracking multi-carrier en dashboard único', tech: 'Webhooks, Polling APIs' }
      ],
      'Analítica & BI': [
        { name: 'Power BI Retail', purpose: 'Dashboards: fill rate, perfect order, devoluciones, rotación por SKU/categoría', tech: 'Microsoft BI Suite, SQL' },
        { name: 'Google Analytics E-commerce', purpose: 'Tracking conversión desde tracking links enviados a clientes', tech: 'GA4, Enhanced E-commerce' },
        { name: 'Returns Analytics', purpose: 'Dashboard reverse logistics con motivos devolución y patterns por producto', tech: 'Custom BI, ML Insights' }
      ],
      'Hardware': [
        { name: 'Scanners RF Zebra', purpose: 'Picking y validación con handhelds móviles', tech: 'Zebra TC52, Android Enterprise' },
        { name: 'Put-to-Light', purpose: 'Sistema luces para batch picking e-commerce de alto volumen', tech: 'PTL Hardware, RS-232' },
        { name: 'Impresoras Etiquetas', purpose: 'Generación etiquetas carriers en batch', tech: 'Zebra ZT410, Thermal' },
        { name: 'Sensores Temperatura', purpose: 'Monitoreo zonas cosméticos/alimentos con alertas automáticas', tech: 'IoT Sensors, LoRaWAN, MQTT' }
      ]
    },
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
        { name: 'E-commerce Integration API', purpose: 'Conectores con plataformas e-commerce clientes: sincronización órdenes, stock, tracking bidireccional', tech: 'REST/GraphQL APIs, Webhooks' },
        { name: 'Carrier Integration Hub', purpose: 'Red carriers integrados (aéreos, terrestres, última milla): cotización auto, etiquetado, tracking consolidado', tech: 'SOAP/REST APIs, FTP' },
        { name: 'EDI Gateway Enterprise', purpose: 'Intercambio documentos electrónicos con clientes corporativos: ASN, 856, facturas, confirmaciones', tech: 'EDI X12, EDIFACT, AS2' }
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
        { name: 'E-commerce Cross-Border', purpose: 'Fulfillment internacional con plataformas e-commerce clientes: gestión aduanas, tracking global', tech: 'REST API, Webhooks, EDI' }
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

  const currentStack = techStack[industry.id as keyof typeof techStack] || {};
  const categories = Object.keys(currentStack);
  const displayStack = activeCategory === 'all' 
    ? Object.entries(currentStack).flatMap(([cat, items]) => items.map(item => ({ ...item, category: cat })))
    : (currentStack as any)[activeCategory] || [];

  if (categories.length === 0) {
    return (
      <motion.div
        key="tecnologia"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="relative max-w-7xl mx-auto px-6 py-12"
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
          <Cpu className="w-16 h-16 text-[#E41B13] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Contenido en Desarrollo</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos preparando información detallada sobre el stack tecnológico de {industry.title}. Contáctanos para conocer más.
          </p>
        </div>
      </motion.div>
    );
  }

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
          Herramientas, plataformas e integraciones que potencian {industry.title}. Tecnología moderna para operación en tiempo real.
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

function SLAsContent({ industry }: any) {
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
          Nuestros compromisos de nivel de servicio para {industry.title}. Métricas realistas y medibles, sin inflación de números.
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
              {industry.slas.map((sla: SLA, index: number) => (
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

function EscenariosContent({ industry }: any) {
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
        {industry.scenarios.map((scenario: Scenario, index: number) => (
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
