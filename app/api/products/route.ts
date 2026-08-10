import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get('category');
  const products = await prisma.product.findMany({ where: { isActive: true, ...(category ? { category: { slug: category } } : {}) }, include: { category: true }, orderBy: { createdAt: 'desc' } });
  return NextResponse.json(products);
}
