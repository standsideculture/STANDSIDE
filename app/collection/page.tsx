import Link from 'next/link';

const products = [
  { name: 'STD T-SHIRT BUILT FROM LOYALTY', slug: 'std-t-shirt-built-from-loyalty', price: 110000, category: 'T-SHIRT', limited: true },
  { name: 'STD T-SHIRT BASEMENT DEPARTMENT', slug: 'std-t-shirt-basement-department', price: 110000, category: 'T-SHIRT', limited: true },
  { name: 'STD T-SHIRT TEAM FABRIC WAREHOUSE', slug: 'std-t-shirt-team-fabric-warehouse', price: 110000, category: 'T-SHIRT', limited: true },
  { name: 'STD JACKET HOLIGAN', slug: 'std-jacket-holigan', price: 220000, category: 'JACKET', limited: true },
  { name: 'STANDSIDE CAP', slug: 'standside-cap', price: 65000, category: 'ACCESSORIES', limited: false },
  { name: 'STANDSIDE BRACELET', slug: 'standside-bracelet', price: 35000, category: 'ACCESSORIES', limited: false },
  { name: 'STANDSIDE BANDANA', slug: 'standside-bandana', price: 50000, category: 'ACCESSORIES', limited: false },
];

const money = (value: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-10 text-white md:px-10">
      <header className="mx-auto flex max-w-7xl items-end justify-between border-b border-white/15 pb-6">
        <div><p className="text-xs tracking-[.35em] text-white/50">STANDSIDE / COLLECTION</p><h1 className="mt-2 text-4xl font-black tracking-tight md:text-6xl">SHOP THE CULTURE.</h1></div>
        <Link href="/" className="hidden text-sm text-white/60 hover:text-white md:block">← BACK HOME</Link>
      </header>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link key={product.slug} href={`/product/${product.slug}`} className="group overflow-hidden border border-white/10 bg-zinc-950 transition hover:border-white/35">
            <div className="aspect-[4/5] bg-gradient-to-br from-zinc-800 via-zinc-950 to-black p-5"><div className="flex h-full items-end justify-between"><span className="text-[10px] tracking-[.25em] text-white/45">STANDSIDE</span>{product.limited && <span className="border border-white/20 px-2 py-1 text-[9px] tracking-widest">LIMITED EDITION</span>}</div></div>
            <div className="p-5"><p className="text-[10px] tracking-[.25em] text-white/40">{product.category}</p><h2 className="mt-2 min-h-12 text-sm font-bold tracking-wide group-hover:underline">{product.name}</h2><p className="mt-4 text-sm">{money(product.price)}</p></div>
          </Link>
        ))}
      </section>
    </main>
  );
}
