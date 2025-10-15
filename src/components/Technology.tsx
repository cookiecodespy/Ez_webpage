import { Monitor, MapPin, BarChart3, Zap } from 'lucide-react';

const Technology = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: 'Real-Time Tracking',
      description: 'Monitor your shipments 24/7 with GPS precision'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Route Optimization',
      description: 'AI-powered logistics for maximum efficiency'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Advanced Analytics',
      description: 'Data-driven insights for better decisions'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Automated Workflows',
      description: 'Streamlined operations from start to finish'
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technology & Tracking
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our cutting-edge Warehouse Management System (WMS) ensures accuracy, visibility, and efficiency at every stage of your supply chain.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-[#E41B13] text-white p-3 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-[#E41B13] text-white px-8 py-4 rounded-lg hover:bg-[#c41610] transition-colors font-medium text-lg shadow-lg">
              Explore Our Platform
            </button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gray-700 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="flex-1 text-center text-gray-400 text-sm font-medium">
                  EZ Ship WMS Dashboard
                </div>
              </div>

              <div className="p-6">
                <div className="bg-gray-800 rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">Shipment ID: ES-2025-10384</span>
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">In Transit</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#E41B13] rounded-full flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">Santiago, Chile</div>
                        <div className="text-gray-400 text-sm">Origin</div>
                      </div>
                    </div>
                    <div className="ml-4 border-l-2 border-gray-700 h-8" />
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">Buenos Aires, Argentina</div>
                        <div className="text-gray-400 text-sm">Destination</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">245</div>
                    <div className="text-gray-400 text-xs">Active Shipments</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">98%</div>
                    <div className="text-gray-400 text-xs">On Time</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">15</div>
                    <div className="text-gray-400 text-xs">Countries</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E41B13] rounded-full opacity-20 blur-3xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
