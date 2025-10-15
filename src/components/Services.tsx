import { Plane, Warehouse, FileText, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Plane className="h-12 w-12" />,
      title: 'Freight Forwarding',
      description: 'Comprehensive air, sea, and land transport solutions tailored to your business needs. We ensure your cargo reaches its destination safely and on time.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Warehouse className="h-12 w-12" />,
      title: 'Warehousing & Distribution',
      description: 'State-of-the-art warehousing facilities with advanced inventory management systems. Optimize your supply chain with our strategic distribution networks.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: 'Customs Brokerage',
      description: 'Expert customs clearance services to navigate complex international regulations. We handle all documentation and compliance requirements efficiently.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: 'Last-Mile Delivery',
      description: 'Fast and reliable final-mile delivery solutions. Track your shipments in real-time and ensure customer satisfaction with our efficient delivery network.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end logistics solutions designed to streamline your operations and drive business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-8">
                <div className={`inline-block p-4 rounded-lg bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-[#E41B13] font-semibold flex items-center group-hover:gap-2 transition-all">
                  Learn More
                  <span className="ml-1 group-hover:ml-0 transition-all">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
