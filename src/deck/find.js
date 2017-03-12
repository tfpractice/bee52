import { spread, } from 'fenugreek-collections';
import { isMatch, } from '../compare';

export const idx = arr => c => spread(arr).findIndex(isMatch(c));
export const find = arr => c => spread(arr).find(isMatch(c));

export const contains = arr => c => arr.some(isMatch(c));
export const xContains = arr => c => !contains(arr)(c);
