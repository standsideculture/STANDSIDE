import { SignJWT, jwtVerify } from 'jose'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { prisma } from './prisma'

const secret = new TextEncoder().encode(process.env.AUTH_SECRET || 'change-this-secret-before-production')
const COOKIE_NAME = 'standside_session'

export type Session = { userId: string; role: string; email: string; name: string }

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash)
}

export async function createSession(user: Session) {
  const token = await new SignJWT(user)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret)

  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}

export async function getSession(): Promise<Session | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(COOKIE_NAME)?.value
    if (!token) return null
    const { payload } = await jwtVerify(token, secret)
    if (!payload.userId || !payload.email || !payload.role || !payload.name) return null
    return {
      userId: String(payload.userId),
      email: String(payload.email),
      role: String(payload.role),
      name: String(payload.name),
    }
  } catch {
    return null
  }
}

export async function authenticate(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email: email.toLowerCase().trim() } })
  if (!user || !(await verifyPassword(password, user.password))) return null
  return user
}

export { COOKIE_NAME }
