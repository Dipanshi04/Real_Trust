export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3B82F6] mb-6">
          About Us
        </h2>
        <div className="w-24 h-1 bg-[#3B82F6] mx-auto mb-8"></div>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Founded with a vision to revolutionize the real estate industry, we combine expertise in consultation, innovative design, and strategic marketing to deliver unparalleled results. Our team of seasoned professionals is dedicated to transforming properties into profitable investments while ensuring exceptional client satisfaction. With a track record of successful projects across residential and commercial sectors, we've built a reputation for excellence, integrity, and innovation.
        </p>

        <button className="bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors font-semibold">
          LEARN MORE
        </button>
      </div>
    </section>
  );
}
