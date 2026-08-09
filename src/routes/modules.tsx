import { createFileRoute, Link } from "@tanstack/react-router";

import modulesExploded from "@/assets/modules-exploded.jpg";
import { Card, PageHeader } from "@/components/site/Primitives";
import { products } from "@/data/catalog";

export const Route = createFileRoute("/modules")({
  head: () => ({
    meta: [
      { title: "Modules — RF, NFC, GPS, IR and sensors | Hardlab" },
      {
        name: "description",
        content:
          "Daughter boards for the Hardlab core: sub-GHz and 2.4 GHz radio, NFC/RFID, GPS, infrared, Qwiic sensors and antennas.",
      },
      { property: "og:title", content: "Modules — RF, NFC, GPS, IR and sensors | Hardlab" },
      {
        property: "og:description",
        content: "Upgrade by swapping a module, not by buying a new platform.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/modules" },
    ],
    links: [{ rel: "canonical", href: "/modules" }],
  }),
  component: ModulesPage,
});

function ModulesPage() {
  const modules = products.filter((p) =>
    ["Wireless Modules", "NFC & RFID", "Sensors", "Accessories", "Replacement Parts"].includes(
      p.category,
    ),
  );

  return (
    <>
      <PageHeader
        eyebrow="Modules"
        title="Swap a module, not the platform"
        intro="Every radio, reader and sensor is a keyed daughter board with its own pinout card, schematic and lab."
      />
      <section className="mx-auto max-w-7xl px-5 pt-12">
        <img
          src={modulesExploded}
          alt="All Hardlab modules laid out around the core board"
          width={1408}
          height={1008}
          loading="lazy"
          className="w-full rounded-md border border-border"
        />
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }}>
              <Card className="h-full">
                <span className="label-mono">{p.category}</span>
                <h2 className="mt-3 font-display text-base font-bold">{p.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                <p className="mt-4 font-display font-bold">${p.price}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
