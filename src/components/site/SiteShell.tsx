import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-20 sm:pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-12 pt-16 sm:pt-24 pb-16 sm:pb-20 border-b border-border">
      <div className="mx-auto max-w-[1400px]">
        {kicker && (
          <div className="text-[11px] uppercase tracking-[0.35em] text-cedar mb-6 animate-fade-up">
            — {kicker}
          </div>
        )}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl text-ink leading-[1.05] max-w-4xl animate-fade-up text-balance">
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
