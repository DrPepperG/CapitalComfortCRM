import { pgTable, varchar } from 'drizzle-orm/pg-core';

export const states = pgTable('states', {
    code: varchar('code', { length: 3 }).primaryKey(),
    name: varchar('name', { length: 100 })
});
