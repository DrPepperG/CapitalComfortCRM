import { defineRelations } from 'drizzle-orm';
import * as contacts from '../schema/contacts';
import * as estimates from '../schema/estimates';
import * as properties from '../schema/properties';

export const relations = defineRelations({
    ...contacts,
    ...estimates,
    ...properties
});
