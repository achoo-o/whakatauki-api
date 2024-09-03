import * as Path from 'node:path'
import * as URL from 'node:url'
import dotenv from 'dotenv'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

if (process.env.NODE_ENV === 'production') {
  dotenv.config()
} else {
  dotenv.config({ path: Path.join(__dirname, '../../.env') })
}

export default {
  development: {
    client: 'sqlite3',
@@ -34,13 +41,14 @@ export default {
  },

  production: {
    client: 'sqlite3',
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      filename: '/app/storage/prod.sqlite3',
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
  },
}
