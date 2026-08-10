import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.AUTH_SECRET || 'change-this-secret-before-production')

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (!pathname.startsWith('/dashboard')) return NextResponse.next()

  const token = request.cookies.get('standside_session')?.value
  if (!token) return NextResponse.redirect(new URL('/login?next=/dashboard', request.url))

  try {
    const { payload } = await jwtVerify(token, secret)
    const role = String(payload.role || '')
    const allowed = ['OWNER', 'ADMIN', 'MARKETING', 'DESIGNER']
    if (!allowed.includes(role)) return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/login?next=/dashboard', request.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
