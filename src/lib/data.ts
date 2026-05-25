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
    "日本各地の職人が手がける器・刃物・木工・染織。一点ずつ、手のぬくもりとともにお届けする工芸のマーケットプレイス。",
};

export type Category = {
  slug: string;
  name: string;
  romaji: string;
  blurb: string;
  image: string;
};

export const categories: Category[] = [
  { slug: "pottery", name: "陶磁器", romaji: "Tōjiki", blurb: "土と火が生む、唯一無二の器。", image: pottery },
  { slug: "woodwork", name: "木工", romaji: "Mokkō", blurb: "木目に宿る、静かな時間。", image: woodwork },
  { slug: "knives", name: "包丁", romaji: "Hōchō", blurb: "鍛冶の技、刃に込めた一生。", image: knife },
  { slug: "textile", name: "染織", romaji: "Senshoku", blurb: "藍と糸が描く、土地の記憶。", image: textile },
  { slug: "tea", name: "茶道具", romaji: "Chadōgu", blurb: "一椀のしずけさを、暮らしへ。", image: teaSet },
  { slug: "bamboo", name: "竹細工", romaji: "Takezaiku", blurb: "編む手仕事、しなやかな美。", image: bamboo },
  { slug: "decor", name: "手仕事の道具", romaji: "Tezukuri", blurb: "手のあとが、住まいに息づく。", image: pottery },
  { slug: "kitchen", name: "台所道具", romaji: "Daidokoro", blurb: "毎日に寄り添う、本物の道具。", image: teaSet },
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
      "出雲の土を轆轤で挽き、化粧土をかけて窯変の炎にゆだねた一碗。器の表面に浮かぶ白いかすれは、雪が静かに積もる夜の風景を思わせます。",
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
      "堺打刃物五代目、井上鉄之助による手鍛え三徳。芯材に青紙二号、地金に軟鉄を合わせた本霞造り。柄は朴の木と水牛角を継ぎ、永く手に馴染みます。",
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
      "樹齢百年を越える欅の一枚板を、轆轤師の手で挽き、漆を二十回拭き重ねました。年輪のうねりがそのまま器のかたちに残ります。",
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
      "阿波藍を百二十日かけて発酵させた染液で、麻の生地を七度くぐらせています。色は使うほどに澄み、家の境界を静かに分かちます。",
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
      "京の楽焼の系譜を継ぐ作家による黒楽。土を手で抜き、ヘラで削り、低火度の窯で一碗ずつ焼き上げます。掌に静かにおさまる重さ。",
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
      "別府の真竹を、ひごに割いて六ツ目に編み上げた花籠。竹の弾力をいかし、軽やかな線が空間に余白を生みます。",
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
      "尾州の山で育った樹齢百五十年の檜から、一枚板の俎板を仕立てます。柔らかな木肌が刃を受け止め、清々しい香りが台所を満たします。",
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
      "焼成中に裂けた器を、漆と金で継ぎ直しました。傷もまた景色とする、日本の美意識をかたちにしています。",
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
      "南部の砂鉄を鋳込み、霰の文様を一粒ずつ手で押し起こした鉄瓶。湯はまろやかに、鉄分を含み、茶の味を整えます。",
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
    bio: "出雲の山あいに窯を構えて三十八年。地元の粘土を掘り、灰を集め、薪窯のみで焼成を続けている。",
    philosophy: "「土に問い、火に委ねる」。器は人がつくるのではなく、土と火が育ててくれるものだと考えています。",
  },
  {
    slug: "fujisaki-suzu",
    name: "藤崎 すず",
    craft: "藍染師",
    region: "徳島県・上板",
    years: 22,
    portrait: artisan2,
    bio: "祖父の藍甕を受け継ぎ、阿波藍の天然発酵建てを守る。染色から仕立てまでを一人で行う。",
    philosophy: "藍は生きものです。私の仕事は染めることではなく、藍の機嫌を整えることだと思っています。",
  },
  {
    slug: "inoue-tetsunosuke",
    name: "井上 鉄之助",
    craft: "鍛冶師",
    region: "大阪府・堺",
    years: 17,
    portrait: artisan3,
    bio: "堺打刃物の名門に生まれ、五代目として鍛冶場を継ぐ。料理人のための包丁を一本ずつ手鍛えしている。",
    philosophy: "包丁は道具です。使う人の手の中で、はじめて完成すると信じています。",
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
