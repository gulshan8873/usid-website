"use client";

import { Mail, MapPin, MessageCircle, Phone, UserRound } from "lucide-react";
import Link from "next/link";

import { MotionReveal } from "@/components/motion-reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";

const detailRows = [
  {
    label: "Contact Person",
    icon: UserRound,
    content: "Prince Kumar",
  },
  {
    label: "Phone",
    icon: Phone,
    content: (
      <>
        <Link href={site.phoneOneHref}>+91 7979720674</Link> |{" "}
        <Link href={site.phoneTwoHref}>+91 9546476161</Link>
      </>
    ),
  },
  {
    label: "Email",
    icon: Mail,
    content: <Link href={site.emailHref}>usidautomation@gmail.com</Link>,
  },
  {
    label: "Location",
    icon: MapPin,
    content: "Opposite PNB Bank, Kasna, Greater Noida, G.B. Nagar, UP - 201312",
  },
];

export function Contact() {
  return (
    <section className="section-shell bg-card" id="contact">
      <div className="container-shell grid gap-6 lg:grid-cols-[1fr_420px]">
        <MotionReveal className="rounded-lg border border-border bg-secondary/55 p-7 sm:p-10 lg:p-12">
          <p className="eyebrow">Start a project</p>
          <h2 className="text-balance mt-3 text-3xl font-extrabold leading-tight tracking-normal sm:text-4xl lg:text-5xl">
            Need automation, data or panel work?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            Contact Prince Kumar to discuss your requirement and next steps.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href={site.whatsapp}>
                <MessageCircle className="size-4" />
                Chat on WhatsApp
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={site.emailHref}>
                <Mail className="size-4" />
                Send Email
              </Link>
            </Button>
          </div>
        </MotionReveal>

        <MotionReveal
          className="grid gap-0 rounded-lg bg-slate-950 p-7 text-white shadow-premium"
          delay={0.08}
        >
          {detailRows.map((row) => {
            const Icon = row.icon;

            return (
              <div
                className="grid grid-cols-[1.25rem_1fr] gap-x-3 border-b border-white/14 py-4 first:pt-0 last:border-b-0 last:pb-0"
                key={row.label}
              >
                <Icon className="mt-1 size-5 text-cyan-300" />
                <p className="m-0 text-blue-100">
                  <strong className="block text-white">{row.label}</strong>
                  <span className="leading-7 [&_a]:text-blue-100 [&_a]:no-underline [&_a:hover]:text-cyan-300">
                    {row.content}
                  </span>
                </p>
              </div>
            );
          })}
        </MotionReveal>
      </div>
    </section>
  );
}
