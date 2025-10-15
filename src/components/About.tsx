import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Reliability',
      description: 'Consistent, dependable service you can trust'
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Innovation',
      description: 'Cutting-edge solutions for modern logistics'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Customer Focus',
      description: 'Your success is our top priority'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
                alt="EZ Ship Logistics Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#E41B13] text-white p-8 rounded-xl shadow-xl">
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About EZ Ship Logistics
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in Santiago, Chile, EZ Ship Logistics has over a decade of experience providing efficient, data-driven logistics solutions across Latin America and beyond.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We combine local market expertise with global reach to deliver seamless supply chain solutions. Our commitment to innovation and customer satisfaction has made us a trusted partner for businesses of all sizes.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-[#E41B13] text-white p-2 rounded-lg flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-[#E41B13] text-white px-8 py-4 rounded-lg hover:bg-[#c41610] transition-colors font-medium text-lg shadow-lg">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
