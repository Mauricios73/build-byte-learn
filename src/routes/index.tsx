import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, FileCode2, Radio, ShieldCheck, Wrench, BookOpen } from "lucide-react";

import heroBoard from "@/assets/hero-board.jpg";
import modulesExploded from "@/assets/modules-exploded.jpg";
import starterKit from "@/assets/starter-kit.jpg";
import inHand from "@/assets/in-hand.jpg";
import { Card, Eyebrow, Section } from "@/components/site/Primitives";
import { labs, useCases } from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hardlab — Build. Explore. Understand Hardware." },
      {
        name: "description",
        content:
          "Open hardware and software kits for embedded systems, wireless research, electronics and authorized security training. Modular ESP32-S3 platform with labs and docs.",
      },
      { property: "og:title", content: "Hardlab — Build. Explore. Understand Hardware." },
      {
        property: "og:description",
        content:
          "Modular ESP32-S3 kits with firmware, documentation and 14 guided labs. Learn hardware by building real systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const levels = [
  {
    name: "Starter",
    price: 89,
    copy: "Learn electronics and ESP32 fundamentals.",
    slug: "starter-lab",
    image: starterKit,
    icon: Cpu,
  },
  {
    name: "Explorer",
    price: 129,
    copy: "Experiment with wireless, NFC, IR and sensors.",
    slug: "wireless-lab",
    image: inHand,
    icon: Radio,
  },
  {
    name: "Advanced",
    price: 179,
    copy: "Build a complete modular hardware research platform.",
    slug: "ultimate-hardware-lab",
    image: modulesExploded,
    icon: Wrench,
  },
];

const trust = [
  { icon: FileCode2, title: "Open firmware", copy: "GitHub, PlatformIO project, board definitions, API." },
  { icon: BookOpen, title: "Real documentation", copy: "Pinouts, schematics, examples, troubleshooting." },
  { icon: Wrench, title: "Repairable design", copy: "Replaceable modules and stocked spare parts." },
  { icon: ShieldCheck, title: "Responsible use", copy: "Built for learning, diagnostics and authorized testing." },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bench-glow">
        <div className="absolute inset-0 grid-lines opacity-[0.35]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>Open hardware learning platform</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl">
              Build. Explore.
              <br />
              <span className="text-ember">Understand Hardware.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Open hardware and software kits for embedded systems, wireless research,
              electronics, and authorized security training.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Explore Kits <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/learn"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                Start Learning
              </Link>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                ["14", "guided labs"],
                ["8", "modules"],
                ["100%", "documented"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-bold text-primary">{v}</dt>
                  <dd className="label-mono mt-1">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="relative">
            <img
              src={heroBoard}
              alt="Modular ESP32-S3 core board with sub-GHz radio and NFC daughter boards attached"
              width={1600}
              height={1104}
              className="w-full rounded-md border border-border object-cover shadow-[var(--shadow-glow)]"
            />
            <figcaption className="label-mono mt-3">
              Ultimate Hardware Lab · core board + RF slot A + NFC
            </figcaption>
          </figure>
        </div>
      </section>

      <Section eyebrow="Choose your level" title="Three ways in">
        <div className="grid gap-6 md:grid-cols-3">
          {levels.map((l) => (
            <Link
              key={l.name}
              to="/products/$slug"
              params={{ slug: l.slug }}
              className="group"
            >
              <Card className="h-full p-0">
                <img
                  src={l.image}
                  alt={`${l.name} kit contents`}
                  loading="lazy"
                  className="h-48 w-full rounded-t-md border-b border-border object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="label-mono">{l.name}</span>
                    <l.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="mt-3 text-xl font-bold">${l.price}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{l.copy}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View kit
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center">
          <img
            src={modulesExploded}
            alt="Exploded view of the core board with sub-GHz, 2.4 GHz, NFC, GPS and IR modules"
            width={1408}
            height={1008}
            loading="lazy"
            className="rounded-md border border-border"
          />
          <div>
            <Eyebrow>Modular by design</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold">One core board. Every radio you need.</h2>
            <p className="mt-4 text-muted-foreground">
              Nothing is soldered down permanently. Radios, NFC, GPS and IR arrive as daughter
              boards on keyed connectors, so upgrading means swapping a module instead of buying a
              new platform.
            </p>
            <pre className="mt-6 overflow-x-auto rounded-md border border-border bg-background p-5 font-mono text-xs leading-relaxed text-muted-foreground">
{`CORE BOARD
  +-- RF SLOT A   sub-GHz
  +-- RF SLOT B   2.4 GHz
  +-- NFC         13.56 MHz
  +-- GPS
  +-- IR TX/RX
  +-- Qwiic / I2C
  +-- UART expansion
  +-- SPI expansion`}
            </pre>
          </div>
        </div>
      </section>

      <Section eyebrow="Use cases" title="What you'll actually do with it">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <li
              key={u}
              className="flex gap-3 rounded-sm border border-border/70 bg-card/60 px-4 py-3 text-sm"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {u}
            </li>
          ))}
        </ul>
      </Section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <Eyebrow>The labs are the product</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold">Ultimate Hardware Lab course</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every kit unlocks a structured course. You don't get a board and a wiki page — you get
            a path from first GPIO to a custom firmware build.
          </p>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
            {labs.map((lab, i) => (
              <li key={lab} className="flex items-baseline gap-4 bg-card px-5 py-4">
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm">{lab}</span>
              </li>
            ))}
          </ol>
          <Link
            to="/learn"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            See the full curriculum <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Section eyebrow="Trust architecture" title="Why builders stay">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <Card key={t.title}>
              <t.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-display text-base font-bold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.copy}</p>
            </Card>
          ))}
        </div>
      </Section>

      <section className="border-t border-border bench-glow">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Start with the flagship</h2>
          <p className="mt-4 text-muted-foreground">
            Core board, every module, fourteen labs, open firmware and the documentation to go with
            it.
          </p>
          <Link
            to="/products/$slug"
            params={{ slug: "ultimate-hardware-lab" }}
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Ultimate Hardware Lab — $179 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
