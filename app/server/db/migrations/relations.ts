import { defineRelations } from 'drizzle-orm';
import * as contacts from '../schema/contacts';
import * as estimates from '../schema/estimates';
import * as properties from '../schema/properties';
import * as salesTax from '../schema/salesTax';
import * as states from '../schema/states';
import * as estimateOptions from '../schema/estimateOptions';

export const relations = defineRelations({
    ...contacts,
    ...estimateOptions,
    ...estimates,
    ...properties,
    ...salesTax,
    ...states
}, r => ({
    salesTax: {
        children: r.many.salesTax({
            from: r.salesTax.parentRate,
            to: r.salesTax.id
        })
    }
}));
