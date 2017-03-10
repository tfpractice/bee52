import { hasRank, hasSuit, } from './card';
import { isMatch, } from './compare';

export const byRank = rank => cards => cards.filter(hasRank(rank));
export const bySuit = suit => cards => cards.filter(hasSuit(suit));
export const byMatch = c => cards => cards.filter(isMatch(c));
