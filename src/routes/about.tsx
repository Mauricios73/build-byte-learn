import { createFileRoute, Link } from "@tanstack/react-router";

import { Card, PageHeader } from "@/components/site/Primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hardlab — an open hardware learning platform" },
      {
        name: "description",
        content:
          "We compete on integration, firmware, documentation, education, support, design and modularity — not on component price.",
      },
      { property: "og:title", content: "About Hardlab — an open hardware learning platform" },
      {
        property: "og:description",
        content: "Hardware, software and learning, built as one ecosystem.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  ["Integration", "Modules, firmware and labs designed against each other, not bolted together."],
  ["Documentation", "Ten standard sections per board. Schematics published."],
  ["Education", "A curriculum, not a wiki. Every lab ends in working hardware."],
  ["Support", "Real answers from people who designed the board."],
  ["Design", "Repairable, keyed connectors, stocked spare parts."],
  ["Community", "Contributors ship features and modules into the ecosystem."],
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Learn hardware security by building, testing and understanding real systems"
        intro="You can buy the raw modules for less somewhere else. You won't get the platform: firmware, documentation, labs, tooling and support that assume each other."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(([name, copy]) => (
            <Card key={name}>
              <h2 className="font-display text-base font-bold">{name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="text-2xl font-bold">The ecosystem</h2>
          <pre className="mt-8 overflow-x-auto rounded-md border border-border bg-background p-6 font-mono text-xs leading-relaxed text-muted-foreground">
{`                     CORE
                       |
        +--------------+--------------+
     Hardware       Software        Learn
     core board     firmware        courses
     RF modules     updater         labs
     NFC modules    SDK             docs
     sensors        desktop app     videos
        +--------------+--------------+
                   community`}
          </pre>
          <Link
            to="/responsible-use"
            className="mt-8 inline-flex text-sm font-semibold text-primary"
          >
            Read our responsible-use policy
          </Link>
        </div>
      </section>
    </>
  );
}
