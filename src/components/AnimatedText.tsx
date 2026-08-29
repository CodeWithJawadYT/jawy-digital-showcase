import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export function AnimatedText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        return (
          <span key={i} className="relative inline-block">
            <span className="opacity-0">{char === " " ? "\u00A0" : char}</span>
            <motion.span
              className="absolute left-0 top-0"
              style={{ opacity: scrollYProgress }}
              transition={{ duration: 0 }}
              initial={false}
              animate={undefined}
              custom={[start, end]}
            >
              <Char char={char} start={start} end={end} progress={scrollYProgress} />
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}

function Char({
  char,
  start,
  end,
  progress,
}: {
  char: string;
  start: number;
  end: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  return (
    <motion.span
      style={{
        opacity: useOpacity(progress, start, end),
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

function useOpacity(
  progress: ReturnType<typeof useScroll>["scrollYProgress"],
  start: number,
  end: number,
) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { useTransform } = require("framer-motion") as typeof import("framer-motion");
  return useTransform(progress, [start, end], [0.2, 1]);
}

export default AnimatedText;
