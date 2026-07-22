"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentProps } from "react";

type MotionRevealProps = ComponentProps<typeof motion.div> & {
  delay?: number;
};

export function MotionReveal({ delay = 0, ...props }: MotionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    />
  );
}
