"use client";

import { ArrowRight, Layers3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { MotionReveal } from "@/components/motion-reveal";
import { Button } from "@/components/ui/button";
import { automationBrands, heroSlides, strengths } from "@/lib/site-data";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden bg-slate-950 px-5 py-16 text-white md:px-10 md:py-20 lg:min-h-[calc(100vh-81px)] lg:px-[4.5rem]"
      id="home"
    >
      <Image
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-36"
        fill
        priority
        sizes="100vw"
        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1800&q=80"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(7,18,36,0.97),rgba(21,86,168,0.82))]" />

      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
        <MotionReveal className="max-w-3xl">
          <p className="eyebrow">Automation &bull; Data &bull; Intelligence</p>
          <h1 className="text-balance mt-3 text-4xl font-extrabold leading-[1.04] tracking-normal sm:text-5xl lg:text-6xl">
            Automation, Data & Industrial Intelligence
          </h1>
          <p className="mt-5 max-w-2xl text-sm font-extrabold uppercase leading-7 tracking-[0.04em] text-blue-50 sm:text-base">
            SUPPLY | PANEL MANUFACTURING | SERVICES | INDUSTRIAL INTELLIGENCE
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">
            USID Industrial Automation helps factories connect machines, panels, production
            data and reliable automation supply from one practical engineering partner.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild>
              <Link href="#services">
                View Services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div aria-label="Company strengths" className="mt-10 grid gap-3 sm:grid-cols-3">
            {strengths.map((item) => (
              <div
                className="rounded-lg border border-white/16 bg-white/10 p-4 backdrop-blur"
                key={item.title}
              >
                <strong className="block text-2xl font-extrabold">{item.title}</strong>
                <span className="mt-1 block text-sm font-semibold text-blue-100">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal
          className="relative min-h-[380px] overflow-hidden rounded-lg border border-white/18 bg-slate-950 shadow-[0_35px_80px_rgba(0,0,0,0.32)] sm:min-h-[480px] lg:min-h-[560px]"
          delay={0.12}
        >
          <motion.div
            animate={reduceMotion ? undefined : { x: ["0%", "-33.333%", "-66.666%", "0%"] }}
            className="flex h-full min-h-[inherit] w-[300%]"
            transition={
              reduceMotion
                ? undefined
                : { duration: 12, repeat: Infinity, ease: "easeInOut", times: [0, 0.33, 0.66, 1] }
            }
          >
            {heroSlides.map((slide) => (
              <figure className="relative m-0 min-h-[inherit] w-1/3 overflow-hidden" key={slide.label}>
                <Image
                  alt={slide.alt}
                  className="h-full min-h-[inherit] w-full object-cover"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  src={slide.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,36,0.02),rgba(7,18,36,0.78)),linear-gradient(90deg,rgba(7,18,36,0.34),transparent_58%)]" />
                <figcaption className="absolute inset-x-4 bottom-20 grid gap-2 rounded-lg border border-white/25 bg-slate-950/86 p-5 shadow-2xl backdrop-blur md:inset-x-6 md:bottom-24 md:p-6">
                  <span className="eyebrow">{slide.label}</span>
                  <strong className="text-balance text-base leading-7 text-white sm:text-lg">
                    {slide.text}
                  </strong>
                  <span className="mt-2 flex flex-wrap gap-2">
                    {slide.tags.map((tag) => (
                      <span
                        className="rounded-lg border border-white/18 bg-white/10 px-2.5 py-1 text-xs font-extrabold uppercase tracking-normal text-blue-100"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                </figcaption>
              </figure>
            ))}
          </motion.div>
          <div aria-hidden="true" className="absolute right-5 top-5 z-10 grid grid-cols-3 gap-2">
            {heroSlides.map((slide, index) => (
              <span
                className="h-1 w-7 rounded-full bg-white/45"
                key={slide.label}
                style={{ animation: reduceMotion ? undefined : `dot 12s infinite ${index * 4}s` }}
              />
            ))}
          </div>
          <div className="absolute left-5 top-5 z-10 rounded-lg border border-white/16 bg-white/10 p-3 backdrop-blur">
            <Layers3 className="size-5 text-cyan-300" />
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/12 bg-slate-950/76 py-3 backdrop-blur">
            <div className="flex overflow-hidden" aria-label="Automation brands and components">
              {[0, 1].map((set) => (
                <div
                  aria-hidden={set === 1}
                  className="flex min-w-full shrink-0 animate-brand-rail items-center gap-3 px-3"
                  key={set}
                >
                  {automationBrands.map((brand) => (
                    <span
                      className="whitespace-nowrap rounded-lg border border-white/14 bg-white/8 px-4 py-2 text-xs font-extrabold uppercase tracking-normal text-blue-100"
                      key={`${set}-${brand}`}
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
