import { config } from 'dotenv'
import { resolve } from 'path'

// Charge .env.local avant tout le reste
config({ path: resolve(process.cwd(), '.env.local') })
config({ path: resolve(process.cwd(), '.env') })

import { PrismaClient } from '../lib/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import bcrypt from 'bcryptjs'

async function main(): Promise<void> {
  const connectionString = process.env.POSTGRES_PRISMA_URL
  if (!connectionString) throw new Error('POSTGRES_PRISMA_URL is not defined')

  const adapter = new PrismaPg(connectionString)
  const prisma = new PrismaClient({ adapter } as ConstructorParameters<typeof PrismaClient>[0])

  try {
    const hashed = await bcrypt.hash('admin123', 12)

    await prisma.user.upsert({
      where: { username: 'admin' },
      update: {},
      create: { username: 'admin', password: hashed },
    })

    console.log('✅ Seed : utilisateur admin/admin123 créé')
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
