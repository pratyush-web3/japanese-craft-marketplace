import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "利用規約 — 和巧 Wakō" },
      { name: "description", content: "和巧マーケットプレイスの利用規約。" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  const sections = [
    ["01", "総則", "本規約は、株式会社 和巧（以下「当社」）が運営する工芸品マーケットプレイス「和巧 Wakō」（以下「本サービス」）の利用条件を定めるものです。本サービスをご利用になる前に、本規約をよくお読みください。"],
    ["02", "会員登録", "本サービスのご利用にあたり、メールアドレスその他必要事項のご登録をお願いしています。虚偽の情報を登録された場合、当社は会員資格を停止することがあります。"],
    ["03", "ご注文と契約", "お客様が商品をご注文され、当社が注文確認メールを発信した時点で、売買契約が成立するものとします。受注製作品は、職人の制作開始通知をもって契約成立とします。"],
    ["04", "価格と支払い", "商品の価格は、すべて日本円（消費税込）で表示しています。支払い方法は、決済画面に表示される方法からお選びいただけます。"],
    ["05", "配送と所有権", "商品の所有権は、お客様への引渡しをもって移転します。配送中の事故については、当社が責任を負います。"],
    ["06", "返品・交換", "在庫品は到着後14日以内、未使用・元の梱包に限り返品を承ります。一点物・受注製作品は、初期不良を除きご返品いただけません。"],
    ["07", "知的財産権", "本サイト上のすべてのテキスト・画像・デザインの著作権は、当社または個々の職人に帰属します。無断転載・複製を禁じます。"],
    ["08", "禁止事項", "法令違反、第三者の権利侵害、本サービスの運営妨害、不正アクセスなどの行為を禁じます。"],
    ["09", "免責事項", "天災・通信障害・配送業者の事情等、当社の責に帰すべからざる事由による損害について、当社は責任を負いません。"],
    ["10", "規約の変更", "当社は、必要に応じて本規約を変更することがあります。変更後の規約は、本サイトに掲示した時点から効力を生じます。"],
    ["11", "準拠法・管轄", "本規約は日本法に準拠し、本サービスに関する紛争は、京都地方裁判所を第一審の専属的合意管轄裁判所とします。"],
  ];

  return (
    <SiteShell>
      <PageHeader kicker="TERMS / 利用規約" title="互いの信頼のために、明確に。" />
      <section className="px-6 lg:px-12 py-20">
        <article className="mx-auto max-w-[800px] space-y-12 text-ink/85 leading-loose">
          {sections.map(([n, t, b]) => (
            <div key={n}>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-serif text-2xl text-gold">{n}</span>
                <h2 className="font-serif text-2xl">{t}</h2>
              </div>
              <p>{b}</p>
            </div>
          ))}
          <p className="text-sm text-muted-foreground pt-10">最終改定日：2025 年 12 月 01 日</p>
        </article>
      </section>
    </SiteShell>
  );
}
