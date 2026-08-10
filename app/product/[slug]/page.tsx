import Link from 'next/link';

const catalog: Record<string, { name: string; category: string; price: number; description: string; sizes: string[]; colors: string[] }> = {
  'std-t-shirt-built-from-loyalty': { name: 'STD T-SHIRT BUILT FROM LOYALTY', category: 'T-SHIRT', price: 110000, description: 'Every piece carries the STANDSIDE identity: built from loyalty, made for the game.', sizes: ['S','M','L','XL','XXL','3XL','4XL','5XL'], colors: ['BLACK','WHITE'] },
  'std-t-shirt-basement-department': { name: 'STD T-SHIRT BASEMENT DEPARTMENT', category: 'T-SHIRT', price: 110000, description: 'Limited STANDSIDE graphic tee for the culture.', sizes: ['S','M','L','XL','XXL','3XL','4XL','5XL'], colors: ['BLACK','WHITE'] },
  'std-t-shirt-team-fabric-warehouse': { name: 'STD T-SHIRT TEAM FABRIC WAREHOUSE', category: 'T-SHIRT', price: 110000, description: 'A STANDSIDE statement built around team, fabric and warehouse culture.', sizes: ['S','M','L','XL','XXL','3XL','4XL','5XL'], colors: ['BLACK','WHITE'] },
  'std-jacket-holigan': { name: 'STD JACKET HOLIGAN', category: 'JACKET', price: 220000, description: 'Premium STANDSIDE jacket with a bold match-day identity.', sizes: ['S','M','L','XL','XXL'], colors: ['BLACK'] },
  'standside-cap': { name: 'STANDSIDE CAP', category: 'ACCESSORIES', price: 65000, description: 'STANDSIDE everyday headwear.', sizes: ['ONE SIZE'], colors: ['BLACK'] },
  'standside-bracelet': { name: 'STANDSIDE BRACELET', category: 'ACCESSORIES', price: 35000, description: 'Minimal STANDSIDE accessory.', sizes: ['ONE SIZE'], colors: ['BLACK'] },
  'standside-bandana': { name: 'STANDSIDE BANDANA', category: 'ACCESSORIES', price: 50000, description: 'STANDSIDE bandana for match-day and everyday wear.', sizes: ['ONE SIZE'], colors: ['BLACK'] },
};

const money = (value: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = catalog[slug];
  if (!product) return <main className="min-h-screen bg-black p-10 text-white"><h1 className="text-3xl font-bold">PRODUCT NOT FOUND</h1><Link href="/collection" className="mt-5 inline-block underline">Back to collection</Link></main>;
  return <main className="min-h-screen bg-black px-5 py-10 text-white md:px-10"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2"><div className="aspect-square bg-gradient-to-br from-zinc-800 via-zinc-950 to-black p-6"><div className="flex h-full items-end text-xs tracking-[.35em] text-white/40">STANDSIDE / {product.category}</div></div><div className="flex flex-col justify-center"><Link href="/collection" className="mb-8 text-xs tracking-widest text-white/50">← COLLECTION</Link><p className="text-xs tracking-[.3em] text-white/45">{product.category}</p><h1 className="mt-3 text-3xl font-black md:text-5xl">{product.name}</h1><p className="mt-5 text-xl">{money(product.price)}</p><p className="mt-6 max-w-xl leading-7 text-white/60">{product.description}</p><div className="mt-8"><p className="mb-3 text-xs tracking-widest text-white/50">SIZE</p><div className="flex flex-wrap gap-2">{product.sizes.map((size) => <button key={size} className="border border-white/20 px-4 py-3 text-xs hover:border-white">{size}</button>)}</div></div><div className="mt-6"><p className="mb-3 text-xs tracking-widest text-white/50">COLOR</p><div className="flex flex-wrap gap-2">{product.colors.map((color) => <button key={color} className="border border-white/20 px-4 py-3 text-xs hover:border-white">{color}</button>)}</div></div><button className="mt-8 w-full bg-white px-6 py-4 text-sm font-bold tracking-[.2em] text-black hover:bg-white/90">ADD TO CART</button></div></div></main>;
}
