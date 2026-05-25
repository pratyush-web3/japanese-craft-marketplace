import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { products, categories, formatYen } from "@/lib/data";
import { useState } from "react";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "工芸品マーケット — 和巧 Wakō" },
      {
        name: "description",
        content: "陶磁器・包丁・木工・染織・茶道具など、日本の職人による手仕事の一点物を集めたマーケットプレイス。",
      },
    ],
    links: [{ rel: "canonical", href: "/marketplace" }],
  }),
  component: Marketplace,
});

function Marketplace() {
  const [filter, setFilter] = useState<string>("all");
  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <SiteShell>
      <PageHeader
        kicker="MARKETPLACE / 工芸品一覧"
        title="日本各地から、手の温度のままに。"
        subtitle="八百を超える在庫から、編集部が選び抜いた一点物・限定品をご紹介します。気に入った器は、その日のうちに職人の工房から発送されます。"
      />

      <section className="px-6 lg:px-12 py-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-wrap gap-3 mb-12">
            <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>
              すべて
            </FilterPill>
            {categories.map((c) => (
              <FilterPill
                key={c.slug}
                active={filter === c.slug}
                onClick={() => setFilter(c.slug)}
              >
                {c.name}
              </FilterPill>
            ))}
          </div>

          <div className="text-xs text-muted-foreground mb-8 tracking-wider">
            {filtered.length} 点の作品
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filtered.map((p) => (
              <Link
                key={p.id}
                to="/product/$id"
                params={{ id: p.id }}
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="pt-6 flex items-start justify-between gap-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-cedar">
                      {p.region}
                    </div>
                    <h3 className="mt-2 font-serif text-2xl text-ink leading-snug">
                      {p.name}
                    </h3>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {p.artisan} 作
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-serif text-lg">{formatYen(p.price)}</div>
                    <div className="text-[10px] uppercase tracking-widest text-gold mt-1">
                      {p.edition}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 text-sm tracking-wider border transition ${
        active
          ? "bg-ink text-cream border-ink"
          : "bg-transparent text-ink border-border hover:border-cedar"
      }`}
    >
      {children}
    </button>
  );
}
