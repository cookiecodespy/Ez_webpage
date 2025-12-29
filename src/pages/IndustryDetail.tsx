import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Package, TrendingUp, Shield, Clock, FileText, Thermometer, Factory, Plane, Users, Globe } from 'lucide-react';

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
  whyChooseUs: string[];
  relatedServices?: { name: string; link: string }[];
}

const IndustryDetail = () => {
  const { industryId } = useParams<{ industryId: string }>();

  const industries: Record<string, IndustryDetailData> = {
    'retail': {
      id: 'retail',
      title: 'Retail y E-commerce',
      tagline: 'Logística que impulsa tu experiencia de compra',
      heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&fm=webp',
      introduction: 'Nuestro servicio de logística para el retail está diseñado para optimizar su cadena de suministro de principio a fin, garantizando que sus productos lleguen a la tienda o directamente al consumidor final, en el momento preciso y en perfectas condiciones.',
      challenge: 'El retail moderno enfrenta desafíos únicos: gestión de inventario en múltiples ubicaciones, entregas rápidas para e-commerce, y la necesidad de adaptarse a temporadas altas sin comprometer la calidad del servicio.',
      solutions: [
        {
          title: 'Gestión de Inventario Multicanal',
          description: 'Control centralizado de stock en tiendas físicas y centros de distribución, con visibilidad en tiempo real para evitar quiebres y sobrestock.',
          icon: <Package className="h-6 w-6" />
        },
        {
          title: 'Fulfillment para E-commerce',
          description: 'Preparación y envío de pedidos online con picking, packing y despacho optimizados para entregas rápidas y devoluciones ágiles.',
          icon: <TrendingUp className="h-6 w-6" />
        },
        {
          title: 'Distribución Programada',
          description: 'Entregas sincronizadas a puntos de venta según demanda y rotación, optimizando rutas y reduciendo costos operativos.',
          icon: <Clock className="h-6 w-6" />
        }
      ],
      whyChooseUs: [
        'Integración con sistemas ERP y plataformas de e-commerce',
        'Almacenamiento escalable para temporadas altas',
        'Gestión de logística inversa para devoluciones',
        'Red de distribución nacional optimizada',
        'WMS especializado para retail con trazabilidad completa'
      ],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: '/services/almacenaje-distribucion' },
        { name: 'Última Milla', link: '/services/ultima-milla' }
      ]
    },
    'aerospace': {
      id: 'aerospace',
      title: 'Aerospace',
      tagline: 'Precisión absoluta para componentes críticos',
      heroImage: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1600&fm=webp',
      introduction: 'La industria aeroespacial exige una logística de máxima precisión y seguridad, donde cada componente es crítico. Ofrecemos soluciones logísticas especializadas para este sector, coordinando el transporte de piezas sensibles y de alto valor en un entorno global de estrictas regulaciones.',
      challenge: 'Los componentes aeroespaciales requieren manejo especializado, documentación rigurosa y tiempos de respuesta inmediatos para situaciones AOG (Aircraft on Ground). Cada pieza debe ser trazable, certificada y transportada bajo estándares internacionales.',
      solutions: [
        {
          title: 'Respuesta AOG (Aircraft on Ground)',
          description: 'Coordinación urgente para piezas críticas con transporte prioritario, disponible 24/7 para minimizar tiempos de inactividad de aeronaves.',
          icon: <Plane className="h-6 w-6" />
        },
        {
          title: 'Documentación y Certificación',
          description: 'Gestión completa de certificados de aeronavegabilidad, permisos de importación/exportación y documentación técnica requerida.',
          icon: <FileText className="h-6 w-6" />
        },
        {
          title: 'Almacenamiento Controlado',
          description: 'Bodegas con condiciones ambientales reguladas, seguridad reforzada y sistemas de trazabilidad para componentes de alto valor.',
          icon: <Shield className="h-6 w-6" />
        }
      ],
      whyChooseUs: [
        'Experiencia en handling de componentes sensibles',
        'Red global de partners certificados en logística aeronáutica',
        'Seguros especializados para carga de alto valor',
        'Trazabilidad completa con documentación aeronáutica',
        'Personal capacitado en normativas IATA, FAA y EASA'
      ],
      relatedServices: [
        { name: 'Transporte Internacional', link: '/services/transporte-internacional' },
        { name: 'Project Cargo', link: '/services/project-cargo' }
      ]
    },
    'alimentaria': {
      id: 'alimentaria',
      title: 'Alimentaria',
      tagline: 'Frescura y seguridad desde el origen hasta tu mesa',
      heroImage: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1600&fm=webp',
      introduction: 'En la industria alimentaria, la logística es más que un servicio; es una promesa de calidad y seguridad. Entendemos que la frescura y la integridad de los alimentos son fundamentales, por lo que ofrecemos una cadena de suministro perfectamente controlada desde el origen hasta el destino final.',
      challenge: 'Los productos alimentarios requieren condiciones específicas de temperatura, humedad y tiempo. Cualquier ruptura en la cadena de frío o demora puede comprometer la calidad y seguridad del producto, además del cumplimiento normativo sanitario.',
      solutions: [
        {
          title: 'Cadena de Frío Controlada',
          description: 'Transporte y almacenamiento refrigerado con monitoreo de temperatura 24/7, garantizando condiciones óptimas para productos perecibles.',
          icon: <Thermometer className="h-6 w-6" />
        },
        {
          title: 'Certificación Sanitaria',
          description: 'Cumplimiento de protocolos HACCP y gestión de permisos sanitarios para importación/exportación de alimentos.',
          icon: <CheckCircle2 className="h-6 w-6" />
        },
        {
          title: 'Trazabilidad por Lote',
          description: 'Seguimiento detallado por lote de producción y fecha de vencimiento, con rotación FIFO para máxima frescura.',
          icon: <FileText className="h-6 w-6" />
        }
      ],
      whyChooseUs: [
        'Almacenes refrigerados con certificación sanitaria',
        'Flota de transporte con unidades frigoríficas',
        'Protocolos de limpieza y desinfección constantes',
        'Gestión de fechas de vencimiento y rotación FIFO',
        'Experiencia en importación de alimentos con permisos SENASA'
      ],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: '/services/almacenaje-distribucion' },
        { name: 'Agenciamiento de Aduanas', link: '/services/agenciamiento-aduanas' }
      ]
    },
    'industrial': {
      id: 'industrial',
      title: 'Industrial',
      tagline: 'Soluciones robustas para manufactura y proyectos complejos',
      heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&fm=webp',
      introduction: 'Desde el transporte especializado de maquinaria pesada hasta la gestión de proyectos complejos y el almacenamiento de inventarios, nuestra experiencia asegura que cada operación se realice con la máxima eficiencia, seguridad y precisión.',
      challenge: 'La industria manufacturera requiere coordinación precisa de insumos y maquinaria, con entregas just-in-time para no detener producción. Las cargas sobredimensionadas y proyectos especiales demandan planificación logística avanzada.',
      solutions: [
        {
          title: 'Transporte de Maquinaria Pesada',
          description: 'Coordinación de cargas sobredimensionadas con equipos especializados, permisos de circulación y rutas optimizadas.',
          icon: <Factory className="h-6 w-6" />
        },
        {
          title: 'Entregas Just-in-Time',
          description: 'Sincronización de suministros con líneas de producción para minimizar inventario y mantener operaciones continuas.',
          icon: <Clock className="h-6 w-6" />
        },
        {
          title: 'Gestión de Proyectos Complejos',
          description: 'Planificación integral para instalación de plantas industriales, con coordinación multimodal y seguros especializados.',
          icon: <Shield className="h-6 w-6" />
        }
      ],
      whyChooseUs: [
        'Experiencia en transporte de cargas pesadas y sobredimensionadas',
        'Almacenes con equipos de izaje y manejo industrial',
        'Coordinación de permisos especiales para transporte',
        'Seguros para maquinaria de alto valor',
        'Planificación logística para proyectos complejos'
      ],
      relatedServices: [
        { name: 'Project Cargo', link: '/services/project-cargo' },
        { name: 'Transporte Internacional', link: '/services/transporte-internacional' }
      ]
    },
    'automotriz': {
      id: 'automotriz',
      title: 'Automotriz',
      tagline: 'Sincronización perfecta para tu línea de producción',
      heroImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&fm=webp',
      introduction: 'Ofrecemos soluciones especializadas para gestionar la compleja cadena de suministro de piezas y componentes automotrices, asegurando entregas just-in-time a plantas de fabricación con precisión milimétrica.',
      challenge: 'La industria automotriz opera con inventarios mínimos y demanda entregas precisas. Cualquier retraso puede detener líneas de producción completas, generando costos significativos. Se requiere coordinación perfecta entre múltiples proveedores.',
      solutions: [
        {
          title: 'Just-in-Time & Secuenciación',
          description: 'Entregas sincronizadas con producción, incluyendo secuenciación de piezas en orden de ensamblaje para máxima eficiencia.',
          icon: <Clock className="h-6 w-6" />
        },
        {
          title: 'Gestión de Proveedores',
          description: 'Consolidación de múltiples proveedores en envíos coordinados, reduciendo complejidad y optimizando costos.',
          icon: <Users className="h-6 w-6" />
        },
        {
          title: 'Control de Calidad en Tránsito',
          description: 'Inspección de componentes y manejo especializado para evitar daños en piezas delicadas durante el transporte.',
          icon: <CheckCircle2 className="h-6 w-6" />
        }
      ],
      whyChooseUs: [
        'Experiencia en logística just-in-time para automotriz',
        'Sistemas WMS integrados con ERPs de manufactura',
        'Almacenes cercanos a plantas de producción',
        'Trazabilidad por lote y número de serie',
        'Manejo especializado para componentes automotrices'
      ],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: '/services/almacenaje-distribucion' },
        { name: 'Transporte Internacional', link: '/services/transporte-internacional' }
      ]
    },
    'pharmaceutical': {
      id: 'pharmaceutical',
      title: 'Pharmaceutical',
      tagline: 'Protegiendo la salud con logística farmacéutica certificada',
      heroImage: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&fm=webp',
      introduction: 'En la industria farmacéutica, la precisión, la seguridad y el cumplimiento de las normativas son vitales para proteger la salud humana. Ofrecemos soluciones logísticas especializadas, diseñadas para gestionar productos de alta sensibilidad y valor con la máxima rigurosidad.',
      challenge: 'Los productos farmacéuticos requieren condiciones estrictas de temperatura, seguridad y trazabilidad. Las regulaciones sanitarias son rigurosas y cualquier desvío puede comprometer la efectividad del producto o su aprobación regulatoria.',
      solutions: [
        {
          title: 'Cadena de Frío Farmacéutica',
          description: 'Control de temperatura de 2-8°C con monitoreo continuo, registros validados y protocolos de contingencia para productos termosensibles.',
          icon: <Thermometer className="h-6 w-6" />
        },
        {
          title: 'Cumplimiento Regulatorio',
          description: 'Gestión de permisos DIGEMID, certificados de análisis y documentación requerida por autoridades sanitarias.',
          icon: <FileText className="h-6 w-6" />
        },
        {
          title: 'Seguridad y Trazabilidad',
          description: 'Almacenes con seguridad reforzada, control de acceso y trazabilidad completa por lote para cumplir con normativas GDP.',
          icon: <Shield className="h-6 w-6" />
        }
      ],
      whyChooseUs: [
        'Almacenes con condiciones controladas y validadas',
        'Personal capacitado en manejo de productos farmacéuticos',
        'Experiencia en importación con permisos DIGEMID',
        'Sistemas de monitoreo de temperatura validados',
        'Cumplimiento de normativas GDP (Good Distribution Practice)'
      ],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: '/services/almacenaje-distribucion' },
        { name: 'Agenciamiento de Aduanas', link: '/services/agenciamiento-aduanas' }
      ]
    },
    'tecnologia': {
      id: 'tecnologia',
      title: 'Tecnología',
      tagline: 'Protección y velocidad para tus productos de alto valor',
      heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&fm=webp',
      introduction: 'La industria tecnológica requiere logística ágil, segura y confiable para productos de alto valor y rápida obsolescencia. Gestionamos desde componentes electrónicos hasta equipos completos con máxima protección y trazabilidad.',
      challenge: 'Los productos tecnológicos combinan alto valor, fragilidad y ciclos de vida cortos. Requieren protección contra daños, seguridad contra robo y entregas rápidas para evitar obsolescencia de inventario.',
      solutions: [
        {
          title: 'Manejo Especializado',
          description: 'Embalaje antiestático, protección contra impactos y control ambiental para componentes electrónicos sensibles.',
          icon: <Package className="h-6 w-6" />
        },
        {
          title: 'Seguridad Reforzada',
          description: 'Almacenes con seguridad 24/7, cámaras de vigilancia, control de acceso y seguros para productos de alto valor.',
          icon: <Shield className="h-6 w-6" />
        },
        {
          title: 'Distribución Rápida',
          description: 'Entregas express para lanzamientos de productos y gestión de inventario para minimizar obsolescencia.',
          icon: <Globe className="h-6 w-6" />
        }
      ],
      whyChooseUs: [
        'Experiencia en importación de equipos tecnológicos',
        'Almacenes con seguridad reforzada y seguros especializados',
        'Manejo certificado de productos electrónicos',
        'Integración con plataformas de e-commerce',
        'Gestión de garantías y logística inversa'
      ],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: '/services/almacenaje-distribucion' },
        { name: 'Última Milla', link: '/services/ultima-milla' }
      ]
    },
    'otras': {
      id: 'otras',
      title: 'Otras Industrias',
      tagline: 'Soluciones logísticas adaptadas a tu sector',
      heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&fm=webp',
      introduction: 'Cada industria tiene necesidades logísticas únicas. Con más de 10 años de experiencia en comercio internacional, hemos desarrollado soluciones flexibles y adaptables para sectores especializados que requieren atención personalizada.',
      challenge: 'Las industrias especializadas a menudo requieren combinaciones únicas de servicios logísticos, cumplimiento de regulaciones específicas y manejo especializado que no se encuentra en soluciones estándar.',
      solutions: [
        {
          title: 'Consultoría Logística',
          description: 'Análisis de necesidades específicas y diseño de soluciones a medida para optimizar tu cadena de suministro.',
          icon: <Users className="h-6 w-6" />
        },
        {
          title: 'Gestión de Regulaciones',
          description: 'Experiencia en permisos especiales, certificaciones y cumplimiento normativo para productos regulados.',
          icon: <FileText className="h-6 w-6" />
        },
        {
          title: 'Integración Tecnológica',
          description: 'Conectividad con tus sistemas mediante APIs, EDI o integración directa con CargoWise para visibilidad total.',
          icon: <Globe className="h-6 w-6" />
        }
      ],
      whyChooseUs: [
        'Flexibilidad para adaptar soluciones a necesidades específicas',
        'Experiencia en múltiples sectores e industrias',
        'Equipo especializado en comercio internacional',
        'Red global de partners certificados',
        'Tecnología logística avanzada con CargoWise'
      ],
      relatedServices: [
        { name: 'Transporte Internacional', link: '/services/transporte-internacional' },
        { name: 'Agenciamiento de Aduanas', link: '/services/agenciamiento-aduanas' }
      ]
    }
  };

  const industry = industryId ? industries[industryId] : null;

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Industria no encontrada</h2>
          <Link to="/" className="inline-block px-6 py-3 bg-[#E41B13] text-white rounded-lg font-semibold hover:bg-[#C41710] transition-colors">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img 
          src={industry.heroImage} 
          alt={industry.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-[#E41B13]/60" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Volver a inicio</span>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-[#E41B13] rounded-full mb-4">
                <span className="text-white text-sm font-semibold uppercase tracking-wider">Industria Especializada</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                {industry.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-light">
                {industry.tagline}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Soluciones logísticas especializadas
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {industry.introduction}
            </p>
            
            <div className="bg-gray-50 border-l-4 border-[#E41B13] p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">El desafío</h3>
              <p className="text-gray-700">
                {industry.challenge}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cómo lo resolvemos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones diseñadas específicamente para los desafíos de tu industria
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {industry.solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#E41B13]/10 rounded-xl flex items-center justify-center text-[#E41B13] mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Por qué elegirnos
            </h2>
            <div className="space-y-4">
              {industry.whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-[#E41B13]" />
                  </div>
                  <p className="text-gray-700 text-lg">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      {industry.relatedServices && industry.relatedServices.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Servicios relacionados
              </h2>
              <div className="flex flex-wrap gap-4">
                {industry.relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-lg font-semibold text-gray-700 hover:border-[#E41B13] hover:text-[#E41B13] transition-all"
                  >
                    {service.name}
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para optimizar tu logística?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Conversemos sobre las necesidades específicas de tu industria y diseñemos una solución a medida.
            </p>
            <Link
              to="/"
              state={{ scrollTo: 'contact' }}
              className="inline-block px-8 py-4 bg-[#E41B13] text-white rounded-lg font-bold text-lg hover:bg-[#C41710] transition-colors shadow-lg hover:shadow-xl"
            >
              Solicitar Consultoría
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
