import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { artisans } from "@/lib/data";

export const Route = createFileRoute("/artisans")({
  head: () => ({
    meta: [
      { title: "職人たち — 和巧 Wakō" },
      { name: "description", content: "和巧が信頼する一二〇人の職人。それぞれの工房、土地、哲学をご紹介します。" },
    ],
    links: [{ rel: "canonical", href: "/artisans" }],
  }),
  component: ArtisansPage,
});

function ArtisansPage() {
  return (
    <SiteShell>
      <PageHeader
        kicker="ARTISANS / 職人たち"
        title="手のあとを残す、一二〇人の作り手。"
        subtitle="北海道から沖縄まで、日本全国の工房を訪ね、ともに歩める職人だけと取り組んでいます。一人ひとりに、土地と時間と物語があります。"
      />

      <section className="px-6 lg:px-12 py-24">
        <div className="mx-auto max-w-[1600px] space-y-32">
          {artisans.concat(artisans).map((a, i) => (
            <article
              key={`${a.slug}-${i}`}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-6">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={a.portrait} alt={a.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-6 lg:px-8">
                <div className="text-[11px] uppercase tracking-[0.35em] text-cedar mb-5">
                  No. {String(i + 1).padStart(3, "0")} ／ {a.region}
                </div>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                  {a.name}
                </h2>
                <div className="mt-2 text-muted-foreground">
                  {a.craft} ／ 経験 {a.years} 年
                </div>
                <div className="hairline w-24 opacity-50 mt-8" />
                <p className="mt-8 text-ink/85 leading-relaxed">{a.bio}</p>
                <blockquote className="mt-8 font-serif text-xl italic text-cedar leading-relaxed border-l-2 border-gold pl-6">
                  「{a.philosophy}」
                </blockquote>
                <div className="mt-10 text-xs uppercase tracking-widest text-cedar link-underline cursor-pointer w-fit">
                  作品を見る →
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
