import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "工芸品",
    links: [
      { label: "陶磁器", to: "/marketplace" },
      { label: "包丁・刃物", to: "/marketplace" },
      { label: "木工・漆器", to: "/marketplace" },
      { label: "染織・暖簾", to: "/marketplace" },
      { label: "茶道具", to: "/marketplace" },
      { label: "竹細工", to: "/marketplace" },
    ],
  },
  {
    title: "和巧について",
    links: [
      { label: "私たちの理念", to: "/about" },
      { label: "職人たち", to: "/artisans" },
      { label: "ジャーナル", to: "/journal" },
      { label: "お問い合わせ", to: "/contact" },
    ],
  },
  {
    title: "ご利用案内",
    links: [
      { label: "配送について", to: "/shipping" },
      { label: "よくあるご質問", to: "/faq" },
      { label: "利用規約", to: "/terms" },
      { label: "プライバシーポリシー", to: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-sumi text-cream/85 mt-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="font-serif text-3xl text-cream mb-4">和巧 / Wakō</div>
            <p className="text-sm leading-relaxed text-cream/65 max-w-sm">
              日本各地の職人と、世界の暮らしをつなぐ手仕事のマーケットプレイス。
              一点ずつ、土地の物語とともにお届けしています。
            </p>
            <div className="mt-8 hairline w-24 opacity-50" />
            <div className="mt-8 text-xs tracking-wider text-cream/55">
              <div>株式会社 和巧</div>
              <div className="mt-1">京都市東山区祇園町南側 570-128</div>
              <div className="mt-1">contact@wako-craft.jp ／ +81 75 525 0000</div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-5">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream/75 hover:text-cream transition link-underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-5">
              ニュースレター
            </div>
            <p className="text-sm text-cream/65 mb-4">
              月に一度、新しい職人と作品のお便りをお届けします。
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border-b border-cream/30 focus-within:border-gold transition"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent flex-1 py-2 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-widest text-gold hover:text-cream transition"
              >
                登録
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/45">
          <div>© 2025 Wakō Craft Marketplace. すべての権利は職人に帰属します。</div>
          <div className="flex gap-6">
            <span>Instagram</span>
            <span>YouTube</span>
            <span>Pinterest</span>
            <span>X / Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
