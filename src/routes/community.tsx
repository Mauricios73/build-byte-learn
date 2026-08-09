import { createFileRoute } from "@tanstack/react-router";

import inHand from "@/assets/in-hand.jpg";
import { Card, PageHeader } from "@/components/site/Primitives";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — builds, modules and challenges | Hardlab" },
      {
        name: "description",
        content:
          "Discord, GitHub, a project gallery, monthly build challenges and Module of the Month — community-designed expansion boards we manufacture.",
      },
      { property: "og:title", content: "Community — builds, modules and challenges | Hardlab" },
      {
        property: "og:description",
        content: "Built by the community: cyberdecks, RF analyzers and university projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: CommunityPage,
});

const builds = [
  { quote: "Built my first RF analyzer with the sub-GHz module and lab 09.", by: "Marek, Brno" },
  { quote: "Used it for my university embedded systems project — the SPI lab saved me weeks.", by: "Ana, Lisbon" },
  { quote: "Turned mine into a cyberdeck with a split keyboard and a bigger battery.", by: "Devon, Austin" },
];

const flywheel = [
  { name: "Discord", copy: "Bench help, firmware talk and module design review." },
  { name: "GitHub", copy: "Firmware, SDK, board definitions and issue tracking." },
  { name: "Project gallery", copy: "Submit a build; the best ones get featured on product pages." },
  { name: "Module of the Month", copy: "Customers submit expansion designs. The winner gets manufactured." },
];

function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="Built by the community"
        intro="The platform gets better when the people using it design for it. Contributions land in firmware, docs and the module catalog."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {builds.map((b) => (
            <Card key={b.by}>
              <p className="text-base">&ldquo;{b.quote}&rdquo;</p>
              <p className="label-mono mt-4">{b.by}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center">
          <img
            src={inHand}
            alt="A community member's board running on a workbench next to an oscilloscope"
            width={1200}
            height={912}
            loading="lazy"
            className="rounded-md border border-border"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {flywheel.map((f) => (
              <Card key={f.name}>
                <h2 className="font-display text-base font-bold">{f.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{f.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
