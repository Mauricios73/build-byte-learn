import { createFileRoute } from "@tanstack/react-router";

import { Card, PageHeader } from "@/components/site/Primitives";

export const Route = createFileRoute("/responsible-use")({
  head: () => ({
    meta: [
      { title: "Responsible use policy — Hardlab" },
      {
        name: "description",
        content:
          "Hardlab hardware is sold for education, development, diagnostics, research and testing on systems you own or are explicitly authorized to test.",
      },
      { property: "og:title", content: "Responsible use policy — Hardlab" },
      {
        property: "og:description",
        content: "What this hardware is for, and what it isn't for.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/responsible-use" },
    ],
    links: [{ rel: "canonical", href: "/responsible-use" }],
  }),
  component: ResponsibleUsePage,
});

const allowed = [
  "Learning embedded systems and radio fundamentals",
  "Developing and debugging your own firmware and products",
  "Diagnostics and repair on equipment you own",
  "Academic research and coursework",
  "Security testing you are explicitly authorized to perform",
];

const notAllowed = [
  "Interfering with equipment or networks you do not own",
  "Transmitting outside the bands and power limits your local regulator allows",
  "Accessing, cloning or modifying credentials that are not yours",
  "Any use intended to disrupt, defraud or surveil other people",
];

function ResponsibleUsePage() {
  return (
    <>
      <PageHeader
        eyebrow="Policy"
        title="Responsible use"
        intro="This is a learning and development platform. Radio, NFC and IR are regulated in most places, and the rules are part of the engineering."
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="font-display text-lg font-bold text-signal">Intended use</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {allowed.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="text-signal">+</span>
                  {a}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="font-display text-lg font-bold text-destructive">Not permitted</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {notAllowed.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="text-destructive">−</span>
                  {a}
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
          Buyers are responsible for complying with local radio, privacy and computer-misuse law.
          Orders that indicate intent to violate this policy are cancelled.
        </p>
      </section>
    </>
  );
}
