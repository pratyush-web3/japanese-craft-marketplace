import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "配送について — 和巧 Wakō" },
      { name: "description", content: "国内および海外への配送、納期、送料、梱包に関するご案内。" },
    ],
    links: [{ rel: "canonical", href: "/shipping" }],
  }),
  component: Shipping,
});

function Shipping() {
  return (
    <SiteShell>
      <PageHeader
        kicker="SHIPPING / 配送について"
        title="土地から、玄関まで。"
        subtitle="和巧は、職人の工房から直接、ひとつずつ丁寧に梱包してお届けします。"
      />

      <section className="px-6 lg:px-12 py-20">
        <div className="mx-auto max-w-[1100px] space-y-20">
          <div>
            <h2 className="font-serif text-3xl mb-8">国内配送</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-ink/85">
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-cedar mb-3">納期</div>
                <p className="leading-relaxed">在庫品：ご注文確定後 3〜7 営業日で発送いたします。受注製作品：4〜12 週間（作品により異なります）。</p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-cedar mb-3">送料</div>
                <p className="leading-relaxed">¥15,000 以上のご購入で送料無料。それ以下のご注文は全国一律 ¥1,200。沖縄・離島は ¥2,400。</p>
              </div>
            </div>
          </div>

          <div className="hairline" />

          <div>
            <h2 className="font-serif text-3xl mb-8">海外配送</h2>
            <p className="text-ink/85 leading-relaxed mb-8">
              現在、世界 60 カ国以上へ DHL Express にてお届けしています。所要日数は地域によります。
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-y border-border text-left text-[11px] uppercase tracking-widest text-cedar">
                  <th className="py-4 pr-6">地域</th>
                  <th className="py-4 pr-6">所要日数</th>
                  <th className="py-4">送料目安</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["東アジア（中国・韓国・台湾・香港）", "3〜5 日", "¥3,800〜"],
                  ["東南アジア", "4〜6 日", "¥4,800〜"],
                  ["北米（USA・カナダ）", "5〜7 日", "¥6,400〜"],
                  ["欧州", "5〜8 日", "¥7,200〜"],
                  ["オセアニア", "5〜8 日", "¥6,800〜"],
                  ["中東", "6〜10 日", "¥8,400〜"],
                ].map((r) => (
                  <tr key={r[0]}>
                    <td className="py-4 pr-6 font-serif">{r[0]}</td>
                    <td className="py-4 pr-6">{r[1]}</td>
                    <td className="py-4">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-6">
              ※ 輸入関税・消費税はお届け先国の制度に従い、お客様のご負担となります。
            </p>
          </div>

          <div className="hairline" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl mb-6">梱包</h2>
              <p className="text-ink/85 leading-relaxed">
                陶磁器・ガラス器は、職人の手で和紙に包み、桐箱または木箱に納めて発送いたします。包装は再利用可能な素材を選び、プラスチック使用を最小限にとどめています。
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl mb-6">ギフト</h2>
              <p className="text-ink/85 leading-relaxed">
                熨斗・名入れ・包装紙のご指定を承っています。ご注文時の備考欄、または別途お問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
