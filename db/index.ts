import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'

config({ path: '.env.local' })
config({ path: '.env' })

let dbInstance: ReturnType<typeof drizzle> | null = null

export function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error('process.env.DATABASE_URL is not set!')
  }

  if (!dbInstance) {
    dbInstance = drizzle(process.env.DATABASE_URL, { casing: 'snake_case' })
  }

  return dbInstance
}

// For backward compatibility, export db as a lazy getter
export const db = new Proxy(
  {},
  {
    get: (target, prop: string | symbol) => {
      const dbInstance = getDb()
      return Reflect.get(dbInstance, prop)
    },
  },
) as ReturnType<typeof drizzle>
