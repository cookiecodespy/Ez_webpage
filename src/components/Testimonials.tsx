import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      position: 'Supply Chain Director',
      company: 'TechCorp Latin America',
      content: 'EZ Ship Logistics transformed our supply chain operations. Their technology platform and reliable service have reduced our delivery times by 30% and improved customer satisfaction significantly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200'
    },
    {
      name: 'Carlos Mendez',
      position: 'Operations Manager',
      company: 'GlobalTrade Solutions',
      content: 'Working with EZ Ship has been a game-changer for our business. Their customs brokerage expertise and attention to detail have eliminated delays and streamlined our international shipments.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200'
    },
    {
      name: 'Ana Silva',
      position: 'Logistics Coordinator',
      company: 'E-Commerce Experts',
      content: 'The best logistics partner we have ever worked with. Their real-time tracking system and responsive customer service make managing our e-commerce fulfillment effortless and efficient.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200'
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies across Latin America
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-[#E41B13] opacity-10" />
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
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
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-center text-gray-500 text-sm font-semibold mb-8 uppercase tracking-wider">
            Trusted Partners
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
