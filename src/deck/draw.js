import { spread, } from 'fenugreek-collections';
import { find, idx, } from './find';
import { diff, union, } from './dedupe';
import { xMatch, } from '../compare';

export const draw = amt => arr => spread(arr).splice(0, amt);
export const drawTo = c => arr => find(arr)(c) ? draw(idx(arr)(c) + 1)(arr) : [];

export const add = c => arr => arr.filter(xMatch(c)).concat(c);
export const addBin = (arr, c) => add(c)(arr);

export const addCards = (...cards) => arr => union(cards)(arr);
export const removeCards = (...cards) => arr => diff(arr)(cards);