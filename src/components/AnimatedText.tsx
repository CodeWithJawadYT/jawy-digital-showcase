import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function Char({
  char,
  start,
  end,
  progress,
}: {
  char: string;
  start: number;
  end: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const display = char === " " ? "\u00A0" : char;

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{display}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {display}
      </motion.span>
    </span>
  );
}

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
      {chars.map((char, i) => (
        <Char
          key={i}
          char={char}
          start={i / chars.length}
          end={(i + 1) / chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}

export default AnimatedText;
