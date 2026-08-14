import { integer, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const contacts = pgTable('contacts', {
    id: uuid('id').defaultRandom().primaryKey(),
    displayName: text('display_name'),
    // Identity Information
    firstName: varchar('first_name', { length: 256 }),
    middleName: varchar('middle_name', { length: 256 }),
    lastName: varchar('last_name', { length: 256 }),

    // Contact Information
    email: text('email'),
    primaryPhoneNumber: text('primary_phone_number'),
    secondaryPhoneNumber: text('secondary_phone_number'),

    // Address
    addressLine1: text('address_line_1'),
    addressLine2: text('address_line_2'),
    city: varchar('city', { length: 100 }),
    state: varchar('state', { length: 100 }),
    postalCode: varchar('postal_code', { length: 20 }),
    countryCode: varchar('country_code', { length: 2 }),

    // Billing Address
    billingAddressLine1: text('billing_address_line_1'),
    billingAddressLine2: text('billing_address_line_2'),
    billingCity: varchar('billing_city', { length: 100 }),
    billingState: varchar('billing_state', { length: 100 }),
    billingPostalCode: varchar('billing_postal_code', { length: 20 }),
    billingCountryCode: varchar('billing_country_code', { length: 2 }),

    // Application Data
    notes: text('notes'),
    parentId: uuid('parent_id'),
    version: integer('version').default(1).notNull(), // To avoid conflicts from other users updating the same contact
    createdAt: timestamp('created_at').defaultNow().notNull()
});
