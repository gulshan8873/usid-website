"use client";

import { CheckCircle2 } from "lucide-react";

import { MotionReveal } from "@/components/motion-reveal";
import { aboutCopy } from "@/lib/site-data";

export function About() {
  return (
    <section className="section-shell bg-slate-950 text-white" id="about">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <MotionReveal>
          <p className="eyebrow">Why USID</p>
          <h2 className="text-balance mt-3 text-3xl font-extrabold leading-tight tracking-normal sm:text-4xl lg:text-5xl">
            Practical execution for factory automation work.
          </h2>
        </MotionReveal>

        <div className="grid gap-4">
          {aboutCopy.map((item, index) => (
            <MotionReveal delay={index * 0.08} key={item}>
              <div className="flex gap-4 rounded-lg border border-white/12 bg-white/8 p-5 text-blue-100">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-cyan-300" />
                <p className="m-0 text-base leading-8">{item}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
