import { bigint, boolean, integer, numeric, pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { states } from './states';

export const salesTax = pgTable('sales_tax', {
    id: uuid('id').primaryKey().default(sql`uuid_generate_v7()`),

    name: varchar('name', { length: 255 }).notNull(),
    state: varchar('code', { length: 3 }).references(() => states.code),
    rate: numeric('rate', { precision: 5, scale: 4 }).default('0.0'), // If sales tax reaches above 99.99% then we are already screwed
    type: varchar('type', { length: 255 }).default('county').notNull(),

    parentRate: uuid('parent_rate'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    version: integer('version').default(1).notNull()
});
