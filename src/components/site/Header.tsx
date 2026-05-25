import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Search, Heart } from "lucide-react";

const nav = [
  { to: "/", label: "ホーム", en: "Home" },
  { to: "/marketplace", label: "工芸品", en: "Marketplace" },
  { to: "/artisans", label: "職人たち", en: "Artisans" },
  { to: "/journal", label: "ジャーナル", en: "Journal" },
  { to: "/about", label: "私たちについて", en: "About" },
  { to: "/contact", label: "お問い合わせ", en: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="group flex items-baseline gap-3">
            <span className="font-serif text-2xl tracking-tight text-ink">和巧</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden sm:inline">
              Wakō Marketplace
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="link-underline text-[13px] tracking-wider text-ink/80 hover:text-ink transition-colors"
                activeProps={{ className: "text-ink font-medium" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <button aria-label="検索" className="hidden md:block text-ink/70 hover:text-ink transition">
              <Search size={18} strokeWidth={1.4} />
            </button>
            <button aria-label="お気に入り" className="hidden md:block text-ink/70 hover:text-ink transition">
              <Heart size={18} strokeWidth={1.4} />
            </button>
            <button
              aria-label="メニュー"
              className="lg:hidden text-ink"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-border animate-fade-in">
          <nav className="flex flex-col px-6 py-8 gap-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-border/60 pb-3"
              >
                <span className="font-serif text-lg text-ink">{item.label}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {item.en}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
