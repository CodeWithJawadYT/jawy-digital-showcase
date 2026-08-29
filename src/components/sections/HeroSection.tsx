import FadeIn from "@/components/FadeIn";
import Magnet from "@/components/Magnet";
import ContactButton from "@/components/ContactButton";
import heroObject from "@/assets/hero-object.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col bg-[#0C0C0C]"
      style={{ overflowX: "clip" }}
    >
      <FadeIn as="header" delay={0} y={-20} className="w-full">
        <nav className="flex justify-between px-6 pt-6 md:px-10 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]">
            JawyXdevs
          </h1>
        </FadeIn>
      </div>

      <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            Elite Web Engineering &amp; Digital Experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="relative z-20">
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={heroObject}
            alt="Abstract chrome 3D sphere representing JawyXdevs web engineering"
            width={1024}
            height={1024}
            className="h-auto w-full select-none"
            draggable={false}
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}

export default HeroSection;
