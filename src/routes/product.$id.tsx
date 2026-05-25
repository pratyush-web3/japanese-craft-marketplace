import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { products, artisans, formatYen } from "@/lib/data";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} — 和巧 Wakō` },
      { name: "description", content: loaderData?.product.story.slice(0, 150) ?? "" },
    ],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <SiteShell>
      <div className="px-6 py-40 text-center">
        <p className="text-muted-foreground">作品が見つかりませんでした。</p>
        <Link to="/marketplace" className="mt-6 inline-block link-underline text-cedar">
          一覧へ戻る
        </Link>
      </div>
    </SiteShell>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const artisan = artisans.find((a) => a.name === product.artisan);
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <SiteShell>
      <section className="px-6 lg:px-12 py-12 text-xs uppercase tracking-widest text-muted-foreground">
        <div className="mx-auto max-w-[1600px]">
          <Link to="/" className="link-underline">ホーム</Link>
          <span className="mx-3">／</span>
          <Link to="/marketplace" className="link-underline">工芸品</Link>
          <span className="mx-3">／</span>
          <span className="text-ink">{product.name}</span>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-24">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="aspect-square overflow-hidden bg-muted">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              {[product.image, product.image, product.image].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden bg-muted opacity-70 hover:opacity-100 transition cursor-pointer">
                  <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div className="text-[11px] uppercase tracking-[0.3em] text-cedar">
              {product.region}
            </div>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-balance">
              {product.name}
            </h1>
            <div className="mt-4 text-muted-foreground">{product.artisan} 作</div>

            <div className="mt-10 flex items-baseline gap-4">
              <div className="font-serif text-3xl">{formatYen(product.price)}</div>
              <div className="text-xs uppercase tracking-widest text-gold">
                {product.edition}
              </div>
            </div>

            <div className="mt-10 hairline w-24 opacity-50" />
            <p className="mt-8 text-ink/85 leading-relaxed">{product.story}</p>

            <dl className="mt-12 grid grid-cols-2 gap-y-6 text-sm border-t border-border pt-8">
              <dt className="text-muted-foreground">素材</dt>
              <dd className="text-ink">{product.material}</dd>
              <dt className="text-muted-foreground">寸法</dt>
              <dd className="text-ink">{product.size}</dd>
              <dt className="text-muted-foreground">仕様</dt>
              <dd className="text-ink">{product.edition}</dd>
              <dt className="text-muted-foreground">産地</dt>
              <dd className="text-ink">{product.region}</dd>
            </dl>

            <div className="mt-10 flex gap-4">
              <button className="flex-1 bg-ink text-cream py-4 text-sm tracking-wider hover:bg-cedar transition">
                カートに加える
              </button>
              <button className="border border-border px-6 hover:border-ink transition text-sm">
                ♡
              </button>
            </div>

            <div className="mt-8 space-y-3 text-xs text-muted-foreground">
              <div>・職人の工房から直接発送（3〜7営業日）</div>
              <div>・国際配送に対応（日本国外 60 カ国以上）</div>
              <div>・桐箱・名入れ承ります（別途）</div>
            </div>
          </div>
        </div>
      </section>

      {artisan && (
        <section className="bg-ink text-cream px-6 lg:px-12 py-24 grain">
          <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <img src={artisan.portrait} alt={artisan.name} className="w-full aspect-square object-cover" loading="lazy" />
            </div>
            <div className="lg:col-span-8">
              <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-5">
                作り手について
              </div>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">
                {artisan.name} <span className="text-cream/50 text-2xl">／ {artisan.craft}</span>
              </h2>
              <p className="mt-6 text-cream/80 leading-relaxed">{artisan.bio}</p>
              <blockquote className="mt-6 font-serif text-xl text-gold italic leading-relaxed">
                「{artisan.philosophy}」
              </blockquote>
            </div>
          </div>
        </section>
      )}

      <section className="px-6 lg:px-12 py-24">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="font-serif text-3xl md:text-4xl mb-12">あわせて、こちらの一品も。</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.id} to="/product/$id" params={{ id: p.id }} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                </div>
                <div className="mt-5">
                  <div className="text-[10px] uppercase tracking-widest text-cedar">{p.region}</div>
                  <h3 className="mt-2 font-serif text-xl">{p.name}</h3>
                  <div className="mt-2 text-sm">{formatYen(p.price)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
