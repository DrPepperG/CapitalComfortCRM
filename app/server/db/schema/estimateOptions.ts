import { bigint, integer, pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { estimates } from './estimates';

// Declare enunms
const CurrencyType = ['USD'] as const;

// Declare database enum
export const currencyTypeEnum = pgEnum('currency_type', CurrencyType);

export const estimatesOptions = pgTable('estimate_options', {
    id: uuid('id').defaultRandom().primaryKey(),
    estimateId: uuid('estimate_id').references(() => estimates.id),

    priceCents: bigint('price_cents', { mode: 'number' }).default(0),
    currency: currencyTypeEnum('currency').default('USD').notNull(),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    version: integer('version').default(1).notNull()
});
