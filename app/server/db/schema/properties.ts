import { integer, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { contacts } from './contacts';
import { states } from './states';

export const properties = pgTable('properties', {
    id: uuid('id').primaryKey().default(sql`uuidv7()`),
    primaryContact: uuid('primary_contact').references(() => contacts.id),

    addressLine1: text('address_line_1'),
    addressLine2: text('address_line_2'),
    city: varchar('city', { length: 100 }),
    state: varchar('state', { length: 3 }).default('NC').references(() => states.code),
    postalCode: varchar('postal_code', { length: 20 }),
    countryCode: varchar('country_code', { length: 2 }),

    billingAddressLine1: text('billing_address_line_1'),
    billingAddressLine2: text('billing_address_line_2'),
    billingCity: varchar('billing_city', { length: 100 }),
    billingState: varchar('billing_state', { length: 3 }).default('NC').references(() => states.code),
    billingPostalCode: varchar('billing_postal_code', { length: 20 }),
    billingCountryCode: varchar('billing_country_code', { length: 2 }),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    version: integer('version').default(1).notNull()
});
