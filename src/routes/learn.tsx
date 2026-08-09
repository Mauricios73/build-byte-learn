import { createFileRoute, Link } from "@tanstack/react-router";

import { Card, PageHeader } from "@/components/site/Primitives";
import { labs } from "@/data/catalog";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Learn hardware from the bus up — Hardlab" },
      {
        name: "description",
        content:
          "Guided curriculum covering ESP32, GPIO, SPI, I2C, UART, infrared, NFC, sub-GHz and 2.4 GHz radio, GPS, firmware and PCB design.",
      },
      { property: "og:title", content: "Learn hardware from the bus up — Hardlab" },
      {
        property: "og:description",
        content: "A structured path from your first GPIO write to a custom firmware build.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/learn" },
    ],
    links: [{ rel: "canonical", href: "/learn" }],
  }),
  component: LearnPage,
});

const tracks = [
  { name: "Getting started", copy: "Tools, drivers, flashing and your first firmware build." },
  { name: "Hardware basics", copy: "Voltage, logic levels, probes and reading a schematic." },
  { name: "ESP32", copy: "Architecture, peripherals, memory, tasks and power." },
  { name: "Wireless", copy: "Wi-Fi and BLE fundamentals on hardware you control." },
  { name: "RF", copy: "Modulation, sub-GHz bands, antennas and link budgets." },
  { name: "NFC / RFID", copy: "13.56 MHz protocols, tag types, reading and writing." },
  { name: "Infrared", copy: "Carrier, encoding, capture and replay on your own devices." },
  { name: "GPS", copy: "NMEA, fixes, timing and logging." },
  { name: "Firmware", copy: "PlatformIO, drivers, OTA updates and release channels." },
  { name: "PCB design", copy: "From expansion header to your own manufactured module." },
  { name: "Security labs", copy: "Diagnostics and authorized testing methodology." },
];

const articles = [
  "ESP32 SPI explained",
  "Sub-GHz vs 2.4 GHz radio: choosing a band",
  "How NFC actually works",
  "UART vs SPI vs I2C",
  "How to design your first ESP32 PCB",
  "How to build an ESP32 cyberdeck",
];

function LearnPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learn"
        title="Learn hardware by building, testing and understanding real systems"
        intro="The documentation and labs are part of the product, not an afterthought. Start anywhere; every track assumes only the track before it."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="text-2xl font-bold">Tracks</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => (
            <Card key={t.name}>
              <h3 className="font-display text-base font-bold">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.copy}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="text-2xl font-bold">Ultimate Hardware Lab course</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Fourteen labs, unlocked with the kit. Each one ends with something working on your
            bench.
          </p>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
            {labs.map((lab, i) => (
              <li key={lab} className="flex items-baseline gap-4 bg-card px-5 py-4 text-sm">
                <span className="font-mono text-xs text-primary">
                  Lab {String(i + 1).padStart(2, "0")}
                </span>
                {lab}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="text-2xl font-bold">Reading</h2>
        <ul className="mt-8 divide-y divide-border overflow-hidden rounded-md border border-border">
          {articles.map((a) => (
            <li key={a} className="bg-card px-5 py-4 text-sm">
              {a}
            </li>
          ))}
        </ul>
        <Link
          to="/shop"
          className="mt-10 inline-flex rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Get the hardware
        </Link>
      </section>
    </>
  );
}
