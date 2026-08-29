import { Mail, Phone } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ContactButton from "@/components/ContactButton";

export function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative z-10 bg-[#0C0C0C] px-5 py-24 sm:px-8 md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 11vw, 150px)" }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <div className="mt-12 flex flex-col items-center gap-6">
          <a
            href="mailto:jawyXdevs@gmail.com"
            className="flex items-center gap-3 text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            jawyXdevs@gmail.com
          </a>
          <a
            href="tel:03151082775"
            className="flex items-center gap-3 text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            03151082775
          </a>
          <div className="mt-6">
            <ContactButton />
          </div>
          <p className="mt-10 text-xs uppercase tracking-widest text-[#D7E2EA]/50">
            © {new Date().getFullYear()} JawyXdevs — Elite Web Engineering
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}

export default ContactSection;
