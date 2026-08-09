import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { PageHeader, Card } from "@/components/site/Primitives";
import { products, shopCategories, bundles } from "@/data/catalog";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop kits, boards and modules — Hardlab" },
      {
        name: "description",
        content:
          "Starter kits, ESP32-S3 development boards, wireless modules, NFC/RFID readers, sensors, accessories and replacement parts.",
      },
      { property: "og:title", content: "Shop kits, boards and modules — Hardlab" },
      {
        property: "og:description",
        content: "Modular hardware for learning embedded systems and wireless development.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [active, setActive] = useState("Shop All");
  const list = active === "Shop All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Shop"
        title="Hardware you can open, read and repair"
        intro="Every item ships with a pinout, a schematic reference and the firmware that runs on it."
      />

      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-wrap gap-2">
          {shopCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-sm border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                active === c
                  ? "border-primary/60 bg-primary/15 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }}>
              <Card className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="label-mono">{p.category}</span>
                  <span className="font-mono text-[11px] text-signal">{p.stock}</span>
                </div>
                <h2 className="mt-3 font-display text-lg font-bold">{p.name}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-display text-lg font-bold">${p.price}</span>
                  <span className="label-mono">{p.level}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold">Bundles</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Logical steps up the platform instead of a wall of SKUs.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {bundles.map((b) => (
              <Card key={b.name}>
                <span className="label-mono">Bundle</span>
                <h3 className="mt-3 font-display text-lg font-bold">{b.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.summary}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {b.adds.map((a) => (
                    <li key={a} className="flex gap-2 text-muted-foreground">
                      <span className="text-primary">+</span>
                      {a}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-display text-xl font-bold">${b.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
