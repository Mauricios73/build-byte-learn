import { createFileRoute } from "@tanstack/react-router";
import { Download, Terminal, Usb, RefreshCw } from "lucide-react";

import { Card, PageHeader } from "@/components/site/Primitives";

export const Route = createFileRoute("/software")({
  head: () => ({
    meta: [
      { title: "Firmware, SDK and Hardware Lab Manager — Hardlab" },
      {
        name: "description",
        content:
          "Stable, beta and SDK firmware channels plus the Hardware Lab Manager desktop app for flashing, serial console, diagnostics and SD management.",
      },
      { property: "og:title", content: "Firmware, SDK and Hardware Lab Manager — Hardlab" },
      {
        property: "og:description",
        content: "Update firmware in one click instead of fighting drivers and COM ports.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/software" },
    ],
    links: [{ rel: "canonical", href: "/software" }],
  }),
  component: SoftwarePage,
});

const channels = [
  {
    name: "Stable",
    copy: "The build most people should run. Signed releases, in-place updates, documented changelog.",
  },
  {
    name: "Beta",
    copy: "New features first. Opt in from the desktop app and roll back at any time.",
  },
  {
    name: "SDK / developer",
    copy: "GitHub repo, PlatformIO project, board definitions, pinouts, libraries, examples and API reference.",
  },
];

const managerFeatures = [
  { icon: Usb, label: "Board detection" },
  { icon: RefreshCw, label: "Firmware flashing & updates" },
  { icon: Terminal, label: "Serial console" },
  { icon: Download, label: "File transfer & SD management" },
];

function SoftwarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Software"
        title="Firmware that's meant to be read and forked"
        intro="Three release channels, one desktop app, and no step in the setup guide that starts with 'install Python'."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((c) => (
            <Card key={c.name}>
              <span className="label-mono">Channel</span>
              <h2 className="mt-3 font-display text-lg font-bold">{c.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.copy}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold">Hardware Lab Manager</h2>
            <p className="mt-4 text-muted-foreground">
              Plug in the board and the app tells you what it is and what it's running. Flashing,
              configuration, diagnostics and module detection in one window.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {managerFeatures.map((f) => (
                <li key={f.label} className="flex items-center gap-2 text-sm">
                  <f.icon className="h-4 w-4 text-primary" />
                  {f.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-border bg-background p-6 font-mono text-sm">
            <p className="text-signal">● Device detected</p>
            <p className="mt-3 text-muted-foreground">Board</p>
            <p>Ultimate Board v1</p>
            <p className="mt-3 text-muted-foreground">Firmware</p>
            <p>1.4.2 · stable</p>
            <p className="mt-3 text-muted-foreground">Modules</p>
            <p>Sub-GHz · NFC · GPS</p>
            <div className="mt-5 rounded-sm bg-primary px-4 py-2.5 text-center text-primary-foreground">
              [ Update Firmware ]
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
