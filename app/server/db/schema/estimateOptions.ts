import { bigint, boolean, integer, pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { estimates } from './estimates';

export const estimatesOptions = pgTable('estimate_options', {
    id: uuid('id').defaultRandom().primaryKey(),
    estimateId: uuid('estimate_id').references(() => estimates.id),

    priceCents: bigint('price_cents', { mode: 'number' }).default(0),
    currency: varchar('currency', { length: 3 }).default('USD').notNull(),
    taxed: boolean('taxed'),
    quantity: integer('quantity'),
    description: text('description'),

    // This allows there to be additional optional options on an estimate.
    main: boolean('main'),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    version: integer('version').default(1).notNull()
});
