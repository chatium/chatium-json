"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeIndex = exports.isPromise = exports.flattenChildren = void 0;
async function flattenChildren(children) {
    const result = [];
    await flattenChildrenRec(children, '', result);
    return result;
}
exports.flattenChildren = flattenChildren;
async function flattenChildrenRec(children, prevLevelKey, result) {
    let idx = 0;
    for (const b of children) {
        await flattenChildRec(b, prevLevelKey, idx, result);
        idx++;
    }
}
async function flattenChildRec(child, prevLevelKey, idx, result) {
    // skip falsy nodes
    if (child) {
        if (isPromise(child)) {
            const sync = await child;
            if (Array.isArray(sync)) {
                await flattenChildrenRec(sync, prevLevelKey + encodeIndex(idx), result);
            }
            else {
                await flattenChildRec(sync, prevLevelKey, idx, result);
            }
        }
        else if (Array.isArray(child)) {
            await flattenChildrenRec(child, prevLevelKey + encodeIndex(idx), result);
        }
        else {
            result.push({
                ...child,
                // if the block has explicitly defined key then don't auto-generate and
                // append it to previous level key separated by space (space is not included in encodeIndex dictionary)
                key: prevLevelKey + (child.key ? ' ' + child.key : encodeIndex(idx)),
            });
        }
    }
}
function isPromise(b) {
    return !!b && typeof b.then === 'function';
}
exports.isPromise = isPromise;
/**
 * Compact auto-generated key encoding.
 * 0-91 are encoded using single character
 * 92-8463 are encoded using ' + two characters
 * 8464-778687 are encoded using ` + three characters
 * Highrer numbers are not supported and return empty string
 * @param idx - must be natural int
 */
function encodeIndex(idx) {
    if (idx < singleCapacity) {
        return keyDictionary[idx];
    }
    else if (idx < doubleCapacity) {
        const leftDigit = Math.floor(idx / singleCapacity);
        return doubleMarker + keyDictionary[leftDigit] + keyDictionary[idx - singleCapacity * leftDigit];
    }
    else if (idx < tripleCapacity) {
        const leftDigit = Math.floor(idx / doubleCapacity);
        const middleRemainder = idx - doubleCapacity * leftDigit;
        const middleDigit = Math.floor(middleRemainder / singleCapacity);
        return (tripleMarker +
            keyDictionary[leftDigit] +
            keyDictionary[middleDigit] +
            keyDictionary[middleRemainder - singleCapacity * middleDigit]);
    }
    else {
        return '';
    }
}
exports.encodeIndex = encodeIndex;
const keyDictionary = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?@#$%&^*+-.,;:=~_\\|/()[]{}<>"';
const singleCapacity = keyDictionary.length;
const doubleCapacity = singleCapacity * singleCapacity;
const tripleCapacity = doubleCapacity * singleCapacity;
const doubleMarker = "'";
const tripleMarker = '`';
