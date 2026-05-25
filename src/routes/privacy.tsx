import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "プライバシーポリシー — 和巧 Wakō" },
      { name: "description", content: "和巧における個人情報の取り扱いについて。" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <SiteShell>
      <PageHeader kicker="PRIVACY / プライバシーポリシー" title="お客様の情報を、誠実に扱います。" />
      <section className="px-6 lg:px-12 py-20">
        <article className="mx-auto max-w-[800px] prose-content space-y-10 text-ink/85 leading-loose">
          <p>
            株式会社 和巧（以下「当社」）は、お客様の個人情報を、日本国の個人情報の保護に関する法律およびその他関連法令を遵守し、適切に取り扱います。本ポリシーは、当社の運営するウェブサイト wako-craft.jp（以下「当サイト」）における個人情報の取り扱いについて定めるものです。
          </p>

          <Section n="01" t="取得する情報">
            お名前、住所、電話番号、メールアドレス、お支払い情報、ご注文履歴、お問い合わせ内容、当サイトの閲覧履歴、Cookie情報、IPアドレス、デバイス情報などを取得します。
          </Section>

          <Section n="02" t="利用目的">
            商品の発送・代金請求・カスタマーサポート、新商品やキャンペーン情報のご案内、サービス品質向上のための分析、法令に基づく対応のため利用します。
          </Section>

          <Section n="03" t="第三者提供">
            お客様の同意なく、個人情報を第三者に提供することはありません。ただし、配送業務委託先、決済処理業者、法令に基づく開示請求があった場合を除きます。
          </Section>

          <Section n="04" t="Cookieの使用">
            当サイトでは、利便性向上およびアクセス解析のためCookieを使用しています。ブラウザの設定により無効化できますが、一部機能が制限される場合があります。
          </Section>

          <Section n="05" t="安全管理">
            個人情報の漏洩・滅失・毀損の防止のため、SSL暗号化通信、アクセス権限管理、定期的な脆弱性診断を実施しています。
          </Section>

          <Section n="06" t="開示・訂正・削除のご請求">
            お客様ご自身の個人情報について、開示・訂正・利用停止・削除をご請求いただけます。下記窓口までご連絡ください。
          </Section>

          <Section n="07" t="お問い合わせ窓口">
            株式会社 和巧 個人情報保護管理者
            <br />
            京都市東山区祇園町南側 570-128
            <br />
            privacy@wako-craft.jp
          </Section>

          <p className="text-sm text-muted-foreground mt-16">
            最終改定日：2025 年 12 月 01 日
          </p>
        </article>
      </section>
    </SiteShell>
  );
}

function Section({ n, t, children }: { n: string; t: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-serif text-2xl text-gold">{n}</span>
        <h2 className="font-serif text-2xl text-ink">{t}</h2>
      </div>
      <p>{children}</p>
    </div>
  );
}
