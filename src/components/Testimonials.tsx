import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      position: 'Directora de Supply Chain',
      company: 'TechCorp Latinoamérica',
      content: 'EZ Ship Logistics transformó nuestra operación. Su plataforma tecnológica y servicio confiable redujeron nuestros tiempos de entrega en un 30% y elevaron la satisfacción de los clientes.',
      rating: 5,
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&fm=webp'
    },
    {
      name: 'Carlos Mendez',
      position: 'Gerente de Operaciones',
      company: 'GlobalTrade Solutions',
      content: 'Trabajar con EZ Ship marcó un antes y un después. Su expertise en agenciamiento de aduanas y atención al detalle eliminó demoras y agilizó nuestros envíos internacionales.',
      rating: 5,
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&fm=webp'
    },
    {
      name: 'Ana Silva',
      position: 'Coordinadora de Logística',
      company: 'E-Commerce Experts',
      content: 'El mejor partner logístico con el que hemos trabajado. Su seguimiento en tiempo real y soporte proactivo hacen que nuestro fulfillment sea sencillo y eficiente.',
      rating: 5,
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&fm=webp'
    }
  ];

  const partners = [
    { name: 'DHL', logo: 'DHL' },
    { name: 'Maersk', logo: 'MAERSK' },
    { name: 'Amazon', logo: 'AMAZON' },
    { name: 'Mercado Libre', logo: 'ML' },
    { name: 'LATAM', logo: 'LATAM' }
  ];

  return (
    <section
      id="testimonios"
      className="py-16 lg:py-20 bg-gray-50"
      role="region"
      aria-labelledby="testimonios-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="testimonios-heading" className="text-3xl md:text-4xl tracking-tight font-semibold text-gray-900 mb-3">
            Opiniones de nuestros clientes
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto text-left md:text-center">
            Confianza de compañías líderes en toda Latinoamérica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow relative h-full flex flex-col"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-[#E41B13] opacity-10" aria-hidden="true" />
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-[#E41B13] font-medium">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed flex-1">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-center text-gray-500 text-sm font-semibold mb-8 uppercase tracking-wider">
            Aliados de confianza
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-gray-400 font-bold text-2xl hover:text-[#E41B13] transition-colors cursor-pointer"
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
