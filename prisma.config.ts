import dotenv from "dotenv";
import { defineConfig } from "prisma/config";

// Charge .env.local en priorité (Next.js), puis .env comme fallback
dotenv.config({ path: ".env.local", override: true });
dotenv.config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["POSTGRES_URL_NON_POOLING"] ?? process.env["POSTGRES_PRISMA_URL"] ?? "",
  },
});
