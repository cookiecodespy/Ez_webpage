import { useParams, Link } from 'react-router-dom';
import { motion, useMotionValue } from 'framer-motion';
import { ArrowLeft, ChevronRight, Package, TrendingUp, Shield, Clock, FileText, Thermometer, Factory, Plane, Users, Globe, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface Solution {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface IndustryDetailData {
  id: string;
  title: string;
  tagline: string;
  heroImage: string;
  introduction: string;
  challenge: string;
  solutions: Solution[];
  capabilities: string[];
  relatedServices?: { name: string; link: string }[];
}

const IndustryDetail = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const [activeTab, setActiveTab] = useState<'solutions' | 'capabilities'>('solutions');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const industries: Record<string, IndustryDetailData> = {
    'retail': {
      id: 'retail',
      title: 'Retail y E-commerce',
      tagline: 'Cumplimiento ágil para comercio omnicanal',
      heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&fm=webp',
      introduction: 'Optimización end-to-end de tu cadena de suministro, garantizando entregas precisas a tiendas y consumidores finales.',
      challenge: 'El retail moderno exige gestión de inventario multicanal, entregas rápidas y adaptación a picos de demanda sin comprometer calidad.',
      solutions: [
        {
          title: 'Inventario Multicanal',
          description: 'Control centralizado en tiempo real para evitar quiebres y sobrestock.',
          icon: <Package className="h-5 w-5" />
        },
        {
          title: 'Fulfillment E-commerce',
          description: 'Picking, packing y despacho optimizado con gestión de devoluciones.',
          icon: <TrendingUp className="h-5 w-5" />
        },
        {
          title: 'Distribución Programada',
          description: 'Entregas sincronizadas según demanda de cada punto de venta.',
          icon: <Clock className="h-5 w-5" />
        }
      ],
      capabilities: [
        'Integración con ERP y plataformas e-commerce',
        'Escalabilidad para temporadas altas',
        'Logística inversa especializada',
        'WMS con trazabilidad completa'
      ],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: '/Ez_webpage/services/almacenaje-distribucion' },
        { name: 'Última Milla', link: '/Ez_webpage/services/ultima-milla' }
      ]
    },
    'aerospace': {
      id: 'aerospace',
      title: 'Aerospace',
      tagline: 'Precisión crítica para componentes aeronáuticos',
      heroImage: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1600&fm=webp',
      introduction: 'Logística especializada para piezas sensibles y de alto valor bajo estrictas regulaciones internacionales.',
      challenge: 'Componentes aeroespaciales requieren manejo certificado, documentación rigurosa y respuesta inmediata en situaciones AOG.',
      solutions: [
        {
          title: 'Respuesta AOG 24/7',
          description: 'Coordinación urgente para piezas críticas con transporte prioritario.',
          icon: <Plane className="h-5 w-5" />
        },
        {
          title: 'Certificación Completa',
          description: 'Gestión de certificados y documentación técnica requerida.',
          icon: <FileText className="h-5 w-5" />
        },
        {
          title: 'Almacenaje Controlado',
          description: 'Bodegas con condiciones reguladas y seguridad reforzada.',
          icon: <Shield className="h-5 w-5" />
        }
      ],
      capabilities: [
        'Handling certificado de componentes sensibles',
        'Red global de partners aeronáuticos',
        'Seguros especializados para alto valor',
        'Cumplimiento IATA, FAA y EASA'
      ],
      relatedServices: [
        { name: 'Transporte Internacional', link: '/Ez_webpage/services/transporte-internacional' },
        { name: 'Project Cargo', link: '/Ez_webpage/services/project-cargo' }
      ]
    },
    'alimentaria': {
      id: 'alimentaria',
      title: 'Alimentaria',
      tagline: 'Cadena de frío y seguridad garantizada',
      heroImage: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1600&fm=webp',
      introduction: 'Cadena de suministro controlada para productos perecibles, asegurando frescura e integridad desde origen hasta destino.',
      challenge: 'Productos alimentarios exigen condiciones específicas de temperatura, tiempo y cumplimiento de normativas sanitarias estrictas.',
      solutions: [
        {
          title: 'Cadena de Frío',
          description: 'Monitoreo 24/7 de temperatura en transporte y almacenamiento.',
          icon: <Thermometer className="h-5 w-5" />
        },
        {
          title: 'Certificación HACCP',
          description: 'Gestión de permisos sanitarios y protocolos de seguridad.',
          icon: <Shield className="h-5 w-5" />
        },
        {
          title: 'Trazabilidad FIFO',
          description: 'Seguimiento por lote con rotación para máxima frescura.',
          icon: <FileText className="h-5 w-5" />
        }
      ],
      capabilities: [
        'Almacenes refrigerados certificados',
        'Flota con unidades frigoríficas',
        'Protocolos de higiene constantes',
        'Permisos SENASA para importación'
      ],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: '/Ez_webpage/services/almacenaje-distribucion' },
        { name: 'Agenciamiento de Aduanas', link: '/Ez_webpage/services/agenciamiento-aduanas' }
      ]
    },
    'industrial': {
      id: 'industrial',
      title: 'Industrial',
      tagline: 'Soluciones para manufactura y proyectos complejos',
      heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&fm=webp',
      introduction: 'Gestión integral de maquinaria pesada, proyectos complejos e inventarios con máxima eficiencia y seguridad.',
      challenge: 'La manufactura exige coordinación precisa JIT y manejo de cargas sobredimensionadas con planificación avanzada.',
      solutions: [
        {
          title: 'Maquinaria Pesada',
          description: 'Coordinación de cargas especiales con permisos y rutas.',
          icon: <Factory className="h-5 w-5" />
        },
        {
          title: 'Just-in-Time',
          description: 'Sincronización con líneas de producción activas.',
          icon: <Clock className="h-5 w-5" />
        },
        {
          title: 'Project Cargo',
          description: 'Planificación multimodal para instalaciones industriales.',
          icon: <Shield className="h-5 w-5" />
        }
      ],
      capabilities: [
        'Transporte de cargas sobredimensionadas',
        'Almacenes con equipos de izaje',
        'Coordinación de permisos especiales',
        'Seguros para maquinaria de alto valor'
      ],
      relatedServices: [
        { name: 'Project Cargo', link: '/Ez_webpage/services/project-cargo' },
        { name: 'Transporte Internacional', link: '/Ez_webpage/services/transporte-internacional' }
      ]
    },
    'automotriz': {
      id: 'automotriz',
      title: 'Automotriz',
      tagline: 'Sincronización perfecta para producción',
      heroImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&fm=webp',
      introduction: 'Gestión especializada de cadena de suministro automotriz con entregas just-in-time de precisión milimétrica.',
      challenge: 'La industria automotriz opera con inventarios mínimos. Cualquier retraso puede detener producción completa.',
      solutions: [
        {
          title: 'JIT & Secuenciación',
          description: 'Entregas sincronizadas en orden de ensamblaje.',
          icon: <Clock className="h-5 w-5" />
        },
        {
          title: 'Multi-Proveedor',
          description: 'Consolidación de envíos para reducir complejidad.',
          icon: <Users className="h-5 w-5" />
        },
        {
          title: 'Control de Calidad',
          description: 'Inspección y manejo especializado de componentes.',
          icon: <Shield className="h-5 w-5" />
        }
      ],
      capabilities: [
        'Logística JIT certificada',
        'Integración con ERPs de manufactura',
        'Almacenes cerca de plantas',
        'Trazabilidad por número de serie'
      ],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: '/Ez_webpage/services/almacenaje-distribucion' },
        { name: 'Transporte Internacional', link: '/Ez_webpage/services/transporte-internacional' }
      ]
    },
    'pharmaceutical': {
      id: 'pharmaceutical',
      title: 'Pharmaceutical',
      tagline: 'Logística farmacéutica certificada GDP',
      heroImage: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&fm=webp',
      introduction: 'Gestión especializada de productos farmacéuticos con cumplimiento estricto de normativas y cadena de frío validada.',
      challenge: 'Productos farmacéuticos exigen condiciones precisas y cualquier desvío puede comprometer efectividad o aprobación.',
      solutions: [
        {
          title: 'Cadena de Frío 2-8°C',
          description: 'Monitoreo continuo con registros validados.',
          icon: <Thermometer className="h-5 w-5" />
        },
        {
          title: 'Cumplimiento DIGEMID',
          description: 'Gestión de permisos y documentación sanitaria.',
          icon: <FileText className="h-5 w-5" />
        },
        {
          title: 'Seguridad GDP',
          description: 'Almacenes certificados con trazabilidad por lote.',
          icon: <Shield className="h-5 w-5" />
        }
      ],
      capabilities: [
        'Almacenes validados farmacéuticos',
        'Personal certificado en manejo',
        'Sistemas de temperatura validados',
        'Cumplimiento Good Distribution Practice'
      ],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: '/Ez_webpage/services/almacenaje-distribucion' },
        { name: 'Agenciamiento de Aduanas', link: '/Ez_webpage/services/agenciamiento-aduanas' }
      ]
    },
    'tecnologia': {
      id: 'tecnologia',
      title: 'Tecnología',
      tagline: 'Protección para productos de alto valor',
      heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&fm=webp',
      introduction: 'Logística ágil y segura para productos tecnológicos de alto valor con ciclos de vida cortos.',
      challenge: 'Productos tech combinan alto valor, fragilidad y rápida obsolescencia. Requieren velocidad y seguridad máxima.',
      solutions: [
        {
          title: 'Manejo Antiestático',
          description: 'Embalaje y control ambiental para componentes sensibles.',
          icon: <Package className="h-5 w-5" />
        },
        {
          title: 'Seguridad 24/7',
          description: 'Almacenes vigilados con seguros especializados.',
          icon: <Shield className="h-5 w-5" />
        },
        {
          title: 'Distribución Express',
          description: 'Entregas rápidas para evitar obsolescencia.',
          icon: <Globe className="h-5 w-5" />
        }
      ],
      capabilities: [
        'Importación de equipos tech',
        'Almacenes con seguridad reforzada',
        'Manejo certificado de electrónicos',
        'Integración con e-commerce'
      ],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: '/Ez_webpage/services/almacenaje-distribucion' },
        { name: 'Última Milla', link: '/Ez_webpage/services/ultima-milla' }
      ]
    },
    'otras': {
      id: 'otras',
      title: 'Otras Industrias',
      tagline: 'Soluciones adaptadas a tu sector',
      heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&fm=webp',
      introduction: 'Con 10+ años en comercio internacional, desarrollamos soluciones flexibles para sectores especializados.',
      challenge: 'Industrias especializadas requieren combinaciones únicas de servicios y cumplimiento de regulaciones específicas.',
      solutions: [
        {
          title: 'Consultoría',
          description: 'Análisis y diseño de soluciones a medida.',
          icon: <Users className="h-5 w-5" />
        },
        {
          title: 'Regulaciones',
          description: 'Gestión de permisos y certificaciones especiales.',
          icon: <FileText className="h-5 w-5" />
        },
        {
          title: 'Integración Tech',
          description: 'Conectividad con CargoWise para visibilidad total.',
          icon: <Globe className="h-5 w-5" />
        }
      ],
      capabilities: [
        'Soluciones flexibles personalizadas',
        'Experiencia multi-sectorial',
        'Equipo en comercio internacional',
        'Tecnología logística avanzada'
      ],
      relatedServices: [
        { name: 'Transporte Internacional', link: '/Ez_webpage/services/transporte-internacional' },
        { name: 'Agenciamiento de Aduanas', link: '/Ez_webpage/services/agenciamiento-aduanas' }
      ]
    }
  };

  const industry = industryId ? industries[industryId] : null;

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Industria no encontrada</h2>
          <Link to="/Ez_webpage/" className="inline-block px-6 py-3 bg-[#E41B13] text-white rounded-lg font-semibold hover:bg-[#C41710] transition-colors">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Compact Hero */}
      <div className="relative h-[40vh] min-h-[400px] overflow-hidden">
        <motion.img 
          src={industry.heroImage} 
          alt={industry.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/85 to-[#E41B13]/70" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-6 w-full">
            <Link 
              to="/Ez_webpage/" 
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/90 hover:bg-white/10 transition-all text-sm group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Volver
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E41B13]/90 rounded-full mb-3 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-white" />
                <span className="text-white text-xs font-semibold uppercase tracking-wider">Especialización</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                {industry.title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                {industry.tagline}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content - Compact */}
      <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-10 pb-16">
        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-gray-100"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E41B13] to-[#C41710] rounded-xl flex items-center justify-center flex-shrink-0">
              <Package className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Nuestra Capacidad</h2>
              <p className="text-gray-600 leading-relaxed">{industry.introduction}</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-[#E41B13] p-4 rounded-r-lg">
            <p className="text-sm text-gray-700 font-medium">{industry.challenge}</p>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('solutions')}
            className={`flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'solutions'
                ? 'bg-[#E41B13] text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Soluciones
          </button>
          <button
            onClick={() => setActiveTab('capabilities')}
            className={`flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'capabilities'
                ? 'bg-[#E41B13] text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Capacidades
          </button>
        </div>

        {/* Content Tabs */}
        {activeTab === 'solutions' ? (
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {industry.solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white p-5 rounded-xl border border-gray-200 hover:border-[#E41B13]/50 hover:shadow-lg transition-all cursor-pointer"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  mouseX.set(e.clientX - rect.left);
                  mouseY.set(e.clientY - rect.top);
                }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#E41B13]/10 to-[#E41B13]/5 rounded-lg flex items-center justify-center text-[#E41B13] mb-3 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-[#E41B13] transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl p-6 border border-gray-200 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-3">
              {industry.capabilities.map((cap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-1.5 h-1.5 bg-[#E41B13] rounded-full" />
                  <p className="text-sm text-gray-700 font-medium">{cap}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Related Services */}
        {industry.relatedServices && industry.relatedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ChevronRight className="h-5 w-5 text-[#E41B13]" />
              Servicios Relacionados
            </h3>
            <div className="flex flex-wrap gap-3">
              {industry.relatedServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-semibold hover:bg-white/20 hover:border-white/40 transition-all group"
                >
                  {service.name}
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Compact CTA */}
      <div className="bg-gradient-to-r from-[#E41B13] to-[#C41710] py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            ¿Necesitas una solución especializada?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Conversemos sobre tu industria y diseñemos la logística que necesitas.
          </p>
          <Link
            to="/Ez_webpage/"
            state={{ scrollTo: 'contact' }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#E41B13] rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl group"
          >
            Solicitar Consultoría
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;
