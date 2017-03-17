import { filter, first, spread, } from 'fenugreek-collections';
import { xMatch, } from '../compare';
import { find, idx, } from './find';
import { diff, union, } from './dedupe';

export const next = deck => first(deck);
export const cutAt = (i = 0) => d => i < d.length ? spread(d).slice(i) : [];
export const rest = deck => cutAt(1)(deck);
export const cut = deck => cutAt(Math.floor(deck.length / 2))(deck);

export const draw = amt => arr => spread(arr).slice(0, amt);
export const drawTo = c => arr => find(arr)(c) ? draw(idx(arr)(c) + 1)(arr) : [];

export const addCard = c => arr => filter(arr)(xMatch(c)).concat(c);
export const addBin = (arr, c) => addCard(c)(arr);

export const add = (...cards) => arr => union(cards)(arr);
export const drop = (...cards) => arr => diff(arr)(cards);
