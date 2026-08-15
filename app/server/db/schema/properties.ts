import { integer, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { contacts } from './contacts';

export const properties = pgTable('properties', {
    id: uuid('id').defaultRandom().primaryKey(),
    primaryContact: uuid('primary_contact').references(() => contacts.id),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    version: integer('version').default(1).notNull()
});
