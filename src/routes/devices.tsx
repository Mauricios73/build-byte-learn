import { createFileRoute, Link } from "@tanstack/react-router";

import { Card, PageHeader } from "@/components/site/Primitives";
import { products } from "@/data/catalog";

export const Route = createFileRoute("/devices")({
  head: () => ({
    meta: [
      { title: "Devices — kits and development boards | Hardlab" },
      {
        name: "description",
        content:
          "The Hardlab device family: Starter Lab, Wireless Lab, Ultimate Hardware Lab and the modular Ultimate Core Board.",
      },
      { property: "og:title", content: "Devices — kits and development boards | Hardlab" },
      {
        property: "og:description",
        content: "One modular core board, three kits, one upgrade path.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/devices" },
    ],
    links: [{ rel: "canonical", href: "/devices" }],
  }),
  component: DevicesPage,
});

function DevicesPage() {
  const devices = products.filter(
    (p) => p.category === "Starter Kits" || p.category === "Development Boards",
  );

  return (
    <>
      <PageHeader
        eyebrow="Devices"
        title="One platform, three entry points"
        intro="Kits differ by which modules are installed — not by which platform you're locked into. Every kit runs the same firmware and the same labs."
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {devices.map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }}>
              <Card className="h-full">
                <div className="flex items-center justify-between">
                  <span className="label-mono">{p.level}</span>
                  <span className="font-mono text-[11px] text-signal">{p.stock}</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-bold">{p.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                  {p.includes.slice(0, 6).map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">·</span>
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-display text-xl font-bold">${p.price}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
