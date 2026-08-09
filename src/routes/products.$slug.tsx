import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Check, FileText, Package, ShieldCheck, Truck } from "lucide-react";

import heroBoard from "@/assets/hero-board.jpg";
import modulesExploded from "@/assets/modules-exploded.jpg";
import inHand from "@/assets/in-hand.jpg";
import starterKit from "@/assets/starter-kit.jpg";
import { Card, Eyebrow } from "@/components/site/Primitives";
import { bundles, labs, products, useCases } from "@/data/catalog";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable — Hardlab" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Hardlab` },
        { name: "description", content: product.tagline },
        { property: "og:title", content: `${product.name} — Hardlab` },
        { property: "og:description", content: product.tagline },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.tagline,
            brand: { "@type": "Brand", name: "Hardlab" },
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          }),
        },
      ],
    };
  },
  component: ProductPage,
});

const gallery = [
  { src: heroBoard, alt: "Core board with modules installed", w: 1600, h: 1104 },
  { src: modulesExploded, alt: "Exploded view of every module in the kit", w: 1408, h: 1008 },
  { src: inHand, alt: "Board held in hand for scale on a workbench", w: 1200, h: 912 },
  { src: starterKit, alt: "Full kit contents laid out flat", w: 1200, h: 912 },
];

const specs = [
  ["MCU", "ESP32-S3, 16 MB flash, 8 MB PSRAM"],
  ["Display", "1.9\" IPS, 170 × 320, SPI"],
  ["Radio slots", "2 × keyed daughter-board connectors"],
  ["Sub-GHz", "868 / 915 MHz transceiver module, SMA"],
  ["2.4 GHz", "Transceiver module, SMA"],
  ["NFC / RFID", "13.56 MHz reader / writer"],
  ["Positioning", "GNSS L1 with patch antenna"],
  ["Infrared", "38 kHz transmit and demodulating receive"],
  ["Storage", "microSD, SPI"],
  ["Expansion", "Qwiic / I2C, UART, SPI headers"],
  ["Power", "USB-C, LiPo charging, battery gauge"],
  ["Firmware", "Open source, PlatformIO project"],
];

const faqs = [
  {
    q: "Do I need soldering skills?",
    a: "No. Modules seat into keyed connectors and the kit ships assembled. Soldering only comes up in the PCB expansion lab, which is optional.",
  },
  {
    q: "What is this platform for?",
    a: "Education, development, diagnostics, research and testing on equipment you own or are explicitly authorized to test. The responsible-use policy is part of the documentation.",
  },
  {
    q: "Can I write my own firmware?",
    a: "That's the point. Board definitions, pinouts, libraries, examples and the API are published, and the SDK firmware layer is meant to be forked.",
  },
  {
    q: "Are schematics available?",
    a: "Yes. Schematics, pinouts and mechanical drawings are in the docs for every board and module.",
  },
];

const softwareLayers = [
  ["Stable", "Signed release for everyday use, updated in place from the desktop app."],
  ["Beta", "New features early, opt-in channel, changelog per build."],
  ["SDK", "PlatformIO project, board definitions, libraries and examples."],
];

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [shot, setShot] = useState(0);
  const [kit, setKit] = useState(bundles[bundles.length - 1]!.name);
  const [qty, setQty] = useState(1);

  const related = useMemo(
    () => products.filter((p) => p.slug !== product.slug).slice(0, 4),
    [product.slug],
  );

  const current = gallery[shot] ?? gallery[0]!;
  const kitPrice = bundles.find((b) => b.name === kit)?.price ?? product.price;

  return (
    <>
      <section className="border-b border-border bench-glow">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <img
              src={current.src}
              alt={current.alt}
              width={current.w}
              height={current.h}
              className="w-full rounded-md border border-border object-cover"
            />
            <div className="mt-3 grid grid-cols-4 gap-3">
              {gallery.map((g, i) => (
                <button
                  key={g.alt}
                  type="button"
                  onClick={() => setShot(i)}
                  aria-label={g.alt}
                  className={`overflow-hidden rounded-sm border ${
                    i === shot ? "border-primary" : "border-border"
                  }`}
                >
                  <img src={g.src} alt="" loading="lazy" className="h-20 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow>{product.category}</Eyebrow>
            <h1 className="mt-4 text-3xl font-bold md:text-4xl">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.tagline}</p>

            <div className="mt-7 flex items-baseline gap-4">
              <span className="font-display text-3xl font-bold">${kitPrice}</span>
              <span className="font-mono text-xs text-signal">{product.stock}</span>
            </div>

            <div className="mt-7 space-y-5">
              <div>
                <label className="label-mono" htmlFor="kit">
                  Kit
                </label>
                <div id="kit" className="mt-2 flex flex-wrap gap-2">
                  {bundles.map((b) => (
                    <button
                      key={b.name}
                      type="button"
                      onClick={() => setKit(b.name)}
                      className={`rounded-sm border px-3.5 py-2 text-sm transition-colors ${
                        kit === b.name
                          ? "border-primary bg-primary/15 text-primary"
                          : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {b.name} · ${b.price}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-end gap-4">
                <div>
                  <label className="label-mono" htmlFor="qty">
                    Quantity
                  </label>
                  <input
                    id="qty"
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                    className="mt-2 w-24 rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                  />
                </div>
                <button
                  type="button"
                  className="flex-1 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Add to Cart — ${kitPrice * qty}
                </button>
              </div>
            </div>

            <ul className="mt-7 grid gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" /> Ships from the EU and US
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> 2-year warranty
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> Documentation included
              </li>
              <li className="flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" /> Open-source firmware
              </li>
            </ul>
            <p className="label-mono mt-4">Skill level · {product.level}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">What's included</h2>
            <ul className="mt-6 space-y-2.5">
              {product.includes.map((i: string) => (
                <li key={i} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Board diagram</h2>
            <pre className="mt-6 overflow-x-auto rounded-md border border-border bg-surface/60 p-5 font-mono text-xs leading-relaxed text-muted-foreground">
{`CORE BOARD
  +-- RF SLOT A   sub-GHz  868/915 MHz
  +-- RF SLOT B   2.4 GHz
  +-- NFC         13.56 MHz reader/writer
  +-- GPS         GNSS L1
  +-- IR TX/RX    38 kHz
  +-- Qwiic / I2C sensor chain
  +-- UART        expansion
  +-- SPI         expansion`}
            </pre>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="text-2xl font-bold">Example projects</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.slice(0, 9).map((u) => (
              <li key={u} className="rounded-sm border border-border bg-card px-4 py-3 text-sm">
                {u}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Software & firmware</h2>
            <div className="mt-6 space-y-4">
              {softwareLayers.map(([name, copy]) => (
                <Card key={name}>
                  <span className="label-mono">{name} channel</span>
                  <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
                </Card>
              ))}
            </div>
            <Link
              to="/software"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Hardware Lab Manager <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Technical specifications</h2>
            <dl className="mt-6 divide-y divide-border overflow-hidden rounded-md border border-border">
              {specs.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[130px_1fr] gap-4 bg-card px-5 py-3 text-sm">
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="text-2xl font-bold">Learning labs</h2>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
            {labs.map((lab, i) => (
              <li key={lab} className="flex items-baseline gap-4 bg-card px-5 py-4 text-sm">
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {lab}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {faqs.map((f) => (
            <Card key={f.q}>
              <h3 className="font-display text-base font-bold">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="text-2xl font-bold">Add-ons and accessories</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }}>
                <Card className="h-full">
                  <span className="label-mono">{p.category}</span>
                  <h3 className="mt-3 font-display text-base font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                  <p className="mt-4 font-display font-bold">${p.price}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
