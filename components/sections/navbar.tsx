"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/86 px-5 py-3 backdrop-blur-xl md:px-10 lg:px-[4.5rem]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4">
        <Link
          aria-label="USID Industrial Automation home"
          className="flex min-w-0 items-center gap-3 no-underline"
          href="#home"
        >
          <Image
            alt="USID Industrial Automation logo"
            className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
            height={62}
            priority
            src="/images/usid_logo.png"
            width={62}
          />
          <span className="min-w-0">
            <strong className="block text-2xl font-extrabold uppercase leading-none text-blue-700 dark:text-cyan-300 sm:text-3xl">
              USID
            </strong>
            <small className="mt-1 block text-[0.68rem] font-extrabold uppercase tracking-[0.04em] text-foreground sm:text-xs">
              Industrial Automation
            </small>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              className="rounded-lg px-3 py-2 text-sm font-bold text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            aria-label="Toggle menu"
            onClick={() => setIsOpen((value) => !value)}
            size="icon"
            type="button"
            variant="secondary"
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto grid max-w-[1180px] overflow-hidden transition-all lg:hidden",
          isOpen ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <nav
            aria-label="Mobile navigation"
            className="grid gap-1 rounded-lg border border-border bg-card p-2 shadow-premium"
          >
            {navItems.map((item) => (
              <Link
                className="rounded-lg px-3 py-3 text-sm font-bold text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                href={item.href}
                key={item.label}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
