import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import heritage from "@/assets/heritage.jpg";
import pottery from "@/assets/hero-pottery.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "私たちについて — 和巧 Wakō" },
      { name: "description", content: "京都発のラグジュアリー工芸マーケットプレイス「和巧」の理念と歩み。" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <PageHeader
        kicker="ABOUT / 私たちについて"
        title="技術を残すことは、暮らしを残すこと。"
        subtitle="和巧は、日本の手仕事を世界の暮らしへつなぐマーケットプレイスです。職人と買い手の距離を最短にし、土地に根ざした技術が未来へ受け継がれる仕組みをつくっています。"
      />

      <section className="px-6 lg:px-12 py-24">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.35em] text-cedar mb-5">
              — 理念
            </div>
            <h2 className="font-serif text-4xl leading-tight">
              手のあとを、未来へ。
            </h2>
          </div>
          <div className="lg:col-span-7 text-ink/85 leading-loose space-y-6">
            <p>
              和巧は、二〇二〇年、京都・祇園の小さな町家から始まりました。創業者の中村結は、母方の祖父が出雲の陶芸家でした。祖父が亡くなったとき、窯場は一夜にして静かになり、誰も継ぐ者がいませんでした。そのときに気づいたのは、技術は人がいなければ続かないということでした。
            </p>
            <p>
              職人は、注文があるかぎり、手を動かし続けることができます。だから私たちは、世界中の使い手と職人を直接つなぐマーケットプレイスをつくりました。仲介を最小化し、職人に正当な対価を、買い手に物語のある一点ものをお届けします。
            </p>
            <p>
              売上の三%は、若手職人の弟子入り支援基金へ。これまでに二十四名の若手職人を支援してきました。
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <img src={heritage} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-sumi/55" />
        <div className="relative h-full flex items-center justify-center px-6">
          <blockquote className="font-serif text-cream text-3xl md:text-5xl text-center max-w-3xl leading-tight text-balance">
            「美しいものは、急がない。
            <br />
            待つことが、ものを育てる。」
          </blockquote>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-20">
            和巧の三つの約束。
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                n: "01",
                t: "産地直送",
                d: "ご注文を受けてから、職人の工房から直接お届けします。在庫の倉庫を持ちません。",
              },
              {
                n: "02",
                t: "公正な対価",
                d: "売上の七十%以上を職人へ。価格は職人自身が決定します。",
              },
              {
                n: "03",
                t: "永く使うために",
                d: "金継ぎ、研ぎ直し、洗い直し。購入後の修繕も職人と取り次ぎます。",
              },
            ].map((x) => (
              <div key={x.n} className="border-t border-border pt-8">
                <div className="text-gold font-serif text-3xl">{x.n}</div>
                <h3 className="mt-6 font-serif text-2xl">{x.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 lg:px-12 py-24 border-y border-border">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <img src={pottery} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-cedar mb-5">
              — 沿革
            </div>
            <h2 className="font-serif text-4xl leading-tight mb-10">
              五年で、一二〇の工房と。
            </h2>
            <dl className="space-y-6 border-l border-border pl-8">
              {[
                ["2020", "京都・祇園にて創業。最初の取り扱いは出雲の陶芸家三名。"],
                ["2021", "オンラインマーケットプレイス開設。取扱職人三十名へ。"],
                ["2022", "若手職人支援基金を設立。海外配送を六十カ国に拡大。"],
                ["2023", "ニューヨーク・パリにて初の常設展示会を開催。"],
                ["2024", "取扱職人一二〇名。年間流通額八億円を突破。"],
                ["2025", "工芸ジャーナル創刊、世界十二都市での巡回展を予定。"],
              ].map(([y, d]) => (
                <div key={y} className="grid grid-cols-[80px_1fr] gap-6">
                  <dt className="font-serif text-2xl text-cedar">{y}</dt>
                  <dd className="text-ink/85 leading-relaxed pt-1">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
