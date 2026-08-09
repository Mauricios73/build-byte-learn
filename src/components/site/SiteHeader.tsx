import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/learn", label: "Learn" },
  { to: "/devices", label: "Devices" },
  { to: "/modules", label: "Modules" },
  { to: "/software", label: "Software" },
  { to: "/docs", label: "Docs" },
  { to: "/community", label: "Community" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-sm border border-primary/60 bg-primary/10 font-mono text-xs font-bold text-primary">
            HL
          </span>
          <span className="font-display text-sm font-bold tracking-tight">
            HARDLAB<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-sm px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/shop"
          className="ml-auto hidden shrink-0 items-center rounded-sm border border-primary/50 bg-primary/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary/20 lg:ml-0 lg:inline-flex"
        >
          Explore kits
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="ml-auto rounded-sm border border-border p-2 text-muted-foreground lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface px-5 py-3 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
