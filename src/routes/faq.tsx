import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "よくあるご質問 — 和巧 Wakō" },
      { name: "description", content: "和巧のご利用に関する、よくいただくご質問とお答え。" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQ,
});

const faqs = [
  {
    cat: "ご注文・お支払い",
    items: [
      {
        q: "注文してから、どのくらいで届きますか？",
        a: "在庫品は通常 3〜7 営業日で職人の工房から発送いたします。受注製作品は 4〜12 週間を目安に、それぞれの工房からご案内いたします。",
      },
      {
        q: "どのようなお支払い方法に対応していますか？",
        a: "クレジットカード（VISA／Mastercard／JCB／AMEX）、銀行振込、Apple Pay、Google Pay、PayPay、海外決済はStripeに対応しています。",
      },
      {
        q: "海外への配送は可能ですか？",
        a: "現在、世界 60 カ国以上に発送しております。配送料は重量と地域により変動します。チェックアウト時に自動計算されます。",
      },
    ],
  },
  {
    cat: "作品について",
    items: [
      {
        q: "「一点物」と書かれた作品の在庫は？",
        a: "一点物はその一つしか存在しません。同じ職人が同じ意匠で別の作品を制作することはありますが、まったく同一のものは生まれません。",
      },
      {
        q: "受注製作の作品とは？",
        a: "ご注文を受けてから、職人が一から制作する作品です。納期は数週間から数ヶ月かかりますが、寸法や仕様のご相談も承ります。",
      },
      {
        q: "作品の表情に違いがあるのは普通ですか？",
        a: "はい。手仕事のため、色味・釉薬の流れ・木目などに一点ずつ違いがあります。それを「景色」として愉しんでいただくのが、和の器の文化です。",
      },
    ],
  },
  {
    cat: "返品・修繕",
    items: [
      {
        q: "返品はできますか？",
        a: "商品到着後 14 日以内、未使用・元の梱包に限り、ご返品を承ります。一点物・受注製作品はご返品いただけません。",
      },
      {
        q: "破損した器を直してもらえますか？",
        a: "金継ぎ・漆継ぎなど、職人と連携した修繕サービスをご用意しています。お見積りを無料で承りますので、お問い合わせください。",
      },
    ],
  },
];

function FAQ() {
  return (
    <SiteShell>
      <PageHeader
        kicker="FAQ / よくあるご質問"
        title="お買い物の前に、ぜひお読みください。"
        subtitle="ご注文から配送、修繕まで。よくいただくご質問をまとめました。記載のない内容は、お気軽にお問い合わせください。"
      />

      <section className="px-6 lg:px-12 py-20">
        <div className="mx-auto max-w-[1000px] space-y-20">
          {faqs.map((g) => (
            <div key={g.cat}>
              <div className="text-[11px] uppercase tracking-[0.3em] text-cedar mb-8">
                — {g.cat}
              </div>
              <div className="divide-y divide-border border-y border-border">
                {g.items.map((it) => (
                  <Item key={it.q} q={it.q} a={it.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-serif text-lg md:text-xl text-ink">{q}</span>
        <ChevronDown
          size={20}
          className={`text-cedar shrink-0 transition-transform duration-500 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="text-muted-foreground leading-relaxed pr-12">{a}</p>
        </div>
      </div>
    </div>
  );
}
