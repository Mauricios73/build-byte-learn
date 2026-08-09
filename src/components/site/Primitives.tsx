import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="label-mono flex items-center gap-2">
      <span className="inline-block h-px w-6 bg-primary" />
      {children}
    </p>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-border bench-glow">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{intro}</p>
      </div>
    </section>
  );
}

export function Section({
  title,
  eyebrow,
  children,
  className = "",
}: {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-5 py-16 ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && <h2 className="mt-4 text-2xl font-bold md:text-3xl">{title}</h2>}
      <div className={title || eyebrow ? "mt-8" : ""}>{children}</div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-md border border-border bg-card p-6 transition-colors hover:border-primary/50 ${className}`}
    >
      {children}
    </div>
  );
}
