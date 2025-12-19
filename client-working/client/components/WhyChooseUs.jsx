export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Potential ROI",
      description: "We analyze and optimize every aspect of your property investment to ensure maximum returns. Our data-driven approach helps you make informed decisions that lead to substantial growth and profitability."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Design",
      description: "Our award-winning design team creates stunning, functional spaces that captivate buyers and elevate property value. From modern minimalism to classic elegance, we bring your vision to life with precision and creativity."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      title: "Marketing",
      description: "Leverage our comprehensive marketing strategies to reach the right audience. From digital campaigns to traditional outreach, we ensure your property gets the attention it deserves, resulting in faster sales at premium prices."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="absolute top-20 right-20 w-3 h-3 bg-[#3B82F6] rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-[#FF6B35] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3B82F6] mb-4">
            Why Choose Us?
          </h2>
          <div className="w-24 h-1 bg-[#3B82F6] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
