"use client";

import { MotionReveal } from "@/components/motion-reveal";
import { projectGallery } from "@/lib/site-data";

export function Projects() {
  return (
    <section className="section-shell bg-white dark:bg-slate-900" id="projects">
      <div className="container-shell">
        <MotionReveal className="max-w-3xl">
          <p className="eyebrow">Panel builds</p>
          <h2 className="text-balance mt-3 text-3xl font-extrabold leading-tight tracking-normal sm:text-4xl lg:text-5xl">
            Workshop-ready automation panels.
          </h2>
        </MotionReveal>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {projectGallery.map((project, index) => (
            <MotionReveal delay={index * 0.06} key={project.title}>
              <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-[0_14px_36px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    alt={project.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(3,10,24,0.64))]" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-extrabold uppercase tracking-[0.08em] text-blue-700 dark:text-cyan-300">
                    {project.label}
                  </span>
                  <h3 className="mt-3 text-base font-extrabold leading-7">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
