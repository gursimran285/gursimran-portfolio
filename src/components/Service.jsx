import {
  FaBullhorn,
  FaCode,
  FaLaptopCode,
  FaPalette
} from "react-icons/fa";

const services = [
  {
    title: "Branding & Identity",
    icon: <FaPalette size={30} />,
    desc: "Logo design, brand identity, typography & color systems."
  },
  {
    title: "Social Media & Print Design",
    icon: <FaBullhorn size={30} />,
    desc: "Social posts, posters, brochures, promotional creatives."
  },
  {
    title: "UI/UX & Web Design",
    icon: <FaLaptopCode size={30} />,
    desc: "Website interfaces, responsive layouts and user experiences."
  },
  {
    title: "Full-Stack Web Development",
    icon: <FaCode size={30} />,
    desc: "React, Node.js, Express.js & MongoDB."
  }
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#111] text-white py-16"
    >
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <span
          className="inline-block pb-0 px-1"
          style={{
            color: "#d4a900",
            fontSize: "16px",
            fontWeight: "600",
            letterSpacing: "3px",
          }}
        >
          WHAT I DO
        </span>

        <h2 className="rethink-sans text-6xl font-bold mb-12 pb-2" style={{
                            fontSize: "48px",
                            lineHeight: "1.2",
                            margin: "18px 0 30px",
                            fontWeight: "600",
                        }}>
          My Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                      rounded-3xl
                      bg-white/10
                      backdrop-blur-lg
                      border
                      border-white/10
                      p-8
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:!border-[#d4a900]
                    "
            >
              <div className="text-orange-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;