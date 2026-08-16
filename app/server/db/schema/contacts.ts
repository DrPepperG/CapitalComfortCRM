import { integer, pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { states } from './states';

export const contacts = pgTable('contacts', {
    id: uuid('id').primaryKey().default(sql`uuidv7()`),

    firstName: varchar('first_name', { length: 256 }),
    middleName: varchar('middle_name', { length: 256 }),
    lastName: varchar('last_name', { length: 256 }),
    companyName: varchar('company_name', { length: 256 }),

    email: text('email'),
    primaryPhoneNumber: text('primary_phone_number'),
    secondaryPhoneNumber: text('secondary_phone_number'),

    addressLine1: text('address_line_1'),
    addressLine2: text('address_line_2'),
    city: varchar('city', { length: 100 }),
    state: varchar('state', { length: 100 }),
    postalCode: varchar('postal_code', { length: 20 }),
    countryCode: varchar('country_code', { length: 2 }),

    billingAddressLine1: text('billing_address_line_1'),
    billingAddressLine2: text('billing_address_line_2'),
    billingCity: varchar('billing_city', { length: 100 }),
    billingState: varchar('billing_state', { length: 3 }).references(() => states.code),
    billingPostalCode: varchar('billing_postal_code', { length: 20 }),
    billingCountryCode: varchar('billing_country_code', { length: 2 }),

    notes: text('notes'),
    type: varchar('type', { length: 255 }).default('individual').notNull(),
    parentId: uuid('parent_id'),
    version: integer('version').default(1).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull()
});
