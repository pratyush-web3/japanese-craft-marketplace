import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { journal } from "@/lib/data";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "ジャーナル — 和巧 Wakō" },
      { name: "description", content: "和巧編集部が綴る、工房訪問・職人インタビュー・工芸の歴史と現在。" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: Journal,
});

function Journal() {
  const [first, ...rest] = journal;
  return (
    <SiteShell>
      <PageHeader
        kicker="JOURNAL / ジャーナル"
        title="工房から、土地から、手のあとから。"
        subtitle="和巧編集部が、日本各地の職人と工芸の現在を綴ります。月に四本、新しい記事を更新しています。"
      />

      <section className="px-6 lg:px-12 py-20">
        <div className="mx-auto max-w-[1400px]">
          <Link to="/journal" className="group block mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={first.image} alt={first.title} className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-cedar mb-5">
                  特集 ／ {first.category} ／ {first.readTime}
                </div>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                  {first.title}
                </h2>
                <p className="mt-6 text-ink/80 leading-relaxed">{first.excerpt}</p>
                <div className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
                  {first.author} ／ {first.date}
                </div>
              </div>
            </div>
          </Link>

          <div className="hairline" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {[...rest, ...journal].map((p, i) => (
              <Link to="/journal" key={`${p.slug}-${i}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                </div>
                <div className="mt-5 text-[10px] uppercase tracking-widest text-cedar">
                  {p.category} ／ {p.date}
                </div>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-ink">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">{p.excerpt}</p>
                <div className="mt-4 text-xs text-muted-foreground">
                  {p.author} ／ {p.readTime}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
