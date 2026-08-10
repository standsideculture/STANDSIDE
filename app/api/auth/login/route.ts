import { NextResponse } from 'next/server'
import { authenticate, createSession } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = String(body.email || '')
    const password = String(body.password || '')

    if (!email || !password) {
      return NextResponse.json({ error: 'Email dan password wajib diisi.' }, { status: 400 })
    }

    const user = await authenticate(email, password)
    if (!user) {
      return NextResponse.json({ error: 'Email atau password salah.' }, { status: 401 })
    }

    await createSession({
      userId: user.id,
      role: user.role,
      email: user.email,
      name: user.name,
    })

    return NextResponse.json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    })
  } catch {
    return NextResponse.json({ error: 'Terjadi kesalahan pada server.' }, { status: 500 })
  }
}
