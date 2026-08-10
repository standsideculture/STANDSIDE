import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();
    const normalized = String(code || '').trim().toUpperCase();
    if (!normalized) return NextResponse.json({ error: 'Kode verifikasi wajib diisi' }, { status: 400 });
    const verification = await prisma.productVerification.findUnique({ where: { code: normalized }, include: { product: true } });
    if (!verification || !verification.product) return NextResponse.json({ valid: false, status: 'INVALID', message: 'Kode tidak ditemukan atau tidak valid.' }, { status: 404 });
    await prisma.verificationLog.create({ data: { verificationId: verification.id, ipAddress: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null, userAgent: request.headers.get('user-agent') || null } });
    return NextResponse.json({ valid: true, status: 'ORIGINAL', code: normalized, product: verification.product.name, verifiedAt: new Date().toISOString() });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Verifikasi gagal' }, { status: 500 });
  }
}
