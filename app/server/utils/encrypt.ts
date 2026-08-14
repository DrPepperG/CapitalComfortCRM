import * as crypto from 'node:crypto';

export function encrypt(obj: string | object | number) {
    const { app } = useRuntimeConfig();

    const json = JSON.stringify(obj);

    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', app.key, iv);
    const encryptedJson = cipher.update(json, 'utf8', 'base64') + cipher.final('base64');

    const result = iv.toString('hex') + encryptedJson;

    return result;
}

export function decrypt(cipherText: string) {
    if (!cipherText) {
        return null;
    }

    const { app } = useRuntimeConfig();

    try {
        const iv = Buffer.from(cipherText.substring(0, 32), 'hex');
        const encryptedJson = cipherText.substring(32);

        const decipher = crypto.createDecipheriv('aes-256-cbc', app.key, iv);
        const json = decipher.update(encryptedJson, 'base64', 'utf8') + decipher.final('utf8');

        return JSON.parse(json);
    } catch (_error) {
        return null;
    }
}

/**
 * Don't use this for passwords!!!!
 * Hashing helper because why not.
 */
export function hash(value: string | object | number): string {
    const { app } = useRuntimeConfig();

    const json = typeof value === 'string'
        ? value
        : JSON.stringify(value);

    return crypto
        .createHmac('sha256', app.key)
        .update(json, 'utf8')
        .digest('hex');
}

export function verifyHash(value: string | object | number, expectedHash: string): boolean {
    if (!expectedHash) return false;

    const actualHash = hash(value);

    const a = Buffer.from(actualHash, 'hex');
    const b = Buffer.from(expectedHash, 'hex');

    if (a.length !== b.length) return false;

    return crypto.timingSafeEqual(a, b);
}
