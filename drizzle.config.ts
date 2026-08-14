import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
    schema: './app/server/db/schema/*.ts',
    out: './app/server/db/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        host: process.env.NITRO_DB_HOST,
        user: process.env.NITRO_DB_USER,
        password: process.env.NITRO_DB_PASS,
        database: process.env.NITRO_DB_NAME,
        ssl: process.env.NITRO_DB_SSL === 'true'
    }
} satisfies Config;
