export default function PhotoGallery() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-32 -translate-y-32 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF6B35] rounded-lg z-0 opacity-70"></div>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
              alt="Modern home exterior"
              className="relative z-10 w-full h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="relative group">
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#3B82F6] rounded-lg z-0 opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
              alt="Interior design consultation"
              className="relative z-10 w-full h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="relative group md:col-span-2 lg:col-span-1">
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-[#FF6B35] rounded-lg z-0 opacity-40"></div>
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80"
              alt="Happy clients"
              className="relative z-10 w-full h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
