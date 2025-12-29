import { useParams, Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowLeft, ChevronRight, Package, TrendingUp, Shield, Clock, FileText, Thermometer, Factory, Plane, Users, Globe, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(mouseY, [0, window.innerHeight], [5, -5]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-5, 5]);

  const industries: Record<string, IndustryDetailData> = {
    'retail': {
      id: 'retail',
      title: 'Retail y E-commerce',
      tagline: 'Cumplimiento ágil para comercio omnicanal',
      heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&fm=webp',
      introduction: 'Optimización end-to-end de tu cadena de suministro, garantizando entregas precisas a tiendas y consumidores finales.',
      challenge: 'El retail moderno exige gestión de inventario multicanal, entregas rápidas y adaptación a picos de demanda sin comprometer calidad.',
      solutions: [
        { title: 'Inventario Multicanal', description: 'Control centralizado en tiempo real para evitar quiebres y sobrestock.', icon: <Package className="h-5 w-5" /> },
        { title: 'Fulfillment E-commerce', description: 'Picking, packing y despacho optimizado con gestión de devoluciones.', icon: <TrendingUp className="h-5 w-5" /> },
        { title: 'Distribución Programada', description: 'Entregas sincronizadas según demanda de cada punto de venta.', icon: <Clock className="h-5 w-5" /> }
      ],
      capabilities: ['Integración con ERP y plataformas e-commerce', 'Escalabilidad para temporadas altas', 'Logística inversa especializada', 'WMS con trazabilidad completa'],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: 'almacenaje-distribucion' },
        { name: 'Última Milla', link: 'ultima-milla' }
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
        { title: 'Respuesta AOG 24/7', description: 'Coordinación urgente para piezas críticas con transporte prioritario.', icon: <Plane className="h-5 w-5" /> },
        { title: 'Certificación Completa', description: 'Gestión de certificados y documentación técnica requerida.', icon: <FileText className="h-5 w-5" /> },
        { title: 'Almacenaje Controlado', description: 'Bodegas con condiciones reguladas y seguridad reforzada.', icon: <Shield className="h-5 w-5" /> }
      ],
      capabilities: ['Handling certificado de componentes sensibles', 'Red global de partners aeronáuticos', 'Seguros especializados para alto valor', 'Cumplimiento IATA, FAA y EASA'],
      relatedServices: [
        { name: 'Transporte Internacional', link: 'transporte-internacional' },
        { name: 'Project Cargo', link: 'project-cargo' }
      ]
    },
    'alimentaria': {
      id: 'alimentaria',
      title: 'Industria Alimentaria',
      tagline: 'Cadena de frío y frescura garantizada',
      heroImage: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1600&fm=webp',
      introduction: 'Gestión integral de temperatura para productos perecederos con trazabilidad completa desde origen hasta consumidor.',
      challenge: 'Los alimentos demandan control térmico constante, rapidez en distribución y cumplimiento estricto de normativas sanitarias.',
      solutions: [
        { title: 'Cadena de Frío', description: 'Monitoreo continuo de temperatura en transporte y almacenaje.', icon: <Thermometer className="h-5 w-5" /> },
        { title: 'Trazabilidad HACCP', description: 'Registro completo para auditorías y certificaciones sanitarias.', icon: <FileText className="h-5 w-5" /> },
        { title: 'Distribución Express', description: 'Rutas optimizadas para minimizar tiempos de tránsito.', icon: <TrendingUp className="h-5 w-5" /> }
      ],
      capabilities: ['Flota refrigerada con respaldo', 'Bodegas climatizadas certificadas', 'Cross-docking para productos frescos', 'Cumplimiento normativo sanitario'],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: 'almacenaje-distribucion' },
        { name: 'Transporte Terrestre', link: 'transporte-terrestre' }
      ]
    },
    'industrial': {
      id: 'industrial',
      title: 'Sector Industrial',
      tagline: 'Logística robusta para manufactura continua',
      heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&fm=webp',
      introduction: 'Suministro sincronizado de insumos y componentes para mantener líneas de producción sin interrupciones.',
      challenge: 'La manufactura requiere entregas JIT precisas, manejo de cargas pesadas y coordinación con múltiples proveedores.',
      solutions: [
        { title: 'Suministro JIT', description: 'Entregas just-in-time sincronizadas con tu producción.', icon: <Clock className="h-5 w-5" /> },
        { title: 'Handling Especializado', description: 'Equipos para carga pesada y dimensional.', icon: <Factory className="h-5 w-5" /> },
        { title: 'Vendor Management', description: 'Consolidación de múltiples proveedores en entregas únicas.', icon: <Users className="h-5 w-5" /> }
      ],
      capabilities: ['Almacenaje de insumos industriales', 'Kitting y sub-ensamblaje', 'Gestión de repuestos críticos', 'Integración EDI con proveedores'],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: 'almacenaje-distribucion' },
        { name: 'Project Cargo', link: 'project-cargo' }
      ]
    },
    'automotriz': {
      id: 'automotriz',
      title: 'Automotriz',
      tagline: 'Precisión milimétrica para líneas de ensamblaje',
      heroImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1600&fm=webp',
      introduction: 'Secuenciación y entrega sincronizada de partes para producción automotriz sin paradas ni retrasos.',
      challenge: 'Las ensambladoras demandan entregas secuenciales exactas, trazabilidad de lotes y respuesta inmediata ante cambios de programación.',
      solutions: [
        { title: 'Secuenciación de Partes', description: 'Entrega en orden exacto de ensamblaje para línea de producción.', icon: <Package className="h-5 w-5" /> },
        { title: 'Milk Run', description: 'Rutas circulares optimizadas para recolección de proveedores.', icon: <TrendingUp className="h-5 w-5" /> },
        { title: 'Kitting JIS', description: 'Armado de kits just-in-sequence para modelos específicos.', icon: <Factory className="h-5 w-5" /> }
      ],
      capabilities: ['Almacenaje sequencing para producción', 'Gestión de cambios de programación', 'Trazabilidad por VIN/modelo', 'Cumplimiento MMOG/LE y AIAG'],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: 'almacenaje-distribucion' },
        { name: 'Transporte Terrestre', link: 'transporte-terrestre' }
      ]
    },
    'pharmaceutical': {
      id: 'pharmaceutical',
      title: 'Farmacéutica',
      tagline: 'Custodia certificada de productos sensibles',
      heroImage: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1600&fm=webp',
      introduction: 'Manejo especializado de medicamentos y dispositivos médicos bajo estrictas normas de calidad y seguridad.',
      challenge: 'Productos farmacéuticos exigen condiciones controladas, validación de procesos y documentación completa para auditorías regulatorias.',
      solutions: [
        { title: 'Almacenaje GDP', description: 'Bodegas validadas según Good Distribution Practices.', icon: <Shield className="h-5 w-5" /> },
        { title: 'Control de Temperatura', description: 'Monitoreo 24/7 con alertas automáticas y respaldo.', icon: <Thermometer className="h-5 w-5" /> },
        { title: 'Trazabilidad Lote', description: 'Registro completo por lote y fecha de vencimiento.', icon: <FileText className="h-5 w-5" /> }
      ],
      capabilities: ['Personal capacitado en handling farmacéutico', 'Validación de procesos logísticos', 'Gestión de productos controlados', 'Auditable para inspecciones ISP'],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: 'almacenaje-distribucion' },
        { name: 'Transporte Internacional', link: 'transporte-internacional' }
      ]
    },
    'tecnologia': {
      id: 'tecnologia',
      title: 'Tecnología',
      tagline: 'Logística ágil para ciclos de producto cortos',
      heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&fm=webp',
      introduction: 'Distribución rápida de electrónica y dispositivos con gestión de obsolescencia y logística inversa integrada.',
      challenge: 'El sector tech requiere velocidad de mercado, manejo antiestático, gestión de garantías y recuperación de equipos.',
      solutions: [
        { title: 'Lanzamiento de Productos', description: 'Distribución sincronizada para go-to-market acelerado.', icon: <Sparkles className="h-5 w-5" /> },
        { title: 'Reverse Logistics', description: 'Gestión de devoluciones, RMA y refurbishment.', icon: <Package className="h-5 w-5" /> },
        { title: 'Gestión de Obsolescencia', description: 'Rotación FIFO y alertas de lifecycle de productos.', icon: <Clock className="h-5 w-5" /> }
      ],
      capabilities: ['Áreas ESD para componentes sensibles', 'Kitting y configuración de equipos', 'Fulfillment para canales B2B/B2C', 'Integración con plataformas digitales'],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: 'almacenaje-distribucion' },
        { name: 'Última Milla', link: 'ultima-milla' }
      ]
    },
    'otras': {
      id: 'otras',
      title: 'Otras Industrias',
      tagline: 'Soluciones logísticas adaptadas a tu sector',
      heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&fm=webp',
      introduction: 'Cada industria tiene requerimientos únicos. Diseñamos soluciones logísticas específicas para tu operación.',
      challenge: 'Sectores diversos como construcción, minería, energía, textil y más requieren expertise particular y flexibilidad operacional.',
      solutions: [
        { title: 'Análisis Personalizado', description: 'Evaluación profunda de tus necesidades logísticas específicas.', icon: <Globe className="h-5 w-5" /> },
        { title: 'Diseño de Solución', description: 'Creación de procesos a medida para tu industria.', icon: <Sparkles className="h-5 w-5" /> },
        { title: 'Implementación', description: 'Despliegue controlado con ajustes según resultados.', icon: <TrendingUp className="h-5 w-5" /> }
      ],
      capabilities: ['Equipo multidisciplinario con experiencia sectorial', 'Flexibilidad para adaptarnos a tu operación', 'Infraestructura configurable', 'Partners especializados según necesidad'],
      relatedServices: [
        { name: 'Almacenaje y Distribución', link: 'almacenaje-distribucion' },
        { name: 'Project Cargo', link: 'project-cargo' }
      ]
    }
  };

  const industry = industries[industryId || 'retail'];

  if (!industry) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Industria no encontrada</h1>
          <Link to="/Ez_webpage/" className="text-[#E41B13] hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Animated Background Mesh */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(228,27,19,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1),transparent_50%)]" />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E41B13]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section with Parallax */}
      <div className="relative h-[50vh] min-h-[500px] overflow-hidden">
        {/* Image with Parallax Effect */}
        <motion.div 
          className="absolute inset-0"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${industry.heroImage})`,
              filter: 'brightness(0.4) saturate(1.2)',
            }}
          />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#E41B13]/20 to-transparent" />
        </motion.div>

        {/* Glassmorphic Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/Ez_webpage/"
                state={{ scrollTo: 'industries' }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 hover:bg-white/20 transition-all mb-8 group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Volver
              </Link>
            </motion.div>

            {/* Hero Text with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
                  {industry.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light mb-4">
                  {industry.tagline}
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-[#E41B13] to-blue-500 rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="relative max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* Introduction Card with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E41B13] to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition" />
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-[#E41B13] to-[#C41710] rounded-xl">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Nuestra Capacidad</h3>
                <p className="text-gray-300 leading-relaxed">{industry.introduction}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-4 justify-center"
        >
          <button
            onClick={() => setActiveTab('solutions')}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${
              activeTab === 'solutions'
                ? 'bg-gradient-to-r from-[#E41B13] to-[#C41710] text-white shadow-lg shadow-red-500/50'
                : 'bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Soluciones
          </button>
          <button
            onClick={() => setActiveTab('capabilities')}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${
              activeTab === 'capabilities'
                ? 'bg-gradient-to-r from-[#E41B13] to-[#C41710] text-white shadow-lg shadow-red-500/50'
                : 'bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Capacidades
          </button>
        </motion.div>

        {/* Content based on active tab */}
        {activeTab === 'solutions' ? (
          <motion.div
            key="solutions"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {industry.solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E41B13] to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition" />
                <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-[#E41B13]/20 to-blue-500/20 rounded-xl text-white group-hover:scale-110 transition-transform">
                    {solution.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{solution.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="capabilities"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E41B13] to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition" />
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {industry.capabilities.map((cap, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#E41B13] to-blue-500 rounded-full group-hover/item:scale-150 transition-transform" />
                    <p className="text-gray-300 font-medium">{cap}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Related Services */}
        {industry.relatedServices && industry.relatedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E41B13] via-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition" />
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-[#E41B13] to-blue-500 rounded-lg">
                  <ChevronRight className="h-5 w-5 text-white" />
                </div>
                Servicios Relacionados
              </h3>
              <div className="flex flex-wrap gap-4">
                {industry.relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    to={`/Ez_webpage/services/${service.link}`}
                    className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all shadow-lg"
                  >
                    {service.name}
                    <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Section with Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative py-20 mt-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#E41B13] via-purple-600 to-blue-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              ¿Necesitas una solución especializada?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Conversemos sobre tu industria y diseñemos la logística que necesitas.
            </p>
            <Link
              to="/Ez_webpage/"
              state={{ scrollTo: 'contact' }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 group"
            >
              Solicitar Consultoría
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default IndustryDetail;
