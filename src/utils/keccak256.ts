import { keccak_256 } from 'js-sha3';
import { Arrayish, arrayify } from './bytes'
import { ec as EC } from 'elliptic';

const ec = new EC('secp256k1');

/**
 *
 * @from https://github.com/ethers-io/ethers.js/blob/11fffd16/src.ts/utils/secp256k1.ts
 */

export function fromPrivateKey(key: string): string {
  // const pair = ec.keyFromPrivate(arrayify(key));
  const pair = ec.keyFromPrivate(key);
  return pair.getPublic(false, 'hex');
}

export function keccak256(data: Arrayish): string {
  return '0x' + keccak_256(arrayify(data));
}
