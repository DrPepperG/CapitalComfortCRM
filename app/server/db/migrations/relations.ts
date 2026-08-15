import { defineRelations } from 'drizzle-orm';
import * as contacts from '../schema/contacts';

export const relations = defineRelations({
    ...contacts
});
