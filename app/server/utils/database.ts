import { drizzle } from 'drizzle-orm/node-postgres';
import { relations } from '../db/migrations/relations';
import type { PgSelect } from 'drizzle-orm/pg-core';

export async function useDatabase() {
    const { db } = useRuntimeConfig();

    const dbClient = drizzle(`postgresql://${db.user}:${db.pass}@${db.host}:${db.port}/${db.name}`, { relations });

    return dbClient;
}

export function withPagination<T extends PgSelect>(qb: T, page: number = 1, pageSize: number = 10) {
    return qb.limit(pageSize).offset((page - 1) * pageSize);
}
