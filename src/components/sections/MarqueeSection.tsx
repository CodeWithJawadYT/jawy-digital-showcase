import { useEffect, useRef, useState } from "react";
import { marqueeImages } from "@/data/projects";

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.offsetTop;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const row = [...marqueeImages, ...marqueeImages, ...marqueeImages];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ overflowX: "clip" }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 1200}px)`, willChange: "transform" }}
        >
          {row.map((src, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              alt="JawyXdevs project preview"
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-offset}px)`, willChange: "transform" }}
        >
          {row.map((src, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              alt="JawyXdevs project preview"
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarqueeSection;
