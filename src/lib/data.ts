import pottery from "@/assets/hero-pottery.jpg";
import teaSet from "@/assets/tea-set.jpg";
import knife from "@/assets/knife.jpg";
import woodwork from "@/assets/woodwork.jpg";
import textile from "@/assets/textile.jpg";
import bamboo from "@/assets/bamboo.jpg";
import artisan1 from "@/assets/artisan-1.jpg";
import artisan2 from "@/assets/artisan-2.jpg";
import artisan3 from "@/assets/artisan-3.jpg";

export const SITE = {
  name: "和巧 — Wakō",
  tagline: "日本の手仕事を、世界の食卓へ。",
  description:
    "職人に会って、話を聞いて、使ってみて良いと思えたものだけを集めています。毎日の暮らしに、長く使える工芸を。",
};

export type Category = {
  slug: string;
  name: string;
  romaji: string;
  blurb: string;
  image: string;
};

export const categories: Category[] = [
  { slug: "pottery", name: "陶磁器", romaji: "Tōjiki", blurb: "持ったときの重みまで、ちゃんと気持ちいい器。", image: pottery },
  { slug: "woodwork", name: "木工", romaji: "Mokkō", blurb: "手に馴染む木の道具を、長く使えるかたちで。", image: woodwork },
  { slug: "knives", name: "包丁", romaji: "Hōchō", blurb: "切れ味だけじゃなく、手元の安心感も大切に。", image: knife },
  { slug: "textile", name: "染織", romaji: "Senshoku", blurb: "色の深さや布の揺れに、土地の空気が残ります。", image: textile },
  { slug: "tea", name: "茶道具", romaji: "Chadōgu", blurb: "お茶の時間を、少しだけ丁寧にしてくれる道具。", image: teaSet },
  { slug: "bamboo", name: "竹細工", romaji: "Takezaiku", blurb: "軽さと強さが同居する、素直な手仕事です。", image: bamboo },
  { slug: "decor", name: "手仕事の道具", romaji: "Tezukuri", blurb: "置いてあるだけで、部屋の空気がやわらぐもの。", image: pottery },
  { slug: "kitchen", name: "台所道具", romaji: "Daidokoro", blurb: "毎日つかうからこそ、少し良いものを。", image: teaSet },
];

export type Product = {
  id: string;
  name: string;
  artisan: string;
  region: string;
  price: number;
  category: string;
  image: string;
  story: string;
  material: string;
  size: string;
  edition: string;
};

export const products: Product[] = [
  {
    id: "kohiki-tea-bowl",
    name: "粉引茶碗・霧雪",
    artisan: "森田 玄一",
    region: "島根県・出雲",
    price: 18800,
    category: "tea",
    image: teaSet,
    story:
      "出雲の土をひいて、薄く化粧土を重ね、薪の炎にゆだねた茶碗です。白いかすれの景色がやさしく、朝の湯気によく似合います。",
    material: "出雲粘土／灰釉",
    size: "口径 12cm × 高さ 7.5cm",
    edition: "一点物",
  },
  {
    id: "santoku-damascus",
    name: "三徳包丁・霞流し 165mm",
    artisan: "井上 鉄之助",
    region: "大阪府・堺",
    price: 42000,
    category: "knives",
    image: knife,
    story:
      "堺の鍛冶場で一本ずつ打った三徳包丁です。重すぎず、軽すぎず、毎日の料理で『ちょうどいい』と思えるバランスに仕上げています。",
    material: "青紙二号鋼／朴柄",
    size: "刃渡り 165mm",
    edition: "受注鍛造",
  },
  {
    id: "keyaki-tray",
    name: "欅一枚板・拭漆盆",
    artisan: "山口 真澄",
    region: "石川県・山中",
    price: 28600,
    category: "woodwork",
    image: woodwork,
    story:
      "長く使える盆がほしくて、欅の一枚板を漆で仕上げました。派手ではありませんが、日々の茶器や器をのせると、自然と落ち着く一枚です。",
    material: "欅／生漆",
    size: "径 36cm × 厚 1.8cm",
    edition: "限定 12 点",
  },
  {
    id: "aizome-noren",
    name: "藍染暖簾・縞文",
    artisan: "藤崎 すず",
    region: "徳島県・上板",
    price: 24200,
    category: "textile",
    image: textile,
    story:
      "阿波藍で染めた麻の暖簾です。光の入り方で色の見え方が少し変わるので、朝と夕方で表情が違って見えます。",
    material: "麻 100%／天然藍",
    size: "85cm × 140cm",
    edition: "受注染め",
  },
  {
    id: "raku-chawan",
    name: "黒楽茶碗・夜光",
    artisan: "千 宗匠",
    region: "京都府・京都",
    price: 86000,
    category: "pottery",
    image: pottery,
    story:
      "手に取ると、すっと気持ちが落ち着く黒楽茶碗です。茶席でも、家でひとりお茶を淹れるときにも、静かな時間をつくってくれます。",
    material: "聚楽土／黒釉",
    size: "口径 11.5cm × 高さ 8cm",
    edition: "一点物",
  },
  {
    id: "bamboo-basket",
    name: "六ツ目編み花籠",
    artisan: "高田 一馬",
    region: "大分県・別府",
    price: 19800,
    category: "bamboo",
    image: bamboo,
    story:
      "別府の真竹を使った花籠です。軽くて扱いやすく、花を一輪だけ入れても、ちゃんと絵になるのがいいところです。",
    material: "真竹",
    size: "径 24cm × 高さ 30cm",
    edition: "限定 8 点",
  },
  {
    id: "hinoki-board",
    name: "尾州檜・俎板",
    artisan: "中村 健",
    region: "愛知県・尾張",
    price: 15400,
    category: "kitchen",
    image: woodwork,
    story:
      "尾州檜の一枚板でつくった俎板です。包丁の当たりがやわらかく、使い終わったあとも、木の香りが台所に残ります。",
    material: "尾州檜",
    size: "42cm × 24cm × 厚 3cm",
    edition: "受注製作",
  },
  {
    id: "kintsugi-vase",
    name: "金継ぎ一輪挿し",
    artisan: "森田 玄一",
    region: "島根県・出雲",
    price: 32000,
    category: "decor",
    image: pottery,
    story:
      "焼成の途中で入ったひびを、漆と金で直した一輪挿しです。欠けたままでは終わらせず、もう一度使えるようにした器です。",
    material: "陶土／漆／純金粉",
    size: "高さ 18cm",
    edition: "一点物",
  },
  {
    id: "tetsubin-kettle",
    name: "南部鉄瓶・霰文",
    artisan: "及川 周作",
    region: "岩手県・盛岡",
    price: 58000,
    category: "tea",
    image: teaSet,
    story:
      "南部鉄器の鉄瓶です。朝の湯を沸かすだけでも気分が変わるので、家でお茶を飲む時間が少し楽しみになります。",
    material: "砂鉄／木炭",
    size: "容量 1.2L",
    edition: "限定 20 点",
  },
];

export type Artisan = {
  slug: string;
  name: string;
  craft: string;
  region: string;
  years: number;
  portrait: string;
  bio: string;
  philosophy: string;
};

export const artisans: Artisan[] = [
  {
    slug: "morita-genichi",
    name: "森田 玄一",
    craft: "陶芸家",
    region: "島根県・出雲",
    years: 38,
    portrait: artisan1,
    bio: "出雲の山あいで三十八年、薪窯だけで焼き続けてきました。粘土を掘るところから焼き上げるまで、今もほとんど一人で手を動かしています。",
    philosophy: "器は、こちらが思った通りにはなりません。そのぶん、出来上がったときにちゃんと驚きがあるのが面白いところです。",
  },
  {
    slug: "fujisaki-suzu",
    name: "藤崎 すず",
    craft: "藍染師",
    region: "徳島県・上板",
    years: 22,
    portrait: artisan2,
    bio: "祖父の藍甕を受け継いで、阿波藍の天然発酵建てを守っています。染めるだけでなく、布に触れるところまで自分で見ています。",
    philosophy: "藍は毎日少しずつ表情が違います。こちらが急がず、様子を見ながら付き合うのがいちばん大事です。",
  },
  {
    slug: "inoue-tetsunosuke",
    name: "井上 鉄之助",
    craft: "鍛冶師",
    region: "大阪府・堺",
    years: 17,
    portrait: artisan3,
    bio: "堺打刃物の鍛冶場で育ち、五代目として包丁を打っています。料理人の要望を聞きながら、一本ずつ仕上げています。",
    philosophy: "包丁は、使う人の料理に合ってこそ意味があります。店で見たときより、台所に入ってからが本番です。",
  },
];

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
};

export const journal: JournalPost[] = [
  {
    slug: "izumo-kiln-visit",
    title: "出雲、薪窯の三日間 — 森田玄一の窯焚きを訪ねて",
    excerpt:
      "山陰の冬の夜、薪をくべながら一二〇〇度の窯と向き合う職人の姿を、編集部が密着取材しました。",
    date: "2025年 12月 18日",
    author: "編集部",
    category: "工房訪問",
    image: pottery,
    readTime: "8 分",
  },
  {
    slug: "aizome-history",
    title: "藍に宿る土地の記憶 — 阿波藍の三百年",
    excerpt:
      "吉野川の流域で受け継がれてきた藍栽培。徳島の藍師が語る、土と発酵と色の物語。",
    date: "2025年 11月 30日",
    author: "中村 結",
    category: "工芸の歴史",
    image: textile,
    readTime: "12 分",
  },
  {
    slug: "sakai-blade",
    title: "包丁という、ひとつの人生道具",
    excerpt: "堺の鍛冶場で五代続く井上家。一本の包丁が完成するまでの七十二の工程を辿る。",
    date: "2025年 11月 02日",
    author: "編集部",
    category: "職人の手",
    image: knife,
    readTime: "10 分",
  },
  {
    slug: "wabi-sabi",
    title: "侘び寂び、現代の暮らしに息づく",
    excerpt: "欠けや歪みを愛する日本の美意識を、現代の住まいにどう取り入れるか。",
    date: "2025年 10月 14日",
    author: "佐藤 浩平",
    category: "暮らしの美学",
    image: teaSet,
    readTime: "6 分",
  },
];

export const regions = [
  { name: "京都", crafts: "茶道具・西陣織" },
  { name: "石川・金沢", crafts: "九谷焼・輪島塗" },
  { name: "島根・出雲", crafts: "出西窯・楽山焼" },
  { name: "徳島", crafts: "阿波藍染" },
  { name: "大分・別府", crafts: "竹細工" },
  { name: "岩手・盛岡", crafts: "南部鉄器" },
  { name: "大阪・堺", crafts: "打刃物" },
  { name: "愛知・尾張", crafts: "瀬戸焼・檜細工" },
];

export const testimonials = [
  {
    quote:
      "和巧で求めた森田さんの茶碗を、毎朝の珈琲に使っています。器が一日の始まりを整えてくれることを、初めて知りました。",
    author: "M.K.",
    location: "東京・建築家",
  },
  {
    quote:
      "藤崎さんの暖簾を玄関に。色の深さに、毎日違う表情を見つけます。受け継いでいきたい一枚です。",
    author: "S.T.",
    location: "京都・料理人",
  },
  {
    quote:
      "井上さんの三徳包丁を、店の調理場で使い始めて一年。研ぐたびに、刃が応えてくれるのを感じます。",
    author: "H.A.",
    location: "ニューヨーク・シェフ",
  },
];

export const formatYen = (n: number) =>
  `¥${n.toLocaleString("ja-JP")}`;
