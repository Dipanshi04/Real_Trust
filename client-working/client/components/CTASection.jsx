export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Real estate interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
          Learn more about our listing process, as well as our<br className="hidden md:block" />
          additional staging and design work.
        </h2>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold">
          LEARN MORE
        </button>
      </div>
    </section>
  );
}
