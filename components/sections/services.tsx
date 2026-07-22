"use client";

import { Cpu, Database, Factory, PackageCheck } from "lucide-react";

import { MotionReveal } from "@/components/motion-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/site-data";

const icons = [Cpu, Database, Factory, PackageCheck];

export function Services() {
  return (
    <section className="section-shell" id="services">
      <div className="container-shell">
        <MotionReveal className="max-w-3xl">
          <p className="eyebrow">What we do</p>
          <h2 className="text-balance mt-3 text-3xl font-extrabold leading-tight tracking-normal sm:text-4xl lg:text-5xl">
            Supply | Panel Manufacturing | Services | Industrial Intelligence
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            The detailed capability list from USID&apos;s service profile, organized into four
            clear groups.
          </p>
        </MotionReveal>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <MotionReveal delay={index * 0.06} key={service.title}>
                <Card className="group h-full min-h-[320px] overflow-hidden bg-card/88 shadow-[0_14px_36px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-50 text-sm font-extrabold text-blue-700 dark:bg-cyan-400/12 dark:text-cyan-300">
                        {service.index}
                      </span>
                      <Icon className="size-5 text-muted-foreground transition group-hover:text-cyan-500" />
                    </div>
                    <h3 className="mt-6 text-xl font-extrabold">{service.title}</h3>
                    <ul className="mt-4 grid gap-2 pl-5 text-sm leading-7 text-muted-foreground marker:text-blue-700 dark:marker:text-cyan-300">
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
