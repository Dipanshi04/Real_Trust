export default function HappyClients() {
  const testimonials = [
    {
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "Working with Real Trust was an absolute pleasure. Their attention to detail and commitment to excellence helped us sell our home 20% above asking price. The marketing strategy was phenomenal!"
    },
    {
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      name: "Michael Chen",
      role: "Property Investor",
      text: "The consultation services provided invaluable insights into market trends and investment opportunities. Their expertise saved me from costly mistakes and maximized my ROI significantly."
    },
    {
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      name: "Emily Rodriguez",
      role: "Developer",
      text: "The design team transformed our vision into reality. Their creative approach and professional execution resulted in a stunning development that exceeded all expectations and attracted premium buyers."
    },
    {
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      name: "David Thompson",
      role: "First-time Buyer",
      text: "As a first-time homebuyer, I was overwhelmed by the process. Real Trust guided me every step of the way with patience and expertise. I found my dream home thanks to their dedication!"
    },
    {
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      name: "Lisa Anderson",
      role: "Real Estate Agent",
      text: "I've partnered with Real Trust on multiple projects, and their professionalism never ceases to amaze me. Their marketing strategies and design insights have been game-changers for my listings."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-10 left-10 w-16 h-16 bg-[#3B82F6] rounded-full opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#FF6B35] rounded-full opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3B82F6] mb-4">
            Happy Clients
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
