export default function OurProjects() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
      category: "Consultation",
      title: "Modern Family Home",
      description:
        "Comprehensive consultation for a luxury residential project",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      category: "Design",
      title: "Victorian Renovation",
      description: "Complete design transformation of a historic property",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
      category: "Marketing & Design",
      title: "Luxury Estate",
      description: "Full-service marketing campaign with premium staging",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
      category: "Consultation & Marketing",
      title: "Urban Development",
      description: "Strategic planning and marketing for multi-unit complex",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
      category: "Consultation",
      title: "Lakefront Property",
      description: "Investment analysis and development strategy",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3B82F6] mb-4">
            Our Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We know what Buyers are looking for and suggest projects that will
            bring clients top dollar for the sale of their homes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-gray-900 text-lg">
                  {project.title}
                </h3>
                <p className="text-sm text-[#3B82F6] font-semibold">
                  {project.category}
                </p>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <button className="w-full bg-[#FF6B35] text-white py-2 rounded-md hover:bg-[#ff5722] transition-colors text-sm font-semibold mt-3">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 bg-[#FF6B35] rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
