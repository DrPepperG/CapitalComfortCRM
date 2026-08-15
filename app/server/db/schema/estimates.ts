import { integer, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { properties } from './properties';

export const estimates = pgTable('estimates', {
    id: uuid('id').primaryKey().default(sql`uuidv7()`),
    propertyId: uuid('property_id').references(() => properties.id),

    expiresAt: timestamp('expires_at'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    version: integer('version').default(1).notNull()
});
