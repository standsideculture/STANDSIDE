import { PrismaClient, Role } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const password = await bcrypt.hash(process.env.SEED_STAFF_PASSWORD || 'ChangeMe-StandSide-2026!', 12)

  const staff = [
    { name: 'STANDSIDE Owner', email: process.env.SEED_OWNER_EMAIL || 'owner@standside.id', role: Role.OWNER },
    { name: 'STANDSIDE Admin', email: process.env.SEED_ADMIN_EMAIL || 'admin@standside.id', role: Role.ADMIN },
    { name: 'STANDSIDE Marketing', email: process.env.SEED_MARKETING_EMAIL || 'marketing@standside.id', role: Role.MARKETING },
    { name: 'STANDSIDE Designer', email: process.env.SEED_DESIGNER_EMAIL || 'designer@standside.id', role: Role.DESIGNER },
  ]

  for (const user of staff) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: { name: user.name, role: user.role },
      create: { ...user, password },
    })
  }

  const categories = [
    { name: 'T-Shirt', slug: 't-shirt' },
    { name: 'Jacket', slug: 'jacket' },
    { name: 'Accessories', slug: 'accessories' },
  ]

  for (const category of categories) {
    await prisma.category.upsert({ where: { slug: category.slug }, update: { name: category.name }, create: category })
  }

  console.log('STANDSIDE database seed completed.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
}).finally(() => prisma.$disconnect())
