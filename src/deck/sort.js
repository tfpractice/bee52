import { rDiff, sDiff, } from '../compare';

export const rankOrder = (a, b) => rDiff(a)(b);
export const rankSort = cards => cards.sort(rankOrder);

export const suitOrder = (a, b) => sDiff(a)(b); 
export const suitSort = cards => cards.sort(suitOrder);

export const sort = cards => rankSort(suitSort(cards));
