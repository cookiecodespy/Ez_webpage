import { ShoppingCart, Car, Cpu, UtensilsCrossed, Heart } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: 'Retail & E-Commerce',
      description: 'Fast, flexible fulfillment solutions for modern retail',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800'
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: 'Automotive',
      description: 'Specialized handling for automotive parts and vehicles',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Technology',
      description: 'Secure transport for high-value tech equipment',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800'
    },
    {
      icon: <UtensilsCrossed className="h-8 w-8" />,
      title: 'Food & Beverage',
      description: 'Temperature-controlled logistics for perishables',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Healthcare',
      description: 'Compliant and secure medical supply chain solutions',
      image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=800'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized logistics expertise across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-80"
            >
              <div className="absolute inset-0">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="bg-[#E41B13] p-3 rounded-lg inline-block mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
