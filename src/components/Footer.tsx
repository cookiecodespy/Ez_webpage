import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 88;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition >= 0 ? offsetPosition : 0,
        behavior: 'smooth'
      });
    }
  };

  const logoSrc = `${import.meta.env.BASE_URL}ezship-logo.png`;

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logoSrc}
                alt="EZ Ship Logistics"
                className="h-10 w-auto rounded-md select-none"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">EZ Ship Logistics</span>
                <span className="text-xs text-gray-400">Soluciones Globales</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tu partner confiable para gestionar logística integral y cadenas de suministro en Chile, Latinoamérica y el mundo.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-gray-800 p-2 rounded hover:bg-[#E41B13] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-gray-800 p-2 rounded hover:bg-[#E41B13] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-gray-800 p-2 rounded hover:bg-[#E41B13] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gray-800 p-2 rounded hover:bg-[#E41B13] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Sobre EZ Ship</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                  Nuestra historia
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                  Nuestros valores
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                  Equipo directivo
                </button>
              </li>
              <li>
                <a
                  href="mailto:talento@ezshiplogistics.cl"
                  className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1"
                  aria-label="Envíanos un correo para oportunidades laborales"
                >
                  Oportunidades laborales
                </a>
              </li>
              <li>
                <a
                  href="https://www.ezshiplogistics.cl/noticias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1"
                  aria-label="Abrir noticias y prensa de EZ Ship Logistics"
                >
                  Noticias y prensa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('industries')} className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                  Industrias
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                  Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                  Solicitar cotización
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                  Escríbenos
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <div className="font-semibold text-white mb-1">Correo</div>
                <a href="mailto:tomas.sotz@blue-box.cl" className="hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                  tomas.sotz@blue-box.cl
                </a>
              </li>
              <li>
                <div className="font-semibold text-white mb-1">Teléfono</div>
                <a href="tel:+56934252106" className="hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1">
                  +56 9 3425 2106
                </a>
              </li>
              <li>
                <div className="font-semibold text-white mb-1">Dirección</div>
                <div>Carr. Gral. San Martín 8250, 8700000 Quilicura, Región Metropolitana, Chile</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}bluebox-logo.jpg`}
                alt="Blue Box Limitada"
                className="h-10 w-auto rounded"
                loading="lazy"
              />
              <p className="text-gray-400 text-sm">
                © 2025 Blue Box Limitada. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="https://www.ezshiplogistics.cl/privacidad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1"
                aria-label="Política de privacidad de EZ Ship Logistics"
              >
                Política de privacidad
              </a>
              <a
                href="https://www.ezshiplogistics.cl/terminos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1"
                aria-label="Términos de servicio de EZ Ship Logistics"
              >
                Términos de servicio
              </a>
              <a
                href="https://www.ezshiplogistics.cl/cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E41B13]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md px-1"
                aria-label="Política de cookies de EZ Ship Logistics"
              >
                Política de cookies
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Sitio desarrollado por <span className="text-gray-400">Tomás Sotz</span> · 
              <a href="mailto:contacto@blue-box.cl" className="hover:text-gray-300 transition-colors ml-1">contacto@blue-box.cl</a> · 
              <a href="tel:+56990166224" className="hover:text-gray-300 transition-colors ml-1">+56 9 9016 6224</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
