import { filter, } from 'fenugreek-collections';
import { isMatch, xMatch, } from '../compare';
import { hasRank, hasSuit, } from '../card';

export const byRank = rank => cards => filter(cards)(hasRank(rank));
export const bySuit = suit => cards => filter(cards)(hasSuit(suit));
export const byMatch = c => cards => filter(cards)(isMatch(c));
export const exclude = c => cards => filter(cards)(xMatch(c));
export const remove = exclude;
