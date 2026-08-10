'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type CartItem = { name: string; price: number; quantity: number; size?: string; color?: string };
const money = (value: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => { try { setItems(JSON.parse(localStorage.getItem('standside-cart') || '[]')); } catch {} }, []);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const clear = () => { localStorage.removeItem('standside-cart'); setItems([]); };
  return <main className="min-h-screen bg-black px-5 py-10 text-white md:px-10"><div className="mx-auto max-w-5xl"><Link href="/collection" className="text-xs tracking-widest text-white/50">← COLLECTION</Link><h1 className="mt-8 text-4xl font-black">YOUR CART.</h1>{items.length === 0 ? <div className="mt-10 border border-white/10 p-10 text-center text-white/50">YOUR CART IS EMPTY.</div> : <><div className="mt-8 space-y-3">{items.map((item, i) => <div key={`${item.name}-${i}`} className="flex items-center justify-between border border-white/10 p-5"><div><p className="font-bold">{item.name}</p><p className="mt-1 text-xs text-white/40">{item.size || '-'} / {item.color || '-' } · QTY {item.quantity}</p></div><p>{money(item.price * item.quantity)}</p></div>)}</div><div className="mt-8 flex items-center justify-between border-t border-white/20 pt-6"><span className="text-sm tracking-widest">TOTAL</span><strong className="text-xl">{money(total)}</strong></div><div className="mt-6 flex gap-3"><button onClick={clear} className="border border-white/20 px-5 py-4 text-xs tracking-widest">CLEAR CART</button><Link href="/checkout" className="flex-1 bg-white px-5 py-4 text-center text-xs font-bold tracking-widest text-black">CHECKOUT</Link></div></>}</div></main>;
}
