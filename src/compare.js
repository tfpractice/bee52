import { hasRank, hasSuit,higherRank, id,lowerRank, rank, rankDiff, rankDist, suit, } from './card';

export const sameSuit = c0 => c1 => hasSuit(suit(c0))(c1);
export const sameRank = c0 => c1 => hasRank(rank(c0))(c1);

export const diffSuit = c0 => c1 => !sameSuit(c0)(c1);
export const diffRank = c0 => c1 => !sameRank(c0)(c1);

export const sameID = c0 => c1 => id(c0) === id(c1);
export const diffID = c0 => c1 => !sameID(c0)(c1);

export const isMatch = a => b => [ sameRank(a), sameSuit(a), ].every(f => f(b));
export const xMatch = c0 => c1 => !isMatch(c0)(c1);

export const rDist = c0 => c1 => rankDist(rank(c0))(c1);
export const rDiff = c0 => c1 => rankDiff(rank(c0))(c1);

export const sDiff = a => b => sameSuit(a)(b) ? 0 : (suit(a) < suit(b) ? -1 : 1);

export const ranksHigher = c0 => c1 => higherRank(rank(c0))(c1);
export const ranksLower = c0 => c1 => lowerRank(rank(c0))(c1);
