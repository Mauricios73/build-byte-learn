import { createFileRoute } from "@tanstack/react-router";

import { Card, PageHeader } from "@/components/site/Primitives";
import { products } from "@/data/catalog";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation — pinouts, schematics, API | Hardlab" },
      {
        name: "description",
        content:
          "Every board ships with an overview, pinout, schematic, firmware, installation guide, API, examples, troubleshooting, downloads and changelog.",
      },
      { property: "og:title", content: "Documentation — pinouts, schematics, API | Hardlab" },
      {
        property: "og:description",
        content: "Documentation is part of the product, not a PDF afterthought.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/docs" },
    ],
    links: [{ rel: "canonical", href: "/docs" }],
  }),
  component: DocsPage,
});

const docSections = [
  "Overview",
  "Pinout",
  "Schematic",
  "Firmware",
  "Installation",
  "API",
  "Examples",
  "Troubleshooting",
  "Downloads",
  "Changelog",
];

function DocsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Docs"
        title="Every board documented the same way"
        intro="Ten sections, identical structure, for the core board and for every module. If it's on the PCB, it's in the docs."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <nav aria-label="Documented hardware">
            <h2 className="label-mono">Hardware</h2>
            <ul className="mt-4 space-y-1.5">
              {products.map((p) => (
                <li key={p.slug} className="text-sm text-muted-foreground">
                  {p.name}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-2xl font-bold">Standard page structure</h2>
            <div className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
              {docSections.map((s, i) => (
                <div key={s} className="flex items-baseline gap-4 bg-card px-5 py-4">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm">{s}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Card>
                <h3 className="font-display text-base font-bold">Pinout example</h3>
                <pre className="mt-4 overflow-x-auto font-mono text-xs leading-relaxed text-muted-foreground">
{`RF SLOT A
  1  3V3
  2  GND
  3  SCK    GPIO12
  4  MISO   GPIO13
  5  MOSI   GPIO11
  6  CS     GPIO10
  7  GDO0   GPIO9
  8  GDO2   GPIO8`}
                </pre>
              </Card>
              <Card>
                <h3 className="font-display text-base font-bold">Downloads</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Schematic (PDF)</li>
                  <li>Mechanical drawing (DXF)</li>
                  <li>Pinout card (PDF)</li>
                  <li>Firmware release (BIN)</li>
                  <li>PlatformIO project (ZIP)</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
