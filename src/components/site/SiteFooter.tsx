import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "Shop all" },
      { to: "/devices", label: "Devices" },
      { to: "/modules", label: "Modules" },
    ],
  },
  {
    title: "Learn",
    links: [
      { to: "/learn", label: "Curriculum" },
      { to: "/docs", label: "Documentation" },
      { to: "/software", label: "Firmware & tools" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/community", label: "Community" },
      { to: "/responsible-use", label: "Responsible use" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="font-display text-sm font-bold">
              HARDLAB<span className="text-primary">.</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Open hardware and software kits for embedded systems, wireless research,
              electronics and authorized security training.
            </p>
            <p className="label-mono mt-6">Open hardware · Schematics · Repairable</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="label-mono">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Hardlab. All hardware documented.</span>
          <span className="font-mono">
            Sold for education, development and authorized testing only.
          </span>
        </div>
      </div>
    </footer>
  );
}
