export default function Hero() {
  return (
    <section className="relative bg-white py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Real estate consultation"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Consultation,
              <br />
              Design,
              <br />
              <span className="text-[#3B82F6]">& Marketing</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">
              Transform your property vision into reality with our comprehensive
              consultation services, innovative design solutions, and strategic
              marketing expertise.
            </p>
          </div>

          <div className="bg-[#2D3E5F] rounded-lg p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Get a Free
              <br />
              Consultation
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#FF6B35] transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#FF6B35] transition-colors"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#FF6B35] transition-colors"
              />
              <select className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white/60 focus:outline-none focus:border-[#FF6B35] transition-colors">
                <option style={{ color: "black" }}>Select Services</option>
                <option style={{ color: "black" }}>Consultation</option>
                <option style={{ color: "black" }}>Design</option>
                <option style={{ color: "black" }}>Marketing</option>
              </select>
              <button
                type="submit"
                className="w-full bg-[#FF6B35] text-white py-3 rounded-md hover:bg-[#ff5722] transition-colors font-semibold"
              >
                Schedule A Meeting
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
