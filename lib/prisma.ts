import { PrismaClient } from '@/lib/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

// Singleton pattern — évite plusieurs instances avec le hot-reload de Next.js
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

function createPrismaClient(): PrismaClient {
  const connectionString = process.env.POSTGRES_PRISMA_URL ?? ''
  const adapter = new PrismaPg(connectionString || 'postgresql://localhost/placeholder')
  return new PrismaClient({ adapter } as ConstructorParameters<typeof PrismaClient>[0])
}

export const prisma: PrismaClient =
  globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
