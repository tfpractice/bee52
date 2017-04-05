import { spread, } from 'fenugreek-collections';
import { rDiff, sDiff, } from '../compare';

export const rankOrder = (a, b) => rDiff(a)(b);
export const rankSort = cards => spread(cards).sort(rankOrder);

export const suitOrder = (a, b) => sDiff(a)(b); 
export const suitSort = cards => spread(cards).sort(suitOrder);

export const sort = cards => rankSort(suitSort(cards));
