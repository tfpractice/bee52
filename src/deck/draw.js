import { filter, spread, } from 'fenugreek-collections';
import { xMatch, } from '../compare';
import { find, idx, } from './find';
import { diff, union, } from './dedupe';

export const draw = amt => arr => spread(arr).splice(0, amt);
export const drawTo = c => arr => find(arr)(c) ? draw(idx(arr)(c) + 1)(arr) : [];

export const addCard = c => arr => filter(arr)(xMatch(c)).concat(c);
export const addBin = (arr, c) => addCard(c)(arr);

export const add = (...cards) => arr => union(cards)(arr);
export const removeCards = (...cards) => arr => diff(arr)(cards);
