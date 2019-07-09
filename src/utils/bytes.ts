/**
 *  Conversion Utilities
 *
 * @from https://github.com/ethers-io/ethers.js/blob/41c2c8a/src.ts/utils/bytes.ts
 */


///////////////////////////////
// Imported Types

import { Arrayish } from './bytes';

///////////////////////////////
// Exported Types

export type Arrayish = string | ArrayLike<number>;

export interface Hexable {
    toHexString(): string;
}

export interface Signature {
    r: string;
    s: string;

    /* At least one of the following MUST be specified; the other will be derived */
    recoveryParam?: number;
    v?: number;
}

///////////////////////////////



export function isHexable(value: any): value is Hexable {
    return !!(value.toHexString);
}

export function isArrayish(value: any): value is Arrayish {
    if (!value || parseInt(String(value.length)) != value.length || typeof(value) === 'string') {
        return false;
    }

    for (var i = 0; i < value.length; i++) {
        var v = value[i];
        if (v < 0 || v >= 256 || parseInt(String(v)) != v) {
            return false;
        }
    }

    return true;
}

export function arrayify(value: Arrayish | Hexable): Uint8Array {
    if (value == null) {
        throw new Error('cannot convert null value to array');
    }

    if (isHexable(value)) {
        value = value.toHexString();
    }

    if (typeof(value) === 'string') {
        let match = value.match(/^(0x)?[0-9a-fA-F]*$/);

        if (!match) {
            throw new Error('invalid hexidecimal string');
        }

        if (match[1] !== '0x') {
             throw new Error('hex string must have 0x prefix');
        }

        value = value.substring(2);
        if (value.length % 2) { value = '0' + value; }

        var result = [];
        for (var i = 0; i < value.length; i += 2) {
            result.push(parseInt(value.substr(i, 2), 16));
        }

        return new Uint8Array(result);
    }

    if (isArrayish(value)) {
        return new Uint8Array(value);
    }

    throw new Error('invalid arrayify value');
}
