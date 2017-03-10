import { hasRank, hasSuit,id, rank,suit, } from './card';
import { rankVal, } from './rank';

export const sameSuit = c0 => c1 => hasSuit(suit(c0))(c1);
export const sameRank = c0 => c1 => hasRank(rank(c0))(c1);

export const diffSuit = c0 => c1 => !sameSuit(c0)(c1);
export const diffRank = c0 => c1 => !sameRank(c0)(c1);

export const sameID = c0 => c1 => id(c0) === id(c1);
export const diffID = c0 => c1 => !sameID(c0)(c1);

export const isMatch = a => b => [ sameRank(a), sameSuit(a), ].every(f => f(b));
export const xMatch = c0 => c1 => !isMatch(c0)(c1);

export const rankDiff = a => b => rankVal(rank(a)) - rankVal(rank(b));
export const rankOrder = (a, b) => rankDiff(a)(b);
export const rankSort = cards => cards.sort(rankOrder);
