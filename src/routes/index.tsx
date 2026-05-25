import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import {
  categories,
  products,
  artisans,
  journal,
  regions,
  testimonials,
  formatYen,
  SITE,
} from "@/lib/data";
import hero from "@/assets/hero-pottery.jpg";
import heritage from "@/assets/heritage.jpg";
import teaSet from "@/assets/tea-set.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "和巧 Wakō — 日本の手仕事を、世界の食卓へ" },
      {
        name: "description",
        content:
          "京都発の日本工芸マーケットプレイス「和巧 Wakō」。陶磁器・包丁・木工・染織・茶道具など、職人の一点物を世界へお届けします。",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <Hero />
      <Marquee />
      <Categories />
      <FeaturedProducts />
      <Heritage />
      <ArtisansStrip />
      <Interview />
      <Regions />
      <Testimonials />
      <JournalSection />
      <Instagram />
      <Newsletter />
    </SiteShell>
  );
}

function Hero() {
  return (
    <section className="relative -mt-20 h-[100vh] min-h-[760px] overflow-hidden grain">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="日本の陶芸職人の手"
          className="w-full h-full object-cover animate-ken-burns"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sumi/40 via-sumi/30 to-sumi/80" />
      </div>

      <div className="relative h-full flex flex-col justify-end pb-16 sm:pb-20 lg:pb-24 px-6 lg:px-12">
        <div className="mx-auto max-w-[1600px] w-full">
          <div className="flex items-end justify-between flex-wrap gap-8 lg:gap-10">
            <div className="max-w-3xl">
              <div className="text-[11px] uppercase tracking-[0.4em] text-gold animate-fade-up">
                — Est. 京都 二〇二〇
              </div>
              <h1
                className="mt-5 sm:mt-6 font-serif text-cream text-4xl sm:text-5xl md:text-7xl lg:text-[88px] leading-[1.02] text-balance animate-fade-up"
                style={{ animationDelay: "120ms" }}
              >
                土に問い、火に委ねる。
                <br />
                <span className="italic font-normal text-gold/95">手のあと</span>を、暮らしへ。
              </h1>
              <p
                className="mt-8 text-cream/75 text-base md:text-lg max-w-xl leading-relaxed animate-fade-up"
                style={{ animationDelay: "240ms" }}
              >
                {SITE.description}
              </p>
              <div
                className="mt-9 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up"
                style={{ animationDelay: "360ms" }}
              >
                <Link
                  to="/marketplace"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-cream px-8 py-4 text-sm tracking-wider text-ink transition-colors duration-500 hover:bg-gold"
                >
                  工芸品を見る
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
                <Link
                  to="/artisans"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-cream/40 px-8 py-4 text-sm tracking-wider text-cream transition hover:bg-cream/10"
                >
                  職人に出会う
                </Link>
              </div>
            </div>

            <div
              className="hidden md:flex flex-col items-end gap-3 text-cream/70 text-xs tracking-widest animate-fade-up"
              style={{ animationDelay: "480ms" }}
            >
              <div className="vertical-jp h-32 font-serif text-base text-cream/90">
                日本のものづくり
              </div>
              <div className="hairline w-px h-16 bg-gradient-to-b from-cream/60 to-transparent" />
              <span>SCROLL ↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "陶磁器",
    "Tōjiki",
    "木工",
    "Mokkō",
    "包丁",
    "Hōchō",
    "染織",
    "Senshoku",
    "茶道具",
    "Chadōgu",
    "竹細工",
    "Takezaiku",
  ];
  return (
    <div className="border-y border-border bg-cream py-5 sm:py-6 overflow-hidden">
      <div className="flex gap-10 sm:gap-16 whitespace-nowrap animate-[marquee_40s_linear_infinite] [--tw-translate-x:0]">
        {[...words, ...words, ...words].map((w, i) => (
          <span
            key={i}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink/40 tracking-wide flex items-center gap-10 sm:gap-16"
          >
            {w}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

function Categories() {
  return (
    <section className="px-6 lg:px-12 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.35em] text-cedar mb-5">
              — 01 / 工芸の分類
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-ink leading-tight text-balance">
              八つの手仕事、ひとつの哲学。
            </h2>
          </div>
          <Link
            to="/marketplace"
            className="text-sm tracking-wider text-cedar link-underline"
          >
            すべての分類を見る →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-12">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to="/marketplace"
              className="group block"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted mb-5">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl text-ink">{c.name}</h3>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.romaji}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {c.blurb}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = products.slice(0, 4);
  return (
    <section className="bg-secondary/50 px-6 lg:px-12 py-20 sm:py-24 lg:py-32 border-y border-border">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.35em] text-cedar mb-5">
              — 02 / 今月の作品
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-balance">
              職人が、今いちばん届けたいもの。
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-muted-foreground leading-relaxed">
            季節と土地のうつろいに合わせて、編集部が八百点を超える在庫から厳選した、今月の一品。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featured.map((p) => (
            <Link
              key={p.id}
              to="/product/$id"
              params={{ id: p.id }}
              className="group block bg-card rounded-xl overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="text-[10px] uppercase tracking-widest text-cedar">
                  {p.region}
                </div>
                <h3 className="mt-3 font-serif text-xl text-ink leading-snug">
                  {p.name}
                </h3>
                <div className="mt-1 text-sm text-muted-foreground">{p.artisan} 作</div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-serif text-lg">{formatYen(p.price)}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gold">
                    {p.edition}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Heritage() {
  return (
    <section className="relative h-[72svh] min-h-135 lg:h-[80vh] lg:min-h-150 overflow-hidden grain">
      <img
        src={heritage}
        alt="日本の山里"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-sumi/85 via-sumi/50 to-transparent" />
      <div className="relative h-full flex items-center px-6 lg:px-12 py-16 sm:py-0">
        <div className="mx-auto max-w-[1600px] w-full">
          <div className="max-w-xl text-cream">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-6">
              — 03 / 文化と継承
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] text-balance">
              一千年の手仕事を、
              <br />
              次の百年へ。
            </h2>
            <p className="mt-8 text-cream/80 leading-relaxed">
              和巧は単なる販売の場ではありません。職人と買い手を直接つなぎ、技術が受け継がれていく仕組みを、ともに育てていきます。売上の三%は若手職人の修業支援に充てています。
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 border-b border-cream/50 pb-2 text-sm tracking-wider hover:border-gold hover:text-gold transition"
            >
              私たちの理念について
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArtisansStrip() {
  return (
    <section className="px-6 lg:px-12 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-cedar mb-5">
              — 04 / 職人たち
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-balance max-w-3xl">
              手のあとを残す、一二〇人の作り手。
            </h2>
          </div>
          <Link to="/artisans" className="text-sm tracking-wider text-cedar link-underline">
            すべての職人 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {artisans.map((a) => (
            <Link key={a.slug} to="/artisans" className="group block">
              <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                <img
                  src={a.portrait}
                  alt={a.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-sumi/90 to-transparent text-cream">
                  <div className="text-[10px] uppercase tracking-widest text-gold">
                    {a.craft} ／ {a.region}
                  </div>
                  <div className="font-serif text-2xl mt-2">{a.name}</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                「{a.philosophy}」
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Interview() {
  return (
    <section className="bg-ink text-cream px-6 lg:px-12 py-20 sm:py-24 lg:py-32 grain">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <img
            src={teaSet}
            alt="茶道具"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
        <div className="lg:col-span-7">
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-5">
            — 05 / 職人インタビュー
          </div>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.15] text-balance">
            「失敗した器ほど、よく覚えています。それが私の先生です。」
          </h2>
          <div className="mt-10 hairline w-24" />
          <p className="mt-8 text-cream/75 leading-relaxed text-lg">
            出雲の山あいに窯を構える森田玄一さんは、四十年近く土と火に向き合ってきました。
            完成した器よりも、割れた器、歪んだ器のほうが鮮明に記憶に残っているといいます。
            「土はいつも違うことを言ってきます。聞き続けるしかないんです。」
          </p>
          <div className="mt-10 flex items-center gap-6">
            <Link
              to="/journal"
              className="inline-flex items-center gap-3 border-b border-cream/40 pb-2 text-sm tracking-wider hover:border-gold hover:text-gold transition"
            >
              インタビューを読む
              <ArrowUpRight size={14} />
            </Link>
            <span className="text-xs text-cream/50">ジャーナル ／ 8 分</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Regions() {
  return (
    <section className="px-6 lg:px-12 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.35em] text-cedar mb-5">
              — 06 / 産地
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-balance">
              北から南へ、四十七の産地から。
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-muted-foreground leading-relaxed self-end">
            気候、土、水、そして人の暮らし。土地に根ざした素材と技が、その土地でしか生まれない美を育んできました。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-border">
          {regions.map((r) => (
            <div
              key={r.name}
              className="border-r border-b border-border p-5 sm:p-8 hover:bg-secondary transition-colors duration-500 group cursor-pointer"
            >
              <div className="font-serif text-2xl text-ink">{r.name}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {r.crafts}
              </div>
              <div className="mt-6 text-gold opacity-0 group-hover:opacity-100 transition">
                <ArrowUpRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-secondary/40 px-6 lg:px-12 py-20 sm:py-24 lg:py-32 border-y border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-20">
          <div className="text-[11px] uppercase tracking-[0.35em] text-cedar mb-5">
            — 07 / お客様の声
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-balance">
            器は、誰かの暮らしに迎えられて、はじめて完成する。
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-card p-8 sm:p-10 border border-border/60"
            >
              <div className="text-gold font-serif text-5xl leading-none">「</div>
              <blockquote className="mt-4 text-ink leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border text-xs uppercase tracking-widest text-muted-foreground">
                {t.author} ／ {t.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function JournalSection() {
  const [main, ...rest] = journal;
  return (
    <section className="px-6 lg:px-12 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-cedar mb-5">
              — 08 / ジャーナル
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-balance max-w-3xl">
              工房から、土地から、手のあとから。
            </h2>
          </div>
          <Link to="/journal" className="text-sm tracking-wider text-cedar link-underline">
            すべての記事 →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          <Link to="/journal" className="lg:col-span-7 group block">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={main.image}
                alt={main.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-6 text-[10px] uppercase tracking-widest text-cedar">
              {main.category} ／ {main.date} ／ {main.readTime}
            </div>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl text-ink leading-tight">
              {main.title}
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              {main.excerpt}
            </p>
          </Link>

          <div className="lg:col-span-5 flex flex-col divide-y divide-border">
            {rest.map((p) => (
              <Link
                to="/journal"
                key={p.slug}
                className="group py-6 first:pt-0 last:pb-0 grid grid-cols-[88px_minmax(0,1fr)] sm:grid-cols-3 gap-4 sm:gap-5 items-start"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                </div>
                <div className="col-span-2">
                  <div className="text-[10px] uppercase tracking-widest text-cedar">
                    {p.category} ／ {p.date}
                  </div>
                  <h4 className="mt-2 font-serif text-lg leading-snug text-ink">
                    {p.title}
                  </h4>
                  <div className="mt-2 text-xs text-muted-foreground">{p.readTime}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  const imgs = [
    products[0].image,
    products[1].image,
    products[2].image,
    products[3].image,
    products[4].image,
    products[5].image,
  ];
  return (
    <section className="bg-cream py-20 sm:py-24 border-t border-border">
      <div className="text-center mb-12 px-6">
        <div className="text-[11px] uppercase tracking-[0.35em] text-cedar mb-4">
          @wako_craft
        </div>
        <h2 className="font-serif text-3xl md:text-4xl">日々のかけら、Instagramで。</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
        {imgs.map((src, i) => (
          <a
            key={i}
            href="https://instagram.com"
            className="group block aspect-square overflow-hidden relative"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-sumi/0 group-hover:bg-sumi/30 transition" />
          </a>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-sumi text-cream px-6 lg:px-12 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-6">
          — お便り
        </div>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
          月に一度の、手仕事のたより。
        </h2>
        <p className="mt-6 text-cream/75 leading-relaxed">
          新しく仲間に加わった職人、季節の作品、編集部の取材記録を、月初にお届けします。
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-transparent border border-cream/30 px-5 py-4 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition"
          />
          <button
            type="submit"
            className="bg-gold text-ink px-8 py-4 text-sm tracking-wider hover:bg-cream transition"
          >
            購読する
          </button>
        </form>
      </div>
    </section>
  );
}
