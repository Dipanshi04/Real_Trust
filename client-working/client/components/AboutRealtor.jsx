export default function AboutRealtor() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#3B82F6] rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#FF6B35] rounded-full opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="w-3 h-3 bg-[#3B82F6] rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3B82F6]">
              Not Your Average Realtor
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              With over a decade of experience in real estate consultation, design, and marketing, we bring a unique blend of creativity and strategy to every project. Our approach goes beyond traditional methods, delivering exceptional results that exceed expectations.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                    alt="Professional realtor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="relative mt-12">
                <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                    alt="Happy family"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="relative -mt-8 col-span-2">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80"
                    alt="Consultation meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
