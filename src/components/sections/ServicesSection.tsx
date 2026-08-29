import FadeIn from "@/components/FadeIn";

const services = [
  {
    number: "01",
    name: "Web Development",
    description:
      "High-performance, responsive websites built with modern technologies, clean architecture and production-ready code.",
  },
  {
    number: "02",
    name: "Interactive Web Design",
    description:
      "Modern interfaces with smooth animations, micro-interactions and thoughtful user experiences designed to make websites memorable.",
  },
  {
    number: "03",
    name: "3D & Motion Experiences",
    description:
      "Immersive digital experiences featuring sophisticated motion, scroll interactions and 3D-inspired visual elements.",
  },
  {
    number: "04",
    name: "Performance & SEO",
    description:
      "Fast, responsive and search-friendly websites engineered for strong technical performance, accessibility and discoverability.",
  },
  {
    number: "05",
    name: "AI Integration",
    description:
      "Intelligent AI-powered features seamlessly integrated into your website — from chat assistants to automation — to elevate user experience and business workflows.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2
        className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>

      <div className="mx-auto max-w-5xl">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 py-8 sm:gap-10 sm:py-10 md:py-12"
              style={{ borderTop: i === 0 ? "none" : "1px solid rgba(12, 12, 12, 0.15)" }}
            >
              <span
                className="font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3 pt-2">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
