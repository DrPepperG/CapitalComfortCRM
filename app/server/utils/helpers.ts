/**
 * This is a helper to create a usuable enum object for database enums
 * @example
 * const Status = ['approved', 'pending', 'denied'] as const;
 * export const DocumentStatusEnum = createEnumObject(Status);
 */
export const createEnumObject = <T extends readonly [string, ...string[]]>(values: T): Record<T[number], T[number]> => {
    const obj: Record<string, T[number]> = {};
    for (const value of values) {
        // eslint-disable-next-line @stylistic/indent
      obj[value] = value;
    }
    return obj;
};

/**
 * Divides up supplied array into configurable chunks, can be used for pagination or to get around embed field limit
 * @param array Given array to split up
 * @param chunkSize The amount of entries to have in each chunk
 */
export function chunkEntries<T>(array: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];

    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        chunks.push(chunk);
    }

    return chunks;
}

/**
 * Filters an array of objects so that each object
 * only contains the configured keys.
 *
 * @param data - Array of source objects
 * @param keys - Keys to keep on each object
 */
export function pickKeys<
    T extends Record<string, unknown>,
    K extends readonly (keyof T)[]
>(
    data: T[],
    keys: K
): Array<Pick<T, K[number]>> {
    return data.map((item) => {
        // Create an empty object with the correct resulting type
        const filteredItem = {} as Pick<T, K[number]>;

        // Loop over each configured key
        for (const key of keys) {
            // Defensive check in case the key does not exist on the object
            if (key in item) {
                filteredItem[key] = item[key];
            }
        }

        // Return the filtered object for this item
        return filteredItem;
    });
}

/**
 * Extracts configured keys from an array of objects
 * and flattens them into a single key-value map.
 *
 * Later entries override earlier ones.
 */
export function toKeyValueMap<
    T extends Record<string, unknown>,
    K extends readonly (keyof T)[]
>(
    data: T[],
    keys: K
): Record<K[number], T[K[number]]> {
    const result = {} as Record<K[number], T[K[number]]>;

    for (const item of data) {
        for (const key of keys) {
            if (key in item) {
                result[key] = item[key];
            }
        }
    }

    return result;
};
