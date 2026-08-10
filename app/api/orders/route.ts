import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerId, items, shippingName, shippingPhone, shippingAddress, paymentMethod } = body;
    if (!items?.length || !shippingName || !shippingPhone || !shippingAddress) return NextResponse.json({ error: 'Data pesanan belum lengkap' }, { status: 400 });

    const productIds = items.map((item: { productId: string }) => item.productId);
    const products = await prisma.product.findMany({ where: { id: { in: productIds }, isActive: true } });
    const map = new Map(products.map((p) => [p.id, p]));
    let total = 0;
    const orderItems = [];
    for (const item of items) {
      const product = map.get(item.productId);
      if (!product || item.quantity < 1) return NextResponse.json({ error: 'Produk tidak valid' }, { status: 400 });
      if (product.stock < item.quantity) return NextResponse.json({ error: `Stok ${product.name} tidak mencukupi` }, { status: 409 });
      total += product.price * item.quantity;
      orderItems.push({ productId: product.id, quantity: item.quantity, price: product.price });
    }

    const order = await prisma.$transaction(async (tx) => {
      const created = await tx.order.create({ data: { customerId: customerId || null, total, shippingName, shippingPhone, shippingAddress, paymentMethod: paymentMethod || 'BANK_TRANSFER', status: 'PENDING', items: { create: orderItems } } });
      for (const item of orderItems) await tx.product.update({ where: { id: item.productId }, data: { stock: { decrement: item.quantity } } });
      return created;
    });
    return NextResponse.json({ orderId: order.id, status: order.status, total: order.total }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Gagal membuat order' }, { status: 500 });
  }
}
