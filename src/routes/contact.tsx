import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "お問い合わせ — 和巧 Wakō" },
      { name: "description", content: "和巧へのご相談・取材・卸売・職人登録に関するお問い合わせ。" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteShell>
      <PageHeader
        kicker="CONTACT / お問い合わせ"
        title="ひとことから、対話が始まります。"
        subtitle="ご質問・取材・卸売のご相談・職人としての登録ご希望、いずれも下記よりお気軽にお寄せください。"
      />

      <section className="px-6 lg:px-12 py-24">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-cedar mb-3">
                所在地
              </div>
              <div className="font-serif text-xl text-ink leading-relaxed">
                〒605-0074
                <br />
                京都市東山区祇園町南側 570-128
                <br />
                和巧本店・編集室
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-cedar mb-3">
                電話
              </div>
              <div className="font-serif text-xl">+81 75 525 0000</div>
              <div className="text-sm text-muted-foreground mt-1">平日 10:00 – 18:00（JST）</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-cedar mb-3">
                メール
              </div>
              <div className="font-serif text-xl">contact@wako-craft.jp</div>
              <div className="text-sm text-muted-foreground mt-1">通常 24 時間以内にご返信</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-cedar mb-3">
                各種窓口
              </div>
              <ul className="space-y-2 text-ink">
                <li>取材：press@wako-craft.jp</li>
                <li>卸売：wholesale@wako-craft.jp</li>
                <li>職人登録：artisan@wako-craft.jp</li>
              </ul>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-7 space-y-8 lg:border-l lg:border-border lg:pl-16"
          >
            <Field label="お名前">
              <input className="w-full bg-transparent border-b border-border focus:border-ink py-3 outline-none transition" />
            </Field>
            <Field label="メールアドレス">
              <input type="email" className="w-full bg-transparent border-b border-border focus:border-ink py-3 outline-none transition" />
            </Field>
            <Field label="ご用件">
              <select className="w-full bg-transparent border-b border-border focus:border-ink py-3 outline-none transition">
                <option>商品について</option>
                <option>配送・返品について</option>
                <option>取材のご依頼</option>
                <option>卸売のご相談</option>
                <option>職人登録について</option>
                <option>その他</option>
              </select>
            </Field>
            <Field label="メッセージ">
              <textarea rows={6} className="w-full bg-transparent border-b border-border focus:border-ink py-3 outline-none transition resize-none" />
            </Field>
            <button
              type="submit"
              className="bg-ink text-cream px-10 py-4 text-sm tracking-wider hover:bg-cedar transition"
            >
              送信する
            </button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.25em] text-cedar">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
